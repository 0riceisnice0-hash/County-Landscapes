import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
const code = await readFile(new URL('../script.js', import.meta.url), 'utf8');
const prompts = await readFile(new URL('../form-prompts.js', import.meta.url), 'utf8');

function setup({ configured = false, query = '', outcome = 'success' } = {}) {
  const handlers = {};
  const select = { value: '', options: ['', 'Fencing & boundaries', 'Gardens & landscaping', 'Trees & hedges', 'Outdoor cleaning'].map(value => ({ value })), addEventListener(type, fn) { handlers.change = fn; } };
  const button = { disabled: true };
  const status = { textContent: '' };
  const prompt = { textContent: '' };
  const message = { value: 'A fence along the back garden', placeholder: '' };
  let sends = 0;
  const form = {
    action: configured ? 'https://formspree.io/f/abc123' : 'https://formspree.io/f/YOUR_FORM_ID',
    querySelector: () => button,
    addEventListener(type, fn) { handlers.submit = fn; },
    reportValidity: () => true,
    reset() { message.value = ''; select.value = ''; }
  };
  const elements = { '#service': select, '#service-prompt': prompt, '#project-message': message, '#quote-form': form, '#form-status': status, '#form-notice': {} };
  const context = vm.createContext({
    document: { querySelector: selector => elements[selector] || null, addEventListener() {} },
    window: { location: { search: query } }, URLSearchParams, Date,
    FormData: class {},
    fetch: async () => { sends++; if (outcome === 'network-error') throw new Error('Offline'); return { ok: outcome === 'success' }; }
  });
  vm.runInContext(prompts, context);
  vm.runInContext(code, context);
  return { select, button, status, prompt, message, handlers, sends: () => sends };
}

test('placeholder form cannot send or report success', async () => {
  const page = setup();
  assert.equal(page.button.disabled, true);
  await page.handlers.submit({ preventDefault() {} });
  assert.equal(page.sends(), 0);
  assert.match(page.status.textContent, /Nothing has been sent/);
});
test('service link preselects the enquiry and relevant guidance', () => {
  const page = setup({ query: '?service=Fencing' });
  assert.equal(page.select.value, 'Fencing & boundaries');
  assert.match(page.prompt.textContent, /garden wall/);
  assert.equal(page.message.value, 'A fence along the back garden');
});
test('unknown query values are not inserted into the form', () => {
  const page = setup({ query: '?service=%3Cscript%3E' });
  assert.equal(page.select.value, '');
  assert.doesNotMatch(page.prompt.textContent, /script/);
});
test('successful configured submission confirms receipt and clears the form', async () => {
  const page = setup({ configured: true });
  assert.equal(page.button.disabled, false);
  await page.handlers.submit({ preventDefault() {} });
  assert.equal(page.sends(), 1);
  assert.match(page.status.textContent, /has been sent/);
  assert.equal(page.message.value, '');
  assert.equal(page.button.disabled, false);
});
for (const outcome of ['network-error', 'server-error']) {
  test(`${outcome} preserves the enquiry and enables retry`, async () => {
    const page = setup({ configured: true, outcome });
    await page.handlers.submit({ preventDefault() {} });
    assert.match(page.status.textContent, /could not be sent/);
    assert.equal(page.message.value, 'A fence along the back garden');
    assert.equal(page.button.disabled, false);
  });
}

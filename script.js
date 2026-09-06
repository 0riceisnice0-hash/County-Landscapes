const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
const serviceSelect = document.querySelector('#service');
const prompt = document.querySelector('#service-prompt');
const message = document.querySelector('#project-message');
function updateServicePrompt() {
  if (!serviceSelect || !prompt || !message) return;
  const guidance = window.countyServicePrompts?.[serviceSelect.value] || 'Tell us about the work you have in mind, the size of the space and anything useful to know about access.';
  prompt.textContent = guidance;
  message.placeholder = guidance;
}
if (serviceSelect) {
  const original = new URLSearchParams(window.location.search).get('service');
  const legacy = { Fencing: 'Fencing & boundaries', Landscaping: 'Gardens & landscaping', 'Tree surgery & felling': 'Trees & hedges', 'Hedge trimming': 'Trees & hedges', 'Pressure washing': 'Outdoor cleaning' };
  const requested = legacy[original] || original;
  if ([...serviceSelect.options].some(option => option.value === requested)) serviceSelect.value = requested;
  serviceSelect.addEventListener('change', updateServicePrompt);
  updateServicePrompt();
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Set the real Formspree URL in index.html. This detects it automatically.
const form = document.querySelector('#quote-form');
if (form) {
  const button = form.querySelector('[type="submit"]');
  const status = document.querySelector('#form-status');
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(form.action) && !form.action.includes('YOUR_FORM_ID');
  if (configured) {
    button.disabled = false;
    button.innerHTML = 'Request a free quote <span aria-hidden="true">↗</span>';
    document.querySelector('#form-notice').textContent = 'Tell us a little about the job and how we can reach you.';
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!configured) { status.textContent = 'Online enquiries are not connected yet. Please call 07526 024115. Nothing has been sent.'; return; }
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.textContent = 'Sending your enquiry…';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      updateServicePrompt();
      status.textContent = 'Thank you. Your enquiry has been sent to County Landscapes.';
    } catch {
      status.textContent = 'Your enquiry could not be sent. Your details are still here so you can try again, or call 07526 024115.';
    } finally { button.disabled = false; }
  });
}

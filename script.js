const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('#service').value = link.dataset.service; }));
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
      status.textContent = 'Thank you. Your enquiry has been sent to County Landscapes.';
    } catch {
      status.textContent = 'Your enquiry could not be sent. Your details are still here so you can try again, or call 07526 024115.';
    } finally { button.disabled = false; }
  });
}

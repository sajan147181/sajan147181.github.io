// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Services dropdown (desktop accessible)
const servicesButton = document.querySelector('.nav__link--button');
const servicesItem = document.querySelector('.nav__item--has-sub');
if (servicesButton && servicesItem) {
  servicesButton.addEventListener('click', () => {
    const expanded = servicesButton.getAttribute('aria-expanded') === 'true';
    servicesButton.setAttribute('aria-expanded', String(!expanded));
    servicesItem.setAttribute('aria-expanded', String(!expanded));
  });
  servicesButton.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      servicesButton.setAttribute('aria-expanded', 'false');
      servicesItem.setAttribute('aria-expanded', 'false');
    }
  });
}

// Newsletter mock submit
const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form__message');
    const email = new FormData(form).get('email');
    try {
      // Replace with your backend endpoint
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      msg.textContent = 'Thanks for subscribing!';
      msg.style.color = '#0f766e';
      form.reset();
    } catch {
      msg.textContent = 'Oops! Something went wrong. Please try again.';
      msg.style.color = '#ef4444';
    }
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

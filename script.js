// Theme toggle, year, scroll reveals
const applyTheme = (mode) => {
  if (mode === 'light') {
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
};

applyTheme(localStorage.getItem('theme') || 'dark');

document.querySelector('#themeToggle')?.addEventListener('click', () => {
  const light = document.body.classList.contains('light');
  applyTheme(light ? 'dark' : 'light');
});

const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enable scroll reveal baseline styles
document.body.classList.add('js');

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Stagger delays inside each section
document.querySelectorAll('.section').forEach((sec) => {
  const items = sec.querySelectorAll('.reveal, .card.hoverlift, .service, .proj');
  items.forEach((el, i) => el.setAttribute('data-delay', Math.min(4, i)));
});


// Card overlay enlarge on click
(() => {
  const overlay = document.querySelector('.card-overlay');
  const overlayCard = overlay?.querySelector('.card-overlay-card');

  if (!overlay || !overlayCard) return;

  const selectable = '.card.hoverlift, .card, .service, .proj';

  const openOverlay = (card) => {
    overlayCard.innerHTML = card.innerHTML;
    overlay.classList.add('is-open');
    document.body.classList.add('overlay-open');
  };

  const closeOverlay = () => {
    overlay.classList.remove('is-open');
    document.body.classList.remove('overlay-open');
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    // Close when clicking on backdrop
    if (target.classList.contains('card-overlay') && overlay.classList.contains('is-open')) {
      closeOverlay();
      return;
    }

    const card = target.closest(selectable);
    if (card && !card.closest('.card-overlay')) {
      openOverlay(card);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeOverlay();
    }
  });
})();    




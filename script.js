// Shared theme, navigation, resume links, and progressive scroll reveals.
const applyTheme = mode => {
  const light = mode === 'light';
  document.body.classList.toggle('light', light);
  localStorage.setItem('theme', light ? 'light' : 'dark');
};
applyTheme(localStorage.getItem('theme') || 'dark');
document.querySelector('#themeToggle')?.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});
document.body.classList.add('js');

(() => {
  const header = document.querySelector('.nav');
  const button = document.querySelector('#menuToggle');
  const navigation = document.querySelector('#siteNavigation');
  if (!header || !button || !navigation) return;
  const compact = matchMedia('(max-width: 1100px)');
  const closeMenu = (restoreFocus = false) => {
    const focusInside = navigation.contains(document.activeElement);
    header.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    if (compact.matches && (restoreFocus || focusInside)) button.focus({ preventScroll: true });
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('is-open')) closeMenu(true);
  });
  header.addEventListener('focusout', event => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) closeMenu();
  });
  compact.addEventListener('change', () => closeMenu());
})();

const updateResumeLinks = () => {
  const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const view = document.querySelector('#viewResume');
  const download = document.querySelector('#downloadResume');
  if (view) view.href = lang === 'ar' ? 'resume.html' : 'resume-en.html';
  if (download) {
    download.href = 'assets/resume-' + lang + '.pdf';
    download.download = 'Mortadha_Ali_Resume_' + lang + '.pdf';
  }
};
updateResumeLinks();
document.addEventListener('languagechange', updateResumeLinks);
document.querySelector('[data-print-resume]')?.addEventListener('click', () => window.print());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .06 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}

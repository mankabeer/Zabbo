/* ZABBOO — main.js */

// ─── Nav: scrolled state ───────────────────────────────
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ─── Nav: hamburger toggle ─────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open', !expanded);
  document.body.style.overflow = expanded ? '' : 'hidden';
});

// Close menu when a link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});

// ─── Active nav link on scroll ─────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

const activeSectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => activeSectionObserver.observe(s));

// ─── Scroll reveal ─────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

document.querySelectorAll('.reveal, .reveal-child').forEach(el => {
  revealObserver.observe(el);
});

// ─── Hero entrance animation ───────────────────────────
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Trigger immediately for fast connections
if (document.readyState === 'complete') {
  document.body.classList.add('loaded');
}

// ─── Story Read More / Read Less ───────────────────────
const storyToggle   = document.getElementById('storyToggle');
const storyExpanded = document.getElementById('storyExpanded');

if (storyToggle && storyExpanded) {
  storyToggle.addEventListener('click', () => {
    const isOpen = storyExpanded.classList.contains('open');
    storyExpanded.classList.toggle('open', !isOpen);
    storyToggle.setAttribute('aria-expanded', String(!isOpen));
    storyToggle.innerHTML = isOpen
      ? 'Read Full Story <span class="toggle-icon">↓</span>'
      : 'Read Less <span class="toggle-icon">↑</span>';
  });
}

// ─── Smooth scroll offset for sticky nav ──────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

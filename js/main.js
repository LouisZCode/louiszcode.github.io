document.addEventListener('DOMContentLoaded', function () {

  // ===========================
  // 1. THEME TOGGLE
  // ===========================
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeButton(next);
    });
  }

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    // Update button text based on current language
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    if (typeof translations !== 'undefined' && translations[lang]) {
      if (theme === 'dark') {
        themeToggle.textContent = translations[lang]['theme-light'] || 'Light Mode';
      } else {
        themeToggle.textContent = translations[lang]['theme-dark'] || 'Dark Mode';
      }
    } else {
      themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  }

  // ===========================
  // 2. CASE STUDY EXPAND/COLLAPSE
  // ===========================
  const projectCards = document.querySelectorAll('.project-card[data-case-study]');

  projectCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const targetId = card.getAttribute('data-case-study');
      const target = document.getElementById(targetId);
      if (!target) return;

      // Close all others
      document.querySelectorAll('.case-study').forEach(function (cs) {
        if (cs.id !== targetId) {
          cs.classList.remove('open');
        }
      });

      // Toggle clicked
      target.classList.toggle('open');

      // Scroll into view if opening
      if (target.classList.contains('open')) {
        setTimeout(function () {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });

  // ===========================
  // 3. MOBILE MENU
  // ===========================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ===========================
  // 4. SMOOTH ANCHOR SCROLLING
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(function (l) {
          l.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });

  // ===========================
  // 5. INTERSECTION OBSERVER (fade-up on scroll)
  // ===========================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });

  // ===========================
  // 6. LANGUAGE SWITCHER
  // ===========================
  const langButtons = document.querySelectorAll('.lang-btn');

  // Restore saved language
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setActiveLanguage(savedLang);

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('preferredLanguage', lang);
      setActiveLanguage(lang);
      translatePage(lang);
      updateProjectLinks(lang);
      updateThemeButton(html.getAttribute('data-theme'));
    });
  });

  function setActiveLanguage(lang) {
    langButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Initial translation
  if (savedLang !== 'en') {
    translatePage(savedLang);
    updateProjectLinks(savedLang);
  }

  // ===========================
  // 7. LAZY LOADING
  // ===========================
  document.querySelectorAll('img').forEach(function (img) {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });

});

// ===========================
// TRANSLATION FUNCTIONS (global scope)
// ===========================

function translatePage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var translation = translations[lang][key];

    if (translation) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Also translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function updateProjectLinks(lang) {
  var suffix = '';
  if (lang === 'de') suffix = '-de';
  if (lang === 'es') suffix = '-es';

  document.querySelectorAll('.project-link[data-project]').forEach(function (link) {
    var project = link.getAttribute('data-project');
    if (suffix) {
      link.href = 'projects/' + project + suffix + '.html';
    } else {
      link.href = 'projects/' + project + '.html';
    }
  });
}

/**
 * Andre's Trafikskola – main.js
 * Handles: navbar, review carousel, scroll animations,
 *          contact form validation, back-to-top, mobile menu
 */

(function () {
  'use strict';

  /* ============================================================
     UTILITY
  ============================================================ */
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

  /* ============================================================
     STICKY NAVBAR – becomes solid on scroll
  ============================================================ */
  const navbar = qs('#navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ============================================================
     MOBILE MENU TOGGLE
  ============================================================ */
  const navToggle = qs('#navToggle');
  const navLinks  = qs('#navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    qsa('.nav-link, .nav-cta', navLinks).forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* ============================================================
     REVIEW CAROUSEL
  ============================================================ */
  (function initCarousel() {
    const track    = qs('#reviewsTrack');
    const prevBtn  = qs('#reviewPrev');
    const nextBtn  = qs('#reviewNext');
    const dotsWrap = qs('#carouselDots');

    if (!track || !prevBtn || !nextBtn) return;

    const cards       = qsa('.review-card', track);
    const totalCards  = cards.length;
    let currentIndex  = 0;
    let autoplayTimer = null;
    let cardsVisible  = getCardsVisible();

    function getCardsVisible() {
      if (window.innerWidth <= 600)  return 1;
      if (window.innerWidth <= 900)  return 2;
      if (window.innerWidth <= 1100) return 3;
      return 4;
    }

    function totalPages() {
      return Math.ceil(totalCards / cardsVisible);
    }

    // Build dots
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      const pages = totalPages();
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Sida ' + (i + 1) + ' av recensioner');
        dot.setAttribute('aria-selected', String(i === 0));
        dot.dataset.index = i;
        dot.addEventListener('click', function () {
          goTo(parseInt(this.dataset.index, 10));
          resetAutoplay();
        });
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      const page = currentPage();
      qsa('.carousel-dot', dotsWrap).forEach(function (dot, i) {
        const active = i === page;
        dot.classList.toggle('active', active);
        dot.setAttribute('aria-selected', String(active));
      });
    }

    function currentPage() {
      return Math.round(currentIndex / cardsVisible);
    }

    function goTo(page) {
      const pages = totalPages();
      page = Math.max(0, Math.min(page, pages - 1));
      currentIndex = page * cardsVisible;
      // Clamp to valid index
      const maxIndex = Math.max(0, totalCards - cardsVisible);
      currentIndex   = Math.min(currentIndex, maxIndex);
      applyTransform();
      updateDots();
      updateButtons();
    }

    function applyTransform() {
      // Calculate card width + gap dynamically
      if (cards.length === 0) return;
      const card    = cards[0];
      const style   = getComputedStyle(track);
      const gap     = parseFloat(style.gap) || 24;
      const percent = (card.offsetWidth + gap) * currentIndex;
      track.style.transform = 'translateX(-' + percent + 'px)';
    }

    function updateButtons() {
      const page  = currentPage();
      const pages = totalPages();
      prevBtn.disabled = page === 0;
      nextBtn.disabled = page >= pages - 1;
      prevBtn.style.opacity = page === 0 ? '0.4' : '1';
      nextBtn.style.opacity = page >= pages - 1 ? '0.4' : '1';
    }

    function prev() {
      const page = currentPage();
      if (page > 0) goTo(page - 1);
    }

    function next() {
      const page  = currentPage();
      const pages = totalPages();
      if (page < pages - 1) goTo(page + 1);
      else goTo(0); // Loop back for autoplay
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 5000);
    }

    prevBtn.addEventListener('click', function () { prev(); resetAutoplay(); });
    nextBtn.addEventListener('click', function () { next(); resetAutoplay(); });

    // Keyboard navigation on carousel
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { prev(); resetAutoplay(); }
      if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX   = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) { next(); } else { prev(); }
        resetAutoplay();
      }
    }, { passive: true });

    // Pause autoplay on hover/focus
    track.addEventListener('mouseenter', function () { clearInterval(autoplayTimer); });
    track.addEventListener('mouseleave', resetAutoplay);
    track.addEventListener('focusin',    function () { clearInterval(autoplayTimer); });
    track.addEventListener('focusout',   resetAutoplay);

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        const newVisible = getCardsVisible();
        if (newVisible !== cardsVisible) {
          cardsVisible = newVisible;
          currentIndex = 0;
          buildDots();
          applyTransform();
          updateButtons();
        } else {
          applyTransform();
        }
      }, 150);
    });

    // Init
    buildDots();
    applyTransform();
    updateButtons();
    resetAutoplay();
  })();

  /* ============================================================
     SCROLL ANIMATIONS (Intersection Observer)
  ============================================================ */
  (function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      qsa('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    qsa('.fade-in').forEach(function (el, i) {
      // Stagger delay for sibling elements
      el.style.transitionDelay = (i % 4) * 0.1 + 's';
      observer.observe(el);
    });
  })();

  /* ============================================================
     HERO BACKGROUND PARALLAX + LOAD
  ============================================================ */
  (function initHeroBg() {
    const heroBg = qs('.hero-bg');
    if (!heroBg) return;

    // Once image is painted, trigger the subtle zoom-in
    const img = new Image();
    const url = heroBg.style.backgroundImage.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');
    img.onload = function () { heroBg.classList.add('loaded'); };
    img.src = url;

    // Subtle parallax on scroll
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const heroHeight = heroBg.parentElement.offsetHeight;
        if (scrolled < heroHeight) {
          heroBg.style.transform = 'scale(1) translateY(' + (scrolled * 0.3) + 'px)';
        }
      }, { passive: true });
    }
  })();

  /* ============================================================
     CONTACT FORM – CLIENT-SIDE VALIDATION & SUBMIT
  ============================================================ */
  (function initContactForm() {
    const form       = qs('#contactForm');
    const submitBtn  = qs('#submitBtn');
    const successMsg = qs('#formSuccess');

    if (!form) return;

    function getField(name) { return form.querySelector('[name="' + name + '"]'); }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
      return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
    }

    function setError(input, hasError) {
      if (hasError) {
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.classList.remove('error');
        input.removeAttribute('aria-invalid');
      }
    }

    function validateForm() {
      let valid = true;

      const nameField    = getField('name');
      const phoneField   = getField('phone');
      const emailField   = getField('email');
      const messageField = getField('message');

      if (!nameField.value.trim() || nameField.value.trim().length < 2) {
        setError(nameField, true);
        valid = false;
      } else {
        setError(nameField, false);
      }

      if (!phoneField.value.trim() || !validatePhone(phoneField.value)) {
        setError(phoneField, true);
        valid = false;
      } else {
        setError(phoneField, false);
      }

      if (!emailField.value.trim() || !validateEmail(emailField.value)) {
        setError(emailField, true);
        valid = false;
      } else {
        setError(emailField, false);
      }

      if (!messageField.value.trim() || messageField.value.trim().length < 10) {
        setError(messageField, true);
        valid = false;
      } else {
        setError(messageField, false);
      }

      return valid;
    }

    // Real-time validation on blur
    qsa('.form-input', form).forEach(function (input) {
      input.addEventListener('blur', function () {
        if (this.value.trim()) {
          if (this.name === 'email' && !validateEmail(this.value)) {
            setError(this, true);
          } else if (this.name === 'phone' && !validatePhone(this.value)) {
            setError(this, true);
          } else {
            setError(this, false);
          }
        }
      });
      input.addEventListener('input', function () {
        if (this.classList.contains('error') && this.value.trim()) {
          setError(this, false);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm()) {
        // Focus first invalid field
        const firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Show loading state
      const btnText    = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      submitBtn.disabled = true;
      if (btnText)    btnText.style.display    = 'none';
      if (btnLoading) btnLoading.style.display = 'flex';

      // Simulate async submission (replace with real fetch/mailto logic)
      setTimeout(function () {
        submitBtn.disabled = false;
        if (btnText)    btnText.style.display    = '';
        if (btnLoading) btnLoading.style.display = 'none';

        // Show success message
        if (successMsg) {
          successMsg.style.display = 'flex';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form
        form.reset();

        // Hide success message after 6s
        setTimeout(function () {
          if (successMsg) successMsg.style.display = 'none';
        }, 6000);
      }, 1400);
    });
  })();

  /* ============================================================
     BACK TO TOP BUTTON
  ============================================================ */
  (function initBackToTop() {
    const btn = qs('#backToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ============================================================
     SMOOTH SCROLL for anchor links (Safari fallback)
  ============================================================ */
  (function initSmoothScroll() {
    qsa('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = qs(targetId);
        if (!target) return;
        e.preventDefault();
        const navHeight  = navbar ? navbar.offsetHeight : 70;
        const targetTop  = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      });
    });
  })();

  /* ============================================================
     VIDEO PLACEHOLDER CLICK
  ============================================================ */
  (function initVideoPlaceholder() {
    const playBtn = qs('.play-btn');
    if (!playBtn) return;
    playBtn.addEventListener('click', function () {
      // Replace with actual YouTube embed URL when available
      const videoWrap = this.closest('.video-placeholder');
      if (!videoWrap) return;
      const iframe = document.createElement('iframe');
      iframe.src            = 'https://www.youtube.com/embed/?autoplay=1';
      iframe.width          = '100%';
      iframe.height         = '100%';
      iframe.frameBorder    = '0';
      iframe.allow          = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.style.cssText  = 'position:absolute;inset:0;width:100%;height:100%;';
      iframe.title          = 'Andre\'s Trafikskola presentationsvideo';
      videoWrap.innerHTML   = '';
      videoWrap.appendChild(iframe);
    });
    // Keyboard accessible
    playBtn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  })();

  /* ============================================================
     ACTIVE NAV LINK on scroll (highlight current section)
  ============================================================ */
  (function initActiveNav() {
    const sections  = qsa('section[id]');
    const navLinksA = qsa('.nav-link');
    if (!sections.length || !navLinksA.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinksA.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + entry.target.id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  })();

})();

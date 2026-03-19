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
     INFINITE AUTO-SCROLL REVIEW CAROUSEL
     – bidirectional, 4 cards desktop / 2 tablet / 1 mobile
     – prev/next arrows + pause/play button
  ============================================================ */
  (function initInfiniteCarousel() {
    var wrapper    = qs('#reviewsCarouselWrapper');
    var track      = qs('#infiniteTrack');
    var prevBtn    = qs('#reviewPrev');
    var nextBtn    = qs('#reviewNext');
    var pauseBtn   = qs('#carouselPause');
    var pauseIcon  = qs('#pauseIcon');
    if (!wrapper || !track) return;

    var GAP           = 24;   // px — matches CSS gap 1.5rem
    var SCROLL_SPEED  = 2000; // ms between auto-advances
    var TRANSITION_MS = 550;  // ms for slide animation

    // ---- Snapshot originals, then clone on both sides ----
    var origCards = Array.prototype.slice.call(track.querySelectorAll('.review-card'));
    var totalOrig = origCards.length;

    // Prepend clones (copy of originals at the beginning, for seamless backward)
    origCards.slice().reverse().forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.insertBefore(clone, track.firstChild);
    });
    // Append clones (copy of originals at the end, for seamless forward)
    origCards.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    // Structure: [0..N-1 prepended clones][N..2N-1 originals][2N..3N-1 appended clones]
    // Start displaying at index N (first real card)
    var currentIdx  = totalOrig;
    var autoTimer   = null;
    var isPlaying   = true;
    var isBusy      = false; // guard against overlapping transitions

    function getVisible() {
      if (window.innerWidth <= 480) return 1;
      if (window.innerWidth <= 900) return 2;
      return 4;
    }

    function cardWidth() {
      var vis = getVisible();
      return (wrapper.offsetWidth - GAP * (vis - 1)) / vis;
    }

    function applyWidths() {
      var w = cardWidth();
      track.querySelectorAll('.review-card').forEach(function (c) {
        c.style.width    = w + 'px';
        c.style.minWidth = w + 'px';
      });
    }

    function offsetForIndex(idx) {
      return idx * (cardWidth() + GAP);
    }

    function moveTo(idx, animate) {
      track.style.transition = animate
        ? 'transform ' + TRANSITION_MS + 'ms cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none';
      track.style.transform = 'translateX(-' + offsetForIndex(idx) + 'px)';
      currentIdx = idx;
    }

    function afterTransition(fn) {
      setTimeout(fn, TRANSITION_MS + 30);
    }

    // ---- Forward ----
    function advance() {
      if (isBusy) return;
      isBusy = true;
      moveTo(currentIdx + 1, true);
      afterTransition(function () {
        // Snapped past the appended clones → jump back to the originals
        if (currentIdx >= totalOrig * 2) {
          moveTo(totalOrig, false);
          void track.offsetWidth;
        }
        isBusy = false;
      });
    }

    // ---- Backward ----
    function retreat() {
      if (isBusy) return;
      isBusy = true;
      moveTo(currentIdx - 1, true);
      afterTransition(function () {
        // Snapped before the originals → jump to the matching position in the originals
        if (currentIdx < totalOrig) {
          moveTo(totalOrig * 2 - 1, false);
          void track.offsetWidth;
        }
        isBusy = false;
      });
    }

    // ---- Auto-play ----
    function startAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(advance, SCROLL_SPEED);
    }
    function stopAuto() { clearInterval(autoTimer); }

    // ---- Pause / Play button ----
    function setPaused(paused) {
      isPlaying = !paused;
      if (pauseIcon) {
        pauseIcon.className = paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
      }
      if (pauseBtn) {
        pauseBtn.setAttribute('aria-label', paused ? 'Spela automatisk scrollning' : 'Pausa automatisk scrollning');
        pauseBtn.title = paused ? 'Spela' : 'Pausa';
      }
      paused ? stopAuto() : startAuto();
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', function () {
        setPaused(isPlaying); // toggle
      });
    }

    // ---- Arrow buttons ----
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        retreat();
        if (isPlaying) { stopAuto(); startAuto(); } // reset interval
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        advance();
        if (isPlaying) { stopAuto(); startAuto(); }
      });
    }

    // ---- Pause on hover (carousel wrapper + arrow buttons) ----
    var hoverEls = [wrapper, prevBtn, nextBtn].filter(Boolean);
    hoverEls.forEach(function (el) {
      el.addEventListener('mouseenter', function () { if (isPlaying) stopAuto(); });
      el.addEventListener('mouseleave', function () { if (isPlaying) startAuto(); });
    });

    // ---- Touch / swipe ----
    var touchX = 0;
    wrapper.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches[0].clientX;
      if (isPlaying) stopAuto();
    }, { passive: true });
    wrapper.addEventListener('touchend', function (e) {
      var diff = touchX - e.changedTouches[0].clientX;
      if (diff > 40)       advance();
      else if (diff < -40) retreat();
      if (isPlaying) startAuto();
    }, { passive: true });

    // ---- Resize ----
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        applyWidths();
        moveTo(currentIdx, false);
      }, 150);
    });

    // ---- Init ----
    applyWidths();
    moveTo(currentIdx, false);
    startAuto();
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
     PRICE TABLE – scroll hint fades out once user swipes
  ============================================================ */
  (function initTableScrollHint() {
    qsa('.table-scroll-container').forEach(function (container) {
      var wrap = container.querySelector('.price-table-wrap');
      if (!wrap) return;
      wrap.addEventListener('scroll', function () {
        if (wrap.scrollLeft > 20) {
          container.classList.add('scrolled');
        }
      }, { passive: true });
    });
  })();

  /* ============================================================
     STEPS GRID – staggered fade-in on scroll
  ============================================================ */
  (function initStepsAnimation() {
    var grids = qsa('.steps-grid');
    if (!grids.length) return;

    if (!('IntersectionObserver' in window)) {
      grids.forEach(function (g) { g.classList.add('steps-animated'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var grid = entry.target;
          grid.classList.add('steps-animated');
          observer.unobserve(grid);

          // Once the last card finishes animating, lock opacity via inline
          // style so the visible state is permanent and never replays.
          var cards = grid.querySelectorAll('.step-card');
          var lastCard = cards[cards.length - 1];
          if (lastCard) {
            lastCard.addEventListener('animationend', function () {
              cards.forEach(function (c) {
                c.style.opacity = '1';
                c.style.animation = 'none';
              });
            }, { once: true });
          }
        }
      });
    }, { threshold: 0.1 });

    grids.forEach(function (g) { observer.observe(g); });
  })();

  /* ============================================================
     HERO BACKGROUND LOAD (real <img> tag)
  ============================================================ */
  (function initHeroBg() {
    const heroBgImg = qs('.hero-bg-img');
    if (!heroBgImg) return;

    function onLoaded() {
      heroBgImg.classList.add('loaded');
      heroBgImg.addEventListener('transitionend', function () {
        heroBgImg.style.transition = 'none';
        heroBgImg.style.transform  = 'scale(1)';
      }, { once: true });
    }

    if (heroBgImg.complete) {
      onLoaded();
    } else {
      heroBgImg.addEventListener('load', onLoaded);
    }
  })();

  /* ============================================================
     VIDEO – play only when in viewport (Intersection Observer)
  ============================================================ */
  (function initVideoOnScroll() {
    const video = qs('.about-video-player');
    if (!video) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: just play it
      video.play();
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
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

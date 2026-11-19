/* ==========================================================================
   PROYEK KOLABORATIF PPLG XI (XI-1 s.d. XI-4)
   KAMPANYE: KONSERVASI DAN PENGHEMATAN ENERGI - FASE 1
   File: js/script.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. MOBILE MENU TOGGLE
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Update ARIA attribute
      const isExpanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside or clicking a nav link
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // 2. STICKY HEADER SCROLL EFFECT
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. PHASE 2 & 3 NOTIFICATION MODAL HANDLER
  const modalOverlay = document.getElementById('phase-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close-btn');

  // Elements that trigger Phase 2 (redirect directly to data.html if clicked)
  const phase2Triggers = document.querySelectorAll('.trigger-phase-2');
  phase2Triggers.forEach(el => {
    el.addEventListener('click', (e) => {
      // Jika bukan link langsung ke data.html, arahkan ke data.html
      if (el.getAttribute('href') !== 'data.html') {
        e.preventDefault();
        window.location.href = 'data.html';
      }
    });
  });

  // Elements that trigger Phase 3 notice
  const phase3Triggers = document.querySelectorAll('.trigger-phase-3');
  phase3Triggers.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(
        '🚀 Fase 3: Aksi & Rekomendasi Solutif',
        'Fase 3 sedang disiapkan! Berdasarkan temuan kuesioner 636 responden di Fase 2, Fase 3 akan meluncurkan panduan SOP hemat energi lab komputer & bengkel, form komitmen warga sekolah, serta kampanye budaya saling mengingatkan tanpa sungkan.'
      );
    });
  });

  function openModal(title, desc) {
    if (modalOverlay && modalTitle && modalDesc) {
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalOverlay.classList.add('active');
    }
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 4. SMOOTH SCROLL FOR INTERNAL LINKS
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu if open
          hamburger?.classList.remove('active');
          navMenu?.classList.remove('active');
        }
      }
    });
  });

  console.log('⚡ Kampanye Konservasi Energi PPLG XI - JavaScript Loaded!');
});

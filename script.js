document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Toggle icon
      if (navLinks.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      } else {
        mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  }

  // --- Gestion des cookies & Google Analytics ---
  const GA_MEASUREMENT_ID = 'G-G73NNMQF0D';

  function initGoogleAnalytics() {
    if (window.gaInitialized) return;
    window.gaInitialized = true;

    // Chargement du script officiel gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialisation dataLayer et configuration
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const refuseBtn = document.getElementById('cookie-refuse');

  const cookieConsent = localStorage.getItem('bob_cookie_consent');

  if (cookieConsent === 'accepted') {
    // Si l'utilisateur a déjà accepté, charger GA directement
    initGoogleAnalytics();
  } else if (!cookieConsent) {
    // Si aucun choix n'a été fait, afficher le bandeau
    if (cookieBanner) {
      cookieBanner.style.display = 'block';
    }
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('bob_cookie_consent', 'accepted');
      if (cookieBanner) cookieBanner.style.display = 'none';
      initGoogleAnalytics();
    });
  }

  if (refuseBtn) {
    refuseBtn.addEventListener('click', () => {
      localStorage.setItem('bob_cookie_consent', 'refused');
      if (cookieBanner) cookieBanner.style.display = 'none';
    });
  }
});

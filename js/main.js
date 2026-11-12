/* ============================================================
   MAIN — UI interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Sticky Header --- */
  const header = document.getElementById('siteHeader');
  if(header){
    const onScroll = () => {
      if(window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* --- Mobile Nav --- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    
    // Mobile dropdown toggle
    mainNav.querySelectorAll('.has-dropdown > a').forEach(a => {
      a.addEventListener('click', (e) => {
        if(window.innerWidth <= 900){
          e.preventDefault();
          a.parentElement.classList.toggle('open');
        }
      });
    });
    
    // Close on link click
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if(!a.parentElement.classList.contains('has-dropdown')){
          mainNav.classList.remove('open');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', false);
          document.body.style.overflow = '';
          // Reset all dropdowns to closed when menu closes
          mainNav.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
        }
      });
    });
  }

  /* --- Scroll Reveal --- */
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        revealIO.unobserve(e.target);
      }
    });
  }, {threshold:.12, rootMargin:'0px 0px -60px 0px'});

  function scanReveal(){
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom > 0){
        el.classList.add('visible');
      } else {
        revealIO.observe(el);
      }
    });
  }

  scanReveal();
  const revealMO = new MutationObserver(() => { requestAnimationFrame(scanReveal); });
  revealMO.observe(document.body, {childList: true, subtree: true});
  window.refreshReveal = scanReveal;

  /* --- Counters --- */
  if(typeof initCounters === 'function') initCounters();

  /* --- Back to Top --- */
  const btt = document.createElement('button');
  btt.className = 'back-to-top';
  btt.setAttribute('aria-label', 'Back to top');
  btt.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btt);
  window.addEventListener('scroll', () => {
    btt.classList.toggle('show', window.scrollY > 500);
  }, {passive:true});
  btt.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  /* --- WhatsApp Float --- */
  const wa = document.createElement('a');
  wa.className = 'whatsapp-float';
  wa.href = 'https://wa.me/' + COMPANY.whatsapp;
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.17h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.03-.19-.31a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.23 8.23-8.23a8.2 8.2 0 015.81 2.41 8.16 8.16 0 012.4 5.82c0 4.54-3.69 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.55.12-.16.25-.64.81-.78.98-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43H8.7c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.24 1.02.39 1.37.5.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg>';
  document.body.appendChild(wa);

  /* --- Lightbox --- */
  document.addEventListener('click', e => {
    const img = e.target.closest('[data-lightbox]');
    if(!img) return;
    e.preventDefault();
    const src = img.getAttribute('data-lightbox') || img.src;
    const lb = document.createElement('div');
    lb.className = 'lightbox open';
    lb.innerHTML = `<button class="lightbox-close" aria-label="Close"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><img src="${src}" alt="Enlarged view">`;
    document.body.appendChild(lb);
    const close = () => { lb.remove(); document.body.style.overflow = ''; };
    lb.addEventListener('click', ev => { if(ev.target === lb || ev.target.closest('.lightbox-close')) close(); });
    document.addEventListener('keydown', function esc(ev){ if(ev.key === 'Escape'){ close(); document.removeEventListener('keydown', esc); }});
    document.body.style.overflow = 'hidden';
  });

  /* --- Category tab links (services page) --- */
  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.tabTarget);
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  /* --- Newsletter demo --- */
  const nForm = document.querySelector('[data-form="newsletter"]');
  if(nForm){
    nForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = nForm.querySelector('input');
      if(input.value && input.checkValidity()){
        alert('Thank you! Newsletter subscription requires connecting a form service. (Demo mode)');
        nForm.reset();
      }
    });
  }

  /* --- Apply button on careers --- */
  document.querySelectorAll('[data-position]').forEach(btn => {
    btn.addEventListener('click', e => {
      const pos = btn.dataset.position;
      const sel = document.querySelector('#position');
      if(sel){
        Array.from(sel.options).forEach(o => { if(o.value === pos) sel.value = pos; });
      }
    });
  });
});

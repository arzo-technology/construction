/* ============================================================
   COMPONENTS — Header & Footer
   Injected on every page. Edit header/footer markup here only.
   ============================================================ */

(function(){
  const page = document.body.dataset.page || '';

  const navItems = [
    { href:'index.html', label:'Home', id:'home' },
    { href:'about.html', label:'About', id:'about' },
    { href:'services.html', label:'Services', id:'services', dropdown:true },
    { href:'projects.html', label:'Projects', id:'projects' },
    { href:'team.html', label:'Team', id:'team' },
    { href:'blog.html', label:'Blog', id:'blog' },
    { href:'contact.html', label:'Contact', id:'contact' }
  ];

  function navLink(item){
    const active = item.id === page ? ' active' : '';
    if(item.dropdown){
      return `<li class="has-dropdown">
        <a href="${item.href}" class="${active.trim()}">${item.label}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </a>
        <ul class="dropdown">
          <li><a href="services.html">All Services</a></li>
          <li><a href="services.html#residential">Residential</a></li>
          <li><a href="services.html#commercial">Commercial</a></li>
          <li><a href="services.html#industrial">Industrial</a></li>
          <li><a href="services.html#architecture">Architecture</a></li>
          <li><a href="services.html#renovation">Renovation</a></li>
        </ul>
      </li>`;
    }
    return `<li><a href="${item.href}" class="${active.trim()}">${item.label}</a></li>`;
  }

  const header = `
    <header class="site-header${page === 'home' ? '' : ' solid'}" id="siteHeader">
      <div class="container header-inner">
        <a href="index.html" class="brand" aria-label="${COMPANY.name} Home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
              <path d="M5 27V10L16 3l11 7v17" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
              <path d="M12 27v-9h8v9" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="brand-text">
            <strong>${COMPANY.shortName}</strong>
            <em>CONSTRUCTION</em>
          </span>
        </a>
        <nav class="main-nav" id="mainNav" aria-label="Main navigation">
          <ul>${navItems.map(navLink).join('')}</ul>
        </nav>
        <div class="header-actions">
          <a href="tel:${COMPANY.phoneRaw}" class="header-phone" aria-label="Call us">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" stroke="currentColor" stroke-width="2"/></svg>
            <span>${COMPANY.phone}</span>
          </a>
          <a href="quote.html" class="btn btn-primary btn-sm">Request a Quote</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mainNav">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="index.html" class="brand footer-brand">
              <span class="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
                  <path d="M5 27V10L16 3l11 7v17" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                  <path d="M12 27v-9h8v9" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="brand-text"><strong>${COMPANY.shortName}</strong><em>CONSTRUCTION</em></span>
            </a>
            <p>${COMPANY.name} delivers exceptional construction and engineering solutions through innovation, precision and an unwavering commitment to quality since ${COMPANY.founded}.</p>
            <div class="social-links">
              <a href="${COMPANY.facebook}" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg></a>
              <a href="${COMPANY.instagram}" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="${COMPANY.linkedin}" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM19 19h-3v-5.3c0-1.3-.5-2.2-1.6-2.2-1 0-1.4.6-1.5 1.3V19h-3V9h2.9v1.3a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4V19z"/></svg></a>
              <a href="${COMPANY.twitter}" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1A4.1 4.1 0 0011.7 9c0 .3 0 .6.1.9A11.7 11.7 0 013.2 5.4a4.2 4.2 0 001.3 5.6c-.7 0-1.4-.2-2-.5v.1a4.2 4.2 0 003.4 4.1 4 4 0 01-1.9.1 4.2 4.2 0 003.9 2.9 8.3 8.3 0 01-5.2 1.8H2a11.7 11.7 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0022 5.8z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="services.html#residential">Residential</a></li>
              <li><a href="services.html#commercial">Commercial</a></li>
              <li><a href="services.html#industrial">Industrial</a></li>
              <li><a href="services.html#architecture">Architecture</a></li>
              <li><a href="services.html#infrastructure">Infrastructure</a></li>
              <li><a href="services.html#renovation">Renovation</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get in Touch</h4>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1118 0z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/></svg>
              <span>${COMPANY.address}</span>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" stroke="currentColor" stroke-width="2"/></svg>
              <a href="tel:${COMPANY.phoneRaw}">${COMPANY.phone}</a>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>
              <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
            </div>
            <div class="newsletter">
              <h4 style="margin-bottom:8px;margin-top:16px">Newsletter</h4>
              <form class="newsletter-form" data-form="newsletter">
                <input type="email" placeholder="Your email" required aria-label="Email for newsletter">
                <button type="submit">Subscribe</button>
              </form>
              <p class="newsletter-note">Demo form — connect a service to enable.</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.</p>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
            <li><a href="sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>`;

  // Inject header at start of body, footer before scripts
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', header);
  body.insertAdjacentHTML('beforeend', footer);
})();
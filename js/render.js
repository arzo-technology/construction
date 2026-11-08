/* ============================================================
   RENDER HELPERS — content from configuration.js
   FULL FILE — copy everything below this line
   ============================================================ */

function iconSVG(name, size=24){
  const path = ICONS[name] || ICONS.check;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${path}</svg>`;
}

function starsSVG(rating){
  let out = '';
  for(let i=0;i<5;i++){
    out += `<svg width="14" height="14" viewBox="0 0 24 24" fill="${i<rating?'currentColor':'none'}" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"/></svg>`;
  }
  return out;
}

/* ---------- Services ---------- */
function renderServices(container, {limit=6}={}){
  if(!container) return;
  const list = SERVICES.slice(0, limit);
  container.innerHTML = list.map((s,i) => `
    <article class="service-card reveal reveal-delay-${(i%3)+1}">
      <div class="service-card-img">
        <img src="${s.image}" alt="${s.title}" loading="lazy" width="800" height="500">
        <div class="service-icon">${iconSVG(s.icon,26)}</div>
      </div>
      <div class="service-card-body">
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <a href="services.html#${s.id}" class="service-link">Learn More ${iconSVG('arrow',14)}</a>
      </div>
    </article>`).join('');
}

/* ---------- Projects grid — WHOLE CARD IS CLICKABLE ---------- */
function renderProjects(container, {limit=6, filter='all'}={}){
  if(!container) return;
  let list = PROJECTS;
  if(filter !== 'all') list = list.filter(p => p.category === filter);
  list = list.slice(0, limit);
  container.innerHTML = list.map((p,i) => `
    <article class="project-card reveal reveal-delay-${(i%3)+1}" data-category="${p.category}">
      <a href="project-details.html#${p.id}" class="project-card-inner" aria-label="View ${p.title} project">
        <img src="${p.image}" alt="${p.title} — ${p.category} project in ${p.location}" loading="lazy">
        <div class="project-card-body">
          <span class="pcat">${p.category}</span>
          <h3>${p.title}</h3>
          <div class="pmeta">
            <span>${iconSVG('check',14)} ${p.location}</span>
            <span>${p.year}</span>
          </div>
          <span class="pview">View Project ${iconSVG('arrow',14)}</span>
        </div>
      </a>
    </article>`).join('') || '<p style="text-align:center;grid-column:1/-1;color:var(--muted)">No projects in this category yet.</p>';
}

/* ---------- Project Filters ---------- */
function renderProjectFilters(container, onFilter){
  if(!container) return;
  const cats = ['all','Residential','Commercial','Industrial','Infrastructure','Renovation'];
  container.innerHTML = cats.map(c => `
    <button class="filter-btn${c==='all'?' active':''}" data-filter="${c}">
      ${c === 'all' ? 'All Projects' : c}
    </button>`).join('');
  container.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    onFilter(btn.dataset.filter);
  });
}

/* ---------- Blog — WHOLE CARD IS CLICKABLE ---------- */
function renderBlog(container, {limit=6}={}){
  if(!container) return;
  container.innerHTML = BLOG.slice(0, limit).map((b,i) => `
    <article class="blog-card reveal reveal-delay-${(i%3)+1}">
      <a href="blog-details.html#${b.id}" class="blog-card-inner" aria-label="Read ${b.title}">
        <div class="blog-card-img">
          <img src="${b.image}" alt="${b.title}" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-meta">
            <span class="cat">${b.category}</span>
            <span class="dot"></span>
            <span>${b.date}</span>
          </div>
          <h3>${b.title}</h3>
          <p>${b.excerpt}</p>
          <span class="service-link">Read Article ${iconSVG('arrow',14)}</span>
        </div>
      </a>
    </article>`).join('');
}

/* ---------- Team ---------- */
function renderTeam(container){
  if(!container) return;
  container.innerHTML = TEAM.map((m,i) => `
    <article class="team-card reveal reveal-delay-${(i%3)+1}">
      <div class="team-img">
        <img src="${m.image}" alt="${m.name} — ${m.role}" loading="lazy">
        <div class="social-overlay">
          <a href="${m.linkedin}" aria-label="${m.name} on LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM19 19h-3v-5.3c0-1.3-.5-2.2-1.6-2.2-1 0-1.4.6-1.5 1.3V19h-3V9h2.9v1.3a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4V19z"/></svg>
          </a>
        </div>
      </div>
      <div class="team-body">
        <h3>${m.name}</h3>
        <span class="role">${m.role}</span>
        <p>${m.bio}</p>
      </div>
    </article>`).join('');
}

/* ---------- Testimonials ---------- */
function renderTestimonials(container, {limit=3}={}){
  if(!container) return;
  container.innerHTML = TESTIMONIALS.slice(0, limit).map((t,i) => `
    <article class="testimonial reveal reveal-delay-${(i%3)+1}">
      <span class="quote-mark" aria-hidden="true">"</span>
      <div class="stars">${starsSVG(t.rating)}</div>
      <p>"${t.review}"</p>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" loading="lazy">
        <div>
          <strong>${t.name}</strong>
          <span>${t.title}${t.company?', '+t.company:''}</span>
        </div>
      </div>
    </article>`).join('');
}

/* ---------- FAQ ---------- */
function renderFAQs(container, items=FAQS){
  if(!container) return;
  container.innerHTML = items.map((f,i) => `
    <details class="faq-item reveal"${i===0?' open':''}>
      <summary>${f.q}</summary>
      <div class="faq-answer">${f.a}</div>
    </details>`).join('');
}

/* ---------- Jobs ---------- */
function renderJobs(container){
  if(!container) return;
  container.innerHTML = JOBS.map(j => `
    <article class="feature reveal" style="padding:32px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap;margin-bottom:12px">
        <div>
          <h3 style="margin-bottom:4px">${j.title}</h3>
          <div style="font-size:.85rem;color:var(--muted)">${j.department} · ${j.location} · ${j.type}</div>
        </div>
        <a href="careers.html#apply" class="btn btn-primary btn-sm" data-position="${j.title}">Apply Now</a>
      </div>
      <p style="margin-bottom:16px">${j.description}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px">
        <div>
          <strong style="display:block;font-family:var(--font-h);font-size:.8rem;color:var(--secondary-dk);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Requirements</strong>
          <ul style="font-size:.88rem;line-height:1.9;color:var(--muted);list-style:none">
            ${j.requirements.map(r=>`<li>· ${r}</li>`).join('')}
          </ul>
        </div>
        <div>
          <strong style="display:block;font-family:var(--font-h);font-size:.8rem;color:var(--secondary-dk);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Benefits</strong>
          <ul style="font-size:.88rem;line-height:1.9;color:var(--muted);list-style:none">
            ${j.benefits.map(b=>`<li>· ${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    </article>`).join('');
}

/* ---------- Stats Counter ---------- */
function initCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  const animate = el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(target * eased) + suffix;
      if(p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ animate(e.target); io.unobserve(e.target); }
    });
  }, {threshold:.4});
  counters.forEach(c => io.observe(c));
}
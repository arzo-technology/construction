/* ============================================================
   PROJECT FILTER + PROJECT DETAILS LOADER
   Uses hash (#id) — works on BOTH file:// and http://
   Also accepts ?id= for backwards compatibility.
   ============================================================ */

/* Get the ID from the URL — hash first, then query as fallback */
function getDetailId(){
  const hash = (location.hash || '').replace(/^#/, '').trim();
  if(hash) return hash;
  const params = new URLSearchParams(location.search);
  return (params.get('id') || '').trim();
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- PROJECTS PAGE FILTER ---------- */
  const grid = document.getElementById('projectsGrid');
  const filterBar = document.getElementById('projectFilters');
  if(grid && filterBar){
    const render = (filter) => {
      renderProjects(grid, {limit:100, filter});
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    };
    render('all');
    renderProjectFilters(filterBar, filter => render(filter));
  }

  /* ---------- PROJECT DETAILS PAGE ---------- */
  const pdRoot = document.getElementById('projectDetailsRoot');
  if(pdRoot){
    try {
      const id = getDetailId();
      const project = (typeof PROJECTS !== 'undefined' && PROJECTS.length)
        ? (PROJECTS.find(p => p.id === id) || PROJECTS[0])
        : null;

      if(!project) throw new Error('No projects available');

      const idx = PROJECTS.indexOf(project);
      const prev = PROJECTS[idx - 1] || PROJECTS[PROJECTS.length - 1];
      const next = PROJECTS[idx + 1] || PROJECTS[0];

      document.title = `${project.title} | ${COMPANY.name}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if(metaDesc) metaDesc.setAttribute('content', project.summary);

      pdRoot.innerHTML = `
        <section class="page-hero" style="background:var(--primary)">
          <div class="container">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="index.html">Home</a> <span>/</span>
              <a href="projects.html">Projects</a> <span>/</span>
              <span>${project.title}</span>
            </nav>
            <span class="eyebrow" style="color:var(--secondary)">${project.category} · ${project.year}</span>
            <h1>${project.title}</h1>
            <p>${project.summary}</p>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div style="border-radius:var(--r-lg);overflow:hidden;margin-bottom:56px;box-shadow:var(--sh-lg)">
              <img src="${project.image}" alt="${project.title}" data-lightbox="${project.image}" style="width:100%;aspect-ratio:16/9;object-fit:cover;cursor:zoom-in">
            </div>

            <div class="grid-2" style="gap:56px;margin-bottom:56px">
              <div class="rich-text">
                <span class="eyebrow">Project Overview</span>
                <h2>About the Project</h2>
                <p>${project.summary}</p>
                <h3>Challenges</h3>
                <p>${project.challenge}</p>
                <h3>Our Solution</h3>
                <p>${project.solution}</p>
                <h3>Final Results</h3>
                <p>${project.result}</p>
              </div>
              <div>
                <div class="contact-info-card">
                  <h3 style="margin-bottom:20px">Project Details</h3>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('compass',20)}</div><div><strong>Category</strong><span>${project.category}</span></div></div>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('check',20)}</div><div><strong>Location</strong><span>${project.location}</span></div></div>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('clock',20)}</div><div><strong>Completed</strong><span>${project.year}</span></div></div>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('building',20)}</div><div><strong>Size</strong><span>${project.size}</span></div></div>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('users',20)}</div><div><strong>Project Manager</strong><span>${project.manager}</span></div></div>
                  <div class="contact-item"><div class="ci-icon">${iconSVG('briefcase',20)}</div><div><strong>Status</strong><span>${project.status}</span></div></div>
                  <a href="quote.html" class="btn btn-primary" style="width:100%;margin-top:16px">Start a Similar Project</a>
                </div>
              </div>
            </div>

            ${project.gallery && project.gallery.length ? `
            <div style="margin-bottom:56px">
              <span class="eyebrow">Gallery</span>
              <h2 style="margin-bottom:24px">Project Images</h2>
              <div class="grid-3">
                ${project.gallery.map(g => `<div style="border-radius:var(--r-md);overflow:hidden;cursor:zoom-in"><img src="${g}" alt="${project.title} detail" data-lightbox="${g}" style="width:100%;aspect-ratio:4/3;object-fit:cover" loading="lazy"></div>`).join('')}
              </div>
            </div>` : ''}

            <div class="pager">
              <a href="project-details.html#${prev.id}" class="prev">
                <small>← Previous Project</small>
                <strong>${prev.title}</strong>
              </a>
              <a href="project-details.html#${next.id}" class="next">
                <small>Next Project →</small>
                <strong>${next.title}</strong>
              </a>
            </div>
          </div>
        </section>`;
    } catch(err){
      console.error('Project details failed to render:', err);
      pdRoot.innerHTML = `
        <section class="page-hero">
          <div class="container">
            <h1>Project Not Found</h1>
            <p>Sorry — we couldn't load this project.</p>
            <a href="projects.html" class="btn btn-primary" style="margin-top:24px">Back to All Projects</a>
          </div>
        </section>`;
    }
  }

  /* ---------- BLOG DETAILS PAGE ---------- */
  const bdRoot = document.getElementById('blogDetailsRoot');
  if(bdRoot){
    try {
      const id = getDetailId();
      const post = (typeof BLOG !== 'undefined' && BLOG.length)
        ? (BLOG.find(b => b.id === id) || BLOG[0])
        : null;

      if(!post) throw new Error('No blog posts available');

      const related = BLOG.filter(b => b.id !== post.id).slice(0, 3);

      document.title = `${post.title} | ${COMPANY.name}`;
      const md = document.querySelector('meta[name="description"]');
      if(md) md.setAttribute('content', post.excerpt);

      bdRoot.innerHTML = `
        <section class="page-hero">
          <div class="container">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="index.html">Home</a> <span>/</span>
              <a href="blog.html">Blog</a> <span>/</span>
              <span>${post.category}</span>
            </nav>
            <span class="eyebrow" style="color:var(--secondary)">${post.category}</span>
            <h1>${post.title}</h1>
            <p>By ${post.author} · ${post.date}</p>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <article style="max-width:820px;margin:0 auto">
              <div style="border-radius:var(--r-lg);overflow:hidden;margin-bottom:48px;box-shadow:var(--sh-md)">
                <img src="${post.image}" alt="${post.title}" style="width:100%;aspect-ratio:16/9;object-fit:cover">
              </div>
              <div class="rich-text">${post.content}</div>
              <div style="display:flex;gap:12px;margin-top:40px;padding-top:32px;border-top:1px solid var(--border);flex-wrap:wrap;align-items:center">
                <strong style="font-family:var(--font-h)">Share:</strong>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Facebook</a>
                <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(post.title)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Twitter</a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">LinkedIn</a>
              </div>
            </article>

            <div style="margin-top:80px">
              <div class="section-head">
                <span class="eyebrow">Keep Reading</span>
                <h2>Related Articles</h2>
              </div>
              <div class="blog-grid" id="relatedBlog"></div>
            </div>
          </div>
        </section>`;

      const rl = document.getElementById('relatedBlog');
      if(rl){
        rl.innerHTML = related.map(b => `
          <article class="blog-card">
            <div class="blog-card-img"><a href="blog-details.html#${b.id}"><img src="${b.image}" alt="${b.title}" loading="lazy"></a></div>
            <div class="blog-card-body">
              <div class="blog-meta"><span class="cat">${b.category}</span><span class="dot"></span><span>${b.date}</span></div>
              <h3><a href="blog-details.html#${b.id}">${b.title}</a></h3>
              <p>${b.excerpt}</p>
            </div>
          </article>`).join('');
      }
    } catch(err){
      console.error('Blog details failed to render:', err);
      bdRoot.innerHTML = `
        <section class="page-hero">
          <div class="container">
            <h1>Article Not Found</h1>
            <p>Sorry — we couldn't load this article.</p>
            <a href="blog.html" class="btn btn-primary" style="margin-top:24px">Back to Blog</a>
          </div>
        </section>`;
    }
  }
});
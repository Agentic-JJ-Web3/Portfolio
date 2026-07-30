// Main Rendering Logic
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderAbout();
  renderSkills();
  renderProjects();
  renderFooter();
  initAnimations();
  initWaveHello();
  initBlobMenu();
  initScrollCar();
});

function renderHeader() {
  const header = document.getElementById("header");
  const { avatar, cover, name, title, socials } = portfolioData.header;

  const socialLinks = socials.map(s =>
    `<a href="${s.url}" target="_blank" aria-label="${s.name}"><i class="${s.icon}"></i></a>`
  ).join('');

  const coverHTML = cover
    ? `<div class="cover"><img src="${cover}" alt="" class="cover-img" /></div>`
    : `<div class="cover cover-placeholder" aria-hidden="true"></div>`;

  header.innerHTML = `
        ${coverHTML}
        <div class="header-content">
            <div class="profile-container">
                <img src="${avatar}" alt="Profile" class="profile-pic" />
                <button type="button" id="waveBtn" class="wave-btn" aria-label="Say hi — opens the quick menu">
                    <span class="wave" aria-hidden="true">👋</span>
                </button>
            </div>
            <h1 class="code-animate">Hi, I'm ${name}</h1>
            <p class="subtitle">${title}</p>
            <div class="social-links">
                ${socialLinks}
            </div>
        </div>
    `;
}

function renderAbout() {
  const aboutSection = document.getElementById("about");
  const { title, description } = portfolioData.about;

  aboutSection.innerHTML = `
        <h2>${title}</h2>
        <div class="about-content">
            <p>${description}</p>
        </div>
    `;
}

function renderSkills() {
  const skillsSection = document.getElementById("skills");
  const skills = portfolioData.skills;
  if (!skills || !skills.groups) return;

  const groupsHTML = skills.groups.map(group => `
        <div class="skill-group">
            <p class="skill-group-label">${group.name}</p>
            <div class="skills-container">
                ${group.items.map(item => `
                    <div class="skill-tag${group.exploring ? ' exploring' : ''}">
                        <i class="${item.icon}"></i>
                        <span>${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

  skillsSection.innerHTML = `
        <div class="skills-header">
            <h2>${skills.heading}</h2>
            <div class="skills-divider"></div>
        </div>
        <div class="skill-groups">
            ${groupsHTML}
        </div>
    `;
}

function formatProjectDate(raw) {
  if (!raw) return null;
  const parsed = new Date(`${raw.replace('/', '-')}-01`);
  if (isNaN(parsed)) return raw; // e.g. a bare year like "2023"
  return parsed.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function renderProjectCard(project) {
  const dateLabel = formatProjectDate(project.date);
  const codeLink = project.github_link
    ? `<a href="${project.github_link}" target="_blank"><i class="fab fa-github"></i> Code</a>`
    : `<span class="project-private"><i class="fas fa-lock"></i> Private codebase</span>`;

  return `
        <div class="project-card">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.name}" class="project-image" />
            </div>
            <div class="project-info">
                <div class="project-meta">
                    <h3>${project.name}</h3>
                    ${dateLabel ? `<span class="project-date">${dateLabel}</span>` : ''}
                </div>
                <dl class="project-case">
                    ${project.problem ? `<dt>Problem</dt><dd>${project.problem}</dd>` : ''}
                    ${project.result ? `<dt>Result</dt><dd>${project.result}</dd>` : ''}
                </dl>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="links">
                    ${codeLink}
                    <a href="${project.live_link}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
                </div>
            </div>
        </div>
    `;
}

function renderArchiveItem(project) {
  const dateLabel = formatProjectDate(project.date) || '';
  const tagsLabel = (project.tags || []).join(' · ');
  const tagsAttr = (project.tags || []).join(' ');

  return `
        <a class="proj-list-item" href="${project.live_link || '#'}" target="_blank" rel="noopener" data-tags="${tagsAttr}">
            <span class="proj-list-name">${project.name}</span>
            <span class="proj-list-tags">${tagsLabel}</span>
            <span class="proj-list-date">${dateLabel}</span>
        </a>
    `;
}

function renderProjects() {
  const projectsSection = document.getElementById("projects");
  const all = portfolioData.projects;
  const featured = all.filter(p => p.featured);
  const rest = all.filter(p => !p.featured);

  const featuredHTML = featured.map(renderProjectCard).join('');
  const archiveTags = [...new Set(rest.flatMap(p => p.tags || []))].sort();

  const archiveHTML = rest.length ? `
        <div class="projects-archive">
            <div class="archive-header">
                <h3>All Projects</h3>
                <span class="archive-count">${rest.length} more</span>
            </div>
            ${archiveTags.length ? `
                <div class="archive-filter" role="group" aria-label="Filter by tag">
                    <button type="button" class="tag-pill active" data-tag="all">All</button>
                    ${archiveTags.map(t => `<button type="button" class="tag-pill" data-tag="${t}">${t}</button>`).join('')}
                </div>
            ` : ''}
            <div class="archive-list" id="archiveList">
                ${rest.map(renderArchiveItem).join('')}
            </div>
            <p class="archive-empty" id="archiveEmpty" hidden>No projects with this tag yet.</p>
        </div>
    ` : '';

  projectsSection.innerHTML = `
        <h2>🛠 Projects</h2>
        <div class="projects-grid">
            ${featuredHTML}
        </div>
        ${archiveHTML}
    `;

  initArchiveFilter();
}

function initArchiveFilter() {
  const pills = document.querySelectorAll(".archive-filter .tag-pill");
  const items = document.querySelectorAll("#archiveList .proj-list-item");
  const empty = document.getElementById("archiveEmpty");
  if (!pills.length) return;

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const tag = pill.dataset.tag;
      let visible = 0;
      items.forEach((item) => {
        const show = tag === "all" || (item.dataset.tags || "").split(" ").includes(tag);
        item.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible > 0;
    });
  });
}

function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `<p>${portfolioData.footer.text}</p>`;
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
}

// ---------- Waving hand -> "Hello there!" drop -> opens the quick menu ----------
function initWaveHello() {
  const waveBtn = document.getElementById("waveBtn");
  const helloDrop = document.getElementById("helloDrop");
  if (!waveBtn || !helloDrop) return;

  waveBtn.addEventListener("click", () => {
    helloDrop.classList.add("show");

    const onDropIn = () => {
      helloDrop.removeEventListener("transitionend", onDropIn);
      openBlobMenu(waveBtn);
      setTimeout(() => helloDrop.classList.remove("show"), 1400);
    };
    helloDrop.addEventListener("transitionend", onDropIn, { once: true });
  });
}

// ---------- Draggable "blob" button + the menu it opens ----------
let blobMenuState = { lastTrigger: null };

function initBlobMenu() {
  const blob = document.getElementById("navBlob");
  const menu = document.getElementById("blobMenu");
  if (!blob || !menu) return;

  // Start docked mid-right, in pixel coordinates so drag math stays simple.
  const size = blob.offsetWidth || 52;
  blob.style.top = `${Math.round(window.innerHeight / 2 - size / 2)}px`;
  blob.style.right = "16px";

  let drag = null;

  blob.addEventListener("pointerdown", (e) => {
    blob.setPointerCapture(e.pointerId);
    blob.classList.add("dragging");
    const rect = blob.getBoundingClientRect();
    drag = { startX: e.clientX, startY: e.clientY, originLeft: rect.left, originTop: rect.top, moved: false };
  });

  blob.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (!drag.moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) drag.moved = true;
    if (!drag.moved) return;

    const s = blob.offsetWidth;
    const left = Math.max(4, Math.min(drag.originLeft + dx, window.innerWidth - s - 4));
    const top = Math.max(4, Math.min(drag.originTop + dy, window.innerHeight - s - 4));
    blob.style.left = `${left}px`;
    blob.style.right = "auto";
    blob.style.top = `${top}px`;
  });

  blob.addEventListener("pointerup", () => {
    blob.classList.remove("dragging");
    if (drag && drag.moved) {
      snapBlobToEdge(blob);
    } else {
      toggleBlobMenu(blob);
    }
    drag = null;
  });

  window.addEventListener("resize", () => {
    const rect = blob.getBoundingClientRect();
    const maxTop = window.innerHeight - rect.height - 8;
    if (rect.top > maxTop) blob.style.top = `${Math.max(8, maxTop)}px`;
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeBlobMenu();
  });
}

function snapBlobToEdge(blob) {
  const rect = blob.getBoundingClientRect();
  const goRight = rect.left + rect.width / 2 > window.innerWidth / 2;

  if (goRight) {
    blob.style.right = "16px";
    blob.style.left = "auto";
  } else {
    blob.style.left = "16px";
    blob.style.right = "auto";
  }
  const top = Math.max(8, Math.min(rect.top, window.innerHeight - rect.height - 8));
  blob.style.top = `${top}px`;
}

function toggleBlobMenu(trigger) {
  const menu = document.getElementById("blobMenu");
  if (menu.hidden) openBlobMenu(trigger);
  else closeBlobMenu();
}

function openBlobMenu(trigger) {
  const blob = document.getElementById("navBlob");
  const menu = document.getElementById("blobMenu");
  if (!menu.hidden) return;

  blobMenuState.lastTrigger = trigger || blob;
  menu.hidden = false;
  positionBlobMenu(blob, menu);
  requestAnimationFrame(() => menu.setAttribute("data-open", ""));
  blob.setAttribute("aria-expanded", "true");

  document.addEventListener("pointerdown", onOutsidePointerDown, true);
  document.addEventListener("keydown", onMenuKeydown);
  menu.querySelector("a")?.focus();
}

function closeBlobMenu() {
  const blob = document.getElementById("navBlob");
  const menu = document.getElementById("blobMenu");
  if (menu.hidden) return;

  menu.removeAttribute("data-open");
  blob.setAttribute("aria-expanded", "false");
  document.removeEventListener("pointerdown", onOutsidePointerDown, true);
  document.removeEventListener("keydown", onMenuKeydown);

  const onClosed = () => {
    menu.hidden = true;
    menu.removeEventListener("transitionend", onClosed);
  };
  menu.addEventListener("transitionend", onClosed, { once: true });

  blobMenuState.lastTrigger?.focus();
}

function onOutsidePointerDown(e) {
  const blob = document.getElementById("navBlob");
  const menu = document.getElementById("blobMenu");
  if (!menu.contains(e.target) && !blob.contains(e.target)) closeBlobMenu();
}

function onMenuKeydown(e) {
  if (e.key === "Escape") closeBlobMenu();
}

function positionBlobMenu(blob, menu) {
  const rect = blob.getBoundingClientRect();
  const menuWidth = menu.offsetWidth || 200;
  const menuHeight = menu.offsetHeight || 100;
  const onRight = rect.left + rect.width / 2 > window.innerWidth / 2;

  let left = onRight ? rect.left - menuWidth - 12 : rect.right + 12;
  left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));

  let top = rect.top + rect.height / 2 - menuHeight / 2;
  top = Math.max(8, Math.min(top, window.innerHeight - menuHeight - 8));

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

// ---------- Scroll progress: a car driving to the bottom of the page ----------
function initScrollCar() {
  const track = document.getElementById("scrollCar");
  const car = track?.querySelector(".scroll-car");
  if (!track || !car) return;

  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    const roadWidth = track.clientWidth - 32 - car.clientWidth; // minus left/right inset and car width
    const x = progress * Math.max(0, roadWidth);

    car.style.transform = `translate(${x}px, -50%)`;
    track.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });

  window.addEventListener("resize", update);
  window.addEventListener("load", update);
  update();
}

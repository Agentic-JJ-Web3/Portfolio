// Main Rendering Logic
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderAbout();
  renderSkills();
  renderProjects();
  renderFooter();
  initAnimations();
});

function renderHeader() {
  const header = document.getElementById("header");
  const { avatar, name, title, socials } = portfolioData.header;

  const socialLinks = socials.map(s =>
    `<a href="${s.url}" target="_blank" aria-label="${s.name}"><i class="${s.icon}"></i></a>`
  ).join('');

  header.innerHTML = `
        <div class="header-content">
            <div class="profile-container">
                <img src="${avatar}" alt="Profile" class="profile-pic" />
                <span class="wave">👋</span>
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
  // Check if skills exist in data
  if (!portfolioData.skills) return;

  const skillsHTML = portfolioData.skills.map(skill => `
        <div class="skill-tag">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');

  skillsSection.innerHTML = `
        <h2>🚀 Skills</h2>
        <div class="skills-container">
            ${skillsHTML}
        </div>
    `;
}

function renderProjects() {
  const projectsSection = document.getElementById("projects");

  const projectsHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.name}" class="project-image" />
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="links">
                    <a href="${project.github_link}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    <a href="${project.live_link}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
                </div>
            </div>
        </div>
    `).join('');

  projectsSection.innerHTML = `
        <h2>🛠 Projects</h2>
        <div class="projects-grid">
            ${projectsHTML}
        </div>
    `;
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

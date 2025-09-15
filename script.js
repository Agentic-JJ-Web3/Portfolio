console.log("Welcome to PIERRICK's portfolio!");

// Array of projects
const projects = [
  {
    name: "Portfolio",
    image: "portfolio.png", 
    github_link: "https://github.com/Agentic-JJ-Web3/portfolio",
    live_link: "njeipierrick.vercel.app"

  },
  {
    name: "237 Builds",
    image: "./237Builds.PNG", // 
    github_link: "https://github.com/Agentic-JJ-Web3/237-builds",
    live_link: "237-Builds.netlify.app"

  }
];

// Dynamically add projects to the "Projects" section
const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
  const projectItem = document.createElement("li");
  projectItem.classList.add("project-item");

  projectItem.innerHTML = `
    
      <img src="${project.image}" alt="${project.name}" class="project-image" />
      <p class="name">${project.name}</p>
      <div class="links">
      <a href="${project.github_link}" >Github</a>
      <a href="${project.live_link}" >Live Website</a>
      </div>
    
  `;

  projectsList.appendChild(projectItem);
});

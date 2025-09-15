console.log("Welcome to PIERRICK's portfolio!");

// Array of projects
const projects = [
  {
    name: "Portfolio",
    image: "portfolio.png", // Replace with the actual image path
    link: "https://github.com/Agentic-JJ-Web3/portfolio"
  },
  {
    name: "237 Builds",
    image: "./237Builds.PNG", // Replace with the actual image path
    link: "https://github.com/Agentic-JJ-Web3/237-builds"
  }
];

// Dynamically add projects to the "Projects" section
const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
  const projectItem = document.createElement("li");
  projectItem.classList.add("project-item");

  projectItem.innerHTML = `
    <a href="${project.link}" target="_blank">
      <img src="${project.image}" alt="${project.name}" class="project-image" />
      <p>${project.name}</p>
    </a>
  `;

  projectsList.appendChild(projectItem);
});

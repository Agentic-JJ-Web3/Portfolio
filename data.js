const portfolioData = {
    header: {
        avatar: "avatar.png", // was: "https://i.ibb.co/ynwY3nG8/avatar.png"
        cover: "cover-photo.jpg",
        name: "NJEI PIERRICK Jnr",
        title: "Open-minded. Curious. Builder. Human-first.",
        socials: [
            { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/njei-pierrick-1a52aa2b8" },
            { name: "GitHub", icon: "fab fa-github", url: "https://github.com/Agentic-JJ-Web3" },
            { name: "Twitter", icon: "fab fa-twitter", url: "https://x.com/NjeiPierrick" },
            { name: "Portfolio", icon: "fas fa-globe", url: "https://njeipierrick.vercel.app" }
        ]
    },
    about: {
        title: "💻 About Me",
        description: "I love <span class='strong-word'>JavaScript</span> and all things that push the world forward like <span class='strong-word'>Open-Source.</span> I'm passionate about Web 3.0, psychology, metaphysics, and building for humans."
    },
    skills: {
        heading: "I build with",
        groups: [
            {
                name: "Frontend",
                items: [
                    { name: "React", icon: "fab fa-react" },
                    { name: "Next.js", icon: "fas fa-layer-group" },
                    { name: "TypeScript", icon: "fas fa-file-code" },
                    { name: "Tailwind", icon: "fas fa-wind" },
                    { name: "Framer Motion", icon: "fas fa-wand-magic-sparkles" }
                ]
            },
            {
                name: "Backend",
                items: [
                    { name: "Node.js", icon: "fab fa-node-js" },
                    { name: "Express", icon: "fas fa-server" },
                    { name: "PostgreSQL", icon: "fas fa-database" },
                    { name: "MongoDB", icon: "fas fa-leaf" },
                    { name: "REST APIs", icon: "fas fa-plug" },
                    { name: "FastAPI", icon: "fas fa-bolt" }
                ]
            },
            {
                // Linux (System Administration) and AWS (Cloud) live here — from
                // dedicated coursework, not just something picked up on the job.
                name: "Tools",
                items: [
                    { name: "Git", icon: "fab fa-git-alt" },
                    { name: "Docker", icon: "fab fa-docker" },
                    { name: "Linux", icon: "fab fa-linux" },
                    { name: "AWS", icon: "fab fa-aws" },
                    { name: "Vercel", icon: "fas fa-cloud-arrow-up" },
                    { name: "Firebase", icon: "fas fa-fire" }
                ]
            },
            {
                name: "Currently Exploring",
                exploring: true,
                items: [
                    { name: "LLM Eng.", icon: "fas fa-brain" },
                    { name: "AI Agents", icon: "fas fa-robot" }
                ]
            }
        ]
    },
    projects: [
        {
            name: "Portfolio",
            description: "My personal portfolio website.",
            image: "https://i.ibb.co/d49Y0M19/portfolio.png",
            github_link: "https://github.com/Agentic-JJ-Web3/portfolio",
            live_link: "https://agentic-jj-web3.vercel.app/",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            name: "237 Builds",
            description: "A platform for Cameroon's builders.",
            image: "https://i.ibb.co/fVQ4QWdf/237-Builds.png",
            github_link: "https://github.com/Agentic-JJ-Web3/237-builds",
            live_link: "https://237-Builds.netlify.app",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            name: "WeatherMaster",
            description: "Advanced weather dashboard.",
            image: "https://i.ibb.co/rGGrfqTJ/weathermaster.png",
            github_link: "https://github.com/Agentic-JJ-Web3/Weather-Master",
            live_link: "https://weather-master-three.vercel.app",
            tags: ["Next.js", "FastAPI", "TS"]
        },
        {
            name:"Onlewa Digital Empowerment",
            description: "Building digitally empowered communities through education, innovation and opportunity",
            image:"https://i.ibb.co/M5kcN040/image.png",
            live_link:"https://initiative.onlewa.co",
            tags: ["Next.js", "TS", "Sanity"]
        }
    ],
    footer: {
        text: "© 2025 NJEI PIERRICK Jnr. Built with logic and creativity."
    }
};

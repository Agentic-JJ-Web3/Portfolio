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
    // DRAFT — problem/result copy below is a first pass written from the old
    // one-line descriptions. Replace with the real story of each project.
    // `date` is left blank on purpose (format "YYYY-MM") — fill in the real
    // build date rather than have me guess; it drives the date badge on the
    // card and stays hidden until set. Omit `github_link` entirely for
    // private/client work — the card shows "Private codebase" instead.
    projects: [
        {
            name: "Portfolio",
            date: "",
            problem: "Needed a single place recruiters and collaborators could see real shipped work, instead of a resume PDF or a scattered set of links.",
            result: "A living portfolio rebuilt project-by-project as skills grew — this current version included.",
            image: "https://i.ibb.co/d49Y0M19/portfolio.png",
            github_link: "https://github.com/Agentic-JJ-Web3/portfolio",
            live_link: "https://agentic-jj-web3.vercel.app/",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            name: "237 Builds",
            date: "2025-04",
            problem: "Cameroonian builders had no central place to discover local tech projects and each other — everything lived in scattered WhatsApp groups and DMs.",
            result: "A public directory of builders and projects, giving the local tech scene a shared, searchable home.",
            image: "https://i.ibb.co/fVQ4QWdf/237-Builds.png",
            github_link: "https://github.com/Agentic-JJ-Web3/237Builds",
            live_link: "https://237-Builds.netlify.app",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            name: "WeatherMaster",
            date: "2025-12",
            problem: "Most weather apps bury the one thing people actually check — \"do I need a jacket\" — under charts and ads.",
            result: "A fast, clean dashboard with city search and a forecast readable at a glance; built to learn Next.js and FastAPI end-to-end.",
            image: "https://i.ibb.co/rGGrfqTJ/weathermaster.png",
            github_link: "https://github.com/Agentic-JJ-Web3/Weather-Master",
            live_link: "https://weather-master-three.vercel.app",
            tags: ["Next.js", "FastAPI", "TS"]
        },
        {
            name: "Onlewa Digital Empowerment",
            date: "2026-07",
            problem: "Onlewa needed a public-facing site to explain its digital-empowerment programs and give communities a clear way to get involved.",
            result: "A content-managed marketing site (Sanity-backed) the Onlewa team can update themselves without touching code.",
            image: "https://i.ibb.co/M5kcN040/image.png",
            live_link: "https://initiative.onlewa.co",
            tags: ["Next.js", "TS", "Sanity"]
        },
        {
            name: "MarketMind",
            date: "2026-05",
            problem: "Most business owners had no simple, unified way of tracking their finances and getting business intel.",
            result: "A web application that helps track finances, get AI insights, and create marketing content — all in one platform built for Cameroonian businesses.",
            image: "https://i.ibb.co/XrKBftjQ/image.png",
            live_link: "https://marketmind-org.vercel.app/",
            tags: ["Next.js", "Firebase", "Gemini", "Groq", "FLUX"]
        }
    ],
    footer: {
        text: "© 2023 NJEI PIERRICK Jnr. Built with logic and creativity."
    }
};

const portfolioData = {
    header: {
        avatar: "avatar.jpg", // was: "https://i.ibb.co/ynwY3nG8/avatar.png"
        cover: "cover-photo.jpg",
        name: "NJEI PIERRICK Jnr",
        title: "Open-minded. Curious. Builder. Human-first. Building online as Agentic JJ.",
        socials: [
            { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/njeipierrick" },
            { name: "GitHub", icon: "fab fa-github", url: "https://github.com/Agentic-JJ-Web3" },
            { name: "Twitter", icon: "fab fa-twitter", url: "https://x.com/NjeiPierrick" },
            { name: "Blog", icon: "fas fa-globe", url: "https://njei-blog.vercel.app" }
        ]
    },
    about: {
        title: "💻 About Me",
        description: "I love <span class='strong-word'>JavaScript</span> and all things that push the world forward like <span class='strong-word'>Open-Source.</span> I'm passionate about Web 3.0, psychology, metaphysics, and building for humans."
    },
    // ---- Brand photo strip -------------------------------------------
    // Feeds the small "In frame" strip rendered near the footer (see
    // renderGallery in script.js). Every entry needs a real file already
    // sitting in the project root — this array doesn't upload anything.
    //
    // To add a future photo (event, workshop, humble-beginnings, etc.):
    //   1. Drop the file in the project root with a descriptive,
    //      hyphenated filename (e.g. njei-pierrick-devfest-2026.jpg) —
    //      filenames are a real signal for Google Images, "IMG_0231.jpg"
    //      is not.
    //   2. Add a row below with a specific `alt` (always include the
    //      name) and a short `caption`.
    //   3. Add a matching <image:image> block in sitemap.xml so Google
    //      can discover it as a page image — see the comment there.
    //   4. Optionally add it to the JSON-LD "image" array in index.html
    //      if it's a strong headshot you want tied to the Person record.
    gallery: [
        { src: "avatar.jpg", alt: "Njei Pierrick (Agentic JJ), software engineer and AI builder", caption: "Profile", category: "profile" },
        { src: "njei-pierrick-linkedin-photo.jpg", alt: "Njei Pierrick (Agentic JJ) LinkedIn profile photo", caption: "LinkedIn", category: "profile" },
        { src: "njei-pierrick-corporate-photo.jpg", alt: "Njei Pierrick (Agentic JJ) in corporate attire", caption: "Corporate", category: "profile" },
        { src: "njei-pierrick-casual-photo.jpg", alt: "Njei Pierrick (Agentic JJ), casual portrait", caption: "Casual", category: "profile" }
        // Future rows go here, e.g.:
        // { src: "njei-pierrick-devfest-2026.jpg", alt: "Njei Pierrick (Agentic JJ) speaking at DevFest 2026", caption: "DevFest 2026", category: "event" },
    ],
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
    // `featured: true` puts a project in the full case-study grid; everything
    // else drops into the compact, filterable "All Projects" list below it —
    // that's the split that keeps this readable once there are 30+ entries.
    projects: [
        {
            name: "Portfolio ",
            date: "2025-07",
            problem: "Needed a single place recruiters and collaborators could see real shipped work, instead of a resume PDF or a scattered set of links.",
            result: "A living portfolio rebuilt project-by-project as skills grew — this current version included.",
            image: "https://i.ibb.co/d49Y0M19/portfolio.png",
            github_link: "https://github.com/Agentic-JJ-Web3/portfolio",
            live_link: "https://agentic-jj-web3.vercel.app/",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            name: "237 Builds",
            featured: true,
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
            featured: false,
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
            featured: true,
            date: "2026-07",
            problem: "Onlewa needed a public-facing site to explain its digital-empowerment programs and give communities a clear way to get involved.",
            result: "A content-managed marketing site (Sanity-backed) the Onlewa team can update themselves without touching code.",
            image: "https://i.ibb.co/M5kcN040/image.png",
            live_link: "https://initiative.onlewa.co",
            tags: ["Next.js", "TS", "Sanity"]
        },
        {
            name: "MarketMind",
            featured: true,
            date: "2026-05",
            problem: "Most business owners had no simple, unified way of tracking their finances and getting business intel.",
            result: "A web application that helps track finances, get AI insights, and create marketing content — all in one platform built for Cameroonian businesses.",
            image: "https://i.ibb.co/XrKBftjQ/image.png",
            live_link: "https://marketmind-org.vercel.app/",
            tags: ["Next.js", "Firebase", "Gemini", "Groq", "FLUX"]
        },
        {
            name: "CryptoXAF",
            featured: false,
            date: "2026-08",
            problem: "Cameroonian crypto users had no simple way to see the XAF value of their crypto holdings in real time.",
            result: "A simple, real-time crypto-to-XAF price tracker with a clean UI and no ads.",
            image: "https://i.ibb.co/mrFdR175/image.png",
            live_link: "https://cryptoxaf.vercel.app/",
            tags: ["Vite","ReactJS","TS", "Node.js", "Binance API"]
        }
    ],
    footer: {
        text: "© 2023 NJEI PIERRICK Jnr. Built for good"
    }
};

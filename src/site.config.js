/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  site.config.js — the ONLY file you need to edit to personalize the site.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  • Text supports light markup:  *accent*  → highlighted in your accent color
 *                                 **bold**  → bold
 *  • Images live in /public/images and are referenced as "/images/…"
 *  • Icons are referenced by name. See src/components/Icon.jsx for the list
 *    (e.g. "github", "linkedin", "react", "typescript", "trophy", "code"…).
 *  • Reorder or remove sections with the `sections` array below.
 *  • Leave optional fields (period, url, repo, status…) out to hide them.
 */

const config = {
  // ── Look & feel ──────────────────────────────────────────────────────────
  theme: {
    /** Any CSS color. Drives buttons, links, highlights, glow and the favicon. */
    accent: "#6d5dfc",
    /** "light" | "dark" | "system" — what first-time visitors see. */
    defaultMode: "system",
    /** Let visitors flip between light & dark. */
    showThemeToggle: true,
    /** Hero backdrop: "aurora" | "grid" | "video" | "none" */
    heroBackground: "aurora",
    /** Only used when heroBackground is "video". */
    heroVideo: "/videos/backgroundvideo2.mp4",
    /** Fade/slide sections in as you scroll (always off for reduced-motion users). */
    animations: true,
  },

  // ── SEO / browser tab ────────────────────────────────────────────────────
  meta: {
    title: "Clarence Chau — Software Engineer",
    description:
      "Clarence Chau is a Toronto-based software engineer at Shopify and professional badminton player. Explore his experience, projects and videos.",
    url: "https://clarencechau.com",
  },

  // ── You ──────────────────────────────────────────────────────────────────
  person: {
    name: "Clarence Chau",
    firstName: "Clarence",
    initials: "cc",
    role: "Software Engineer",
    location: "Toronto, ON",
    /** Little pulsing status pill in the hero. Set to null to hide. */
    status: "Currently in Toronto, ON",
    avatar: "/images/profile.jpg",
    email: "clarence.comsci@gmail.com",
    /** Drop a PDF in /public and point to it, e.g. "/resume.pdf". */
    resume: null,
  },

  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://ca.linkedin.com/in/clarence-chau-3a827b1b7" },
    { label: "GitHub", icon: "github", url: "https://github.com/clarencechau" },
    { label: "YouTube", icon: "youtube", url: "https://www.youtube.com/@clarencechauu" },
    { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/clarencechauu/" },
  ],

  // ── Page layout: reorder or delete entries to change the page ────────────
  sections: ["about", "experience", "projects", "athletics", "videos", "contact"],

  // ── Hero (top of the page) ───────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm Clarence 👋",
    headline: "Software engineer & *professional* badminton player.",
    tagline:
      "I build full-stack products at Shopify with Ruby, React and GraphQL — and spend the rest of my time chasing shuttles across Canada and beyond.",
    image: "/images/profile.jpg",
    imageAlt: "Portrait of Clarence Chau",
    /** Shape of the photo frame, e.g. "1 / 1" (square) or "4 / 5" (portrait). */
    imageAspect: "1 / 1",
    /** Let visitors grab the floating cards and move them around (double-click resets). */
    draggableHighlights: true,
    /** Floating cards on the hero photo. */
    highlights: [
      { icon: "trophy", title: "Former #1 in Canada", subtitle: "Men's Doubles · 2025" },
      { icon: "code", title: "Software Engineer @ Shopify", subtitle: "Ruby · React · GraphQL" },
    ],
    buttons: [
      { label: "See my work", href: "#experience", primary: true },
      { label: "Get in touch", href: "#contact" },
    ],
  },

  // ── About ────────────────────────────────────────────────────────────────
  about: {
    nav: "About",
    eyebrow: "about",
    title: "A little about me",
    lead: "Software engineer with a passion for designing and programming *full-stack* websites and applications.",
    paragraphs: [
      "Hello! I'm Clarence, a Software Engineer at Shopify based in Toronto, Ontario, currently working with Ruby, React, and GraphQL. I am also a student at the University of Toronto, pursuing a degree in Computer Science, Mathematics, and Statistics.",
      "But there's more to me than just academics and coding. On the athletic side, I'm a professional badminton player. I've had the privilege of representing Canada on the junior national team and was formerly ranked **#1 in Canada** for Men's Doubles.",
      "Both my academic and athletic experiences have armed me with qualities like discipline, punctuality, and leadership, and I'm eager to bring them into any team setting.",
    ],
    /** Quick facts shown as small cards. */
    facts: [
      { label: "Based in", value: "Toronto, ON" },
      { label: "Studying", value: "CS, Math & Stats @ UofT" },
      { label: "Formerly ranked", value: "#1 Men's Doubles 🇨🇦" },
    ],
    /** 1–4 photos for the collage. */
    photos: [
      { src: "/images/pic2.jpg", alt: "Clarence at sunset in a park" },
      { src: "/images/pic4.jpg", alt: "Silhouette of Clarence at golden hour" },
      { src: "/images/pic3.jpg", alt: "Clarence walking along a beach" },
      { src: "/images/pic6.jpg", alt: "Clarence and a friend on the subway" },
    ],
    skillsTitle: "Tech I work with",
    skills: [
      { name: "Ruby", icon: "ruby", url: "https://www.ruby-lang.org/" },
      { name: "React", icon: "react", url: "https://react.dev/" },
      { name: "GraphQL", icon: "graphql", url: "https://graphql.org/" },
      { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: "Java", icon: "java", url: "https://www.java.com/" },
      { name: "SQL", icon: "mysql", url: "https://www.mysql.com/" },
      { name: "Python", icon: "python", url: "https://www.python.org/" },
      { name: "Firebase", icon: "firebase", url: "https://firebase.google.com/" },
      { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
      { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
      { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
      { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
      { name: "SSMS", icon: "database", url: "https://learn.microsoft.com/sql/ssms/" },
      { name: "HTML", icon: "html", url: "https://developer.mozilla.org/docs/Web/HTML" },
      { name: "CSS", icon: "css", url: "https://developer.mozilla.org/docs/Web/CSS" },
    ],
  },

  // ── Experience ───────────────────────────────────────────────────────────
  experience: {
    nav: "Experience",
    eyebrow: "experience",
    title: "Where I've worked",
    items: [
      {
        role: "Software Engineer",
        company: "Shopify",
        team: "Tax Calculations",
        current: true, // shows a "Current" badge
        logo: "/images/logos/shopify.png",
        url: "https://www.shopify.com/ca",
        period: "", // e.g. "2025 — Present"
        description:
          "Building full-stack features on a new team at Shopify, working across Ruby on the backend, React on the frontend, and the GraphQL APIs that connect them.",
        tags: ["Ruby", "React", "GraphQL"],
      },
      {
        role: "Software Engineer",
        company: "Shopify",
        team: "POS Design System",
        logo: "/images/logos/shopify.png",
        url: "https://www.shopify.com/ca",
        period: "", // e.g. "2024 — 2025"
        description:
          "Worked on the Shopify POS Design System (POS X). Heavily involved in major projects such as Polaris Web Components and Animations.",
        tags: ["React Native", "TypeScript"],
      },
      {
        role: "Data Engineer",
        company: "Scotiabank",
        team: "CID&A Consumption Analytics",
        logo: "/images/logos/scotiabank.png",
        url: "https://www.scotiabank.com/ca/en/personal.html",
        period: "",
        description:
          "Optimized data on multiple projects under the CID&A Canadian Banking Platforms team, focusing on the migration of enterprise data lake platforms and pipeline testing.",
        tags: ["Pandas", "MySQL", "Spark", "Airflow", "Rancher", "MinIO", "Docker"],
      },
      {
        role: "Software Engineer",
        company: "Moneris",
        team: "Chargebacks Rewrite",
        logo: "/images/logos/moneris.png",
        url: "https://www.moneris.com/",
        period: "",
        description:
          "Collaborated with a cross-functional team to architect and rebuild a merchant chargebacks application, improving efficiency, user experience, and code modernity.",
        tags: ["React", "TypeScript", "Java", "SQL"],
      },
      {
        role: "Software Engineer",
        company: "Aireum",
        team: "Admin Platform",
        logo: "/images/logos/aireum.png",
        url: "http://www.aireum.ca/",
        period: "",
        description:
          "Engineered a full-stack administrative management system, enabling the digital showcasing and publication of Canadian national archive material.",
        tags: ["React", "JavaScript", "Firebase"],
      },
    ],
  },

  // ── Projects ─────────────────────────────────────────────────────────────
  projects: {
    nav: "Projects",
    eyebrow: "projects",
    title: "Things I've built",
    items: [
      {
        name: "GoTourney",
        status: "In progress",
        featured: true, // spans the full row
        image: "/images/projects/gotourney.jpg",
        url: "",
        description:
          "A website that simplifies the process for players and hosts to create and advertise local badminton tournaments.",
        tags: ["Next.js", "MongoDB"],
      },
      {
        name: "Gungeon",
        image: "/images/projects/gungeon.jpg",
        url: "https://github.com/clarencechau/Gungeon",
        description:
          "Travel through chambers and rooms, shooting enemies and avoiding traps to beat the game — with multiple save files and checkpoints.",
        tags: ["Java", "Greenfoot"],
      },
      {
        name: "UTimetable",
        image: "/images/projects/utimetable.jpg",
        url: "https://github.com/clarencechau/UTimetable",
        description:
          "Lets University of Toronto students compare timetables with their friends to find mutual free timeslots.",
        tags: ["Java"],
      },
      {
        name: "Meepo is You",
        image: "/images/projects/meepo-is-you.jpg",
        url: "https://github.com/clarencechau/Meepo-Is-You",
        description:
          "Get Meepo to the finish flag through obstacles and rooms by moving word blocks that change the rules of the game.",
        tags: ["Python"],
      },
      {
        name: "Picture Manipulation",
        image: "/images/projects/picture-manipulation.jpg",
        url: "https://github.com/clarencechau/picture-manipulation",
        description:
          "Image editing application for mirroring photos, changing saturation, and inspecting loss levels after transformations.",
        tags: ["Python"],
      },
    ],
  },

  // ── Athletics ────────────────────────────────────────────────────────────
  athletics: {
    nav: "Badminton",
    eyebrow: "on the court",
    title: "Badminton has always been a big part of my life",
    intro:
      "Having been a top national athlete since the age of 13, I've gained so much competitive experience, friends, and transferable skills from this sport.",
    outro:
      "These accomplishments were forged through countless hours in the gym, relentlessly pursuing self-improvement. That same mentality carries straight into how I approach code — investing the time to keep learning and keep evolving as a programmer.",
    image: "/images/pic1.jpg",
    imageAlt: "Clarence holding a national championship award with his doubles partner",
    stat: { value: "#1", label: "Former Men's Doubles ranking in Canada" },
    achievements: [
      { year: "2025", title: "Guarani Open", detail: "Men's & Mixed Doubles Champion" },
      { year: "2025", title: "Ranked #1 in Canada", detail: "Men's Doubles" },
      { year: "2024", title: "Quebec Senior Open", detail: "Men's Doubles National Champion" },
      { year: "2024", title: "Atlantic Senior Open", detail: "Men's Doubles National Champion" },
      { year: "", title: "Canadian Junior National Team", detail: "Former member" },
    ],
  },

  // ── YouTube ──────────────────────────────────────────────────────────────
  //  Live view/like counts appear automatically when VITE_YOUTUBE_API_KEY
  //  (or the old REACT_APP_YOUTUBE_API_KEY) is set in a .env file.
  videos: {
    nav: "Videos",
    eyebrow: "youtube",
    title: "Vlogging the journey",
    channelUrl: "https://www.youtube.com/@clarencechauu",
    items: [
      {
        title: "I won the BWF Guarani Open… Twice",
        url: "https://youtu.be/voReme271FM",
        thumbnail: "/images/videos/guarani-open.jpg",
        description:
          "Having never played an overseas tournament in my life, I traveled to play the Guarani Open in Paraguay.",
      },
      {
        title: "I Played Against World No. 72",
        url: "https://youtu.be/3_CKKj2MgFM",
        thumbnail: "/images/videos/world-no-72.jpg",
        description:
          "The Canadian International Challenge was hosted in my home city, and I got a chance to play against a world-class pair.",
      },
      {
        title: "Can We Win Nationals AGAIN??",
        url: "https://youtu.be/470llxjdbwA",
        thumbnail: "/images/videos/nationals-again.jpg",
        description:
          "After my first national title, I flew to Quebec City to try and win back-to-back men's doubles national gold.",
      },
      {
        title: "My First NATIONAL Badminton Title",
        url: "https://youtu.be/obTF6hIhac8",
        thumbnail: "/images/videos/first-national-title.jpg",
        description:
          "I traveled across Canada to Moncton, New Brunswick, vlogging the journey of obtaining my first Canadian national title.",
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    nav: "Contact",
    eyebrow: "contact",
    title: "Let's connect",
    blurb:
      "Feel free to shoot me a quick message — I'm always happy to meet new people and explore new opportunities. Thanks for visiting! 😊",
    /** Your Formspree form ID (https://formspree.io). Set to null to hide the form. */
    formspreeId: "xvojwwdb",
  },

  footer: {
    note: "Designed & built by Clarence Chau",
  },
};

export default config;

// ---------------------------------------------------------------------------
// Everything the site renders lives here. Edit this file to make it yours —
// no component changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ayush Kaushik",
  initials: "AK",
  tagline: "Full-stack · Frontend-focused",
  // Drop your own photo at /public/portrait.jpg, or set this to null to show
  // the initials monogram instead.
  portrait: "/portrait.png",
  location: "Delhi, India · Remote friendly",
  available: true,
  availabilityNote: "Open to opportunities",
  resumeUrl: "/Ayush-Kaushik-Resume.pdf",
};

export const nav = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { label: "GitHub", icon: "code", url: "https://github.com/ayush7863" },
  {
    label: "LinkedIn",
    icon: "work",
    url: "https://linkedin.com/in/ayush-kaushik-81418a250",
  },
];

export const hero = {
  status: "Open to new frontend & full-stack opportunities",
  statusDetail: "React.js / TypeScript · Node.js & WebSockets",
  headline: [
    { text: "Full-stack engineer with a " },
    { text: "frontend specialization", accent: "primary" },
    { text: " — building React interfaces and " },
    { text: "Node.js / WebSocket", accent: "secondary" },
    { text: " services." },
  ],
  summary:
    "3+ years building production React and TypeScript interfaces at Knorex, a global advertising platform, plus hands-on backend work with Node.js, Express, and Socket.io — including a real-time WebSocket chat application.",
  // The phrase inside `summary` to lift out of the muted body colour.
  summaryEmphasis: "Node.js, Express, and Socket.io",
  stats: [
    {
      label: "Experience",
      value: "3+ Years",
      note: "Frontend-focused @ Knorex",
      tone: "neutral",
    },
    {
      label: "Ad platforms integrated",
      value: "4",
      note: "Google, TikTok, LinkedIn, Meta",
      tone: "primary",
    },
    {
      label: "Core stack",
      value: "React 19",
      note: "TypeScript + Redux Toolkit",
      tone: "secondary",
    },
    {
      label: "Also ships backend",
      value: "Node.js",
      note: "Express + Socket.io",
      tone: "primary",
    },
  ],
};

export const projects = [
  {
    title: "Entity Management Workflow Engine",
    badge: { text: "Production · Live", tone: "primary" },
    meta: "React 19 · Formik · Yup",
    description:
      "Engineered end-to-end entity-management workflows — create, edit, and deactivate — for a large-scale advertising admin panel, using React 19 with Formik and Yup for robust, accessible form validation.",
    metrics: [
      { value: "React 19", label: "Runtime", tone: "primary" },
      { value: "Formik+Yup", label: "Validation", tone: "secondary" },
      { value: "Accessible", label: "UI standard", tone: "neutral" },
    ],
    stack: ["React 19", "Formik", "Yup", "Redux Toolkit"],
    link: {
      text: "Confidential — details on request",
      url: "#",
      tone: "primary",
    },
    status: "Status: production",
  },
  {
    title: "White-Label Theme Customization Engine",
    badge: { text: "Multi-tenant UI", tone: "primary" },
    meta: "Design system",
    description:
      "Built dynamic theme-customization features enabling white-label UI theming across the admin panel, letting each advertiser brand their own instance without code changes.",
    metrics: [
      { value: "Runtime", label: "Theming", tone: "primary" },
      { value: "MUI", label: "Component lib", tone: "secondary" },
      { value: "Multi-tenant", label: "Scope", tone: "neutral" },
    ],
    stack: ["React", "MUI", "Zustand", "CSS-in-JS"],
    link: {
      text: "Confidential — details on request",
      url: "#",
      tone: "primary",
    },
    status: "Status: production",
  },
  {
    title: "Ebuzz — Online Marketplace Platform",
    badge: { text: "Personal project", tone: "secondary" },
    meta: "MERN",
    description:
      "Built an online marketplace platform enabling individuals and businesses to buy and sell goods and services, with authentication, cart, and checkout flows end to end.",
    metrics: [
      { value: "Auth", label: "Sign-in/up", tone: "primary" },
      { value: "Cart", label: "Checkout flow", tone: "secondary" },
      { value: "Responsive", label: "UI", tone: "neutral" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: {
      text: "View on GitHub",
      url: "https://github.com/ayush7863/E-Buzz",
      tone: "secondary",
    },
    status: "Status: personal project",
  },
  {
    title: "Real-Time Chat Application",
    badge: { text: "Live demo", tone: "primary" },
    meta: "Socket.io · WebSockets",
    description:
      "Built a real-time chat application with a Node.js and Express server, using Socket.io over WebSockets to broadcast messages instantly between connected clients.",
    metrics: [
      { value: "Socket.io", label: "Transport", tone: "primary" },
      { value: "Express", label: "Server", tone: "secondary" },
      { value: "Real-time", label: "Messaging", tone: "neutral" },
    ],
    stack: ["Node.js", "Express", "Socket.io", "WebSockets"],
    link: {
      text: "Try the live demo",
      url: "https://chatapp2-jtzr.onrender.com/",
      tone: "primary",
    },
    status: "Status: personal project",
  },
];

export const experience = [
  {
    period: "Mar 2024 — Present",
    current: true,
    role: "Software Engineer",
    company: "Knorex India Pvt. Ltd. · XPO & XMC Admin Panel · Pune, India",
    keyMetric: {
      label: "Focus",
      value: "React 19 · Redux · Zustand",
      tone: "primary",
    },
    highlights: [
      "Developed and optimized key frontend modules in **React.js and Redux** for a large-scale advertising platform serving global clients.",
      "Built reusable, accessible UI components with **MUI (Material UI v7)**, improving development velocity and application performance under tight deadlines.",
      "Engineered end-to-end entity-management workflows — create, edit, deactivate — using **React 19, Formik, and Yup** for robust form validation.",
      "Integrated third-party ad platform APIs (**Google, TikTok, LinkedIn, Meta**) provided by the platform team into the UI layer, handling real-time channel data display and state on the frontend.",
      "Diagnosed and resolved complex state-management issues in **Zustand** stores, including race conditions and infinite API-call loops, improving stability and performance.",
      "Built dynamic theme-customization features enabling **white-label UI theming** across the admin panel.",
      "Adopted AI-assisted development workflows using **Claude Code** — built custom agents and internal documentation to speed up feature delivery and bug fixes.",
    ],
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: "desktop_windows",
    tone: "primary",
    blurb: "Scalable, accessible interfaces for a global AdTech platform.",
    items: [
      "React.js",
      "React 19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Zustand",
    ],
  },
  {
    title: "UI & Forms",
    icon: "view_quilt",
    tone: "secondary",
    blurb: "Component systems, theming, and validated forms.",
    items: [
      "MUI (Material UI v7)",
      "Chakra UI",
      "Bootstrap",
      "Formik",
      "Yup",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Data",
    icon: "dns",
    tone: "primary",
    blurb: "APIs and data-fetching behind the interface.",
    items: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebSockets",
      "RESTful APIs",
      "MongoDB",
      "TanStack Query",
      "Java (Core)",
    ],
  },
  {
    title: "Tools & Practices",
    icon: "terminal",
    tone: "secondary",
    blurb: "Workflow, collaboration, and AI-assisted delivery.",
    items: [
      "Git / GitHub / Bitbucket",
      "Jira · Postman",
      "DSA",
      "Agile/Scrum",
      "Claude Code",
      "Prompt Engineering",
    ],
  },
];

export const education = [
  {
    degree: "Full-Stack Web Development",
    school: "Masai School, Bengaluru",
    detail: "Full-Time Immersive Program · Jun 2022 — Apr 2023",
    focus:
      "MERN stack fundamentals, data structures & algorithms, and production-grade web development practices.",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Kalinga University, Naya Raipur",
    detail: "Aug 2019 — Apr 2022",
    focus: null,
  },
];

export const certifications = [
  {
    name: "Claude Code in Action",
    detail: "Anthropic",
    icon: "smart_toy",
    tone: "primary",
  },
  {
    name: "Claude Code 101",
    detail: "Anthropic",
    icon: "smart_toy",
    tone: "secondary",
  },
  {
    name: "Prompt Engineer Certification",
    detail: "Prompt engineering fundamentals",
    icon: "psychology",
    tone: "primary",
  },
  {
    name: "HackerRank Certification",
    detail: "Problem solving & DSA",
    icon: "emoji_events",
    tone: "secondary",
  },
];

export const contact = {
  intro:
    "Always happy to talk shop about React, TypeScript, or AI-assisted development — reach out if you want to collaborate, or just say hi.",
  channels: [
    {
      icon: "location_on",
      tone: "primary",
      title: "Delhi, India",
      detail: "Open to remote & hybrid roles",
    },
    {
      icon: "mail",
      tone: "secondary",
      title: "Direct email",
      copyable: "ayush.kaushik.dev25@gmail.com",
    },
    {
      icon: "code",
      tone: "primary",
      title: "GitHub",
      link: {
        text: "github.com/ayush7863",
        url: "https://github.com/ayush7863",
      },
    },
  ],
  roleOptions: [
    "Frontend engineer (React / TypeScript)",
    "Full-stack engineer (MERN)",
    "AI-assisted development consulting",
    "General technical chat",
  ],
  // Point this at Formspree, Getform, your own /api/contact, etc.
  // Left null, the form runs in demo mode and just shows a confirmation.
  endpoint: null,
};

export const footer = {
  note: "Built with React, Tailwind, and a bit of Claude Code.",
  telemetry: [
    { label: "role", value: "Frontend Eng" },
    { label: "stack", value: "React + TS" },
  ],
  links: [
    { label: "GitHub", url: "https://github.com/ayush7863" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/ayush-kaushik-81418a250",
    },
  ],
};

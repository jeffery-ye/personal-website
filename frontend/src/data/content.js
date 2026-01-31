import { Code2, FlaskConical, Folder, Pill, CreditCard, Calendar1, Cookie } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "AI Protein Purification Agent",
    description: "An agentic workflow to create and optimize protein purification protocols, reducing manual experimental design time by over 95%.",
    tags: ["AI Agents", "Full-Stack", "Python", "Work"],
    link: "https://github.com/yourusername/repo",
    icon: FlaskConical
  },
  {
    id: 2,
    title: "AI Drug Target Selection",
    description: "An agentic workflow to automatically find, analyze, and suggest promising drug targets for infectious organisms.",
    tags: ["AI Agents", "Full-Stack", "Python", "Work"],
    link: "#",
    icon: Pill
  },
  {
    id: 3,
    title: "Musicalendar",
    description: "A full-stack many-to-one scheduling app, with automated optimized scheduling powered by a custom max-flow algorithm",
    tags: ["Web Dev", "Full-Stack", "PostgreSQL", "ReactJS", "Group Project"],
    link: "https://github.com/nicholasz2510/lesson-scheduler",
    icon: Calendar1
  },
  {
    id: 4,
    title: "AI Expense Categorizer",
    description: "Agentic credit card transaction classification, using IRS docs to categorize receipts for tax reasons",
    tags: ["AI Agents", "Python", "Personal"],
    link: "#",
    icon: CreditCard
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal website built with React, Vite, and Tailwind CSS. Features a custom space theme!",
    tags: ["Web Dev", "ReactJS", "Personal"],
    link: "https://github.com/jeffery-ye/personal-website",
    icon: Folder
  },
  {
    id: 6,
    title: "Crumbdrop",
    description: "An anti-food waste website built with ExpressJS, allowing users to post food that they are giving away.",
    tags: ["Web Dev", "ExpressJS", "Group Project"],
    link: "https://github.com/jasmina-dev/crumbdrop",
    icon: Cookie
  }
];

export const content = {
  // HOME PAGE CONTENT
  hero: {
    title: "Hi, I'm Jeffery",
    subtitle: "Software and AI Engineer",
    tagline: "tagline",
    cta: "View Projects",
    coords: { r: 0, theta: 0 },
  },

  // ABOUT PAGE CONTENT
  about: {
    intro: "I'm a graduating senior at the University of Washington, specializing in Software and AI. Currently, I work as a Software Research Assistant at Seattle Children's, where I build autonomous AI agents to accelerate research workflows. I'm also a teaching assistant at the Information School, where I introduce students to concepts like Machine Learning, Large Language Models, and AI Ethics.",

    bio: [
      "Hi, I'm Jeffery, a senior Informatics student at the University of Washington. I'm a software research assistant at Seattle Children's Research Institute, where I get to combine my passions for AI/NLP with fascinating (and terrifying) infectious diseases. I've created complex agentic workflows, worked on full-stack web applications, and written a research paper there. I'm also a teaching assistant for the Information School, where I help instruct students on the foundations of Informatics. We discuss concepts at the intersection between technology and society, and I've enjoyed teaching classes on topics like LLMs, algorithmic bias, cybersecurity, data science, etc.",
      "Outside of work, I can often be found rock climbing (cliché, I know). I mostly focus on indoor bouldering, but have been known to climb outdoors. I'm also a big fan of sci-fi, no matter if its through books, movies, TV shows, or video games. I've always been fascinated by space, astronomy, speculative exobiology, and more—hence the star theming of this website.",
      "Interested in working with me, chatting about my hobbies, or anything in between? Feel free to reach out through my LinkedIn or Email!"
    ],
    coords: { r: 400, theta: 2.5 },
  },

  projects: {
    coords: { r: 400, theta: 1 },
    data: projectsData.map((project, index) => ({
      ...project,
      coords: {
        r: 150,
        theta: (index / projectsData.length) * 2 * Math.PI
      }
    }))
  },

  resume: {
    title: "Resume",
    coords: { r: 400, theta: Math.PI }, // 180° in radians
  }
};
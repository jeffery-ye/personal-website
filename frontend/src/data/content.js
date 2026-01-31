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
  // CONFIGURATION
  // Define systems for navigation
  systems: {
    home: {
      id: 'home',
      connections: [
        ['hero', 'about'],
        ['about', 'resume'],
        ['hero', 'projects-portal'],
      ],
      nodes: [
        { id: 'hero', type: 'node' },
        { id: 'about', type: 'node' },
        { id: 'resume', type: 'node' },
        { id: 'projects-portal', type: 'portal', target: 'projects' },
      ]
    },
    projects: {
      id: 'projects',
      connections: [
        ['project-1', 'project-2'],
        ['project-2', 'project-3'],
        ['project-3', 'project-4'],
        ['project-4', 'project-5'],
        ['project-5', 'project-6'],
        ['project-1', 'project-4'],
      ],
      nodes: projectsData.map(p => ({ id: `project-${p.id}`, type: 'project', data: p }))
    }
  },

  // HOME PAGE CONTENT
  hero: {
    id: 'hero',
    title: "Hi, I'm Jeffery",
    subtitle: "Software and AI Engineer",
    tagline: "tagline",
    cta: "View Projects",
    x: 0,
    y: 0,
  },

  // ABOUT PAGE CONTENT
  about: {
    id: 'about',
    intro: "I'm a graduating senior at the University of Washington, specializing in Software and AI. Currently, I work as a Software Research Assistant at Seattle Children's, where I build autonomous AI agents to accelerate research workflows. I'm also a teaching assistant at the Information School, where I introduce students to concepts like Machine Learning, Large Language Models, and AI Ethics.",

    bio: [
      "Hi, I'm Jeffery, a senior Informatics student at the University of Washington. I'm a software research assistant at Seattle Children's Research Institute, where I get to combine my passions for AI/NLP with fascinating (and terrifying) infectious diseases. I've created complex agentic workflows, worked on full-stack web applications, and written a research paper there. I'm also a teaching assistant for the Information School, where I help instruct students on the foundations of Informatics. We discuss concepts at the intersection between technology and society, and I've enjoyed teaching classes on topics like LLMs, algorithmic bias, cybersecurity, data science, etc.",
      "Outside of work, I can often be found rock climbing (cliché, I know). I mostly focus on indoor bouldering, but have been known to climb outdoors. I'm also a big fan of sci-fi, no matter if its through books, movies, TV shows, or video games. I've always been fascinated by space, astronomy, speculative exobiology, and more—hence the star theming of this website.",
      "Interested in working with me, chatting about my hobbies, or anything in between? Feel free to reach out through my LinkedIn or Email!"
    ],
    x: -250,
    y: -150,
  },

  // PROJECTS PORTAL (Replaces the cluster)
  'projects-portal': {
    id: 'projects-portal',
    label: "Projects Cluster",
    x: 300,
    y: 100,
  },

  // INDIVIDUAL PROJECTS (For reference by ID)
  ...projectsData.reduce((acc, project, index) => {
    // New coordinate system for deep space view
    const offsets = [
      { x: 0, y: -200 },     // 1 (Top)
      { x: 200, y: -100 },   // 2 (Top Right)
      { x: 200, y: 100 },    // 3 (Bottom Right)
      { x: 0, y: 200 },      // 4 (Bottom)
      { x: -200, y: 100 },   // 5 (Bottom Left)
      { x: -200, y: -100 }   // 6 (Top Left)
    ];
    const offset = offsets[index] || { x: 0, y: 0 };

    acc[`project-${project.id}`] = {
      ...project,
      x: offset.x,
      y: offset.y
    };
    return acc;
  }, {}),

  resume: {
    id: 'resume',
    title: "Resume",
    x: -150,
    y: 250,
  }
};
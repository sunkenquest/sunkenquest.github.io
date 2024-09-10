import {
  frontend,
  backend,
  cicd,
  mobileDev,
  api,
  container,
  securityTest,
  javascript,
  typescript,
  flutter,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  golang,
  mysql,
  laravel,
  docker,
  postgresql,
  bootstrap,
  proj1,
  microblog,
  zap,
  pos,
  thesis,
  unitTest,
  hipe,
  bu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Unit Testing",
    icon: unitTest,
  },
  {
    title: "CI / CD",
    icon: cicd,
  },
  {
    title: "Mobile Development",
    icon: mobileDev,
  },
  {
    title: "API Developer",
    icon: api,
  },
  {
    title: "Containerization",
    icon: container,
  },
  {
    title: "Security Testing",
    icon: securityTest,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
];

const experiences = [
    {
    title: "Software Engineer",
    company_name: "HiPE Japan Inc.",
    icon: hipe,
    iconBg: "#333333",
    date: "Mar 2024 - Present",
  },
    {
    title: "Associate Software Engineer",
    company_name: "HiPE Japan Inc.",
    icon: hipe,
    iconBg: "#333333",
    date: "Sep 2023 - Mar 2024",
  },
  {
    title: "Administrative Assistant (Intern)",
    company_name: "Bicol University Graduate School",
    icon: bu,
    iconBg: "#333333",
    date: "June 2022 - Aug 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "QuizCraft",
    description:
      "An application that generates quizzes from text provided by the user.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
    ],
    image: proj1,
    repo: "https://github.com/CEMcode404/QuizCraft",
  },
  {
    id: "project-2",
    name: "MicroBlog",
    description:
      "A platform for sharing short, concise updates, thoughts, or media, allowing users to quickly post and interact with content.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: microblog,
    repo: "https://github.com/bpocrafael/microblog-project",
  },
  {
    id: "project-3",
    name: "ZAP Baseline Scan",
    description:
      "An automated security testing tool that quickly checks a web application's security posture by scanning for common vulnerabilities without altering the site.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zap,
    repo: "https://github.com/sunkenquest/pen-test",
  },
  {
    id: "project-4",
    name: "POS",
    description: `A POS system for ordering desserts and food streamlines the ordering process, allowing customers to browse menu items, customize orders, and process payments efficiently in a restaurant or bakery setting.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    repo: "https://github.com/mikco-hipe/pos-react",
  },
  {
    id: "project-5",
    name: "Face Verification",
    description:
      "Face Detection using Viola-Jones and Face Recognition /Verification using Eigenface",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: thesis,
    repo: "https://github.com/sunkenquest/face-detection",
  },
];

export { services, technologies, experiences, projects };

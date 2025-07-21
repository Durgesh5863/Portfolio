import type { LucideIcon } from "lucide-react";
import { Code, Bot, Wrench, Palette, Briefcase, FileText } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
  problem: string;
  solution: string;
  image: string;
  tags: string[];
  live_url: string;
  repo_url: string;
  aiHint: string;
};

export type SkillCategory = {
    category: string;
    icon: LucideIcon;
    list: string[];
}

export type Experience = {
    id: number;
    title:string;
    company: string;
    date: string;
    description: string;
}

export type Testimonial = {
    id: number;
    quote: string;
    name: string;
    title: string;
    image: string;
    aiHint: string;
}

export type Certification = {
  id: number;
  name: string;
  issuing_organization: string;
  date: string;
  image: string;
  credential_url?: string;
};

export type Publication = {
  id: number;
  title: string;
  journal: string;
  date: string;
  authors: string[];
  link: string;
  image: string;
  aiHint: string;
};

export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Paper Award",
    issuer: "ICRTCET",
    date: "July 2024",
    description: "Received the Best Paper Award at International Conference on Recent Trends in Computing and Engineering Technologies (ICRTCET) at Rajarajeswari College of Engineering"
  },
  // {
  //   id: 2,
  //   title: "Employee of the Quarter",
  //   issuer: "Innovate Inc.",
  //   date: "Q2 2023",
  //   description: "Recognized for outstanding performance and contributions to the company's flagship AI product."
  // },
  // {
  //   id: 3,
  //   title: "University Research Grant",
  //   issuer: "Tech University",
  //   date: "Sep 2022",
  //   description: "Awarded a grant to fund research into efficient natural language processing models."
  // },
];


export const publications: Publication[] = [
  {
    id: 1,
    title: "Smart Home Automation using Arduino and Personal Assistant",
    journal: "International Journel of Multidisciplinary Research in Science, Engineering and Technology (IJMRSET)",
    date: "August 2024",
    authors: ["Dr. Rajesh K S", "Soniya R", "Durgesh Babu P", "Gagan KM", "Ajeesh Reegan A"],
    link: "https://drive.google.com/file/d/1O8kQWOPLoxm2foOaDtpMle91QTpHVmAS/view?usp=sharing",
    image: "https://placehold.co/600x400.png",
    aiHint: "Article"
  },
  // {
  //   id: 2,
  //   title: "Generative Adversarial Networks for Image Synthesis",
  //   journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
  //   date: "Jun 2022",
  //   authors: ["Durgesh Babu P", "Emily White"],
  //   link: "#",
  //   image: "https://placehold.co/600x400.png",
  //   aiHint: "neural network"
  // },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    short_description: "A full-featured e-commerce website built with the MERN stack.",
    long_description: "This project is a complete e-commerce solution with features like product catalog, shopping cart, user authentication, and a payment gateway. The backend is built with Node.js and Express, and it uses MongoDB for data storage. The frontend is a responsive React application, styled with Tailwind CSS.",
    problem: "Small businesses often struggle with the complexity and cost of setting up a robust online store to reach a wider customer base.",
    solution: "We developed a scalable and user-friendly e-commerce platform that allows businesses to easily manage products, process orders, and handle payments, all with minimal technical expertise.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    live_url: "#",
    repo_url: "#",
    aiHint: "online store"
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    short_description: "A web app that uses AI to help users write better content.",
    long_description: "This application integrates with a large language model to provide users with writing suggestions, grammar corrections, and content generation. It's built with Next.js and uses serverless functions for the AI integration. The user interface is designed to be clean and intuitive, promoting a distraction-free writing experience.",
    problem: "Content creators and professionals often face writer's block and spend excessive time editing their work for clarity and style.",
    solution: "An AI-powered web application that provides real-time writing assistance, including grammar correction, style suggestions, and content generation to improve writing quality and speed.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "AI", "TypeScript", "Vercel"],
    live_url: "#",
    repo_url: "#",
    aiHint: "robot writing"
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    short_description: "A dashboard for visualizing complex datasets with interactive charts.",
    long_description: "This project showcases data visualization techniques using D3.js and React. It fetches data from a REST API and presents it through a series of interactive charts and graphs. The dashboard is fully responsive and allows users to filter and explore the data in real-time.",
    problem: "Raw data is often difficult to interpret, making it challenging for businesses to derive actionable insights from their metrics.",
    solution: "An interactive dashboard that transforms complex datasets into intuitive charts and graphs, enabling users to explore data, identify trends, and make informed decisions quickly.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "D3.js", "Data Viz", "API"],
    live_url: "#",
    repo_url: "#",
    aiHint: "charts graphs"
  },
  {
    id: 4,
    title: "PortfolioPro Website",
    short_description: "This very portfolio website, built to be fast and beautiful.",
    long_description: "This portfolio is a server-side rendered application built with Next.js and TypeScript, designed to be performant and accessible. It features a minimalist dark theme with teal accents, and project descriptions can be improved using a GenAI flow. The layout is clean, grid-based, and fully responsive.",
    problem: "Developers need a professional and modern way to showcase their skills and projects to potential employers or clients.",
    solution: "A fast, visually appealing, and AI-enhanced personal portfolio website built with Next.js that provides an excellent user experience and effectively highlights technical capabilities.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "React", "Tailwind CSS", "GenAI"],
    live_url: "#",
    repo_url: "#",
    aiHint: "personal website"
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Palette,
    list: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: Code,
    list: ["Python", "FastAPI", "Server Actions"],
  },
  {
    category: "Databases",
    icon: Wrench,
    list: ["MongoDB", "PostgreSQL", "QDrant", "SQL", "Pinecone"],
  },
  {
    category: "AI & ML",
    icon: Bot,
    list: ["LLMs", "Prompt Engineering", "RAG"],
  },
];

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Artificial Intelligence Intern",
        company: "EpicMinds IT Pvt Ltd",
        date: "May 2025 - Present",
        description: "Developed an HRAI portal to automate resume and requisition parsing, extracting key fields into SQL and Qdrant databases for efficient candidate matching, and automated expense extraction from bills (e.g., fuel, lodging), using AI to validate daily expenses against database records."
    },
    {
        id: 2,
        title: "Artificial Intelligence Intern",
        company: "Infosys SpringBoard ",
        date: "December 2024 - February 2025",
        description: "Automated candidate screening, reducing manual effort by 60%, developed a real-time interview analysis system using NLP-based sentiment analysis to improve cultural fit assessments, and designed and deployed an AI-powered hiring analytics dashboard to reduce bias and enhance recruiter efficiency."
    },
    {
        id: 3,
        title: "AI Data Quality Analyst Intern",
        company: "Rooman Technologies",
        date: "September 2024 - March 2025",
        description: "Built an AI-driven anomaly detection system using Isolation Forest and unsupervised ML techniques, reducing false positives by 30% and developed an API for seamless integration into financial monitoring systems."
    }, 
];

export const testimonials: Testimonial[] = [
      {
        id: 1,
        quote: "Durgesh has a remarkable ability to understand complex requirements and translate them into functional, user-friendly features. His attention to detail and commitment to quality are truly impressive.",
        name: "Manish Bhat",
        title: "Team Lead, EpicMinds IT Pvt Ltd",
        image: "https://placehold.co/100x100.png",
        aiHint: "man portrait professional"
    },
    // {
    //     id: 2,
    //     quote: "Durgesh's expertise in full-stack development was instrumental in launching our new platform. His problem-solving skills and dedication are second to none. I would highly recommend him for any challenging project.",
    //     name: "Jane Smith",
    //     title: "CEO of Innovate Inc.",
    //     image: "https://placehold.co/100x100.png",
    //     aiHint: "woman portrait"
    // },
    // {
    //     id: 3,
    //     quote: "Working with Durgesh was a fantastic experience. He is a proactive communicator and a talented developer who consistently delivered high-quality code. He was a great asset to our team.",
    //     name: "Mike Johnson",
    //     title: "Project Manager, Tech Solutions LLC",
    //     image: "https://placehold.co/100x100.png",
    //     aiHint: "man portrait"
    // },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Advanced LLM Agents MOOC",
    issuing_organization: "University of Berkeley",
    date: "Spring 2025",
    image: "https://placehold.co/600x400.png",
    credential_url: "https://drive.google.com/file/d/1iMxQkX3SH-kYMRIidXdCAs6x6EcaZP7B/view?usp=sharing",
  },
  {
    id: 2,
    name: "Hands on Approach to AI for real-world applications",
    issuing_organization: "IIT Kharagpur and TCS iON",
    date: "December 2023",
    image: "https://placehold.co/600x400.png",
    credential_url: "https://drive.google.com/file/d/11R5tfHzU0PYXIZnkAxf2ilQhjl4WHPvV/view?usp=sharing",
  },
  {
    id: 3,
    name: "Data Analytics and Visualization Job Simulation",
    issuing_organization: "Accenture and Forage",
    date: "March 2025",
    image: "https://placehold.co/600x400.png",
    credential_url: "https://drive.google.com/file/d/13NT13EelHDDabmQziQ9IHqu9wi-gvkMG/view?usp=sharing",
  },
];

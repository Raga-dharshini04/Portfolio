import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMysql,
} from "react-icons/si";
import { FaKey } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import resume from "../assets/Ragadharshini_S_FSD.pdf";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/Raga-dharshini04",
  linkedin: "https://linkedin.com/in/ragadharshini040706",
  email: "sragadharshini10@gmail.com",
  
};

export const skills = {
  frontend: [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
],

  backend: [
    { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#444" },
  { name: "REST API", icon: SiExpress, color: "#0EA5E9" },
  { name: "JWT", icon: FaKey, color: "#F59E0B" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
],

  database: [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
],

  tools: [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
],
};

export const projects = [
  {
    title: "MURA – South India Tourism Platform",
    description:
      "Full-stack tourism platform with booking system, JWT authentication, admin dashboard and email notifications.",
    github: "https://github.com/Raga-dharshini04/mura-travels"
  },
  {
    title: "E-Learning Platform",
    description:
      "E-learning system with role-based access for students and instructors with complete course management.",
    github: "https://github.com/Raga-dharshini04/elearning-mern-platform",
  },
  {
    title: "Collaborative Learning Platform",
    description:
      "Interactive learning platform built using React with reusable components and dynamic content management.",
    demo: "#",
  },
  {
    title: "Vintage Café Website",
    description:
      "A responsive static website with elegant UI/UX and smooth user experience.",
    github: "https://github.com/Raga-dharshini04/Vintage-Cafe",
    demo: "#",
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "LiveWire, Trichy",
    year: "2024",
    points: [
      "Developed responsive React components.",
      "Collaborated with developers to build production-ready interfaces.",
      "Improved code maintainability with reusable components.",
      "Worked with Git and GitHub for version control.",
    ],
  },
];

export const certifications = [
  "Frontend development internship - Live Wire",
  "Forage Virtual Experience Programs",
  "Python – Data Manipulation & Visualization",
  "Paper Presentation – AI Creating AI",
];

export const contactInfo = {
  email: "sragadharshini10@gmail.com",
  location: "Trichy, Tamil Nadu, India",
  github: "Raga-dharshini04",
  linkedin: "ragadharshini040706",
};

export const resumeLink = resume;
import { Github, Linkedin } from "lucide-react";
import { ProjectMetadata, TechDetails } from "@/lib/types";
import MicroserviceApplicationImage from "../../public/images/Project/microservice-application.png";
import CMDApplicationImage from "../../public/images/Project/cmd-aaplication.png";
import PortfolioImage from "../../public/images/Project/portfolio.png";
import WebApplicationImage from "../../public/images/Project/web-application.png";
import MobileAndWebApplicationImage from "../../public/images/Project/mobile-and-web-application.png";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/prince-63",
  GITHUB_REPO: "https://github.com/prince-63/bio",
  Linkedin: "https://linkedin.com/in/prince63",
};

export const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#project",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/prince-63",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/prince63",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Data Structures",
    progress: 95,
  },
  {
    label: "Algorithms",
    progress: 95,
  },
  {
    label: "C++",
    progress: 90,
  },
  {
    label: "Java",
    progress: 90,
  },
  {
    label: "Spring Boot",
    progress: 85,
  },
  {
    label: "JavaScript",
    progress: 80,
  },
  {
    label: "React.js",
    progress: 95,
  },
  {
    label: "Next.js",
    progress: 85,
  },
  {
    label: "Node.js",
    progress: 85,
  },
  {
    label: "Express",
    progress: 80,
  },
  {
    label: "MongoDB",
    progress: 70,
  },
  {
    label: "SQL",
    progress: 70,
  },
  {
    label: "MySQL",
    progress: 70,
  },
  {
    label: "Git",
    progress: 95,
  },
  {
    label: "GitHub",
    progress: 85,
  },
  {
    label: "Postman",
    progress: 70,
  },
  {
    label: "Dart",
    progress: 95,
  },
  {
    label: "Flutter",
    progress: 80,
  },
  {
    label: "Tailwind CSS",
    progress: 95,
  },
  {
    label: "TypeScript",
    progress: 85,
  },
  {
    label: "Vite",
    progress: 60,
  },
  {
    label: "Rest API",
    progress: 100,
  },
  {
    label: "Microservices",
    progress: 80,
  },
  {
    label: "Responsive Design",
    progress: 100,
  },
];

export const PROJECTS: ProjectMetadata[] = [
  {
    imageSrc: MobileAndWebApplicationImage,
    title: "Geotrackr",
    description:
      "Geotrackr is a geolocation-based attendance app designed for efficient employee tracking. It records check-in and check-out times with GPS and uses blockchain for secure data storage. Built with Node.js and Azure MySQL, it offers features like offline tracking and manual check-ins to enhance attendance management in various environments.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "Flutter",
      "Dart",
      "MongoDB",
      "GPS",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "Git",
      "GitHub",
    ],
    year: "June, 2024 - Octuber, 2024",
    url: "https://github.com/prince-63/geotrackr",
  },
  {
    imageSrc: CMDApplicationImage, // Replace with the actual image source
    title: "Hospital Management System",
    description:
      "This Hospital Management System is a console-based application developed in C. It efficiently manages hospital operations, including patient records, appointments, and administrative tasks. Key features include adding and displaying patients, doctors, appointments, and managing billing and inventory to streamline healthcare services effectively.",
    tags: [
      "C",
      "Data Management",
      "Console Application",
      "Patient Management",
      "Inventory Management",
      "Administrative Tasks",
    ],
    year: "April, 2024 - April, 2024",
    url: "https://github.com/prince-63/hospital-management-system", // Replace with the actual URL
  },
  {
    imageSrc: MicroserviceApplicationImage,
    title: "Bank Application",
    description:
      "The Bank Application is a microservices-based solution for managing various banking services. It includes modules for cards, loans, and accounts, allowing for independent deployment. Each service is built with Spring Boot and Hibernate, providing RESTful API endpoints for integration and ensuring scalability in service delivery.",
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Rest API",
      "Postman",
      "Git",
      "GitHub",
      "Microservices",
    ],
    year: "Feb, 2024 - April, 2024",
    url: "https://github.com/prince-63/bank-application",
  },
  {
    imageSrc: WebApplicationImage,
    title: "School Application",
    description:
      "School Application is a Spring MVC app for managing school student data. It provides a user interface and RESTful API endpoints to handle student information, course details, classes, and enrollment processes. This application aims to simplify school management through its intuitive design and robust functionality.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Mvc",
      "Thymeleaf",
      "Hibernate",
      "MySQL",
      "Rest API",
      "HTML",
      "CSS",
      "Bootstrap",
      "Postman",
      "Git",
      "GitHub",
    ],
    year: "January, 2024 - Feb, 2024",
    url: "https://github.com/prince-63/school-application",
  },
  {
    imageSrc: PortfolioImage,
    title: "Portfolio",
    description:
      "The Portfolio project showcases my skills and projects as a developer. It is designed with a responsive layout using Next.js and Tailwind CSS, highlighting my expertise in web development. The site features a clean design, project details, and contact information to provide visitors with a comprehensive overview of my work.",
    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Framer Motion",
      "GitHub",
      "Vercel",
      "Responsive Design",
    ],
    year: "December, 2023 - Present",
    url: "https://princekumar.xyz",
  },
  {
    imageSrc: WebApplicationImage,
    title: "Blog Application",
    description:
      "This Blog Application is designed as a platform for users to share thoughts and experiences. Key features include user registration, authentication, post management, and commenting capabilities. Built with a responsive design, it leverages modern web technologies for a seamless blogging experience that encourages user engagement and interaction.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    year: "December, 2023 - January, 2024",
    url: "https://github.com/prince-63/blog-application",
  },
];

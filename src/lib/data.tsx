import { Github, Linkedin } from "lucide-react";
import { ProjectMetadata, TechDetails } from "@/lib/types";
import RestAPI from "../../public/images/Project/Rest API.png";
import SpringMVC from "../../public/images/Project/Spring MVC.png";
import Microservices from "../../public/images/Project/Microservices.png";

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
    label: "Data Structure",
    progress: 90,
  },
  {
    label: "Algorithm",
    progress: 80,
  },
  {
    label: "C++",
    progress: 70,
  },
  {
    label: "Java",
    progress: 80,
  },
  {
    label: "Backend Development",
    progress: 70,
  },
  {
    label: "Microservices",
    progress: 60,
  },
  {
    label: "Spring Framework",
    progress: 70,
  },
  {
    label: "Docker",
    progress: 60,
  },
  {
    label: "SQL",
    progress: 70,
  },
  {
    label: "MySQL",
    progress: 80,
  },
  {
    label: "MongoDB",
    progress: 70,
  },
  {
    label: "MySQL",
    progress: 60,
  },
  {
    label: "React.js",
    progress: 80,
  },
  {
    label: "JavaScript",
    progress: 90,
  },
  {
    label: "Version Control",
    progress: 90,
  },
];

export const PROJECTS: ProjectMetadata[] = [
  {
    imageSrc: SpringMVC,
    title: "School Application",
    description:
      "School Application is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school student data like student information, courses details, classes and enrollment details.",
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
    imageSrc: Microservices,
    title: "Bank Application",
    description:
      "The Bank Application is a robust banking solution built on a microservices architecture. It provides a suite of services including Cards, Loans, and Account management. Each service is a separate, independently deployable module, allowing for high scalability and fault isolation. The application leverages Spring Boot for creating the microservices and Hibernate for data access. It also provides RESTful API endpoints for integration with other systems or for building additional user interfaces. The entire application is containerized for easy deployment and version control is done using Git and GitHub.",
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
    year: "March, 2024 - Present",
    url: "https://github.com/prince-63/bank-application",
  },
];

import { Github, Linkedin } from "lucide-react";
import { ProjectMetadata, TechDetails } from "@/lib/types";
import RestAPI from "../../public/images/Project/Rest API.png";
import SpringMVC from "../../public/images/Project/Spring MVC.png";
import Microservices from "../../public/images/Project/Microservices.png";

export const EXTERNAL_LINKS = {
    GITHUB: "https://github.com/prince-63",
    GITHUB_REPO: "https://github.com/prince-63/princekumar",
    Linkedin: "https://linkedin.com/princekumar62",
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
    }
];

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: "https://github.com/prince-63",
    },
    {
        icon: Linkedin,
        url: "https://linkedin.com/in/princekumar62",
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: "Data Structure"
    },
    {
        label: "Algorithm"
    },
    {
        label: "Back-End Development",
    },
    {
        label: "Front-End Development",
    },
    {
        label: "GitHub",
    },
    {
        label: "Git",
    },
    {
        label: "Python (Programming Language)",
    },
    {
        label: "Java",
    },
    {
        label: "C (Programming Language)",
    },
    {
        label: "User Experience (UX)",
    },
    {
        label: "User Interface Design",
    },
    {
        label: "Digital Marketing",
    }
];

export const PROJECTS: ProjectMetadata[] = [
    {
        imageSrc: SpringMVC,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school student data like student information, courses details, classes and enrollment details.",
        tags: ["Java", "Spring Boot", "Spring Mvc", "Thymeleaf", "Hibernate", "MySQL", "Rest API", "HTML", "CSS", "Bootstrap", "Postman", "Git", "GitHub"],
        year: "2024",
        url: "https://github.com/prince-63/your-school",
    }
];

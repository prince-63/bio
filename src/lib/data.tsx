import { Github, Linkedin } from "lucide-react";
import { ProjectMetadata, TechDetails } from "@/lib/types";
import NotFound from "../../public/images/Project/Not Found.png";

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
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Skills",
        href: "#skills",
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
        label: "Java",
    },
    {
        label: "Spring Boot",
    },
    {
        label: "Git",
    },
    {
        label: "GitHub",
    },
    {
        label: "Data Structure"
    },
    {
        label: "Algorithm"
    }
];

export const PROJECTS: ProjectMetadata[] = [
    {
        imageSrc: NotFound,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school contacts.",
        tags: ["Java", "Spring Boot", "Spring Mvc"],
        year: "2021",
        url: "https://github.com/prince-63",
    },
    {
        imageSrc: NotFound,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school contacts.",
        tags: ["Java", "Spring Boot", "Spring Mvc"],
        year: "2021",
        url: "https://github.com/prince-63",
    },
    {
        imageSrc: NotFound,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school contacts.",
        tags: ["Java", "Spring Boot", "Spring Mvc"],
        year: "2021",
        url: "https://github.com/prince-63",
    },
    {
        imageSrc: NotFound,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school contacts.",
        tags: ["Java", "Spring Boot", "Spring Mvc"],
        year: "2021",
        url: "https://github.com/prince-63",
    },
    {
        imageSrc: NotFound,
        title: "Your School Management System",
        description: "Your School Management is a simple child school management Spring MVC application. that provides User Interface and RESTful API endpoints for managing school contacts.",
        tags: ["Java", "Spring Boot", "Spring Mvc"],
        year: "2021",
        url: "https://github.com/prince-63",
    },
];
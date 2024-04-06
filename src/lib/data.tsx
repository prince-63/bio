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
    },
    {/* {
        imageSrc: Microservices,
        title: "Quiz Application System",
        description: "Quiz Application System is a simple Microservice based application that provides two different services. One is the Quiz Service and the other is the Question Service. The Quiz Service provides RESTful API endpoints for managing quiz data like quiz information, questions, and answers. The Question Service provides RESTful API endpoints for managing question question creation, update, delete and get the result of the quiz. the quiz service call to the question service to generate question and answer and calculate the result of the quiz. The Eureka server is used for service discovery and registration. The Eureka client is used for service registration and discovery. The Feign client is used for service communication. The API Gateway is used for routing and load balancing.",
        tags: ["Java", "Spring Boot", "Rest API", "MySQL", "Postman", "Eureka Client", "Eureka Server", "API Gateway", "Git", "GitHub"],
        year: "2023",
        url: "https://github.com/prince-63/quiz",
    },
    */}
];

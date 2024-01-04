import { Github, Linkedin } from "lucide-react";
import { TechDetails } from "@/lib/types";

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
    },
    {
        label: "Blog",
        href: "/blog"
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

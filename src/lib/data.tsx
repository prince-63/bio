import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import LogoHTML from "../../public/images/logos/icon-html.svg";
import LogoCSS from "../../public/images/logos/icon-css3.svg";
import LogoSass from "../../public/images/logos/icon-sass.svg";
import LogoTailwindcss from "../../public/images/logos/icon-tailwindcss.svg";
import LogoBootStrap from "../../public/images/logos/icons-bootstrap.svg";
import LogoJavascript from "../../public/images/logos/icon-javascript.svg";
import LogoTypescript from "../../public/images/logos/icon-typescript.svg";
import LogoReact from "../../public/images/logos/icon-react.svg";
import LogoNodejs from "../../public/images/logos/icon-nodejs.svg";
import LogoExpress from "../../public/images/logos/icon-express.svg";
import LogoExpressLight from "../../public/images/logos/icon-express-light.svg";
import LogoMongoDB from "../../public/images/logos/icon-mongodb.svg";
import LogoFigma from "../../public/images/logos/icon-figma.svg";
import LogoGit from "../../public/images/logos/icon-git.svg";
import LogoGitHub from "../../public/images/logos/icon-github.svg";
import LogoC from "../../public/images/logos/icon-c.svg";
import LogoCPP from "../../public/images/logos/icon-c_p.svg";
import LogoJAVA from "../../public/images/logos/icon-java.svg";
import LogoPython from "../../public/images/logos/icon-python.svg";
import LogoAndroidStudio from "../../public/images/logos/icon-android-studio.svg";
import LogoDart from "../../public/images/logos/icon-dart.svg";
import LogoFlutter from "../../public/images/logos/icon-flutter.svg";

import PortfolioImage from "../../public/images/portfolio_image.png";

import {
    ExperienceDetails,
    ProjectDetails,
    TechDetails,
    TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
    GITHUB: "https://github.com/prince-63",
    GITHUB_REPO: "https://github.com/prince-63",
    Linkedin: "https://linkedin.com/princekumar62",
    FIGMA: "",
    FIGMA_FILE: "",
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
        url: "https://linkedin.com/in/princekumar62",
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: "Java",
        logo: LogoJAVA,
        url: "https://www.java.com/en/",
    },
    {
        label: "Spring Boot",
        logo: LogoJAVA,
        url: "https://spring.io/projects/spring-boot",
    },
    {
        label: "Git",
        logo: LogoJAVA,
        url: "https://git-scm.com/",
    },
    {
        label: "GitHub",
        logo: LogoJAVA,
        url: "https://github.com/",
    },

    // {
    //   label: 'Figma',
    //   logo: LogoFigma,
    //   url: 'https://www.figma.com/',
    // },
    // {
    //   label: 'HTML',
    //   logo: LogoHTML,
    //   url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    // },
    // {
    //   label: 'CSS',
    //   logo: LogoCSS,
    //   url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    // },
    // {
    //   label: 'Sass/Scss',
    //   logo: LogoSass,
    //   url: 'https://sass-lang.com/',
    // },
    // {
    //   label: 'Tailwindcss',
    //   logo: LogoTailwindcss,
    //   url: 'https://tailwindcss.com/',
    // },
    // {
    //   label: 'Javascript',
    //   logo: LogoJavascript,
    //   url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    // },
    // {
    //   label: 'Typescript',
    //   logo: LogoTypescript,
    //   url: 'https://www.typescriptlang.org/',
    // },
    // {
    //   label: 'BootStrap',
    //   logo: LogoBootStrap,
    //   url: 'https://getbootstrap.com/',
    // },
    // {
    //   label: 'React',
    //   logo: LogoReact,
    //   url: 'https://react.dev/',
    // },
    // {
    //   label: 'Node.js',
    //   logo: LogoNodejs,
    //   url: 'https://nodejs.org/en',
    // },
    // {
    //   label: 'Express.js',
    //   logo: LogoExpress,
    //   darkModeLogo: LogoExpressLight,
    //   url: 'https://expressjs.com/',
    // },
    // {
    //   label: 'MongoDB',
    //   logo: LogoMongoDB,
    //   url: 'https://www.mongodb.com/',
    // },
    // {
    //   label: 'Git',
    //   logo: LogoGit,
    //   url: 'https://git-scm.com/',
    // },
    // {
    //   label: 'GitHub',
    //   logo: LogoGitHub,
    //   url: 'https://github.com/',
    // },
    // {
    //   label: 'C',
    //   logo: LogoC,
    //   url: 'https://cplusplus.com/',
    // },
    // {
    //   label: 'C++',
    //   logo: LogoCPP,
    //   url: 'https://cplusplus.com/',
    // },
    // {
    //   label: 'Python',
    //   logo: LogoPython,
    //   url: 'https://www.python.org/',
    // },
    // {
    //   label: 'Android Studio',
    //   logo: LogoAndroidStudio,
    //   url: 'https://developer.android.com/studio',
    // },
    // {
    //   label: 'Dart',
    //   logo: LogoDart,
    //   url: 'https://dart.dev/',
    // },
    // {
    //   label: 'Flutter',
    //   logo: LogoFlutter,
    //   url: 'https://flutter.dev/',
    // },
];

export const EXPERIENCES: ExperienceDetails[] = [];

export const PROJECTS: ProjectDetails[] = [
    {
        name: "Portfolio",
        description:
            "A developer portfolio website is a powerful tool to showcase your skills, accomplishments, and personality to the world. As my personal digital space, it reflects my unique identity as a developer. This website should not only display my technical expertise but also tell my story. i am using this website to exhibit my projects, provide insights into my development journey, and offer a glimpse into my passion for coding. By crafting an engaging and informative portfolio, i can make a strong impression on potential employers, clients, and collaborators. my portfolio website is my opportunity to shine and leave a lasting impact in the competitive world of tech.",
        url: "/",
        previewImage: PortfolioImage,
        technologies: [
            "HTML",
            "Typescript",
            "TailwindCSS",
            "React Js",
            "Next Js",
        ],
    },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
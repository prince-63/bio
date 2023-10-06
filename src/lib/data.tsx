import {Github, Linkedin, Instagram, Facebook} from 'lucide-react';
import LogoHTML from '/public/images/logos/icon-html.svg';
import LogoCSS from '/public/images/logos/icon-css3.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoBootStrap from '/public/images/logos/icons-bootstrap.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGitHub from '/public/images/logos/icon-github.svg';
import LogoC from '/public/images/logos/icon-c.svg';
import LogoCPP from '/public/images/logos/icon-c_p.svg';
import LogoJAVA from '/public/images/logos/icon-java.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoAndroidStudio from '/public/images/logos/icon-android-studio.svg';
import LogoDart from '/public/images/logos/icon-dart.svg';
import LogoFlutter from '/public/images/logos/icon-flutter.svg';

import ProjectApnaBazar from '/public/images/apna.png';
import ProjectWealthProperties from '/public/images/wealth.png'
import PortfolioImage from '/public/images/portfolio_image.png'
import UsabilityHubImage from '/public/images/usabilityhub.jpg'
import ShopMeImage from '/public/images/shopme.png'
import TodoAppImage from '/public/images/todoapp.png'

import MicrosoftLearnStudentAmbassador from '/public/images/microsoft-learn-student-ambassador.png'

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/prince-63',
  GITHUB_REPO: 'https://github.com/prince-63',
  Linkedin: 'https://linkedin.com/in/princekumar62',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '#hero',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Volunteer',
    href:'#testimonials'
  },
  {
    label: 'Project',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/prince-63',
  },
  {
    icon: Linkedin,
    url: 'https://linkedin.com/in/princekumar62',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/princedncg',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/princedncg',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'HTML',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'BootStrap',
    logo: LogoBootStrap,
    url: 'https://getbootstrap.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: LogoGitHub,
    url: 'https://github.com/',
  },
  {
    label: 'C',
    logo: LogoC,
    url: 'https://cplusplus.com/',
  },
  {
    label: 'C++',
    logo: LogoCPP,
    url: 'https://cplusplus.com/',
  },
  {
    label: 'Java',
    logo: LogoJAVA,
    url: 'https://www.java.com/en/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Android Studio',
    logo: LogoAndroidStudio,
    url: 'https://developer.android.com/studio',
  },
  {
    label: 'Dart',
    logo: LogoDart,
    url: 'https://dart.dev/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ['Worked as a full stack developer (React / Laravel).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Portfolio',
    description:
      'A developer portfolio website is a powerful tool to showcase your skills, accomplishments, and personality to the world. As my personal digital space, it reflects my unique identity as a developer. This website should not only display my technical expertise but also tell my story. i am using this website to exhibit my projects, provide insights into my development journey, and offer a glimpse into my passion for coding. By crafting an engaging and informative portfolio, i can make a strong impression on potential employers, clients, and collaborators. my portfolio website is my opportunity to shine and leave a lasting impact in the competitive world of tech.',
    url: '#',
    previewImage: PortfolioImage,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'React',
      'Bootstrap',
      'TailwindCSS',
      'React Js',
      'Next Js',
    ],
  },
  {
    name: 'Todo App',
    description:
    "A Todo app built with Flutter and Dart is a versatile and user-friendly task management tool. Leveraging the Flutter framework's flexibility and Dart's efficiency, this app offers a smooth and consistent experience across different platforms, including Android, iOS, and web browsers. It allows users to create, organize, and manage tasks with ease. The app's intuitive interface and simple design make it easy to use and navigate.",
    url: 'https://git@github.com/prince-63/todo_app',
    previewImage: TodoAppImage,
    technologies: [
      'Android Studio',
      'Dart',
      'Flutter',
    ],
  },
  {
    name: 'ApnaBazar',
    description:
    'A food website landing page is like the front door to a world of delicious food. It uses tempting pictures and tasty descriptions to draw people in and makes it easy to find their way around the site. It s a sneak peek of the yummy things you can find on the website. This page has colorful pictures of tasty dishes and catchy headlines that make you hungry and curious. It might have quick links to menus, reservations, or special deals to make things easy for you. A well-made food website landing page makes you want to explore and try the food. Its a crucial part of a successful food website.',
    url: 'https://apnabazarapp.netlify.app/',
    previewImage: ProjectApnaBazar,
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'Figma',
    ],
  },
  {
    name: 'ShopMe',
    description:
      '"ShopMe" is a digital product website that brings the world of online shopping to your fingertips. Our landing page is your gateway to a diverse range of products, all at your convenience. Explore our website to discover the latest offerings and start shopping with ease.',
    url: 'https://aquamarine-cendol-1a056d.netlify.app/',
    previewImage: ShopMeImage,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Figma',
    ],
  },
  {
    name: 'UsabilityHub',
    description:
      'Creating a clone of the UsabilityHub website landing page is a fascinating project that involves replicating the user-friendly design and functionality of this well-established usability testing platform. This project presents an excellent opportunity to gain hands-on experience in web development and design. By dissecting the UsabilityHub landing page and reconstructing it, i can hone my skills in HTML, CSS, and JavaScript while also gaining insight into user experience principles.',
    url: 'https://us-ability-hub.netlify.app/',
    previewImage: UsabilityHubImage,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Bootstrap',
    ],
  },
  {
    name: 'Wealth Properties',
    description:
      'A Wealth Properties website landing page clone project involves replicating the design and functionality of a real estate investment website, specifically focusing on the landing page. This ambitious endeavor allows my to create a digital space that mirrors the features, aesthetics, and user experience of a successful property investment platform. By undertaking this project, i can gain valuable insights and experience in web development, design, and content creation. It provides an opportunity to sharpen my skills in HTML, CSS, JavaScript.',
    url: 'https://wealth-properties.netlify.app/',
    previewImage: ProjectWealthProperties,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Bootstrap',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    organizationName: "Microsoft Learn Student Ambassador",
    organizationLogo: MicrosoftLearnStudentAmbassador,
    about: 'Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.',
    startingDate: 'Aug-2023',
    endingDate: 'Present',
    link: "https://mvp.microsoft.com/studentambassadors/certificate/6d07cc2b-1fb9-4f27-97b7-2bfe6a6c0f41"
  }
];

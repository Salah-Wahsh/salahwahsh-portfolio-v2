import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  tmg,
  nbe,
  codebase,
  siware,
  forum,
  circles,
  weatherNow,
  laravel,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Passionate Pen Tester",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Codebase",
    icon: codebase,
    iconBg: "#ed4e4b",
    date: "Oct 2023 - Present",
    points: [
      "Developing web applications using Laravel and other related technologies.",
      "Developing APIs for other frontend Applications.",
      "Designing and Developing Databases Using MYSQL.",
    ],
  },
  {
    title: "Smart Cities Engineer",
    company_name: "Talaat Mostafa Group (TMG)",
    icon: tmg,
    iconBg: "#00355f",
    date: "September 2023 - Oct 2023",
    points: [
      "Gained expertise in fiber networks, AI face recognition, and networking for optimal urban infrastructure.",
      "Administrated the network of smart cameras of Madinaty using GIS Applications and various vendors like huawei.",
      "Hands on training in developing and maintaining the fiber network .",
    ],
  },
  {
    title: "Full Developer",
    company_name: "Si-Ware Systems (SWS)",
    icon: siware,
    iconBg: "#E6DEDD",
    date: "August 2023 - September 2023",
    points: [
      "Developed Frontend Applications using React.",
      "Developed Backend Applications using ExpressJS and PostgreSQl.",
      "Implemented admin dashboard which is AI powered by a ChatGPT offline model that can present data dynamically depending on user's query.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Codebase",
    icon: codebase,
    iconBg: "#ed4e4b",
    date: "Mar 2022 - April 2022",
    points: [
      "Implemented a web application using JQUERY that helps people with diabetes to decide wether they can fast during ramadan or not.",
    ],
  },
  {
    title: "Cyber Security Engineer",
    company_name: "National Bank of Egypt (NBE)",
    icon: nbe,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "Demonstrated expertise in enhancing digital security through comprehensive understanding of endpoint security measures and encryption techniques.",
      "Hands-on experience in virtualization technologies and Security Operations Center (SOC) analysis. .",
      "Gained valuable insights during a visit to the NBE data center, enhancing practical understanding of data center operations and security protocols.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Forum",
    description:
      "Web-based platform that allows users to share their ideas and thoughts through creating threads and reply to each other.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: forum,
    source_code_link: "https://github.com/Salah-Wahsh/Forum",
  },
  {
    name: "Ramadan Test",
    description:
      "Web application that helps the user with diabetes to decide weather they can fast during ramadan or not.",
    tags: [
      {
        name: "JQUERY",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
    ],
    image: circles,
    source_code_link: "https://github.com/Salah-Wahsh/CirclesWizard",
  },
  {
    name: "Weather Now",
    description:
      "A weather forecasting website that allows user's to search for the weather details in any city. with API from weather.org API. ",
    tags: [
      {
        name: "JQUERY",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
    ],
    image: weatherNow,
    source_code_link: "https://github.com/Salah-Wahsh/WeatherNow",
  },
];

export { services, technologies, experiences, testimonials, projects };

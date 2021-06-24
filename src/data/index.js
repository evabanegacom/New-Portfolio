import tastyRecipes from '../assets/rails.png';
import shooter from '../assets/shooter.png';
import newsweek from '../assets/shopping.png';
import portfolio from '../assets/stock.png';
import bookIt from '../assets/bookIT.png';
import shopping from '../assets/screenshot-stupefied-meitner-9e56b5.netlify.app-2021.06.24-21_01_19.png';

export const headersData = [
  {
    label: 'Projects',
    href: 'projects',
  },
  {
    label: 'About',
    href: 'about',
  },
  {
    label: 'Contact',
    href: 'contact',
  },
];

export const projectsData = [
  {
    imageSrc: bookIt,
    title: 'BookIT',
    description: 'A web application for booking cars. The application is built using React and Redux libraries for the front-end and fetches data from a backend API built using Ruby on Rails.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }, { tech: 'Ruby on Rails' }],
    live: 'http://infinite-justice.herokuapp.com/',
    github: 'https://github.com/evabanegacom/Frontend-booking/',
  },
  {
    imageSrc: shooter,
    title: 'Restaurant Page',
    description: 'A single pager restaurant application built with vanilla javascript',
    techStack: [{ tech: 'JavaScript' }, { tech: 'HTML & CSS' }, { tech: 'Webpack' }],
    live: 'https://raw.githack.com/evabanegacom/restaurant-page/feature/dist/index.html',
    github: 'https://github.com/evabanegacom/restaurant-page',
  },
  {
    imageSrc: tastyRecipes,
    title: 'Group your Transactions',
    description: 'A financial management rails app that manages your recorded expenses by analysing, grouping and aggregating them.',
    techStack: [{ tech: 'Ruby' }, { tech: 'Ruby on Rails' }, { tech: 'Html & Css' }],
    live: 'https://spetsnazz.herokuapp.com//',
    github: 'https://github.com/evabanegacom/Railscapstone',
  },
  {
    imageSrc: portfolio,
    title: 'Stock Information App',
    description: 'A stock information app that gets data through API integration.',
    techStack: [{ tech: 'React & Redux' }, { tech: 'API' }, { tech: 'Html & Css' }],
    live: 'https://eagle-claw.herokuapp.com/',
    github: 'https://github.com/evabanegacom/React-capstone',
  },
  {
    imageSrc: newsweek,
    title: 'Shopping App',
    description: 'A responsive shopping app built with Material Ui and commerceJs with stripe implementation.',
    techStack: [{ tech: 'React' }, { tech: 'Html5 & CSS3' }, { tech: 'Material Ui' }],
    live: 'https://infallible-ritchie-f9f80e.netlify.app/',
    github: 'https://github.com/evabanegacom/OnlineStore/',
  },

  {
    imageSrc: shopping,
    title: 'Ecommerce site',
    description: 'A responsive shopping app built for a small start-up with CMS and CRM features.',
    techStack: [{ tech: 'React & Redux' }, { tech: 'Html5 & CSS3' }, { tech: 'Material Ui' }, { tech: 'Ruby on Rails API' }, { tech: 'cloudinary & Postgresql' }],
    live: 'https://stupefied-meitner-9e56b5.netlify.app/',
    github: 'https://github.com/evabanegacom/Frontend-shopping/',
  },
];

export const skillsAndTech = [
  {
    title: 'Skills',
    description: 'Semantic HTML - Responsive Design - DOM manipulation - UI Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Wireframing',
  },
  {
    title: 'Technology',
    description: 'HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux - Material UI - Bootstrap - Ruby - Ruby on Rails - PostgreSQL - MySQL - NodeJS - RSpec - Jest - REST APIs - NPM - Git - Figma',
  },
];

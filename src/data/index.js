import tastyRecipes from '../assets/rails.png';
import shooter from '../assets/shooter.png';
import newsweek from '../assets/shopping.png';
import portfolio from '../assets/stock.png';
import bookIt from '../assets/bookIT.png';

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
    description: 'A rails app that manages your recorded activities by analysing, grouping and aggregating them.',
    techStack: [{ tech: 'Ruby' }, { tech: 'Ruby on Rails' }, { tech: 'Html & Css' }],
    live: 'https://spetsnazz.herokuapp.com//',
    github: 'https://github.com/evabanegacom/Railscapstone',
  },
  {
    imageSrc: portfolio,
    title: 'Stock Information App',
    description: 'A stock information app that gets data through API integration.',
    techStack: [{ tech: 'React & Redux' }, { tech: 'API' }],
    live: 'https://eagle-claw.herokuapp.com/',
    github: 'https://github.com/evabanegacom/React-capstone',
  },
  {
    imageSrc: newsweek,
    title: 'Newsweek Clone',
    description: 'A responsive grid-based UI clone from the Newsweek website homepage.',
    techStack: [{ tech: 'HTML5' }, { tech: 'CSS3' }, { tech: 'BOOTSTRAP' }],
    live: 'https://cocky-borg-5ade74.netlify.app/',
    github: 'https://github.com/Mupa1/Newsweek-Clone',
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

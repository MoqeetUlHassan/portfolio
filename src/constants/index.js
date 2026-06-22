export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Moqeet was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Moqeet expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Moqeet. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Moqeet was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AmrokGate - My Own Product',
    desc: 'AmrokGate is a platform I founded and built from the ground up — owning the full stack from product vision and architecture to development and deployment.',
    subdesc:
      'A live, production-ready product launched in 2024. I lead every aspect: engineering, design, and product strategy at amrokgate.com.',
    href: 'https://www.amrokgate.com',
    detailPage: '/amrokgate',
    texture: '/textures/project/amrokgate-screen.png',
    logo: '/assets/amrokgatelogo.svg',
    logoStyle: {
      backgroundColor: '#1a1a2e',
      border: '0.2px solid #4f46e5',
      boxShadow: '0px 0px 60px 0px #6366f14D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Apimio - Product Information Management System (PIMS)',
    desc: 'Apimio is a comprehensive Product Information Management (PIMS) platform, enabling businesses to centralize, enrich, and distribute product data across multiple sales channels. It improves operational efficiency and ensures product data consistency.',
    subdesc:
      'Built with Laravel, Vue.js, and TailwindCSS, Apimio offers scalable solutions for managing product catalogs efficiently.',
    href: 'https://www.youtube.com/watch?v=sample-apimio-demo',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Laravel',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        id: 2,
        name: 'Vue.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Keystone - Trucking Management System',
    desc: 'Keystone is a powerful trucking management system designed to streamline logistics operations. It handles fleet tracking, route optimization, and scheduling to ensure smooth transportation workflows.',
    subdesc:
      'Developed with Django, React.js, and PostgreSQL, Keystone is tailored for the logistics industry, ensuring real-time data accuracy and operational efficiency.',
    href: 'https://www.youtube.com/watch?v=sample-keystone-demo',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Django',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ],
  },
  {
    title: 'Weather App - Mausam',
    desc: 'Mausam is a lightweight and user-friendly weather application providing real-time weather updates, forecasts, and alerts. It leverages API integrations for accurate weather predictions.',
    subdesc:
      'Built with React.js, Node.js, and OpenWeather API, Mausam ensures quick and reliable weather data delivery for users worldwide.',
    href: 'https://www.youtube.com/watch?v=sample-mausam-demo',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: 3,
        name: 'OpenWeather API',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    title: 'BOVIT - Ticket and Event Management System',
    desc: 'BOVIT is an event management system designed to streamline ticket sales, attendee management, and event organization for large-scale events.',
    subdesc:
      'Powered by Next.js, Stripe, and Firebase, BOVIT offers a robust and secure platform for managing events and payments with ease.',
    href: 'https://www.youtube.com/watch?v=sample-bovit-demo',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        id: 2,
        name: 'Stripe',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        id: 3,
        name: 'Firebase',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 0,
    name: 'AmrokGate',
    pos: 'Founder & Owner',
    duration: '2024 - Present',
    title: "AmrokGate is my own product — a platform I founded and built from the ground up. I lead the product vision, architecture, and development, driving it from concept to a live product at amrokgate.com.",
    icon: '/assets/amrokgatelogo.svg',
    animation: 'victory',
    detailPage: '/amrokgate',
  },
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

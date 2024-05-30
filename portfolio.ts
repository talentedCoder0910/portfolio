import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

const globalName = 'Talented Coder';

export const greetings: GreetingsType = {
  name: globalName,
  title: "Hi all, I'm Coder",
  description:
    "I'm a passionate Full Stack web, mobile developer and Data scientist with experience developing Full Stack web & Mobile applications with Python, Django, PHP, Laravel, React.js, Vue.js, Cloud Technologies, Flutter, Android Studio and Data scrapying, mining, processing and Deep Learning with all strong Python third-party packages including Numpy, Scipy, Seaborn, Matplotlib, Tensorflow and Pytorch. I am strongly interested in learning new technologies and implementing them in my projects, and also feel happy to help other persons with my technology. I'm a self-motivated, hardworking and helpful individual who is always ready to learn new things, integrate my knowledge to produce something that can help persons all around the world and work in a team. I am good at communicating and very accustomed to remote work.",
  resumeLink: "#",
};

export const openSource = {
  // githubUserName: "1hanzla100", // Github username
  githubUserName: "talentedCoder0910", // Github username
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:talentedCoder0910@gmail.com",
  outlook: "mailto:talentedCoder0910@outlook.com",
  // linkedin: "https://www.linkedin.com/in/1hanzla100/",
  github: "https://github.com/talentedCoder0910",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK & MOBILE DEVELOPER WHO CAN COMBINE WITH DATA SCIENCE",
  data: [
    {
      title: "Full Stack Web and Mobile Development, Data Science",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("  ⚡ Building Backend and RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building Full Stack Websites in PHP and Laravel"),
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Vue.js"),
        emoji("⚡ Building Cross-Platform Mobile applications in Flutter and Nativescript"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Combine all of above with not weak Data Processing Technology"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Vuejs",
          iconifyTag: "devicon:vuejs",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "Nativescript",
          iconifyTag: "logos:nativescript",
        },
        {
          skillName: "Scipy",
          iconifyTag: "simple-icons:scipy",
        },
        {
          skillName: "Tensorflow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "Pytorch",
          iconifyTag: "devicon:pytorch",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Mobile", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Data Processing", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Chapman University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2016 - August 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Backend Developer (Django)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2020 - Oct 2021",
    desc: "",
    descBullets: [
      'Led the end-to-end development process of multiple software applications and websites. Designed, implemented, documented, and successfully deployed warehouse integration code using Django, MySQL. ',
      'Structured several affiliate systems which used a centralized database. ',
      'Created Healthcare web applications to connect customers with the most trusted sources of generic and brand medicine suppliers in the world.',
    ]
  },
  {
    role: "Frontend Developer (jQuery, Vue.js, React.js)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jun 2021 - Feb 2022",
    desc: "",
    descBullets: [
      'Created a merchant application for a multi-vendor platform with 200+ business customers to create, manage, and monitor deliveries using Vue / React.',
      'Expanded features, refined code, and improved processes, producing smoother operations and enhancing user engagement. ',
      'Contributed to the in-house UI library to create reusable React / Vue components that saved countless hours of development time per month.',
      'Published on AWS EC2 and configured Nginx, distributing user requests to several servers using a load balancer.',
    ]
  },
  {
    role: "Full Stack Developer (MERN, Django, Native, Flutter)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Dec 2021 - Jun 2023",
    desc: "",
    descBullets: [
      'Developed, tested and deployed high-quality code for Envy Theme’s products using Vue & Node.js, developed mobile apps using React Native and Python/Django, and deployed to google & app store.',
      'Contributed to 400% increase in theme sales while simultaneously decreasing support requests thanks to bug free code and thorough documentation, resulting in a considerable increase in annual revenue.',
      'Troubleshoot, debugged and optimized the code to improve performance and scalability, created and maintained technical documentation.',
    ]
  },
  {
    role: "Mobile App Developer (Flutter, PHP/Laravel)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Apr 2021 - Present",
    desc: "",
    descBullets: [
      'Worked with data modelling for variable Ecommerce products in the medical field.Built and deployed hybrid apps using Flutter & Spring Boot.',
      'Built user interfaces and designing the methodology, structure and architecture for the projects complex data visualization requirements.',
      'Implemented RESTful API services for creating, retrieving, updating, and deleting data in JSON.',
    ]
  },
  {
    role: "Senior Software Engineer (Using several combination)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Jan 2023 - Present",
    desc: "",
    descBullets: [
      'Developing and maintaining web applications using React.js and other related technologies.Participating in code reviews and providing constructive feedback to other developers.',
      'Implementing responsive design and ensuring cross-browser compatibility. ',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    ]
  },
  {
    role: "Data Engineerer (Python, DB)",
    company: "REMOTE WORKING",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2023",
    desc: "",
    descBullets: [
      'Specialized in designing and managing data pipelines, ensuring smooth flow and storage of information across systems.',
      'As a data engineer, developed and maintains databases, optimizing them for efficient access and retrieval of data.',
      'Leveraging expertise in programming and database management, built robust infrastructure to support data-driven decision-making in organizations.',
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: "Natural World eCommerce",
    desc: "Ecommerce Website based on Laravel",
    tech: [
      '#PHP',
      '#Laravel',
      '#eCommerce',
    ],
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://naturalworld.sg/",
  },
  {
    name: "Verity",
    desc: "Drone Service Website using Three.js & WebGL.",
    tech: [
      '#React',
      '#Mongodb',
      '#WebGL',
    ],
    link: "https://veritystudios.com/",
  },
  {
    name: "Delivery App",
    desc: "Food Delivery App using React Native & Python/Django",
    tech: [
      '#React Native',
      '#Python',
      '#Django',
    ],
    link: "https://play.google.com/store/apps/details?id=com.neemo.restaurante",
  },
  {
    name: "All Star Seating Navigation",
    desc: "All in one stadium and event ticketing platform that integrates seating navigation and social media",
    tech: [
      '#Flutter',
      '#Firebase',
      '#Stripe',
    ],
    link: "https://play.google.com/store/apps/details?id=com.assn.seat.app",
  },
  {
    name: "Image Live Wallpaper",
    desc: "Live Wallpaper Image app with circle on Java",
    tech: [
      '#Java',
      '#Android',
      '#AI',
    ],
    link: "https://play.google.com/store/apps/details?id=com.approids.myimagewallpaper",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "James Reynolds",
    role: "CTO at 456 Enterprises",
    feedback:
      "Crafting seamless user experiences with finesse, he stands out as a top-tier front-end programmer. Their dedication to pixel-perfect designs and intuitive interfaces elevates every project they touch. With a mastery of HTML, CSS, and JavaScript, he brings visions to life, creating dynamic web applications that captivate and delight users. Whether it's optimizing performance or ensuring cross-browser compatibility, he goes above and beyond to deliver excellence in every line of code.",
  },
  {
    name: "Jackson Chen",
    role: "CEO at DEF Corp",
    feedback:
      "In the realm of mobile app development, you shines as a beacon of excellence in full-stack programming. Their talent spans the entire spectrum of mobile development, from crafting elegant user interfaces to architecting robust back-end systems. With expertise in both front-end frameworks like React Native and back-end technologies such as Node.js, you seamlessly bridges the gap between user experience and functionality. ",
  },
  {
    name: "Aminah Lee",
    role: "Data Engineer at Appalope LLC",
    feedback:
      "With a keen eye for detail and a knack for problem-solving, he ensures the seamless flow and storage of data across systems. Their expertise in database management and programming languages like Python and SQL makes them a valuable asset, consistently delivering efficient and scalable solutions. From designing robust architectures to implementing effective data management strategies, he is the driving force behind data-driven success stories.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: globalName, // name
  description: greetings.description,
  author: globalName, // author
  image: "https://avatars.githubusercontent.com/talentedCoder0910", // avatar image
  url: "https://talentedCoder0910.github.io/portfolio", // deployed url
  keywords: [
    "Coder",
    "Talented Coder",
    "@talentedCoder",
    "talentedCoder",
    "Portfolio",
    "Talented Coder ",
    "Talented Coder Portfolio",
  ],
};

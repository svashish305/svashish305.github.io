import { tcs, thoughtflow, nascompany, hyno, trilogy } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  twitter,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  zoomclone,
  figmaclone,
  bookingapp,
  evently,
  financeapp,
  aora,
  imaginify,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "AI First Software Engineer II",
    company_name: "Trilogy",
    icon: trilogy,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Achieved a 20% reduction in monthly AWS costs by conducting a thorough analysis of redundant resources",
      "Enhanced data integrity and recovery processes by deploying AWS Batch jobs, resulting in a 30% reduction in data discrepancy resolution time after DB failovers",
      "Increased customer support efficiency by 75% through the development of an AI-powered chatbot leveraging LLMs, streamlining responses to common queries"
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Hyno",
    icon: hyno,
    iconBg: "#383E56",
    date: "Jul 2023 - Apr 2024",
    points: [
      "Developed several critical APIs for Forta Health, enhancing system functionality and user interaction",
      "Optimized overlapping database queries, resulting in improved system performance and efficiency",
      "Implemented various backend optimizations, contributing significantly to a more robust and streamlined backend infrastructure",
    ],
  },
  {
    title: "Software Engineer - Backend",
    company_name: "Nas Company",
    icon: nascompany,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Built a customizable video-on-demand solution using AWS cloud formation template supporting adaptive streaming",
      "Integrated Paypal, BitPay, and Xendit as payment methods respectively in local & international markets and backend APIs including In-App Subscriptions for app and play store",
      "Refactored signup and enrolment APIs to improve latency by ~33% and 75% respectively to decrease drop-off rates while signup",
      "Increased the number of users from 2K users to 500K users over a span of 2 years by building multiple systems (reaction, comment, etc) and working on optimisations focussed on user growth",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Thoughtflow",
    icon: thoughtflow,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - May 2020",
    points: [
      "Maintained MongoDB database, automated backup and restore scripts to and from cluster",
      "Rendered responsive UI using Angular, Used Loopback (BaaS) for creating remote methods, integrated Stripe Payment Interface, JIRA API, and social login",
      "ThoughtFlow got featured in ProductHood as one of the best SaaS out there of its kind :)",
    ],
  },
  {
    title: "Assistant System Engineer - Trainee",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jul 2018 - Aug 2019",
    points: [
      "Built XML Comparator Tool in Core Java",
      "Built Kibana Log Querying App using MEAN stack SPA (Angular 2+)",
      "Worked on projects using Springboot and Maven",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/svashish305",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shubhashish-verma96",
  },
  {
    name: "X",
    iconUrl: twitter,
    link: "https://www.twitter.com/svashish305",
  },
];

export const projects = [
  {
    iconUrl: imaginify,
    theme: "btn-back-black",
    name: "Imaginify",
    description:
      "A SaaS app with AI features and a payments and credits system",
    githubLink: "https://github.com/svashish305/sv_imaginify",
    liveLink: "https://sv-imaginify.vercel.app",
  },
  {
    iconUrl: zoomclone,
    theme: "btn-back-orange",
    name: "Zoom Clone",
    description:
      "A minimalist zoom clone using Stream video and audio for video calling.",
    githubLink: "https://github.com/svashish305/zoom_clone",
    liveLink: "https://zoom-clone-snowy.vercel.app",
  },
  {
    iconUrl: bookingapp,
    theme: "btn-back-green",
    name: "Booking App",
    description:
      "Full Stack MERN app enabling users to book and checkout hotels.",
    githubLink: "https://github.com/svashish305/mern-booking-app",
    liveLink: "https://mern-booking-app-fkg9.onrender.com",
  },
  {
    iconUrl: figmaclone,
    theme: "btn-back-blue",
    name: "Figma Clone",
    description:
      "A minimalist figma clone using Fabric.js and Liveblocks for real-time collaboration.",
    githubLink: "https://github.com/svashish305/liveblocks_figma_clone",
    liveLink: "https://liveblocks-figma-clone-six.vercel.app",
  },
  {
    iconUrl: evently,
    theme: "btn-back-red",
    name: "Evently",
    description:
      "Full Stack Web App event management app allowing users to book and checkout events.",
    githubLink: "https://github.com/svashish305/evently",
    liveLink: "https://evently-blond-nu.vercel.app",
  },
  {
    iconUrl: financeapp,
    theme: "btn-back-pink",
    name: "Finance App",
    description: `Full Stack MERN app to show finance dashboard and allows user to predict next year's data`,
    githubLink: "https://github.com/svashish305/finance-app",
    liveLink: "https://finance-app-sooty.vercel.app",
  },
  {
    iconUrl: aora,
    theme: "btn-back-yellow",
    name: "Aora",
    description: "A video app using React Native, Expo and Appwrite",
    githubLink: "https://github.com/svashish305/sv_aora",
    liveLink:
      "https://drive.google.com/file/d/18iQ8KjzQioAFjbh5uODE0T1W7Bw3fOES/view?usp=sharing",
  },
];

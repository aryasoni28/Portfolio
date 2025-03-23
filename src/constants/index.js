import {
  mobile,
  backend,
  creator,
  web,
  sahai,
  mocs,
  codechef,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  kafka,
  hadoop,
  c,
  cpp,
  python,
  mysql,
  spark,
  carrent,
  jobit,
  tripguide,
  threejs,
  airlinemanagement,
  safepay,
  unhighgene,
  yadtq,
  sahaicerty,
  arithmeniacerty,
  rvcecerty,
  mrd,
  cnr,
  healthhack,
  maayacerty,
  distinction,
  mpcaprojss,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Projects",
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
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Generative AI",
    icon: backend,
  },
  {
    title: "Big Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "spark",
    icon: spark,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "hadoop",
    icon: hadoop,
  },
  {
    name: "kafka",
    icon: kafka,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Micro Orbit Consulting Services",
    icon: mocs,
    iconBg: "#383E56",
    date: "May 2024-August 2024",
    points: [
      "Engineered a user-friendly web application that streamlined design project submissions for a Belgium interior design firm, reducing submission errors by 35% and enhancing client satisfaction ratings by 15%.",
      "Implemented features like interactive project tours, advanced search functionality and interactive 360-degree project views.",
    ],
  },
  {
    title: "Technical Core Team (Cpp)",
    company_name: "Codechef PESUECC",
    icon: codechef,
    iconBg: "#E6DEDD",
    date: "August 2024-May 2024",
    points: [
      "Assisted in developing and maintaining technical projects for the club",
      "Collaborated with the team to troubleshoot issues and improve digital solutions",
    ],
  },
  {
    title: "Design Team",
    company_name: "SAHAI INDIA",
    icon: sahai,
    iconBg: "#383E56",
    date: "March 2024-November 2024",
    points: [
      "Designed visual content for campaigns, social media, and promotional materials",
      "Collaborated with the team to maintain a consistent and engaging brand identity",
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
    image: arithmeniacerty,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: rvcecerty,
  },
  {
    testimonial:
      "Badminton",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: healthhack,
  },
  {
    testimonial:
      "Badminton",
    name: "Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: cnr,
  },
  {
    testimonial:
      "Badminton",
    name: "Lisa ",
    designation: "CTO",
    company: "456 Enterprises",
    image: maayacerty,
  },
  {
    testimonial:
      "Badminton",
    name: "cnr",
    designation: "CTO",
    company: "456 Enterprises",
    image: mrd,
  },
  {
    testimonial:
      "Badminton",
    name: "bad",
    designation: "CTO",
    company: "456 Enterprises",
    image: sahaicerty,
  },
  {
    testimonial:
      "Badminton",
    name: "play",
    designation: "CTO",
    company: "456 Enterprises",
    image: distinction,
  },
];

const projects = [
  {
    name: "Yet Another Distributed Task Queue (YADTQ)",
    description:
      "Developed YADTQ, a scalable task queue system enabling concurrent execution with prioritization, retries, and failure handling. Optimized load balancing and dynamic worker assignment, reducing task delays by 30% while ensuring seamless integration.",
    tags: [
      {
        name: "kafka",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: yadtq,
    source_code_link: "https://github.com/aryasoni28/YADTQ",
  },
  {
    name: "Real-time fraud detection in digital transactions",
    description:
      "Developed an NLP-based real-time fraud detection system, reducing false positives by 35% and preventing 65% of fraud cases. Designed an algorithmic framework analyzing user data across five key metrics to enhance security and trust.",
    tags: [
      {
        name: "NLP using SpaCy",
        color: "blue-text-gradient",
      },
      {
        name: "React-Native",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "PyMongo",
        color: "green-text-gradient",
      },
    ],
    image: safepay,
    source_code_link: "https://github.com/aryasoni28/SafePay",
  },
  {
    name: "IoT-Based Safe Lock System with OTP Verification and CCTV Surveillance",
    description:
      "Developed an IoT-based safe lock system using Raspberry Pi with IR sensor-triggered object detection and OTP verification. Integrated IP-validated OTP access, dual-function keypad, and CCTV footage capture, reducing unlock time by 40%.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Socket Programming",
        color: "pink-text-gradient",
      },
      {
        name: "Raspberry Pi OS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      
    ],
    image: mpcaprojss,
    source_code_link: "https://github.com/aryasoni28/Dynamic_password_generation_for_safe_lock_system",
  },
  {
    name: "Unhigh-Gene",
    description:
      "Developed Unhigh-Gene, an AI-powered genetic analysis tool leveraging advanced sequencing and computational algorithms for precise disease prediction and prevention. Automated genetic disease detection, reducing manual effort and enabling proactive genetic counseling for informed family planning.",
    tags: [
      {
        name: "Matplotlib",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "BioPython",
        color: "blue-text-gradient",
      },
      
    ],
    image: unhighgene,
    source_code_link: "https://github.com/aryasoni28/Unhigh-Gene",
  },
  {
    name: "Airline Management System",
    description:
      "Developed an airline management system to streamline flight scheduling, booking management, and passenger tracking. Implemented automated ticketing, crew allocation, and real-time operational monitoring to enhance efficiency.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },

      
    ],
    image: airlinemanagement,
    source_code_link: "https://github.com/aryasoni28/dbms",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaDatabase,
  FaAws,
  FaEdit,
  FaServer,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiCplusplus,
  SiSpring,
  SiMysql,
  SiPostman,
  SiSalesforce,
} from 'react-icons/si';

/* =======================
   PERSONAL INFO
======================= */

export const personalInfo = {
  name: "Ayush Hurkat",
  title: "Backend Software Engineer",
  email: "ayushhurkat.22@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayushhurkat/",
  github: "https://github.com/AyushHurkat0022",
  phone: "+91 7772883105",
  resumeLink: "/Ayush_Hurkat_Resume_Fresher.pdf",
  bio: "Backend-focused software engineer at Accenture, working on enterprise platforms using Salesforce, Apex, and Agentforce. Strong foundation in Java, Spring Boot, REST APIs, and backend system design with experience handling real-world data workflows.",
  shortBio: "Building reliable backend systems and enterprise-grade logic.",
};

/* =======================
   EDUCATION
======================= */

export const education = [
  {
    institution: "Madhav Institute of Technology and Science, Gwalior",
    degree: "Bachelor of Technology in Information Technology",
    duration: "Oct 2021 – Jun 2025",
    score: "CGPA: 8.62/10",
  },
  {
    institution: "Bareli Vidhya Mandir",
    degree: "Class 12th (MP Board)",
    duration: "Apr 2019 – May 2021",
    score: "89.6%",
  },
  {
    institution: "St. Joseph's Sr Sec School, Pipariya",
    degree: "Class 10th (CBSE)",
    duration: "Apr 2017 – May 2019",
    score: "90%",
  },
];

/* =======================
   PROJECTS
======================= */

export const projects = [
  {
    title: "SketchSpace",
    category: "Full Stack / Collaboration Tool",
    date: "Jan 2025 – Present",
    tech: ["React", "WebSockets", "JavaScript", "Tailwind CSS"],
    description:
      "Designed an interactive whiteboard application with drawing tools, undo/redo functionality, and export-to-image support. Currently extending the backend to support real-time multi-user collaboration using WebSockets.",
    githubLink: null,
    liveLink: "https://sketchspace.onrender.com/",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "Rubik’s Cube Solver",
    category: "Algorithms / Problem Solving",
    date: "Jan 2024 – Feb 2024",
    tech: ["C++", "OOP", "Data Structures", "Algorithms"],
    description:
      "Implemented a 3×3 Rubik’s Cube solver using advanced C++ data structures and object-oriented design. Achieved solve times under 3 seconds for cubes scrambled up to 8 moves.",
    githubLink: "https://github.com/Ayushhurkat22/RubiksCubeSolver",
    liveLink: null,
    icon: <SiCplusplus size={24} className="text-accent-1" />,
  },
];

/* =======================
   EXPERIENCE
======================= */

export const experience = [
  {
    role: "Associate Software Engineer",
    organization: "Accenture",
    location: "Gurugram, India",
    duration: "Feb 2026 – Present",
    points: [
      "Working on enterprise backend logic on the Salesforce platform, focusing on Apex development and data-driven workflows.",
      "Debugging and extending backend business logic, automation rules, and integrations to ensure system correctness.",
      "Investigating data-flow issues across interconnected records to maintain platform data integrity.",
      "Building and configuring AI-driven workflows using Agentforce, Salesforce’s AI agent layer.",
      "Collaborating with cross-functional teams to analyze production issues and improve system stability.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    organization: "Bharat Gold Ornaments Pvt. Ltd.",
    location: "Remote, India",
    duration: "Oct 2024 – Apr 2025",
    points: [
      "Contributed to the development of a scalable platform serving 500+ users.",
      "Designed and optimized backend APIs to improve performance and reliability.",
      "Integrated cloud services for authentication and backend operations.",
    ],
  },
  {
    role: "Software Development Intern",
    organization: "Shiavnski Tech LLP",
    location: "Remote, India",
    duration: "Apr 2024 – Jun 2024",
    points: [
      "Designed and developed a backend-driven password management system.",
      "Implemented REST APIs for secure authentication and data management.",
      "Optimized backend performance, reducing API response time by ~40%.",
    ],
  },
];

/* =======================
   SKILLS
======================= */

export const skills = {
  languages: [
    { name: "Java", icon: <FaServer /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndPlatforms: [
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Salesforce (Apex)", icon: <SiSalesforce /> },
    { name: "Agentforce", icon: <SiSalesforce /> },
    { name: "REST APIs", icon: <FaServer /> },
  ],
  toolsAndDatabases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaEdit /> },
  ],
  coreCompetencies: [
    "Backend System Design",
    "Enterprise Application Development",
    "Debugging & Problem Solving",
    "Data Integrity & Workflows",
    "Agile & Team Collaboration",
  ],
};

/* =======================
   LEADERSHIP
======================= */

export const leadershipAndInvolvement = [
  {
    role: "Student Representative",
    organization: "Board of Studies, Department of IT, MITS Gwalior",
    duration: "Nov 2022 – Aug 2024",
    points: [
      "Represented student interests to faculty and external academic delegates.",
      "Contributed feedback that supported curriculum improvements.",
    ],
  },
  {
    role: "Design Head & Founding Member",
    organization: "FunTech Club, MITS Gwalior",
    duration: "Feb 2023 – Jan 2025",
    points: [
      "Founded and led the design team for technical events and workshops.",
      "Promoted hands-on technical learning and community building.",
    ],
  },
];

/* =======================
   SOCIAL LINKS
======================= */

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> },
};
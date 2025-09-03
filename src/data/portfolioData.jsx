import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaAws, FaEdit, FaServer } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Ayush Hurkat",
  title: "Full Stack Developer",
  email: "ayushhurkat.22@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayushhurkat/",
  github: "https://github.com/AyushHurkat0022",
  phone: "+91 7772993105",
  resumeLink: "public/Ayush_Hurkat_Resume_Fresher.pdf",
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "Passionate to build web applications impacting world." 
};

export const education = [
  {
    institution: "Madhav Institute of Technology and Science, Gwalior",
    degree: "Bachelor of Technology in Information Technology",
    duration: "Oct 2021 – Jun 2025",
    score: "CGPA: 8.62/10",
  },
  {
    institution: "Bareli Vidhya Mandir",
    degree: "Class 12th MP Board",
    duration: "April 2019 - May 2021",
    score: "89.6%",
  },
  {
    institution: "St. Joseph's Sr Sec School, Pipariya",
    degree: "Class 10th CBSE",
    duration: "April 2017 - May 2019",
    score: "90%",
  },
];

export const projects = [
  {
    title: "Whiteboard App with Undo-Redo",
    tech: ["React JS", "HTML5 Canvas", "Tailwind CSS", "JavaScript"],
    description: "Built an interactive whiteboard app featuring drawing tools (line, rectangle, ellipse, arrow, text), undo/redo support via Context API, and export-to-image functionality. Designed a responsive UI and initiated backend setup for real-time collaboration. Currently enhancing the application by adding backend with real-time multi-user collaboration using WebSockets.",
    date: "Jan 2025 – Feb 2025",
    githubLink: null,
    liveLink: "https://whiteboardapp-ayushs-projects-bd8557a7.vercel.app/",
    category: "Frontend / Collaboration Tool",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Face Recognition Attendance System",
    tech: ["Python", "OpenCV", "NumPy", "pyttsx3", "CSV"],
    description: (
  <ul>
    <li>Automated attendance marking using computer vision and machine learning.</li>
    <li>Captures individual images to build a dataset.</li>
    <li>Trains a face recognition model via encoding scripts.</li>
    <li>Detects and recognizes faces in real-time.</li>
    <li>Logs attendance with timestamps in a CSV file.</li>
    <li>Provides voice feedback for user confirmation.</li>
    <li>See GitHub for full usage instructions (image capture, model training, recognition flow).</li>
  </ul>
),

    date: "Aug 2023 – Sep 2023",
    githubLink: "https://github.com/Ayushhurkat22/Smart-Attendance-System",
    liveLink: null,
    category: "Computer Vision / Automation",
    icon: <SiPython size={24} className="text-accent-1" />
  },
  {
    title: "Rubik’s Cube Solver",
    tech: ["C++", "OOP", "Algorithms", "Data Structures"],
    description: "Engineered a 3×3 Rubik’s Cube model leveraging advanced C++ data structures and OOP principles. Developed an efficient solver using multiple representation techniques and algorithms—achieving solve times under 3 seconds for cubes scrambled up to 8 moves.",
    date: "Jan 2024 – Feb 2024",
    githubLink: "https://github.com/Ayushhurkat22/RubiksCubeSolver",
    liveLink: null,
    category: "Algorithms / Problem Solving",
    icon: <SiCplusplus size={24} className="text-accent-1" />
  },
];


export const experience = [
  {
    role: "Full Stack Intern",
    organization: "Bharat Gold Ornaments Pvt Ltd",
    duration: "Oct 2024 – Apr 2025",
    location: "Goa, India",
    points: [
      "Contributed to the development of the KinMitra platform by building and optimizing key frontend and backend features.",
      "Designed and implemented intuitive UI components, integrated AI-powered chat, and improved scalability for 500+ users.",
      "Leveraged AWS Cognito and Lambda to streamline backend operations, reducing response time and improving efficiency.",
    ],
  },
  {
    role: "SDE Intern",
    organization: "Shiavnski Tech LLP",
    duration: "Apr 2024 – Jun 2024",
    location: "Indore, India",
    points: [
      "Developed a password management application ‘GetIn’ using the MERN stack with secure login, registration, and timestamped data features.",
      "Optimized API design to reduce backend response time by 40% and improved overall system efficiency.",
      "Enhanced user interface and user experience for seamless interaction across devices.",
    ],
  },
];


export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaEdit /> },
    { name: "Postman", icon: <FaEnvelope /> },
    { name: "Amazon Web Services", icon: <FaAws /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Student Representative",
    organization: "Board of Studies, Department of IT, MITS Gwalior",
    duration: "Nov 2022 – Aug 2024",
    points: [
      "Represented student interests to faculty, HoD, and delegates from IITs, NITs, and IIITs.",
      "Provided key insights that contributed to curriculum enhancements within the IT department.",
    ],
  },
  {
    role: "Design Head & Founding Member",
    organization: "FunTech Club, MITS Gwalior",
    duration: "Feb 2023 – Jan 2025",
    points: [
      "Founded and led the design team, organizing workshops, events, and competitions to foster a vibrant tech community.",
      "Conceptualized and executed innovative projects and events, promoting practical skills and creativity among students.",
    ],
  },
];


export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> },
};
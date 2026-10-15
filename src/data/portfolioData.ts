export interface Project {
  id: string;
  title: string;
  year: string;
  shortOverview: string;
  problem: string;
  technicalApproach: string[];
  technologies: string[];
  keyFeatures: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Internship {
  id: string;
  title: string;
  organization: string;
  location?: string;
  duration: string;
  type: 'Internship' | 'Industrial Training';
  responsibilities: string[];
  technologiesLearned: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  boardOrAffiliation?: string;
  year: string;
  grade: string;
  gradeLabel: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  category: 'Cloud & Data' | 'Cybersecurity' | 'AI & Machine Learning' | 'IT Fundamentals' | 'General';
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export const portfolioData = {
  personalInfo: {
    name: "JEEVA K",
    shortName: "Jeeva",
    title: "Aspiring IT Professional | Computer Science and Engineering Student",
    headline: "Final-year CSE student passionate about software engineering, Python development, and applied machine learning.",
    careerObjective:
      "Motivated and enthusiastic graduate seeking an entry-level IT opportunity to apply technical skills, solve real-world problems, learn new technologies, and contribute effectively to organizational growth.",
    bio: [
      "I am a final-year Computer Science and Engineering student at Er. Perumal Manimekalai College of Engineering (PMC Tech), Hosur, preparing for an entry-level career in the IT industry.",
      "My technical journey is centered on Python development, core software engineering fundamentals, database systems, and applied machine learning. Through hands-on internships at Growwpark Technologies and Apollo Computer Education, I have worked on real-world coding, object-oriented software design, debugging, and database integration.",
      "I enjoy turning real-world problem statements into functional software—from developing multimodal machine learning models for early Alzheimer's diagnostic assistance to building intelligent phishing detection algorithms.",
    ],
    contact: {
      email: "jeeva.k3542@gmail.com",
      phone: "+91 76397 98118",
      rawPhone: "+917639798118",
      location: "Rayakottai, Krishnagiri / Hosur, Tamil Nadu",
      github: "https://github.com/Jeeva3542",
      githubUsername: "Jeeva3542",
      linkedin: "https://linkedin.com/in/jeeva-kumar",
      linkedinUsername: "jeeva-kumar",
      portfolioUrl: "https://jeeva3542.github.io/Jeeva-Portfolio",
      resumeFileName: "Jeeva_K_Resume.pdf",
      resumeDownloadPath: "/Jeeva_K_Resume.pdf",
      resumePreviewImage: "/resume-preview.webp",
      resumePreviewFallback: "/resume-preview.jpg",
    },
    profilePicture: "/profile.jpg",
    profilePictureAlt: "Jeeva K — Profile Picture",
    statusBadge: "Available for Entry-Level IT Roles",
  },

  highlights: [
    { label: "B.E. Computer Science", value: "7.53 CGPA", detail: "Er. Perumal Manimekalai College of Engg." },
    { label: "Industry Internships", value: "2+ Roles", detail: "Growwpark Technologies & Apollo Computer Education" },
    { label: "Technical Credentials", value: "9 Certifications", detail: "Cloud, Security, Python & AI Credentials" },
    { label: "Project Focus", value: "Python & ML", detail: "Multimodal Diagnostics & Security Systems" },
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used for problem solving and application development",
      iconName: "Code2",
      skills: [
        { name: "Python", tag: "Primary" },
        { name: "Java", tag: "Basic" },
      ],
    },
    {
      title: "Database Technologies",
      description: "Relational database modeling and SQL querying",
      iconName: "Database",
      skills: [
        { name: "MySQL", tag: "RDBMS" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      description: "Scientific computing, numerical data manipulation, and machine learning",
      iconName: "Cpu",
      skills: [
        { name: "Pandas", tag: "Data Analysis" },
        { name: "NumPy", tag: "Numerical Array Operations" },
        { name: "Scikit-Learn", tag: "Machine Learning" },
      ],
    },
    {
      title: "Development Tools & Platforms",
      description: "Development environments and workflow toolsets",
      iconName: "Wrench",
      skills: [
        { name: "VS Code", tag: "IDE" },
        { name: "Jupyter Notebook", tag: "Interactive Computing" },
      ],
    },
    {
      title: "Core Computer Science Concepts",
      description: "Academic computer science pillars and theoretical foundations",
      iconName: "Binary",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming (OOPs)" },
        { name: "Database Management Systems (DBMS)" },
        { name: "Computer Networks" },
        { name: "Machine Learning" },
      ],
    },
  ] as SkillCategory[],

  softSkills: [
    "Adaptability",
    "Quick Learner",
    "Communication Skills",
    "Problem Solving",
    "Teamwork",
    "Time Management",
  ],

  areasOfInterest: [
    { name: "Software Development", description: "Writing clean, maintainable code for real-world software applications." },
    { name: "Problem Solving", description: "Analyzing logical constraints and crafting structured algorithmic solutions." },
    { name: "UI/UX Design", description: "Creating intuitive, aesthetic, and user-centered software interfaces." },
    { name: "Graphic Design & Media", description: "Visual communication, digital layout design, and video editing." },
  ],

  education: [
    {
      id: "be-cse",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      institution: "Er. Perumal Manimekalai College of Engineering (PMC Tech)",
      location: "Hosur, Tamil Nadu",
      boardOrAffiliation: "Autonomous Institution",
      year: "2023 – 2027",
      grade: "7.53*",
      gradeLabel: "CGPA",
      description:
        "Comprehensive undergraduate coursework covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Machine Learning. Active participant in technical workshops and college hackathons.",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC / Grade XII)",
      institution: "Government Boys Higher Secondary School",
      location: "Rayakottai, Krishnagiri, Tamil Nadu",
      boardOrAffiliation: "State Board (TN)",
      year: "2023",
      grade: "69%",
      gradeLabel: "Percentage",
      description:
        "Completed higher secondary school education with concentration in Science and Mathematics, laying foundational analytical and scientific reasoning skills.",
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC / Grade X)",
      institution: "Eternal Light Public School",
      location: "Rayakottai, Krishnagiri, Tamil Nadu",
      boardOrAffiliation: "Central Board of Secondary Education (CBSE)",
      year: "2021",
      grade: "67%",
      gradeLabel: "Percentage",
      description:
        "Completed secondary education with solid academic standing, actively participating in scholastic and extracurricular activities.",
    },
  ] as EducationItem[],

  internships: [
    {
      id: "growwpark",
      title: "Python Programming Intern",
      organization: "Growwpark Technologies Pvt. Ltd.",
      location: "Hosur, Tamil Nadu",
      duration: "June 2026",
      type: "Internship",
      responsibilities: [
        "Gained practical experience in Python programming through real-time development tasks and structured project modules.",
        "Implemented Object-Oriented Programming (OOP) paradigms, robust file handling, exception handling routines, and custom data structure implementations.",
        "Worked on database connectivity routines to integrate Python applications with relational backend storage.",
        "Strengthened hands-on coding, debugging, analytical thinking, and code optimization practices in a team environment.",
      ],
      technologiesLearned: [
        "Python",
        "Object-Oriented Programming (OOP)",
        "File Handling",
        "Exception Handling",
        "Data Structures",
        "Database Connectivity",
      ],
    },
    {
      id: "apollo",
      title: "Python Intern",
      organization: "Apollo Computer Education",
      location: "Krishnagiri, Tamil Nadu",
      duration: "July 2025",
      type: "Internship",
      responsibilities: [
        "Completed hands-on training curriculum in Python programming, syntax fundamentals, and basic software engineering workflows.",
        "Applied Python concepts to build mini projects and implement command-line and interactive applications.",
        "Enhanced problem-solving, code comprehension, and debugging capabilities through structured algorithmic exercises.",
      ],
      technologiesLearned: [
        "Python Libraries",
        "Basic Application Development",
        "Debugging",
        "Problem Solving",
        "Programming Fundamentals",
      ],
    },
    {
      id: "vei-workshop",
      title: "Web Development Using Python",
      organization: "VEI Technologies",
      location: "Tamil Nadu",
      duration: "March 2024",
      type: "Industrial Training",
      responsibilities: [
        "Attended comprehensive workshop focusing on modern web development practices utilizing Python.",
        "Explored client-server architecture, backend routing concepts, and dynamic web application fundamentals.",
      ],
      technologiesLearned: [
        "Python Web Architecture",
        "Backend Routing",
        "Web Development Practices",
      ],
    },
  ] as Internship[],

  projects: [
    {
      id: "alzheimer-diagnostic",
      title: "Beyond the Pen Stroke: Multimodal Alzheimer's Diagnostic Web Application",
      year: "2027",
      category: "Machine Learning & Healthcare AI",
      shortOverview:
        "A multimodal machine learning diagnostic system utilizing handwriting image patterns and kinematic movement data for early Alzheimer's disease detection.",
      problem:
        "Alzheimer's disease is challenging to detect in its early stages without costly, invasive, and intimidating clinical procedures. Early and accessible detection is critical for administering supportive therapies before significant cognitive deterioration occurs.",
      technicalApproach: [
        "Architected a multimodal data pipeline fusing visual handwriting image data with dynamic kinematic movement signals.",
        "Leveraged the VGG16 deep convolutional neural network for automated high-level spatial feature extraction from handwriting image samples.",
        "Applied Binary Grey Wolf Optimization (B-GWO) metaheuristic algorithm for effective feature selection, reducing dimensional redundancy.",
        "Trained Support Vector Machine (SVM) classifiers to accurately differentiate healthy control subjects from early-stage Alzheimer's patients.",
      ],
      technologies: ["Python", "VGG16", "Scikit-Learn", "SVM", "B-GWO", "Machine Learning"],
      keyFeatures: [
        "Multimodal fusion combining visual spatial features and dynamic kinematic signals",
        "Transfer learning integration with pre-trained VGG16 feature extractor",
        "Metaheuristic feature optimization using Binary Grey Wolf Optimization (B-GWO)",
        "Robust SVM classification for high diagnostic reliability",
        "Objective, non-invasive methodology suitable for early-stage screening assistance",
      ],
      githubUrl: "https://github.com/Jeeva3542",
    },
    {
      id: "phishing-detection",
      title: "Phishing Detection System",
      year: "2027",
      category: "Machine Learning & Cybersecurity",
      shortOverview:
        "A machine learning-based cyber threat detection system employing text preprocessing, feature extraction, and supervised classification to identify phishing attempts.",
      problem:
        "Deceptive email messaging and fraudulent URLs constitute primary attack vectors in modern social engineering. Users frequently fall victim to sophisticated attacks that mimic legitimate corporate communications.",
      technicalApproach: [
        "Engineered a dedicated text preprocessing pipeline performing tokenization, noise removal, and lexical feature transformation.",
        "Extracted structural, keyword, and lexical attributes using Pandas and NumPy data manipulation libraries.",
        "Trained and evaluated supervised classification models including Logistic Regression and Decision Tree algorithms on curated threat datasets.",
        "Benchmarked model performance to achieve high precision and low false-positive rates on authentic messages.",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Logistic Regression", "Decision Tree"],
      keyFeatures: [
        "Automated text cleaning and feature engineering pipeline",
        "Dual-model classification benchmark using Logistic Regression and Decision Tree",
        "High-accuracy discrimination between fraudulent phishing vectors and authentic text",
        "Scalable architecture deployable into mail filtering or security gateway workflows",
      ],
      githubUrl: "https://github.com/Jeeva3542",
    },
  ] as Project[],

  certifications: [
    {
      id: "cert-digi-marketing",
      title: "Introduction to Digital Marketing Fundamentals Course",
      issuer: "Simplilearn",
      year: "2026",
      credentialId: "9900800",
      category: "General",
    },
    {
      id: "cert-sec-risks",
      title: "Mitigating Security Risks: Cyber Security Risks",
      issuer: "Skillsoft",
      year: "2026",
      category: "Cybersecurity",
    },
    {
      id: "cert-gcp-bigquery",
      title: "GCP Data Engineer Pro: BigQuery Data Warehouse",
      issuer: "Skillsoft",
      year: "2026",
      category: "Cloud & Data",
    },
    {
      id: "cert-gcp-engineer",
      title: "GCP Data Engineer Pro: Becoming a Google Cloud Data Engineer",
      issuer: "Skillsoft",
      year: "2026",
      category: "Cloud & Data",
    },
    {
      id: "cert-ai-ml",
      title: "Artificial Intelligence and Machine Learning",
      issuer: "Skillsoft",
      year: "2026",
      category: "AI & Machine Learning",
    },
    {
      id: "cert-comptia",
      title: "CompTIA IT Fundamentals: Internet, Storage, & Computer Systems",
      issuer: "Skillsoft",
      year: "2026",
      category: "IT Fundamentals",
    },
    {
      id: "cert-infosys-sec",
      title: "Fundamentals of Information Security",
      issuer: "Infosys Springboard (Wingspan)",
      year: "2026",
      category: "Cybersecurity",
    },
    {
      id: "cert-infosys-cyber",
      title: "Introduction to Cyber Security",
      issuer: "Infosys Springboard (Wingspan)",
      year: "2026",
      category: "Cybersecurity",
    },
    {
      id: "cert-infosys-crypto",
      title: "Fundamentals of Cryptography",
      issuer: "Infosys Springboard (Wingspan)",
      year: "2026",
      category: "Cybersecurity",
    },
  ] as Certification[],

  academicRecognition: {
    title: "National Level Technical Quiz",
    achievement: "Secured 2nd Place",
    organization: "Christ College of Science and Management",
    date: "March 2026",
    context: "National Level IT Fest Competition",
  },
};

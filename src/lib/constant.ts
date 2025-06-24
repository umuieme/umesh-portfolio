import { ProjectType } from "./types";

export const HERO = {
    name: "Umesh Basnet",
    summary: "Mobile Developer working with Android, iOS, Flutter, React Native, and backend with Node.js & NestJS. Always eager to learn new tech."
}

export const ABOUT_ME = {
    heading: "About Me",
    paragraphs: [
        `I'm a mobile-first developer with a strong foundation in Flutter and native Android development. I also have hands-on experience with iOS development using SwiftUI and some exposure to React Native.`,
        `While my primary focus is mobile app development, I’m equally comfortable working on the backend — especially with Node.js and NestJS. I've built and deployed apps using cloud platforms like Appwrite and Firebase, enabling full-stack capabilities.`,
        `Outside of production work, I love exploring new technologies. Recently, I've been diving into frontend development with Next.js, experimenting with Figma for design, and learning more about the growing world of AI/ML.`,
        `I'm always excited to learn, build, and iterate on meaningful tech.`,
    ]
};

export const SKILLS = {
    "Programming Languages": ["Swift", "Objective-C", "JavaScript", "Dart"],
    "Mobile Development": [
        "Flutter", "BLoC", "Provider", "Animation", "Drift", "SQLite",
        "React Native", "Redux", "MobX", "React Navigation", "Apollo GraphQL",
        "iOS Development", "Xcode", "Instruments", "Push Notifications", "Background Tasks"
    ],
    "Backend & APIs": ["RESTful APIs", "GraphQL", "SQLite"],
    "Tools & Collaboration": [
        "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Scrum", "Agile", "Codemagic", "Bitrise"
    ],
    "Testing": [
        "Test Cases", "Test Strategy", "Automated Testing", "Selenium", "Unit Testing", "UI Testing", "Integration Testing"
    ],
    "UI/UX": ["Material Design Guidelines", "Human Interface Guidelines"]
};

export const EXPERIENCE = [
    {
        role: "QA Analyst Intern",
        company: "JD Power",
        location: "London, ON, Canada",
        period: "May 2024 - Dec 2024",
        website: "https://www.jdpower.com/",
        details: [
            "Performed manual testing and wrote automation test scripts using Serenity BDD (Java) and Playwright in UI, API, and ETL components.",
            "Collaborated with developers to identify bugs and track them effectively using JIRA.",
            "Performed regression testing to ensure existing functionalities were unaffected.",
            "Maintained over 98% test case pass rate across more than 6 components within the assigned delivery unit."
        ],
    },
    {
        role: "Software Developer Consultant",
        company: "Hyteno",
        location: "Paris, France",
        period: "Jan 2023 - Dec 2023",
        website: "https://www.hyteno.com/",
        details: [
            "Analyzed business requirements and translated them into technical specifications for development teams.",
            "Architected RESTful API and WebSocket communication for web and mobile platforms.",
            "Collaborated closely with stakeholders to align project goals with company vision.",
            "Participated in sprint planning, client meetings, and retrospectives."
        ],
    },
    {
        role: "Lead Engineer",
        company: "Webpoint Solutions LLC",
        location: "Kathmandu, Nepal",
        period: "Jul 2022 - Jul 2023",
        website: "https://webpoint.io/",
        details: [
            "Led development of mobile apps using React Native and Flutter, focusing on code quality and performance optimization.",
            "Facilitated collaboration across designers, backend developers, and project managers.",
            "Provided feedback on design and UI/UX to create user-friendly apps.",
            "Contributed to API design and integration with RESTful backend services.",
            "Developed CI/CD pipelines to automate deployments to Google Play and Apple App Store."
        ],
    },
    {
        role: "Sr. Mobile Developer",
        company: "Coding Mountain Pvt Ltd",
        location: "Lalitpur, Nepal",
        period: "Dec 2020 - Jun 2022",
        website: "https://codingmountain.com/",
        details: [
            "Formed and led a mobile app department of 10+ individuals ensuring project delivery and client satisfaction.",
            "Implemented clean code architecture and coding standards for maintainability and scalability.",
            "Managed client interactions, quality testing, and project handovers.",
            "Created prototypes for technical feasibility, facilitating quick client approvals.",
            "Developed native Flutter libraries in Kotlin and Swift to improve performance and features.",
            "Independently developed a macOS application enhancing company capabilities."
        ],
    },
    {
        role: "Mobile Developer",
        company: "Young Innovations Pvt Ltd",
        location: "Lalitpur, Nepal",
        period: "Sep 2015 - Nov 2020",
        website: "https://younginnovations.com.np/",
        details: [
            "Developed native Android apps using Java and Kotlin applying Clean Architecture principles.",
            "Researched and integrated Flutter and React Native into production apps.",
            "Led user testing, design thinking, and client training for user-centric projects.",
            "Resolved customer issues by debugging and delivering defect fixes."
        ],
    },
];

export const PROJECTS: ProjectType[] = [
    //   {
    //     title: "Walking Buddy",
    //     type: "Mobile App",
    //     description:
    //       "iOS app that connects users for real-time walking sessions using Firebase Auth, Firestore, and MapKit. Features include buddy matching, real-time location tracking, and emergency SOS features.",
    //     tech: ["SwiftUI", "Firebase", "MapKit"],
    //     tags: ["iOS", "SwiftUI", "Firebase", "Real-time", "Location", "Social"],
    //     links: {
    //       github: "https://github.com/yourusername/walking-buddy",
    //     },
    //   },
    //   {
    //     title: "ZeroCodeAPI",
    //     type: "Frontend + Backend",
    //     description:
    //       "No-code backend generator using Next.js and MongoDB. Allows users to visually create REST APIs with schema-aware validation, CRUD endpoints, and data dashboards.",
    //     tech: ["Next.js", "TailwindCSS", "MongoDB", "Zod"],
    //     tags: ["Web", "No-code", "MongoDB", "REST API", "CRUD", "Admin"],
    //     links: {
    //       website: "https://zerocodeapi.dev",
    //       github: "https://github.com/yourusername/zerocodeapi",
    //     },
    //   },
    {
        title: "EizoMushi",
        tech: ["Flutter", "Dart", "REST API", "Video Playback"],
        description:
            "An anime streaming app built in Flutter, featuring video playback, browsing via REST API, and styled custom UI.",
        type: "mobile",
        tags: ["Flutter", "Streaming", "Video", "Anime", "Dart", "REST API", "Flutter BLoC", "Hive"],
        links: {
            github: "https://github.com/umuieme/EizoMushi",
        },
    },
    {
        title: "AstroGlance",
        tech: ["SwiftUI", "iOS", "NASA API", "ARKit", "WidgetKit", "AI Summary"],
        description:
            "An iOS app that displays NASA's Astronomy Picture of the Day (APOD) with offline caching, AI-generated summaries, interactive timeline, and ARKit support.",
        type: "mobile",
        tags: [
            "SwiftUI",
            "iOS",
            "NASA",
            "APOD",
            "ARKit",
            "WidgetKit",
            "AI",
            "Offline Support",
            "Timeline",
            "Swift"
        ],
        links: {
            github: "https://github.com/umuieme/AstroGlance",
        },
    },
    {
        title: "Dumb Charades",
        tech: ["Flutter", "Dart", "Riverpod", "AppWrite"],
        description:
            "A fun mobile game app developed in Flutter using Riverpod and Hooks for state management and UI optimization.",
        type: "mobile",
        tags: ["Flutter", "Riverpod", "Hooks", "Game", "Mobile", "Dart"],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.umuieme.dumb_charades",
        },
    },
    {
        title: "Flutter RN Cleaner",
        tech: ["Flutter", "Dart", "Shell Script"],
        description:
            "A cleanup script that recursively detects and cleans Flutter and React Native projects by removing build artifacts and dependencies to maintain project hygiene.",
        type: "utility",
        tags: ["Flutter", "React Native", "Cleaner", "Build", "Automation"],
        links: {
            github: "https://github.com/umuieme/flutter_rn_cleaner",
        },
    },
    {
        title: "Sudoku",
        tech: ["Flutter", "Dart", "Riverpod", "Hooks"],
        description:
            "A Sudoku puzzle app built with Flutter, using Riverpod for state management and hooks for reactive UI components.",
        type: "mobile",
        tags: ["Flutter", "Dart", "Sudoku", "Puzzle", "Riverpod", "Hooks"],
        links: {
            github: "https://github.com/umuieme/sudoku",
        },
    }



];

// lib/constant.ts

export const EDUCATION = [
    {
        degree: "Enterprise Software Development",
        institution: "Humber Polytechnic",
        duration: "Jan 2025 - Aug 2025",
        location: "Toronto, Canada",
    },
    {
        degree: "Software and Information Systems Testing",
        institution: "Fanshawe College",
        duration: "Aug 2023 - Aug 2024",
        location: "London, Canada",
    },
    {
        degree: "Bachelor of Science in Computer Science and Information Technology",
        institution: "Tribhuvan University",
        duration: "Nov 2011 - Dec 2015",
        location: "Kathmandu, Nepal",
    },
];

export const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
];

export const LOGOS = [
  { name: "Flutter", src: "/logos/flutter.svg" },
//   { name: "Android", src: "/logos/android.svg" },
//   { name: "iOS", src: "/logos/ios.svg" },
//   { name: "Node.js", src: "/logos/nodejs.svg" },
//   { name: "NestJS", src: "/logos/NestJS.svg" },
];

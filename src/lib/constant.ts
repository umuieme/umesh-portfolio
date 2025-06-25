import { ProjectType } from "./types";

export const HERO = {
    name: "Umesh Basnet",
    summary: "A problem-solver first, a software developer second. I build for any screen or server, quickly adapting to new technologies. My current toolkit is diverse, including Flutter, React Native, iOS, Android, and NestJS, and I thrive on expanding it to deliver the best possible solution."
}

export const ABOUT_ME = {
    heading: "About Me",
    paragraphs: [
        `As a software developer, I thrive on building complete, end-to-end solutions that live on screens and servers alike. My expertise covers the full application lifecycle, from crafting intuitive mobile experiences using Flutter, native Android (Kotlin/Java), and SwiftUI, to engineering robust backend systems with Node.js and NestJS.`,
        `My approach is to architect the right solution for the problem at hand. Whether that means deploying a full-stack application from scratch with cloud services like Firebase and Appwrite or integrating seamlessly with existing infrastructure, my focus is always on delivering a reliable and well-crafted product.`,
        `This passion for building extends beyond my production work. I'm constantly exploring new domains to broaden my perspective, recently diving into frontend with Next.js, prototyping with Figma to bridge the gap between design and development, and exploring the fascinating world of AI/ML.`,
        `Ultimately, I am driven by the process of learning, building, and iterating to create technology that makes a meaningful impact.`
    ]
};

export const SKILLS = {
    "Programming Languages": ["Swift", "Kotlin", "Java", "Dart", "JavaScript", "TypeScript"],
    "Mobile Development": [
        "SwiftUI", "Android", "Kotlin Coroutines", "Room",
        "Flutter", "BLoC", "Provider", "Drift", "SQLite",
        "React Native", "Redux", "MobX", "React Navigation", "Apollo GraphQL",
        "Push Notifications", "Core Data", "Google Maps", "Firebase", "Appwrite"
    ],
    "Backend & APIs": ["Node JS, NEST JS, RESTful APIs", "GraphQL", "MySQL", "Postgres", "MongoDB"],
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
        role: "Sr. Mobile Developer",
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
    {
        title: "Walking Buddy (WIP)",
        type: "Mobile App",
        description:
            "iOS app that connects users for real-time walking sessions using Firebase Auth, Firestore, and MapKit. Features include buddy matching, real-time location tracking, and emergency SOS features.",
        tech: ["SwiftUI", "Firebase", "MapKit"],
        tags: ["iOS", "SwiftUI", "Firebase", "Real-time", "Location", "Social"],
        links: {
            github: "https://github.com/umuieme/GoForAWalk",
        },
    },
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
            "An iOS app that displays NASA's Astronomy Picture of the Day (APOD) with image download option",
        type: "mobile",
        tags: [
            "SwiftUI",
            "iOS",
            "NASA",
            "APOD",
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

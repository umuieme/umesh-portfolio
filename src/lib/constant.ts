import { ProjectType } from "./types";

export const HERO = {
    name: "Umesh Basnet",
    summary: "A problem-solver first, a software developer second. I build for any screen or server, quickly adapting to new technologies. My current toolkit is diverse, including Flutter, React Native, iOS, Android, and NestJS, and I thrive on expanding it to deliver the best possible solution."
}

export const ABOUT_ME = {
    heading: "About Me",
    paragraphs: [
        `I'm a problem-solver first, and a software developer second. My passion lies in building complete, end-to-end solutions that live on screens and servers alike..`,
        `My expertise covers the full application lifecycle—from crafting intuitive mobile experiences using Flutter, native Android (Kotlin/Java), and SwiftUI, to engineering robust backend systems with Node.js and NestJS. I've had the privilege of not only building apps from scratch with services like Firebase and Appwrite, but also leading and mentoring development teams to deliver high-quality products.`,
        `I believe technology is a craft. This belief pushes me to constantly explore new domains to broaden my perspective, whether that means prototyping in Figma, diving into frontend with Next.js, or exploring the fascinating world of AI/ML.`,
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
            "Developed robust automation test scripts using Serenity BDD and Playwright for critical UI, API, and ETL components.",
            "Maintained a >98% test case pass rate, contributing to stable release cycles through meticulous bug tracking and team collaboration in JIRA."
        ],
    },
    {
        role: "Software Developer Consultant",
        company: "Hyteno",
        location: "Paris, France",
        period: "Jan 2023 - Dec 2023",
        website: "https://www.hyteno.com/",
        details: [
            "Translated complex business requirements into detailed architectural specifications to guide development teams and ensure project feasibility.",
            "Architected and implemented scalable backend solutions, including RESTful APIs and real-time WebSocket communications for high-traffic platforms."
        ],
    },
    {
        role: "Lead Engineer",
        company: "Webpoint Solutions LLC",
        location: "Kathmandu, Nepal",
        period: "Jul 2022 - Jul 2023",
        website: "https://webpoint.io/",
        details: [
            "Led the end-to-end development of cross-platform applications using Flutter and React Native, establishing best practices for code quality, testing, and performance.",
            "Engineered and maintained CI/CD pipelines for both Google Play and the App Store, automating the deployment process and reducing manual release time by over 90%.",
            "Drove technical strategy across the full stack, from contributing to backend API design to collaborating with designers on UI/UX implementation."
        ],
    },
    {
        role: "Sr. Mobile Developer",
        company: "Coding Mountain Pvt Ltd",
        location: "Lalitpur, Nepal",
        period: "Dec 2020 - Jun 2022",
        website: "https://codingmountain.com/",
        details: [
            "Built and led a new mobile department of 10+ developers, establishing all development standards and authoring comprehensive technical documentation.",
            "Secured a key client contract by rapidly engineering a high-fidelity Flutter POC in just 3 days, proving technical viability and business value.",
            "Developed custom Flutter packages that invoked native Kotlin/Swift code to access platform-specific APIs and hardware features like AVFoundation.",
            "Partnered with another engineer to build and launch the company's first native macOS desktop application, expanding its service offerings."
        ],
    },
    {
        role: "Sr. Mobile Developer",
        company: "Young Innovations Pvt Ltd",
        location: "Lalitpur, Nepal",
        period: "Sep 2015 - Nov 2020",
        website: "https://younginnovations.com.np/",
        details: [
            "Introduced and led the first implementation of Flutter in the company, researching, prototyping, and shipping production-ready cross-platform apps.",
            "Architected a scalable, white-labeled platform using Android Product Flavors, successfully deploying customized apps for over 23 different municipalities.",
            "Maintained mission-critical, enterprise Android applications using Java and Kotlin, achieving and sustaining a 99.9% crash-free rate."
        ],
    },
];;
export const PROJECTS: ProjectType[] = [

    {
        title: "Walking Buddy (WIP)",
        type: "iOS App / Personal Project",
        details: [
            "Designing a social fitness app to connect users for real-time, synchronized walking sessions, promoting both health and safety.",
            "Architected with a Firebase backend (Auth, Firestore) to manage user profiles, real-time matching, and live data streaming.",
            "Integrated Apple's MapKit for live location tracking of both users on a shared map and implemented emergency SOS features."
        ],
        tech: ["SwiftUI", "Firebase", "MapKit", "CoreLocation"],
        tags: ["iOS", "SwiftUI", "Firebase", "Real-time", "Location", "Social"],
        links: {
            github: "https://github.com/umuieme/GoForAWalk",
        },
    },
    {
        title: "EizoMushi",
        type: "Flutter App / Personal Project",
        details: [
            "Developed a feature-rich anime streaming client to demonstrate advanced Flutter capabilities in handling media and complex API data.",
            "Implemented the BLoC pattern for predictable state management and utilized the Dio package for efficient data fetching from a RESTful API.",
            "Engineered a custom video player with subtitle support and playback controls for a seamless streaming experience."
        ],
        tech: ["Flutter", "Dart", "BLoC", "Dio", "REST API"],
        tags: ["Flutter", "Streaming", "Video", "Anime", "Dart", "REST API", "BLoC"],
        links: {
            github: "https://github.com/umuieme/EizoMushi",
        },
    },
    {
        title: "Dumb Charades",
        type: "Flutter App / Published Game",
        details: [
            "A classic party game brought to mobile, designed with a focus on fun, intuitive UI and smooth animations in Flutter.",
            "Utilized Riverpod and Flutter Hooks for highly efficient and reactive state management, ensuring the game timer, score, and turns update flawlessly.",
            "Successfully published to the Google Play Store, demonstrating a full understanding of the app release lifecycle."
        ],
        tech: ["Flutter", "Dart", "Riverpod", "Hooks"],
        tags: ["Flutter", "Riverpod", "Game", "Mobile", "Dart"],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.umuieme.dumb_charades",
        },
    },
    {
        title: "Flutter RN Cleaner",
        type: "Developer Utility / Open Source",
        details: [
            "Created a command-line utility to solve a common developer problem: cleaning up bloated project directories to reclaim disk space.",
            "Wrote a shell script that recursively detects and safely removes build artifacts and dependency caches for both Flutter and React Native projects.",
            "Published as an open-source tool on GitHub to contribute to the developer community."
        ],
        tech: ["Shell Script", "Automation", "CLI"],
        tags: ["Flutter", "React Native", "Cleaner", "Build", "Automation", "CLI"],
        links: {
            github: "https://github.com/umuieme/flutter_rn_cleaner",
        },

    },
    {
        title: "Youth Summit Field App",
        type: "Flutter App (Professional Work)",
        details: [
            "Developed a real-time logistics and communication app to coordinate field activities and ensure team safety for hundreds of Youth Summit participants.",
            "Engineered a live location-sharing feature, integrating the Google Maps API with real-time data from Firebase and leveraging the BLoC pattern to efficiently manage team locations."
        ],
        tech: ["Flutter", "Dart", "BLoC", "Firebase", "Google Maps API"],
        tags: ["Flutter", "Real-time", "Location", "Firebase", "BLoC"],
        links: {},
    },
    {
        title: "Municipal Association of Nepal",
        type: "Flutter App (Professional Work)",
        details: [
            "Built a centralized, informative mobile application providing citizens with access to public data and services across various municipalities in Nepal.",
            "Designed a clean, intuitive user interface for displaying large sets of information, fetched dynamically from RESTful APIs."
        ],
        tech: ["Flutter", "Dart", "REST APIs"],
        tags: ["Flutter", "Dart", "Public Sector", "Data"],
        links: {
            appStore: "https://apps.apple.com/us/app/municipal-association-of-nepal/id1532738510",
            playStore: "https://play.google.com/store/apps/details?id=np.org.muannepal"
        },
    },
    {
        title: "Infrastructure Monitoring System (IMS)",
        type: "Android App (Professional Work)",
        details: [
            "Architected a scalable, white-labeled civic-tech platform used to monitor public infrastructure projects across Nepal.",
            "Leveraged Android Product Flavors to efficiently create, customize, and deploy unique versions of the application for more than 23 different municipalities.",
            "Integrated the Google Maps API to provide citizens and officials with real-time visualization of project locations, progress, and feedback."
        ],
        tech: ["Native Android", "Java", "Android Product Flavors", "Google Maps API", "REST APIs"],
        tags: ["Android", "Enterprise", "White-label", "Platform", "Maps", "Civic-Tech"],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.yipl.infrastructuremonitoring.sanfebagar"
        },
    },
    {
        title: "Label STEP",
        type: "Android App (Professional Work)",
        details: [
            "Developed a robust auditing application for field agents to conduct and manage supplier audits, replacing a manual, paper-based process.",
            "Engineered a sophisticated offline-first architecture using Kotlin, Room, and Coroutines to ensure full functionality and data integrity in remote areas.",
            "Designed a seamless data synchronization system that automatically queues and uploads large sets of audit data upon network reconnection."
        ],
        tech: ["Native Android", "Kotlin", "Room", "Coroutines", "Offline-first"],
        tags: ["Android", "Enterprise", "Offline", "Data Sync", "Kotlin", "Audit"],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.label.step",
        },
    },
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

export interface Project {
    name: string;
    period: string;
    tagline: string;
    description: string;
    role: string;
    techniques: string[];
    learned: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [

    {
        name: "Spoonful bot",
        period: "2020–heden",
        tagline: "Modulaire Discord bot",
        description:
            "Een modulaire Discord bot met die met meerdere accounts en configuraties kan werken.",
        role: "Lead Developer - Begon in een klein team maar ik ben er zelf uiteindelijk mee verder gegaan alleen.",
        techniques: ["JavaScript", "discord.js"],
        learned:
            "Het leren van Discord.js en meer evaring opdoen met node.js",
        featured: true,
    },
    {
        name: "SplashOS.com",
        period: "2022–heden",
        tagline: "Linux-gebaseerd besturingssysteem",
        description:
            "Een gebruikersvriendelijke Linux distro met als doel painpoints die gebruikers tegen komen van andere distros oplossen.",
        role: "Bedenker/Lead developer - Werkend in een team van 5 man",
        techniques: ["C", "Rust", "Python", "Bash"],
        learned:
            "Leren de inner workings van een Linux distro en hoe ik zelf er een kan maken met LFS(Linux From Scratch)",
        liveUrl: "https://splashos.com",
        featured: true,
    },
    {
        name: "Zoryal.com",
        period: "2025–2026",
        tagline: "AI art platform",
        description:
            "Een web app om AI plaatjes, videos of audio te maken. verbind nodes aan elkaar om een scene te maken en deze dan te kunnen genereeren",
        role: "Bedenker en solo developer - heb zelf bedacht voor het concept, architectuur, ontwikkeling en deployment.",
        techniques: ["JavaScript", "Go", "WebGL", "Llama.cpp", "PyTorch"],
        learned:
            "Ik heb vooral geleerd hoe ik moet gaan werken met AI, hoe ik zelf kleine modellen kan gaan bouwen via PyTorch en een LLM kan runnen met Llama.cpp",
        featured: false,
    },
    {
        name: "WatchCreo.com",
        period: "2020–2023",
        tagline: "Video platform",
        description:
            "TODO",
        role: "TODO",
        techniques: ["PHP"],
        learned:
            "TODO",
        liveUrl: "https://watchcreo.com",
    },
    {
        name: "iLoot.it",
        period: "2018–2019",
        tagline: "Advertentieplatform voor gamers",
        description:
            "TODO",
        role: "TODO",
        techniques: ["PHP"],
        learned:
            "TODO",
        liveUrl: "https://iloot.it",
    },
    {
        name: "Enthix.net",
        period: "2015–2019",
        tagline: "Minecraft server",
        description:
            "TODO",
        role: "TODO",
        techniques: ["Java"],
        learned:
            "TODO",
    },
    {
        name: "Maxspel.nl",
        period: "2011–2015",
        tagline: "Flash gamingwebsite",
        description:
            "TODO",
        role: "TODO",
        techniques: ["HTML", "CSS", "JavaScript"],
        learned:
            "TODO",
    },
];


export interface Experience {
    role: string;
    organisation: string;
    location: string;
    period: string;
    summary: string;
    referenceUrl?: string;
    referenceLabel?: string;
}

export const experience: Experience[] = [
    {
        role: "Software Developer",
        organisation: "Ministerie van Financiën",
        location: "Den Haag",
        period: "2023–2024",
        summary:
            "Gewerkt als software developer binnen minfin, evaring opgedaan met WEM script en met squid proxy voor icap integratie",
        referenceUrl: "https://www.linkedin.com/in/marvinalibahadoer",
        referenceLabel: "Referentie: oud werkgever (LinkedIn)",
    },
    {
        role: "DevOps",
        organisation: "Gemeente Rotterdam",
        location: "Rotterdam",
        period: "2022–2023",
        summary:
            "Gewerkt in het DevOps team voor de scanauto's, evaring opgedaan met K8s/OpenShift voor het bouwen van container infra",
        referenceUrl: "https://www.linkedin.com/in/eddievisser/",
        referenceLabel: "Referentie: oud werkgever (LinkedIn)",
    },
];

export interface Education {
    degree: string;
    school: string;
    location: string;
    period: string;
    summary: string;
}

export const education: Education[] = [
    {
        degree: "HBO Associate Degree Software Development",
        school: "Hogeschool Rotterdam",
        location: "Rotterdam",
        period: "2025–heden",
        summary:
            "Momenteel bezig met de Associate Degree Software Development aan de Hoogeschool Rotterdam.",
    },
    {
        degree: "MBO 4 Software Developer",
        school: "Techniek College Rotterdam",
        location: "Rotterdam",
        period: "2022–2024",
        summary:
            "Diploma behaald.",
    },
];

export interface RoadmapItem {
    period: string;
    goals: string[];
}


export const roadmap: RoadmapItem[] = [
    {
        period: "September-October",
        goals: [
            "TODO"
        ],
    },
    {
        period: "November-December",
        goals: [
            "TODO"
        ],
    },
    {
        period: "Januari-Februari",
        goals: [
            "TODO"
        ],
    },
    {
        period: "Maart-April",
        goals: [
            "TODO"
        ],
    },
    {
        period: "Mei-Juni",
        goals: [
            "TODO"
        ],
    },

]

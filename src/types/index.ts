export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    images: string[];
    category: "frontend" | "fullstack";
    features: string[];
}

export interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "Tools" | "Database";
    level: number;
    icon?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    twitter: string;
    about: string;
    education: string;
    journey: string;
}

export interface NavItem {
    title: string;
    href: string;
}
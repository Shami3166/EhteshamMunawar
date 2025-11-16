import type { Skill } from "@/types";

export const skills: Skill[] = [
    // Frontend
    { name: "React.js", category: "Frontend", level: 85 },
    { name: "TypeScript", category: "Frontend", level: 80 },
    { name: "JavaScript", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", category: "Frontend", level: 90 },
    { name: "HTML5", category: "Frontend", level: 95 },
    { name: "CSS3", category: "Frontend", level: 88 },
    { name: "shadcn/ui", category: "Frontend", level: 85 },

    // Backend
    { name: "Node.js", category: "Backend", level: 75 },
    { name: "Express.js", category: "Backend", level: 75 },
    { name: "RESTful APIs", category: "Backend", level: 80 },

    // Database
    { name: "MongoDB", category: "Database", level: 70 },
    { name: "Local Storage", category: "Database", level: 85 },

    // Tools
    { name: "Git & GitHub", category: "Tools", level: 80 },
    { name: "Vite", category: "Tools", level: 85 },
    { name: "VS Code", category: "Tools", level: 90 }
];
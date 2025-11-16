import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "Task Management App",
        description: "Full-stack task management application with authentication",
        longDescription: "A complete MERN stack application featuring user authentication, CRUD operations, and real-time updates. Users can create, update, delete, and organize tasks with a clean, intuitive interface.",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/Shami3166/task-management-app",
        liveUrl: "#", // Add your live URL when deployed
        images: ["/src/assets/images/projects/task-manager-1.png"],
        category: "fullstack",
        features: [
            "User Authentication & Authorization",
            "CRUD Operations for Tasks",
            "JWT Token Security",
            "Responsive Design",
            "RESTful API Architecture"
        ]
    },
    {
        id: 2,
        title: "Student Management System",
        description: "Frontend application for managing student records",
        longDescription: "A comprehensive student management system built with React and TypeScript. Features local storage persistence, data validation, and an elegant UI for managing student information efficiently.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Local Storage"],
        githubUrl: "https://github.com/Shami3166/Student-Management-System",
        liveUrl: "https://managementstudents.netlify.app/",
        images: ["/src/assets/images/projects/student-management-1.png"],
        category: "frontend",
        features: [
            "Local Storage Data Persistence",
            "Add/Edit/Delete Students",
            "Data Validation",
            "Search & Filter Functionality",
            "Responsive Design"
        ]
    },
    {
        id: 3,
        title: "Case Converter Tool",
        description: "Text transformation utility for various case formats",
        longDescription: "A versatile text conversion tool that transforms text between different case formats including uppercase, lowercase, camelCase, PascalCase, and more. Built with modern React practices.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
        githubUrl: "https://github.com/Shami3166/Case_Conversion",
        liveUrl: "https://case-conversion.vercel.app/",
        images: ["/src/assets/images/projects/case-converter-1.png"],
        category: "frontend",
        features: [
            "Multiple Case Conversions",
            "Real-time Preview",
            "Copy to Clipboard",
            "Clean, Modern UI",
            "Fast Performance with Vite"
        ]
    },
    {
        id: 4,
        title: "Word Counter Tool",
        description: "Advanced text analysis and word counting application",
        longDescription: "A feature-rich word counter that provides detailed text statistics including character count, word count, sentence count, and reading time estimates. Perfect for writers and content creators.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
        githubUrl: "https://github.com/Shami3166/WordCounter",
        liveUrl: "https://text-counter-tool.vercel.app/",
        images: ["/src/assets/images/projects/word-counter-1.png"],
        category: "frontend",
        features: [
            "Real-time Text Analysis",
            "Character & Word Counting",
            "Reading Time Estimation",
            "Multiple Statistics",
            "Responsive Design"
        ]
    }
];
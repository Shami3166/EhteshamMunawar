import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Filter } from "lucide-react";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack">("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background elements same as before */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header same as before */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Portfolio
            </span>
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated selection of my work showcasing modern web development
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-1 bg-white dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
            {[
              { key: "all", label: "All Projects" },
              { key: "frontend", label: "Frontend" },
              { key: "fullstack", label: "Full Stack" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as never)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  filter === item.key
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List with Alternating Layout */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200 dark:border-gray-700">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Interested in working together?{" "}
            <a
              href="#contact"
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Let's talk ›
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

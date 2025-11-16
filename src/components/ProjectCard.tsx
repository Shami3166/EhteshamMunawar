import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { ExternalLink, Github, Play, Globe, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative">
      {/* Background Glow Effect */}
      <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 0 transition-opacity duration-500 blur-xl" />

      <div
        className={`relative flex flex-col lg:flex-row gap-8 items-center p-6 backdrop-blur-sm rounded-2xltransition-all duration-500  ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 aspect-video group/image">
            {project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Play className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>
            )}

            {/* Overlay with Quick Actions */}
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover/image:opacity-100 transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge
                className={
                  project.category === "fullstack"
                    ? "bg-green-500 text-white text-sm px-3 py-1"
                    : "bg-blue-500 text-white text-sm px-3 py-1"
                }
              >
                {project.category === "fullstack" ? "Full Stack" : "Frontend"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 space-y-4">
          <div>
            <h3 className="text-2xl font-bold   mb-3 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-3">
              {project.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm rounded-lg">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {project.liveUrl && (
              <Button
                className="bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Website
                  <ArrowUpRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            )}

            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 group/btn backdrop-blur-sm"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Source Code
                <ExternalLink className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Connecting Line Animation */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

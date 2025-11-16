import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/data/personalInfo";
import { skills } from "@/data/skills";
import { SkillBadge } from "@/components/SkillBadge";
import { Target, Code, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About: React.FC = () => {
  const skillCategories = ["Frontend", "Backend", "Database", "Tools"];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Enhanced Background matching Home page */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-25 animate-float delay-2000" />
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-20 animate-float delay-1000" />
        <div className="absolute bottom-1/4 left-24 w-56 h-56 bg-pink-300 rounded-full blur-3xl opacity-15 animate-float delay-3000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-linear(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 15, top: 25, delay: 0, duration: 18 },
          { left: 75, top: 45, delay: 1, duration: 20 },
          { left: 35, top: 75, delay: 2, duration: 16 },
          { left: 65, top: 15, delay: 3, duration: 22 },
          { left: 85, top: 65, delay: 4, duration: 19 },
          { left: 25, top: 85, delay: 0.5, duration: 21 },
          { left: 65, top: 35, delay: 1.5, duration: 17 },
          { left: 45, top: 55, delay: 2.5, duration: 23 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              About
            </span>
            <div className="w-12 h-px bg-gray-300 dark:bg-gray-700" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        {/* Split Layout - Text on Left, Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-2xl font-light text-gray-800 dark:text-gray-200 leading-relaxed">
                I'm a{" "}
                <span className="font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>{" "}
                passionate about crafting digital solutions that make a
                difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in web development started in January 2024, and since
                then I've been immersed in learning modern technologies and
                building real-world projects. I believe in creating applications
                that are not just functional, but also provide exceptional user
                experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently, I'm pursuing my Bachelor's in Computer Science while
                actively working on personal projects to enhance my skills in
                full-stack development. I enjoy the challenge of turning complex
                problems into simple, elegant solutions.
              </p>
            </div>

            {/* Current Focus */}
            <div className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="p-2 bg-green-500/10 rounded-lg mt-1">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Currently Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced React patterns, Node.js optimization, and MongoDB
                  best practices. Expanding my knowledge in system design and
                  cloud technologies.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToProjects}
              className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              size="lg"
            >
              <span className="flex items-center">
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Right Content - Skills Visualization */}
          <div className="relative">
            {/* Main Skills Card */}
            <Card className="border-0 shadow-xl  backdrop-blur-sm   p-8">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="text-2xl flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="p-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-0">
                {skillCategories.map((category) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <SkillBadge key={skill.name} skill={skill} />
                        ))}
                    </div>
                  </div>
                ))}

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        4+
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        1+
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Year Exp
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Education & Goals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="border-0  backdrop-blur-sm ">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  {personalInfo.education}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building strong theoretical foundation while gaining practical
                  experience through real-world projects and continuous
                  learning.
                </p>
              </div>
            </CardContent>
          </section>

          <section className="border-0  backdrop-blur-sm ">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Career Goals
                </h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Seeking internship opportunities to contribute to meaningful
                  projects, learn from experienced developers, and grow as a
                  professional in the tech industry.
                </p>
              </div>
            </CardContent>
          </section>
        </div>

      
      </div>
    </section>
  );
};

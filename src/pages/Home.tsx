import React from "react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personalInfo";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  Mouse,
  Sparkles,
  Code,
  Coffee,
} from "lucide-react";

export const Home: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 animate-float delay-2000" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-25 animate-float delay-1000" />
        <div className="absolute bottom-1/4 -right-24 w-56 h-56 bg-pink-300 rounded-full blur-3xl opacity-20 animate-float delay-3000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-linear(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 10, top: 20, delay: 0, duration: 18 },
          { left: 80, top: 40, delay: 1, duration: 20 },
          { left: 30, top: 70, delay: 2, duration: 16 },
          { left: 60, top: 10, delay: 3, duration: 22 },
          { left: 90, top: 60, delay: 4, duration: 19 },
          { left: 20, top: 80, delay: 0.5, duration: 21 },
          { left: 70, top: 30, delay: 1.5, duration: 17 },
          { left: 40, top: 50, delay: 2.5, duration: 23 },
          { left: 85, top: 15, delay: 3.5, duration: 20 },
          { left: 25, top: 40, delay: 4.5, duration: 18 },
          { left: 65, top: 75, delay: 0.8, duration: 19 },
          { left: 45, top: 25, delay: 1.8, duration: 21 },
          { left: 15, top: 65, delay: 2.8, duration: 17 },
          { left: 75, top: 45, delay: 3.8, duration: 22 },
          { left: 35, top: 85, delay: 4.8, duration: 20 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-4 py-3 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available for Internship
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
                  {personalInfo.title}
                </h2>
              </div>

              {/* Typing Animation Effect */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-muted-foreground">
                <Code className="h-5 w-5 text-green-500 animate-bounce" />
                <span>MERN Stack Developer</span>
                <Coffee className="h-5 w-5 text-orange-500 animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Passionate about crafting{" "}
              <span className="text-blue-600 font-medium">
                digital experiences
              </span>{" "}
              that are both beautiful and functional. I specialize in modern web
              technologies and love turning
              <span className="text-purple-600 font-medium">
                {" "}
                ideas into reality
              </span>{" "}
              through clean, efficient code.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { number: "4+", label: "Projects", icon: "🚀" },
                { number: "1+", label: "Year Exp", icon: "💻" },
                { number: "MERN", label: "Stack", icon: "⚡" },
                { number: "100%", label: "Passionate", icon: "🔥" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="relative">
                    <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center justify-center space-x-1">
                      <span>{stat.icon}</span>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                size="lg"
              >
                <span className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 group"
                size="lg"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-6">
              {[
                {
                  href: personalInfo.github,
                  icon: Github,
                  label: "GitHub",
                  color:
                    "hover:bg-gray-900 hover:text-white hover:border-gray-900",
                },
                {
                  href: personalInfo.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                  color:
                    "hover:bg-blue-600 hover:text-white hover:border-blue-600",
                },
                {
                  href: personalInfo.twitter,
                  icon: Twitter,
                  label: "Twitter",
                  color:
                    "hover:bg-sky-500 hover:text-white hover:border-sky-500",
                },
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className={`h-14 w-14 rounded-2xl bg-background/60 backdrop-blur-sm border-2 border-border/50 ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image Section - Bigger and Cleaner */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-6 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />

                {/* Bigger Rounded Full Image */}
                <div className="relative w-96 h-96 rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-linear-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-purple-900">
                  <img
                    src="/profile-photo.png"
                    alt="Ehtesham Munawar"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: "center 30%" }}
                  />

                  {/* Clean Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-2 -left-2 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-blue-200 dark:border-blue-800 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      React
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-purple-200 dark:border-purple-800 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Node.js
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-8 -left-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      1+
                    </div>
                    <div className="text-xs text-muted-foreground">Years</div>
                    <div className="text-xs font-semibold text-blue-600">
                      Experience
                    </div>
                  </div>
                </div>

                {/* Project Count Badge */}
                <div className="absolute top-8 -right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-purple-200 dark:border-purple-800 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      4
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projects
                    </div>
                    <div className="text-xs font-semibold text-purple-600">
                      Completed
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-12 -right-12 w-10 h-10 bg-yellow-400 rounded-full animate-bounce shadow-lg" />
              <div className="absolute bottom-12 -left-12 w-8 h-8 bg-green-400 rounded-full animate-bounce delay-1000 shadow-lg" />
              <div className="absolute top-1/2 -right-14 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-500 shadow-lg" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToProjects}
            className="rounded-2xl bg-background/60 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110"
          >
            <Mouse className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

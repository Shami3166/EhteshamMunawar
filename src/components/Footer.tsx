import React from "react";
import { personalInfo } from "@/data/personalInfo";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background matching other pages */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-900/20" />

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-20" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ehtesham Munawar
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm leading-relaxed">
              MERN Stack Developer passionate about creating efficient, scalable
              web applications with modern technologies and clean code.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-blue-500" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {personalInfo.email}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone className="h-4 w-4 text-green-500" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {personalInfo.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 group">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="h-4 w-4 text-purple-500" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Ehtesham Munawar. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using
            React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

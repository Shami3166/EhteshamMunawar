import React from "react";
import { ContactForm } from "@/components/ContactForm";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Enhanced Background matching other pages */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-float" />
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Contact
            </span>
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Get In{" "}
            <span className="font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

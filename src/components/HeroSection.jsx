import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-6"
    >
      {/* PROFILE PHOTO */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-xl bg-primary/40"></div>
        <img
          src="/profile.png"
          alt="Profile"
          className="relative w-40 h-40 rounded-full object-cover border-2 border-primary/40 shadow-xl"
        />
      </div>

      {/* TEXT */}
      <div className="space-y-3 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">MD SAAD</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground">
          Software Engineer & Data Science Enthusiast Building intelligent and data-driven software 
          using Python, DSA, SQL, and AI-assisted development.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-row gap-4 pt-2">
        <a href="#projects" className="cosmic-button px-6 py-2 rounded-full">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition">
          Get In Touch
        </a>
      </div>

      {/* SCROLL DOWN ICON */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      
      </div>
    </section>
  );
};
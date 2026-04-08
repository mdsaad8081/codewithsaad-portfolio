import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // programming
  { name: "C", level: 95, category: "programming" },
  { name: "C++", level: 90, category: "programming" },
  { name: "java", level: 95, category: "programming" },
  { name: "JavaScript", level: 98, category: "programming" },
  { name: "SQL", level: 99, category: "programming" },
  { name: "CSS3", level: 90, category: "programming" },
  
  

  // Database
  { name: "SQL ", level: 99, category: "Database" },
  { name: "Firebase ", level: 100, category: "Database" },
   { name: "chromeDB ", level: 100, category: "Database" },
  { name: "MongoDB ", level: 97, category: "Database" },
  { name: "SQLserver ", level: 98, category: "Database" },
  

  // Frontend & Web
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Redux", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 66, category: "Frontend" },
  { name: "Material UI", level: 69, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express.js", level: 65, category: "Backend" },
  { name: "Rest API", level: 60, category: "Backend" },
  { name: "asp.net", level: 55, category: "Backend" },
  { name: "Architecture", level: 60, category: "Backend" },

  // Ai
  { name: "OpenAI Gpt", level: 50, category: "Ai" },
  { name: "AutoGen", level: 40, category: "Ai" },
  { name: "OpenAI AI", level: 40, category: "Ai" },

// Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },

];

const categories = ["all", "programming", "Database", "Frontend", "Backend", "Tools", "Ai"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

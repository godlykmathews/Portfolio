import { Code, Database, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "Java", "HTML5", "CSS3", "PHP", "Python", "SQL", "C++", "Bash"]
  },
  {
    icon: Database,
    title: "Frameworks & Libraries",
    skills: ["React", "React Native", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "MySQL"]
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Arduino", "Jira", "REST APIs", "Firebase"]
  },
  {
    icon: GitBranch,
    title: "Specializations",
    skills: ["Full Stack Development", "Responsive Web Design", "API Integration", "Cloud Solutions", "AI/ML Enthusiast"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-muted text-sm rounded-md hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

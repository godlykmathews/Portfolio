import React from 'react';
import { Code, Database, PenTool as Tool, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'Java', 'HTML5', 'CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Terminal className="h-6 w-6" />,
    skills: ['React', 'Express', 'Node.js', 'Bootstrap', 'Handlebars', 'Tailwind', 'BootStrap']
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: ['MongoDB', 'MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: <Tool className="h-6 w-6" />,
    skills: ['Git', 'Linux', 'Arduino', 'VS Code']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2d3436] mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#0984e3] text-white rounded-lg">
                  {category.icon}
                </div>
                <h3 className="ml-3 text-xl font-bold text-[#2d3436]">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#f5f6fa] text-[#2d3436] rounded-lg text-sm font-medium hover:bg-[#00b894] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
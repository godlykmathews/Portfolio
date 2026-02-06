import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Developer Intern",
    company: "Thinkvyne Digital",
    location: "Kochi, Kerala",
    period: "June 2025 - Dec 2025",
    description: [
      "Developing the product's front-end using React and Tailwind CSS to create an intuitive and responsive user interface",
      "Integrating the front-end with a Laravel-based back-end, ensuring efficient data flow and high-performance functionality"
    ]
  },
  {
    title: "Freelance Web Developer",
    company: "Coxdo Solutions",
    location: "Kerala, India",
    period: "Sep 2024 - Present",
    description: [
      "Designed and developed responsive websites that improved client visibility and engagement",
      "Website Development for clients using React and Tailwind CSS, delivering scalable and high-performance applications",
      "Worked closely with clients to gather requirements, propose solutions, and ensure timely delivery of features with high quality and usability"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

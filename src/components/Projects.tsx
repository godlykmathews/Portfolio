import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
 {
  "title": "Digital Delivery Management System",
  "description": "Co-developed a real-time delivery system that reduced paper-based processes by 80% in live operations. Engineered a Flutter driver app with offline-first synchronization and digital proof of delivery, alongside a React admin dashboard for invoice management, driver assignments, and GPS tracking.",
  "technologies": [
    "Flutter",
    "React",
    "GPS Tracking",
    "Server Deployment"
  ],
  "period": "2026",
  "role": "Co-developer"
},
  {
    title: "Park Avail",
    description: "Full-stack parking space finder with real-time availability detection. Mobile app & website built with React and React Native, Node.js backend with MongoDB, Firebase authentication, and AI-powered hardware integration.",
    technologies: ["React", "React Native", "Node.js", "MongoDB", "Firebase", "AI"],
    period: "Oct 2024",
    role: "Full Stack Developer"
  },
  {
    title: "Smart Agriculture System",
    description: "Edge AI monitoring pipeline running on a Raspberry Pi 5 and ESP32 for real-time crop disease detection and targeted automated pesticide spraying directly in the field.",
    technologies: ["Raspberry Pi", "ESP32", "Python", "IoT", "Edge AI"],
    period: "May 2026",
    role: "Hardware & AI Developer"
  },
  {
    title: "Prabhatha Vachanam",
    description: "A cross-platform mobile application delivering daily morning Bible verses to users, featuring a clean, intuitive, and spiritually uplifting user interface.",
    technologies: ["Flutter", "Dart", "Mobile Development"],
    role: "Mobile Developer",
    link: "https://github.com/godlykmathews/prabhatha-vachanam"
  },
  {
    title: "Daily Bible Verse API",
    description: "A RESTful API service designed to reliably serve daily Bible verses to client applications.",
    technologies: ["Node.js", "REST API", "Backend"],
    role: "Backend Developer",
    link: "https://github.com/godlykmathews/Daily-BibleVerse-API"
  },
  {
    title: "Vite-FOSS-Paint",
    description: "A lightweight, high-performance, and Free and Open-Source (FOSS) web-based painting application packaged as an Electron desktop app.",
    technologies: ["React", "Vite", "Electron"],
    period: "Dec 2025",
    role: "Developer",
    link: "https://github.com/godlykmathews/Vite-FOSS-Paint"
  },
  {
    title: "Run All Apps",
    description: "VS Code extension with one-click status bar buttons for running development commands. Configurable JSON settings for flexible command management across multiple frameworks.",
    technologies: ["TypeScript", "VS Code API", "JSON"],
    period: "Sep 2025",
    role: "Developer",
    link: "https://marketplace.visualstudio.com"
  },
  {
    title: "Croche.mama",
    description: "Responsive coaching and e-commerce website combining online learning with product sales. Built for performance and maintainability.",
    technologies: ["React", "Vue", "Tailwind CSS"],
    period: "March 2025 - Feb 2026",
    role: "Web Developer"
  },
  {
    title: "Technical HSS Puthuppally Website",
    description: "Official website for Technical HSS Puthuppally, showcasing school information, events, and resources. Developed with a focus on accessibility and user experience.",
    technologies: ["Node.js", "Bootstrap", "Handlebars"],
    period: "Jan 2023",
    role: "Developer",
    link: "https://thssputhuppally.ihrd.ac.in/"
  },
  {
    title: "Methane Emission Story",
    description: "Educational website utilizing NASA Global Data API to raise awareness about methane's environmental impact. Created for NASA Space Apps Hackathon with interactive features.",
    technologies: ["React", "NASA API", "Data Visualization"],
    period: "Oct 2024",
    role: "Website Developer"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all group flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.role && (
                    <p className="text-sm text-primary mb-2">{project.role}</p>
                  )}
                  
                  {project.period && (
                    <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
                  )}
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-muted text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        {/* Dynamically show GitHub icon if it's a repo, otherwise show ExternalLink */}
                        {project.link.includes('github.com') ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        {project.link.includes('github.com') ? 'GitHub' : 'View'}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

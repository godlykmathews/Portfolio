import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Cybernix',
    description: 'Corporate website built with modern technologies',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    technologies: ['React', 'Tailwind', 'Nodejs'],
    liveUrl: 'https://cybernix.in',
    githubUrl: '#'
  },
  {
    title: 'IEDC.CEK',
    description: 'Website for Innovation and Entrepreneurship Development Cell',
    image: 'https://iedc-cek.vercel.app/images/iedc.cek.png',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://iedc-cek.vercel.app',
    githubUrl: '#'
  },
  {
    title: 'Technical HSS Puthuppally Website',
    description: 'Official website for Technical Higher Secondary School',
    image: 'https://thssputhuppally.ihrd.ac.in/assets/img/frontbuilding.webp',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://thssputhuppally.ihrd.ac.in',
    githubUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2d3436] mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#f5f6fa] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2d3436] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#0984e3] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00b894] hover:text-[#0984e3]"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00b894] hover:text-[#0984e3]"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-20 bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://godlykmathews.github.io/assets/img/profile.jpg"
              alt="Godly K Mathews"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-[#00b894]"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-[#2d3436] mb-2">Godly K Mathews</h1>
          <h2 className="text-xl text-[#0984e3] mb-6">Computer Science Engineering Student</h2>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center text-[#2d3436]">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Kottayam, Kerala, India</span>
            </div>
            <div className="flex items-center text-[#2d3436]">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:work.godlykm@gmail.com" className="hover:text-[#0984e3]">
              work.godlykm@gmail.com
              </a> 
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#2d3436] text-white hover:bg-[#0984e3] transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#2d3436] text-white hover:bg-[#0984e3] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-[#2d3436] mb-8">
              "First, solve the problem. Then, write the code." - John Johnson
            </blockquote>
            
            <p className="text-[#2d3436] leading-relaxed">
              Hello, I'm Godly K Mathews, a passionate self-taught programmer and a Computer Science Engineering student from Kerala, India. I have expertise in various programming languages such as C, C++, Python, and web designing. I have created my own website where I showcase my projects and articles, and I share my code repositories on GitHub. Alongside my technical skills, I enjoy spending quality time with my family and friends, watching sci-fi and fantasy movies, and reading books. I'm always open to new opportunities and challenges that can help me grow as a programmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
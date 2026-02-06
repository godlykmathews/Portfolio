const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm <span className="text-foreground font-semibold">Godly K Mathews</span>, 
              a passionate full-stack developer from Kerala, India, currently pursuing a B.Tech in Computer Science 
              at the College of Engineering, Kallooppara under APJ Abdul Kalam Technological University.
            </p>
            
            <p>
              I specialize in building modern, scalable web applications with a strong focus on <span className="text-primary font-medium">performance and clean user experience</span>. My core expertise includes front-end development with React and 
              React Native, back-end development using Node.js and Express, and database management with MongoDB and MySQL.
            </p>
            
            <p>
              I previously worked as a <span className="text-foreground font-semibold">Developer Intern at Thinkvyne Digital</span>, 
              where I built intuitive user interfaces using React and Tailwind CSS while integrating Laravel-based backend systems.
            </p>

            <p>
              I am currently working as a freelance web developer with <span className="text-foreground font-semibold">Coxdo.in</span>, 
              delivering scalable, production-ready web solutions and handling end-to-end feature development.
            </p>

            <p>
              Alongside client work, I continuously explore new technologies — especially in <span className="text-primary font-medium">AI, machine learning, and modern web architecture</span> — to expand my problem-solving toolkit and stay aligned with industry evolution.
            </p>

            <p>
              Beyond coding, I enjoy sci-fi movies, experimenting with cooking, and spending quality time with family and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

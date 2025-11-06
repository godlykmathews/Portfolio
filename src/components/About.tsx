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
              a passionate full-stack developer from Kerala, India, currently pursuing B.Tech in Computer Science 
              at College of Engineering, Kallooppara under APJ Abdul Kalam Technological University.
            </p>
            
            <p>
              I specialize in building modern web applications with a focus on <span className="text-primary font-medium">
              scalability and performance</span>. My expertise spans across front-end development with React and 
              React Native, back-end services with Node.js and Express, and database management with MongoDB and MySQL.
            </p>
            
            <p>
              Currently working as a <span className="text-foreground font-semibold">Developer Intern at Thinkvyne Digital</span>, 
              I'm developing intuitive user interfaces with React and Tailwind CSS while integrating with Laravel-based backends. 
              Previously, I worked as a freelance web developer at Coxdo Solutions, delivering scalable and high-performance applications.
            </p>

            <p>
              I have a keen interest in <span className="text-primary font-medium">AI and machine learning</span>, 
              and I'm always exploring emerging technologies to solve real-world problems. When I'm not coding, 
              I enjoy watching sci-fi movies, experimenting with cooking, and spending quality time with family and friends.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground mt-8">
              "First, solve the problem. Then, write the code." - John Johnson
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "College of Engineering, Kallooppara",
    university: "APJ Abdul Kalam Technological University",
    location: "Pathanamthitta, Kerala",
    period: "Sep 2023 - Present"
  },
  {
    degree: "Higher Secondary Education",
    field: "PCM with Computer Science & Electronic Systems",
    institution: "Technical Higher Secondary School, IHRD",
    university: "HSE Board",
    location: "Puthuppally, Kottayam",
    period: "June 2021 - May 2023"
  },
  {
    degree: "Grade 10",
    field: "Secondary Education",
    institution: "MGM Public School",
    university: "CBSE Delhi Board",
    location: "Vakathanam, Kottayam",
    period: "June 2009 - March 2021"
  }
];

const awards = [
  "Programming in Java - Elite Certificate - NPTEL IIT Kharagpur",
  "Introduction to Large Language Models - Google",
  "Introduction to Generative AI - Google",
  "Responsive Web Design - freeCodeCamp",
  "Information Gathering Fundamentals - VertualCyberLabs",
  "A Grade For Science Fair State Level - Working Model",
  "Brototype 100K Coding Challenge",
  "Web Designing Challenge",
  "YIP - Voice of Customer (Voc-2021)",
  "Arduino Workshop Participation"
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                  {edu.field !== "Secondary Education" && (
                    <p className="text-primary font-medium mb-2">{edu.field}</p>
                  )}
                  <p className="text-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.university}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Awards & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to new opportunities and collaborations. Feel
                  free to reach out if you'd like to discuss a project or just
                  say hello!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:work.godlykm@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      work.godlykm@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Kottayam, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a
                    href="https://github.com/godlykmathews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a
                    href="https://linkedin.com/in/godly-k-mathews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Prefer email? Feel free to reach out directly at:
                </p>
                <div className="space-y-2">
                  <Button className="w-full" size="lg" asChild>
                    <a href="mailto:work.godlykm@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      work.godlykm@gmail.com
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href="mailto:godlykmathews@outlook.com">
                      <Mail className="w-4 h-4 mr-2" />
                      godlykmathews@outlook.com
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  I typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

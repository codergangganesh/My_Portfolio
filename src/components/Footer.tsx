import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Engineering Portfolio. Built with{" "}
              <Heart className="inline w-4 h-4 text-primary fill-primary" /> and code.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

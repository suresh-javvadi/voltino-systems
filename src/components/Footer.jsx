import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Voltino Systems
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#expertise"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Expertise
            </a>
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Voltino Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

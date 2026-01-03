import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        gradient-navy-radial
        pt-24 sm:pt-26 md:pt-28 py-10
      "
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Power Electronics Innovation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold animate-fade-in-up">
            <span className="text-gradient">Innovate.</span>{" "}
            <span className="text-foreground">Collaborate.</span>{" "}
            <span className="text-gradient">Accelerate.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-1">
            We offer end-to-end product development solutions for all types of
            power electronics products. From concept to production, we transform
            your vision into market-ready innovations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group glow-cyan"
            >
              <a href="#contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary hover:text-foreground"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-10 sm:pt-14 border-t border-border/50 grid grid-cols-3 gap-8 animate-fade-in-delay-3">
            {[
              ["10+", "Years Experience"],
              ["50+", "Projects Delivered"],
              ["100%", "Client Satisfaction"],
            ].map(([value, label]) => (
              <div key={label} className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

import {
  ClipboardList,
  Lightbulb,
  Settings,
  TestTube,
  Package,
  HeadphonesIcon,
} from "lucide-react";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Requirements Fine-tuning",
    description:
      "Deep-dive into your product requirements, specifications, and market needs.",
  },
  {
    icon: Lightbulb,
    title: "Initial R&D & Prototype",
    description:
      "Concept development, feasibility studies, and rapid prototyping.",
  },
  {
    icon: Settings,
    title: "Mechanical Design",
    description:
      "Enclosure design, thermal management, and manufacturing optimization.",
  },
  {
    icon: TestTube,
    title: "Automated Testing",
    description:
      "Custom test jigs, automated validation, and quality assurance.",
  },
  {
    icon: Package,
    title: "Pilot & Mass Production",
    description:
      "Pre-pilot validation, pilot runs, and scaled manufacturing support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Development Support",
    description:
      "Field issue resolution, firmware updates, and ongoing maintenance.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy-radial" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Product Development <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach ensuring quality delivery at every stage of
            your product journey.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-primary bg-background px-2 z-10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 relative z-10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

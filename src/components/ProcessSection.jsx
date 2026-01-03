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
    <section
      id="process"
      className="
        relative
        overflow-hidden
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-navy-radial" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Product Development <span className="text-gradient">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A systematic approach ensuring quality delivery at every stage of
            your product journey.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center space-y-3"
              >
                {/* Step number */}
                <div className="text-xs font-bold text-primary bg-background px-2">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-foreground">
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

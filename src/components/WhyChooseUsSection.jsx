import { Award, Users, UserCheck, ThumbsUp, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Award,
    title: "Quality & Innovation",
    description:
      "Cutting-edge solutions with rigorous quality standards at every development phase.",
  },
  {
    icon: Users,
    title: "Customer Collaboration",
    description:
      "We work as an extension of your team, ensuring transparent communication throughout.",
  },
  {
    icon: UserCheck,
    title: "Expert Team",
    description:
      "Seasoned engineers with deep expertise in power electronics and embedded systems.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "100% focus on delivering solutions that exceed expectations and drive your success.",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description:
      "Highest ethical standards with robust confidentiality and intellectual property protection.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="gradient-navy pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="text-gradient">Voltino</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Partner with a team that’s committed to your product’s success from
            day one.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="
                group
                text-center
                p-5 sm:p-6 lg:p-8
                rounded-xl
                bg-secondary/30
                border border-border
                transition-all duration-300
                hover:border-primary/50 hover-lift
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <prop.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

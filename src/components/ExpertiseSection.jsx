import { Zap, Cpu, Radio, Wifi, Wrench, LineChart } from "lucide-react";

const expertiseItems = [
  {
    icon: Zap,
    title: "Power Electronics",
    description:
      "End-to-end power electronics product development including Solar PCUs, EV Chargers, Train Power Converters, and custom power conversion solutions.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems & PCB Design",
    description:
      "Hardware design with TI, ST, NXP, Microchip platforms. Multi-layer PCB design, Real-time OS development, and production-ready embedded solutions.",
  },
  {
    icon: Radio,
    title: "Digital Closed Loop Controls",
    description:
      "Advanced control algorithms including PID, State-Space, and Model Predictive Control. System identification and optimization for maximum efficiency.",
  },
  {
    icon: Wifi,
    title: "Remote Connectivity",
    description:
      "IoT-enabled monitoring solutions with WiFi, Ethernet, CAN, RS232/485, and MODBUS protocols. Cloud-based remote management systems.",
  },
  {
    icon: Wrench,
    title: "Mechanical Design",
    description:
      "Complete mechanical enclosure design, thermal management, component selection, and manufacturing-ready 3D models with tolerancing.",
  },
  {
    icon: LineChart,
    title: "Electrical & Mechanical Simulations",
    description:
      "MATLAB/Simulink, PLECS, and ANSYS simulations for system-level validation. Thermal, structural, and EMC analysis before prototyping.",
  },
];

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="
        relative
        gradient-navy-radial
        py-20 sm:py-24 lg:py-28
      "
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Comprehensive power electronics solutions from concept to
            production, backed by a decade of industry experience.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="
                group relative
                p-6 md:p-8
                rounded-xl
                gradient-card
                border border-border
                transition-all duration-300
                hover:border-primary/50 hover-lift hover-glow
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

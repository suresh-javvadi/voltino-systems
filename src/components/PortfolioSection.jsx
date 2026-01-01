import { ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Satellite EPS Systems",
    category: "Space & Aerospace",
    description: "Electrical Power System for Low Earth Orbit satellites with high-efficiency solar array regulation and battery management.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop",
  },
  {
    title: "On-Grid Solar PCU",
    category: "Renewable Energy",
    description: "High-efficiency grid-tied solar power conditioning units with MPPT and seamless grid synchronization.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    title: "High-Efficiency EV Chargers",
    category: "Electric Vehicles",
    description: "Fast-charging solutions for electric vehicles with 95%+ efficiency and smart grid integration.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
  },
  {
    title: "Low-Cost PV Grid-Tie System",
    category: "Solar Energy",
    description: "Cost-optimized photovoltaic inverters for residential and commercial installations.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
  },
  {
    title: "High-Power Programmable PSU",
    category: "Test Equipment",
    description: "Laboratory-grade programmable power supplies with precise voltage/current control up to 100kW.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    title: "KiMu Robomatics Toys",
    category: "Consumer Electronics",
    description: "Programmable educational robotics kits with embedded controllers and mobile app integration.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Low-Power DC UPS Systems",
    category: "Power Backup",
    description: "Compact uninterruptible power supplies for critical IoT and networking equipment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    title: "Custom Magnetics Design",
    category: "Components",
    description: "High-frequency transformers and inductors optimized for power density and thermal performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "500KVA Train Power Converters",
    category: "Railway Systems",
    description: "High-power auxiliary converters for railway applications with extreme reliability requirements.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy-radial" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse range of successful power electronics projects across industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift hover-glow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {study.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

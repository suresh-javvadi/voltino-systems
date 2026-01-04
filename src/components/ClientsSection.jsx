import { useEffect, useRef } from "react";

const clients = [
  { name: "Statcon Powtech", logo: "/client-logos/statcon-powtech.webp" },
  {
    name: "Statcon Electronics",
    logo: "/client-logos/statcon-electronics.webp",
  },
  { name: "Drone Power", logo: "/client-logos/drone-power.webp" },
  { name: "Laxven Technologies", logo: "/client-logos/laxven.webp" },
  { name: "XDLinx", logo: "/client-logos/xdlinx-space-labs.webp" },
  { name: "Antaris Space", logo: "/client-logos/antaris.webp" },
  { name: "Ananth Technologies", logo: "/client-logos/atl.webp" },
  { name: "KiMu Robomatics", logo: "/client-logos/kimu.webp" },
  { name: "General Datum", logo: "/client-logos/general-datum.webp" },
  { name: "MEPSTRA", logo: "/client-logos/mepstra.webp" },
  {
    name: "CHART",
    logo: "/client-logos/chart.webp",
  },
];

export function ClientsSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const width = marqueeRef.current.scrollWidth / 2;
    marqueeRef.current.style.setProperty("--marquee-width", `${width}px`);
  }, []);

  return (
    <section
      id="clients"
      className="gradient-navy-radial border-t border-border/50 py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Partnering with innovative companies across power electronics,
            aerospace, and IoT sectors.
          </p>
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent_0,white_20%,white_80%,transparent_100%)]">
          <div
            ref={marqueeRef}
            className="
    inline-flex animate-marquee items-center gap-8 whitespace-nowrap
    pr-8
    [--marquee-duration:45s]
    [&:has(.client-card:hover)]:[animation-play-state:paused]
  "
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="
          client-card
          group flex flex-col items-center justify-center
          min-w-[14rem] h-32 sm:min-w-[16rem] sm:h-36
          p-4 rounded-xl
          bg-secondary/30 border border-border/50
          hover:border-primary/50
          transition-all duration-300 hover:scale-110
          shadow-lg hover:shadow-xl
          flex-shrink-0
        "
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="
    h-14 sm:h-16 lg:h-20
    w-auto max-w-full object-contain
    drop-shadow-md
    transition-all duration-300 ease-out
    group-hover:-translate-y-1
    group-hover:scale-[1.03]
    group-hover:drop-shadow-2xl
  "
                />

                <span
                  className="
    mt-2 text-xs sm:text-sm text-muted-foreground
    text-center line-clamp-1
  "
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

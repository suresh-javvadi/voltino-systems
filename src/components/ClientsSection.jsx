const clients = [
  { name: "Statcon Energiaa", logo: "S" },
  { name: "Drone Power", logo: "DP" },
  { name: "Laxven Technologies", logo: "LT" },
  { name: "XDLinx", logo: "XD" },
  { name: "Antaris Space", logo: "AS" },
  { name: "Ananth Technologies", logo: "AT" },
  { name: "KiMu Robomatics", logo: "KR" },
  { name: "General Datum", logo: "GD" },
  { name: "MEPSTRA", logo: "M" },
];

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-20 md:py-24 gradient-navy border-t border-border/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground">
            Partnering with innovative companies across power electronics,
            aerospace, and IoT sectors.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Placeholder logo */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-muted flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                <span className="text-sm md:text-base font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
              <span className="text-xs text-muted-foreground text-center line-clamp-1">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <ClientsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Landing;

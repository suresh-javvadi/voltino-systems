import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
      </main>
    </div>
  );
};

export default Landing;

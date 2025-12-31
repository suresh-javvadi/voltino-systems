import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "@/components/HeroSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Landing;

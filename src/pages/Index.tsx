import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhatWeOffer from "@/components/WhatWeOffer";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PainPoints />
      <WhatWeOffer />
      <HowItWorks />
      <Features />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

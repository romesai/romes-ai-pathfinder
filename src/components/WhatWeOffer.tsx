import { Bot, Shield, Zap, Users, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Bot,
    title: "Personal AI Immigration Assistant",
    description: "Chat with an AI that understands F-1 visa rules, OPT/CPT requirements, and legal work options specific to your situation."
  },
  {
    icon: Shield,
    title: "Legal Compliance Guaranteed",
    description: "Never worry about violating your visa status again. Our AI ensures every recommendation is 100% legal and compliant."
  },
  {
    icon: Zap,
    title: "Instant Answers, 24/7",
    description: "No more waiting days for responses from advisors. Get accurate, personalized guidance whenever you need it."
  },
  {
    icon: Users,
    title: "Built for Immigrants, by Immigrants",
    description: "Created by someone who navigated the same journey. We understand the cultural nuances and emotional stress."
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Solution</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Finally, An AI That Gets It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Romes isn't just another chatbot. It's your personal immigration advisor that combines deep legal knowledge with empathy and understanding of the immigrant experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Chat Preview */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-strong">
            <div className="bg-white rounded-xl p-6 shadow-soft mb-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">You</span>
                </div>
                <div className="bg-muted rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-sm">I'm graduating in 3 months. What jobs can I apply for on OPT?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-primary/10 rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-sm text-primary">Based on your Computer Science degree, you can apply for software engineer, data analyst, or IT roles. I'll help you find companies that sponsor H-1B visas and show you exactly how to tailor your applications...</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Personalized, accurate, and always compliant</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl">
            Try Romes Free Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
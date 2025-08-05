import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Student Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with basic guidance",
    features: [
      "10 AI consultations per month",
      "Basic deadline reminders", 
      "Resume template access",
      "Community forum access",
      "Email support"
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Career Navigator", 
    price: "$29",
    period: "per month",
    description: "Everything you need to land your dream job",
    features: [
      "Unlimited AI consultations",
      "Advanced job matching",
      "OPT/CPT deadline automation",
      "Custom resume optimization",
      "H-1B sponsor database access",
      "Priority support",
      "Legal referral network"
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Immigration Pro",
    price: "$79", 
    period: "per month",
    description: "For complex cases and career advancement",
    features: [
      "Everything in Career Navigator",
      "1-on-1 advisor sessions",
      "Document review service",
      "Employer negotiation guidance",
      "Green card pathway planning",
      "White-glove support",
      "Custom legal consultations"
    ],
    cta: "Contact Sales",
    variant: "cta" as const,
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Choose Your Success Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing designed for students. Start free and upgrade as your career grows. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-card rounded-2xl p-8 shadow-soft border transition-all duration-300 hover:shadow-strong ${
                plan.popular 
                  ? 'border-primary/50 scale-105 lg:scale-110' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-strong">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-success" />
            <span className="text-success font-medium">
              14-day free trial • No credit card required • Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import { MessageSquare, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us Your Situation",
    description: "Share your degree, graduation timeline, and career goals. Our AI learns about your specific circumstances and visa status."
  },
  {
    icon: Brain,
    number: "02", 
    title: "Get Personalized Guidance",
    description: "Receive instant, accurate answers about work authorization, job opportunities, and legal requirements tailored to your profile."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Take Action With Confidence",
    description: "Apply for jobs, manage deadlines, and build your career knowing every step is legally compliant and strategically sound."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            How Romes Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. In just 3 steps, you'll have a personal AI advisor that understands your unique immigration journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border/50">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white font-bold text-lg mb-6 relative">
                    {step.number}
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 scale-150 animate-pulse"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-success font-medium">
              Average setup time: Less than 2 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
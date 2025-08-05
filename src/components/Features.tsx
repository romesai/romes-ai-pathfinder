import { Bot, Calendar, FileText, Scale, Briefcase, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Job Assistant",
    description: "Smart job matching based on your visa status, degree, and career goals. Find positions that actually sponsor international students.",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "OPT/CPT Deadline Tracker",
    description: "Never miss critical deadlines again. Automated reminders and step-by-step guidance for all visa-related applications.",
    color: "accent"
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "ATS-optimized resumes that highlight your international background as a strength and address common concerns.",
    color: "success"
  },
  {
    icon: Scale,
    title: "Legal Referrals", 
    description: "Connect with trusted immigration attorneys when you need professional legal advice for complex situations.",
    color: "warning"
  }
];

const additionalFeatures = [
  {
    icon: Briefcase,
    title: "H-1B Sponsor Database",
    description: "Access our curated list of companies that actively sponsor H-1B visas for international graduates."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other F-1 students, share experiences, and learn from those who've successfully navigated the system."
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Real-time status checks to ensure you're always in compliance with visa regulations and work authorization."
  },
  {
    icon: Zap,
    title: "Document Automation",
    description: "Auto-generate required forms and applications with pre-filled information and error checking."
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'accent':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'success':
      return 'bg-success/10 text-success border-success/20';
    case 'warning':
      return 'bg-warning/10 text-warning border-warning/20';
    default:
      return 'bg-primary/10 text-primary border-primary/20';
  }
};

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RomesAI provides a comprehensive suite of tools designed specifically for F-1 students navigating their career journey in America.
          </p>
        </div>
        
        {/* Core Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            return (
              <div key={index} className="bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-border/50 group">
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center border ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Additional Features */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Plus These Powerful Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              New features added monthly based on student feedback
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
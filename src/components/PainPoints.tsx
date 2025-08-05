import { AlertTriangle, Clock, FileQuestion, Briefcase, Brain, Heart } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Visa Deadline Panic",
    description: "Missing OPT/CPT deadlines that could destroy your future in America"
  },
  {
    icon: FileQuestion,
    title: "Legal Confusion",
    description: "Not knowing what jobs you can legally take without jeopardizing your status"
  },
  {
    icon: Briefcase,
    title: "Job Search Struggles",
    description: "Applying to hundreds of jobs that don't sponsor visas or understand F-1 restrictions"
  },
  {
    icon: Clock,
    title: "Time Running Out",
    description: "Feeling the pressure as graduation approaches with no clear plan for staying legally"
  },
  {
    icon: Brain,
    title: "Information Overload",
    description: "Drowning in conflicting advice from forums, friends, and outdated resources"
  },
  {
    icon: Heart,
    title: "Emotional Exhaustion",
    description: "Stress, anxiety, and feeling completely alone in navigating complex immigration rules"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            We Know Exactly How You Feel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Being an F-1 student in the U.S. is overwhelming. The system is complex, the stakes are high, and one mistake can derail your dreams. You're not alone in these struggles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-card rounded-full px-6 py-3 shadow-soft">
            <Heart className="w-5 h-5 text-destructive" />
            <span className="text-foreground font-medium">
              Built by someone who lived through this exact experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-white/90">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Join Thousands of Successful Students</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Stop Feeling Lost. Start Building Your
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              {" "}American Dream
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            You've worked too hard to let visa confusion derail your future. Join RomesAI today and get the personalized guidance you deserve from someone who truly understands your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90 group">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Schedule a Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">10,000+ Students Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Average 2 Min Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">4.9/5 Student Rating</span>
            </div>
          </div>
          
          <div className="mt-8 text-white/70 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
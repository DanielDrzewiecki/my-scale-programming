import { 
  Globe, 
  Rocket, 
  TrendingUp, 
  Users, 
  UserPlus, 
  Settings, 
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle
} from "lucide-react";
import { content } from '@/content/content';

export const CustomerJourney = () => {
  const { customerJourney } = content;
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return <Globe size={24} />;
      case "Rocket": return <Rocket size={24} />;
      case "TrendingUp": return <TrendingUp size={24} />;
      case "Users": return <Users size={24} />;
      case "UserPlus": return <UserPlus size={24} />;
      case "Settings": return <Settings size={24} />;
      case "Clock": return <Clock size={24} />;
      default: return <Globe size={24} />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red": return "border-gray-200 bg-gray-50 text-gray-700";
      case "blue": return "border-gray-200 bg-gray-50 text-gray-700";
      case "green": return "border-primary/20 bg-primary/5 text-primary";
      default: return "border-gray-200 bg-gray-50 text-gray-700";
    }
  };

  return (
    <section className="container py-16 sm:py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {customerJourney.title.highlight}{" "}
          </span>
          {customerJourney.title.main}
        </h2>
        <p className="text-xl text-muted-foreground mb-4">
          {customerJourney.subtitle}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {customerJourney.description}
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="relative mb-20">
        <div className="grid md:grid-cols-3 gap-8 relative z-20">
          {customerJourney.journey.map((step, index) => (
            <div key={step.phase} className="relative">
              {/* Arrow for desktop */}
              {index < customerJourney.journey.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-30">
                  <ArrowRight className="text-primary" size={24} />
                </div>
              )}
              
              <div className={`border-2 rounded-lg p-6 h-full ${getColorClasses(step.color)}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-full ${step.color === 'green' ? 'bg-primary/10' : 'bg-gray-100'}`}>
                    {getIcon(step.icon)}
                  </div>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm mb-4 opacity-90">
                  {step.description}
                </p>

                {/* Problems/Benefits/Results */}
                <div className="space-y-2">
                  {step.problems && step.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <XCircle size={16} className="text-gray-500 flex-shrink-0" />
                      <span>{problem}</span>
                    </div>
                  ))}
                  {step.benefits && step.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                  {step.results && step.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow for mobile - REMOVED for mobile optimization */}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Grid entfernt – die vier Kennzahl-Karten unter der Transformation werden nicht mehr angezeigt */}
    </section>
  );
};

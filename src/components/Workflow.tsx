import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { Target, Rocket, BarChart, TrendingUp, ArrowRight } from "lucide-react";

export const Workflow = () => {
  const { workflow } = content;
  
  const handleWorkshopClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target": return <Target className="w-8 h-8 text-white" />;
      case "Rocket": return <Rocket className="w-8 h-8 text-white" />;
      case "BarChart": return <BarChart className="w-8 h-8 text-white" />;
      case "TrendingUp": return <TrendingUp className="w-8 h-8 text-white" />;
      default: return <Target className="w-8 h-8 text-white" />;
    }
  };

  const getColor = (index: number) => {
    const colors = ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-orange-600"];
    return colors[index % colors.length];
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {workflow.title.main}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {workflow.title.highlight}
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {workflow.subtitle}
        </p>
      </div>

      {/* Container ohne Progress Line */}
      <div className="relative mb-16">

        <div className="grid md:grid-cols-4 gap-8">
          {workflow.steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <Card className={`relative z-10 hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                step.highlighted 
                  ? 'bg-gradient-to-b from-primary to-primary/80 text-white' 
                  : 'bg-white'
              }`}>
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className={`text-sm font-bold mb-2 ${
                    step.highlighted ? 'text-white/80' : 'text-primary'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg ${
                    step.highlighted 
                      ? 'bg-white/20' 
                      : getColor(index)
                  }`}>
                    {getIcon(step.icon)}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-2 ${
                    step.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`mb-3 ${
                    step.highlighted ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className={`text-sm font-medium rounded-full px-3 py-1 inline-block mb-3 ${
                    step.highlighted 
                      ? 'text-white bg-white/20' 
                      : 'text-blue-600 bg-blue-50'
                  }`}>
                    {step.duration}
                  </div>
                  
                  {/* CTA Button for highlighted step */}
                  {step.highlighted && step.cta && (
                    <Button 
                      onClick={handleWorkshopClick}
                      className="bg-white hover:bg-gray-100 text-primary border-0 font-semibold"
                    >
                      {step.cta}
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Arrow (Desktop only) */}
              {index < workflow.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

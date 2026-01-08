import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

export const Comparison = () => {
  const { comparison } = content;
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          card: "border-gray-200 hover:border-gray-300",
          header: "bg-gray-50",
          title: "text-gray-700",
          badge: "bg-gray-100 text-gray-700"
        };
      case "orange":
        return {
          card: "border-gray-200 hover:border-gray-300",
          header: "bg-gray-50", 
          title: "text-gray-700",
          badge: "bg-gray-100 text-gray-700"
        };
      case "green":
        return {
          card: "border-primary/20 hover:border-primary/30 ring-2 ring-primary/10",
          header: "bg-primary/5",
          title: "text-primary",
          badge: "bg-primary/10 text-primary"
        };
      default:
        return {
          card: "border-gray-200",
          header: "bg-gray-50",
          title: "text-gray-700", 
          badge: "bg-gray-100 text-gray-700"
        };
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
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
          {comparison.title.main}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {comparison.title.highlight}
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {comparison.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {comparison.options.map((option, index) => {
          const colorClasses = getColorClasses(option.color);
          
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className={`relative h-full ${colorClasses.card} transition-all duration-300 ${option.recommended ? 'transform scale-105 shadow-xl' : 'hover:shadow-lg'}`}>
                {option.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Empfohlen
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`${colorClasses.header} text-center`}>
                  <CardTitle className={`text-2xl ${colorClasses.title}`}>
                    {option.title}
                  </CardTitle>
                  <Badge variant="secondary" className={colorClasses.badge}>
                    {option.description}
                  </Badge>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Pros */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Vorteile
                    </h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-3 flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Nachteile
                    </h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start gap-2 text-sm">
                          <X className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
            "Die Zukunft gehört Unternehmen, die die besten Talente nutzen können - unabhängig vom Standort."
          </blockquote>
          <cite className="text-lg text-primary font-semibold">
            – Reid Hoffman, LinkedIn-Gründer
          </cite>
        </div>
      </motion.div>
    </section>
  );
};

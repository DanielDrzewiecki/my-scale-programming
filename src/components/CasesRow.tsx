import { Button } from "./ui/button";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { TrendingUpIcon, Users, Target, ExternalLink } from "lucide-react";

export const CasesRow = () => {
  const { casesRow } = content;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  const getIcon = (index: number) => {
    const icons = [TrendingUpIcon, Target, Users];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8 text-primary" />;
  };

  return (
    <section className="container py-12 sm:py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {casesRow.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {casesRow.subtitle}
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open(casesRow.linkUrl, '_blank')}
          >
            {casesRow.linkText}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {casesRow.stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {getIcon(index)}
                </div>
              </div>
              
              {/* Number */}
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground font-medium">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

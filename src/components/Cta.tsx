import { Button } from "./ui/button";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

export const Cta = () => {
  const { cta } = content;
  
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            {cta.title.main}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              {cta.title.highlight}{" "}
            </span>
            {cta.title.end}
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {cta.description}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <motion.div
            whileHover={{ 
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
                                     <Button 
              className="w-full md:mr-4 md:w-auto text-white font-semibold text-lg py-6 px-8 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))',
                boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175))';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2)';
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {cta.buttons.primary}
              <ArrowRightIcon className="ml-2 w-5 h-5 animate-pulse" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.03
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="outline"
              className="w-full md:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-lg py-6 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {cta.buttons.secondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

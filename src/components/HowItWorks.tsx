import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const HowItWorks = () => {
  const { howItWorks } = content;
  
  const [ref, inView] = useInView({
    triggerOnce: true,  // Animation nur einmal auslösen
    threshold: 0.2,     // Wenn 20% der Komponente sichtbar sind
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MedalIcon": return <MedalIcon />;
      case "MapIcon": return <MapIcon />;
      case "PlaneIcon": return <PlaneIcon />;
      case "GiftIcon": return <GiftIcon />;
      default: return null;
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      ref={ref}
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <motion.h2 
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl md:text-4xl font-bold"
      >
        {howItWorks.title.main}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {howItWorks.title.highlight}
        </span>
      </motion.h2>
      
      <motion.p 
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"
      >
        {howItWorks.subtitle}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {howItWorks.steps.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {getIcon(icon)}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

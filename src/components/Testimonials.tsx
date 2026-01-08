import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { content } from '@/content/content';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Testimonials = () => {
  const { testimonials } = content;
  
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
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <motion.h2 
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold"
      >
        {testimonials.title.main}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          {testimonials.title.highlight}
        </span>
      </motion.h2>

      <motion.p 
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="text-xl text-muted-foreground pt-4 pb-8"
      >
        {testimonials.subtitle}
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.list.map(({ image, name, position, comment }: {
          image: string;
          name: string; 
          position: string;
          comment: string;
        }) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              key={name}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      alt={name}
                      src={image}
                    />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription className="text-sm">{position}</CardDescription>
                    <Badge variant="secondary" className="w-fit mt-1">
                      Recruiting
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <p className="text-muted-foreground italic">"{comment}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

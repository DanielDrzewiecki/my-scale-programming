import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { content } from '@/content/content';
import { motion } from "framer-motion";

export const HeroCards = () => {
  const { heroCards } = content;
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 + index * 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[400px] xl:w-[700px] h-[500px] mx-auto lg:mx-0">
      {/* Testimonial */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="absolute w-[340px] -top-[50px]"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage
                alt={heroCards.testimonial.name}
                src={heroCards.testimonial.image}
              />
              <AvatarFallback>
                {heroCards.testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">
                {heroCards.testimonial.name}
              </CardTitle>
              <CardDescription>
                {heroCards.testimonial.position}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {heroCards.testimonial.comment}
          </CardContent>
        </Card>
      </motion.div>

      {/* Team */}
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-[20px] -top-[40px] w-80 max-xl:hidden"
      >
        <Card className="flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
              src={heroCards.team.image}
              alt={heroCards.team.name}
              className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center">
              {heroCards.team.name}
            </CardTitle>
            <CardDescription className="font-normal text-primary">
              {heroCards.team.position}
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-2">
            <p>{heroCards.team.comment}</p>
          </CardContent>
          <CardFooter>
            <div>
              <a
                rel="noreferrer noopener"
                href={heroCards.team.linkedin}
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <span className="sr-only">Linkedin icon</span>
                <Linkedin size="20" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Pricing */}
      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[180px] left-[50px] w-72"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              {heroCards.pricing.title}
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">
                {heroCards.pricing.duration}
              </span>
            </div>
            <CardDescription>
              {heroCards.pricing.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              className="w-full"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Mehr erfahren
            </Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {heroCards.pricing.benefits.map((benefit) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Expertise */}
      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="absolute w-[350px] -right-[10px] bottom-[50px] max-xl:hidden"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <LightBulbIcon />
            </div>
            <div>
              <CardTitle>
                {heroCards.expertise.title}
              </CardTitle>
              <CardDescription className="text-md mt-2">
                {heroCards.expertise.description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
};
import { Button } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { content } from '@/content/content';
import { ArrowRightIcon, AwardIcon, EuroIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtile Parallax-Effekte
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const { hero } = content;
  const subtitleParts = hero.subtitle.split('Mitarbeiter:');
  
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const noticesVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6 + index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      style={{
        backgroundPositionY: backgroundY
      }}
      className="container py-10 sm:py-16 lg:py-20 gap-6 sm:gap-8 lg:gap-10 px-4 max-w-[1400px] mx-auto"
    >
      {/* Hauptüberschrift - über die ganze Seite */}
      <motion.div 
        style={{ y: textY }}
        className="w-full text-center mb-8 lg:mb-16"
      >
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* Hauptüberschrift - geht über die ganze Seite */}
          <div className="w-full text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-foreground">
              <span className="text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                {hero.title.highlight}
              </span>
              <br />
              <span className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                {hero.title.main}
              </span>
            </h1>
            
            {/* Untertitel */}
            <div className="mt-6">
              {subtitleParts.length > 1 ? (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black leading-tight">
                  <span>{`${subtitleParts[0]}Mitarbeiter:`}</span>
                  <br />
                  <span>{subtitleParts[1].trim()}</span>
                </h2>
              ) : (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black leading-tight">
                  {hero.subtitle}
                </h2>
              )}
            </div>
          </div>

        </motion.div>
      </motion.div>

      {/* Content-Bereich mit Grid-Layout */}
      <div className="lg:grid lg:grid-cols-2 place-items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Linke Spalte - Text und Buttons */}
        <motion.div 
          style={{ y: textY }}
          className="text-center lg:text-start space-y-6 sm:space-y-8"
        >
          {/* Beschreibung */}
          <div>
            <p className="text-base sm:text-lg text-muted-foreground">
              {hero.description}
            </p>
          </div>

          {/* Desktop: Button und Benefits hier anzeigen */}
          <div className="hidden lg:block">
          <div className="flex justify-start mt-4">
            <motion.div
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="space-y-3">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {hero.buttons.primary}
                  <ArrowRightIcon className="ml-2 w-4 h-4 animate-pulse" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={noticesVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 hidden lg:block"
          >
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
              {hero.notices.map((notice, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={noticesVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${notice.bgColor} w-full sm:w-auto`}
                >
                  {notice.icon === "EuroIcon" && <EuroIcon className={`w-6 sm:w-8 h-6 sm:h-8 ${notice.color}`} />}
                  {notice.icon === "AwardIcon" && <AwardIcon className={`w-6 sm:w-8 h-6 sm:h-8 ${notice.color}`} />}
                  <span className={`font-medium ${notice.color}`}>{notice.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Vier Punkte unter den Badges */}
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-left">
              {hero.features.map((feature, index) => (
                <div key={index} className="flex items-center text-black text-base">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

        {/* Rechte Spalte - Video */}
        <motion.div 
          style={{ 
            y: textY,
            scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
          }}
          className="z-10 w-full sm:w-[90%] lg:w-full max-w-2xl mt-8 lg:mt-0"
        >
          {/* <HeroCards /> */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/1133236350?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&dnt=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Button und Benefits nach Video */}
      <div className="flex justify-center mt-4 order-3 w-full lg:hidden">
        <motion.div
          animate={{ 
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full"
        >
          <div className="space-y-3 w-full">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.buttons.primary}
              <ArrowRightIcon className="ml-2 w-4 h-4 animate-pulse" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Hinweise und Vorteile unter CTA */}
      <motion.div
        variants={noticesVariants}
        initial="hidden"
        animate="visible"
        className="order-4 w-full lg:hidden mt-6"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {hero.notices.map((notice, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={noticesVariants}
              initial="hidden"
              animate="visible"
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full ${notice.bgColor} w-full max-w-xs`}
            >
              {notice.icon === "EuroIcon" && <EuroIcon className={`w-5 h-5 flex-shrink-0 ${notice.color}`} />}
              {notice.icon === "AwardIcon" && <AwardIcon className={`w-5 h-5 flex-shrink-0 ${notice.color}`} />}
              <span className={`font-medium text-sm ${notice.color}`}>{notice.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <div className="shadow"></div>
    </motion.section>
  );
};

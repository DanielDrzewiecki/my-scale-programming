"use client";

import { motion } from "framer-motion";
import { 
  Globe,
  Megaphone,
  Rocket,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    icon: Rocket,
    title: "Strategische Grundlagen",
    milestones: [
      "Markenanalyse & Positionierung",
      "Zielgruppen-Personas entwickeln",
      "Initiale Marketingstrategie"
    ],
    color: "bg-primary"
  },
  {
    icon: Globe,
    title: "Digitale Präsenz",
    milestones: [
      "Webseite & SEO-Optimierung",
      "Content Marketing Setup",
      "Social Media Kanäle aufbauen"
    ],
    color: "bg-primary"
  },
  {
    icon: Megaphone,
    title: "Kampagnen & Akquisition",
    milestones: [
      "Performance Marketing starten",
      "Lead-Generierung optimieren",
      "Erste Werbekampagnen"
    ],
    color: "bg-primary"
  },
  {
    icon: TrendingUp,
    title: "Skalierung & Analyse",
    milestones: [
      "Marketingkanäle skalieren",
      "Erste Performancemessung",
      "Strategie-Anpassung für Folgejahr"
    ],
    color: "bg-primary"
  }
];

export default function MarketingTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
      id="marketing-timeline"
      className="container text-center py-10 sm:py-16 lg:py-24"
    >
      <motion.h2 
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4"
      >
        Schaffen Sie mehr als{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          all die Jahre davor
        </span>
      </motion.h2>
      
      <motion.p 
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        className="sm:w-4/5 lg:w-3/4 mx-auto mt-4 mb-10 sm:mb-16 text-base sm:text-lg lg:text-xl text-muted-foreground px-4"
      >
        Geeignete Mitarbeiter sind schwer zu finden und blockieren wertvolle Ressourcen. Agenturen liefern nur Teilleistungen. Als Ihr strategischer Partner transformieren wir Ihr Marketing gesamtheitlich und ermöglichen eine präzise, zielgerichtete und messbare Vermarktung mit schnellen Ergebnissen.
      </motion.p>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl pointer-events-none" />
        
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col items-stretch h-full"
                role="listitem"
                aria-label={`Meilenstein ${item.title}`}
              >
                <div className="flex flex-col items-center space-y-4 h-full">
                  {/* Zeit-Icon und Hintergrund */}
                  <div className="w-14 h-14 flex-shrink-0 relative flex items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-full flex items-center justify-center shadow-lg ${item.color} text-white`}
                    >
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Inhalt */}
                  <div
                    className="w-full p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 flex flex-col flex-grow"
                    role="group"
                    aria-roledescription="Timeline Card"
                  >
                    <div className="grid gap-3 place-items-center mb-3">
                      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h3>
                    </div>
                    <div className="space-y-2 flex-grow">
                      {item.milestones.map((milestone, milestoneIndex) => (
                        <div
                          key={milestoneIndex}
                          className="flex items-start gap-2 text-left"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-primary flex-shrink-0 mt-[2px]"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {milestone}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
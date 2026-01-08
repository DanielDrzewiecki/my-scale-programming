"use client";

import { motion, useInView } from "framer-motion";
import {
  Camera,
  Code2,
  PenTool,
  Video,
  Music2,
  Laptop,
  Megaphone,
  Palette,
  Target,
  TrendingUp,
  Clock,
  Zap,
  Star,
  Rocket,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useState, useEffect, useRef } from 'react';

const skills = [
  { 
    icon: Camera, 
    label: "Fotografie", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Professionelle visuelle Storytelling für Ihre Marke"
  },
  { 
    icon: Video, 
    label: "Videoproduktion", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Kreative Videoformate, die Ihre Zielgruppe fesseln"
  },
  { 
    icon: Code2, 
    label: "Webentwicklung", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Technisch versierte Lösungen für digitale Präsenz"
  },
  { 
    icon: PenTool, 
    label: "Grafikdesign", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Markenidentität durch visuell starkes Design"
  },
  { 
    icon: Music2, 
    label: "Audio & Sound", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Auditive Markenentwicklung und Soundbranding"
  },
  { 
    icon: Laptop, 
    label: "IT & Technik", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Technologisch up-to-date mit innovativen Tools"
  },
  { 
    icon: Megaphone, 
    label: "Marketing", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Datengetriebene Marketingstrategien mit Weitblick"
  },
  { 
    icon: Palette, 
    label: "Design", 
    color: "bg-primary",
    iconColor: "text-white",
    description: "Kreative Lösungen, die Ihre Marke hervorheben"
  },
];

const uniqueValues = [
  { 
    icon: Target, 
    label: "Zielgerichtet", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Präzise Marketingstrategien mit klaren Zielen"
  },
  { 
    icon: TrendingUp, 
    label: "Performance", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Messbare Ergebnisse und ROI-Optimierung"
  },
  { 
    icon: Clock, 
    label: "Flexibel", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Anpassungsfähige Marketinglösungen ohne Fixkosten"
  },
  { 
    icon: Zap, 
    label: "Effizient", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Schnelle und effektive Umsetzung von Marketingmaßnahmen"
  },
  { 
    icon: Star, 
    label: "Expertise", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "10+ Jahre digitale Marketingerfahrung"
  },
  { 
    icon: Rocket, 
    label: "Innovativ", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Moderne, datengetriebene Marketinglösungen"
  },
  { 
    icon: Laptop, 
    label: "Digital", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Digitale Transformation und moderne Technologien"
  },
  { 
    icon: Megaphone, 
    label: "Sichtbar", 
    color: "bg-white",
    iconColor: "text-primary",
    description: "Maximale Reichweite und Markenbekanntheit"
  }
];

export default function SkillCircle() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1 // Reduziert von 0.5 auf 0.1 für bessere mobile Erkennung
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial width
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileRadius = {
    outerRing: 120,
    innerRing: 90,
    svgViewBox: [-200, -200, 400, 400],
    bubbleCenter: 100,
    innerBubbleCenter: 80,
    centralCircleSize: { 
      width: 120, 
      height: 120,
      textScale: {
        title: 'text-xl',
        subtitle: 'text-[10px]'
      }
    }
  };

  const desktopRadius = {
    outerRing: 280,
    innerRing: 180,
    svgViewBox: [-300, -300, 600, 600],
    bubbleCenter: 280,
    innerBubbleCenter: 180,
    centralCircleSize: { 
      width: 180, 
      height: 180,
      textScale: {
        title: 'text-2xl',
        subtitle: 'text-sm'
      }
    }
  };

  const currentRadius = isMobile ? mobileRadius : desktopRadius;

  return (
    <section 
      id="vorteile" 
      ref={ref}
      className="relative w-full max-w-6xl mx-auto py-10 md:py-20 px-4"
    >
      <div className="text-center mb-8 md:mb-16">
        {/* Überschrift über der Mindmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            So einfach kommen Sie zu Ihrem Marketing{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              A-Team
          </span>
        </h2>
        </motion.div>


      <div 
        className="mt-10 relative w-full h-[600px] flex items-center justify-center overflow-visible"
        style={{ 
          height: isMobile ? '700px' : '600px'
        }}
      >
        {/* Zentraler Kreis */}
        <div 
          className={`absolute bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center z-10 shadow-2xl overflow-hidden`}
          style={{
            width: `${currentRadius.centralCircleSize.width}px`,
            height: `${currentRadius.centralCircleSize.height}px`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/0" />
          <div className="text-white text-center relative z-20 flex flex-col items-center justify-center">
            <h3 className={`font-bold ${currentRadius.centralCircleSize.textScale.title}`}>my-scale</h3>
            {!isMobile && (
              <p className={`${currentRadius.centralCircleSize.textScale.subtitle} mt-1 text-center`}>
                Externer Marketingmitarbeiter
              </p>
            )}
          </div>
        </div>

        <svg
          className="absolute w-full h-full pointer-events-none z-0"
          viewBox={`${currentRadius.svgViewBox.join(' ')}`}
        >
          {/* Skills */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length - 90;
            const bubbleCenter = currentRadius.bubbleCenter;
            const textOffset = isMobile ? 12 : 16;
            
            const xLine = Math.cos((angle * Math.PI) / 180) * (bubbleCenter - textOffset);
            const yLine = Math.sin((angle * Math.PI) / 180) * (bubbleCenter - textOffset);

            return (
              <motion.line
                key={skill.label}
                initial={{ x2: 0, y2: 0 }}
                animate={isInView ? { x2: xLine, y2: yLine } : { x2: 0, y2: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 1.5
                }}
                x1={0}
                y1={0}
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth={isMobile ? "0.5" : "1"}
              />
            );
          })}

          {/* Unique Values Lines - nur auf Desktop */}
          {!isMobile && uniqueValues.map((value, index) => {
            const skillsCount = skills.length;
            const angle = ((index * 360) / skillsCount) + (360 / (skillsCount * 2)) - 90;
            const bubbleCenter = currentRadius.innerBubbleCenter;
            const textOffset = 12;
            
            const xLine = Math.cos((angle * Math.PI) / 180) * (bubbleCenter - textOffset);
            const yLine = Math.sin((angle * Math.PI) / 180) * (bubbleCenter - textOffset);

            return (
              <motion.line
                key={value.label}
                initial={{ x2: 0, y2: 0 }}
                animate={isInView ? { x2: xLine, y2: yLine } : { x2: 0, y2: 0 }}
                transition={{
                  delay: (index + skills.length) * 0.1,
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 1.5
                }}
                x1={0}
                y1={0}
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Äußerer Ring mit Skills */}
        {skills.map((skill, index) => {
          const angle = (index * 360) / skills.length - 90;
          const radius = currentRadius.outerRing;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={skill.label}
              className="absolute z-10"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={isInView ? {
                opacity: 1,
                scale: 1,
                x: x,
                y: y,
              } : { opacity: 0, scale: 0, x: 0, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 1.5
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  title={skill.description}
                  className={`rounded-full ${skill.color} hover:scale-110 transition-transform cursor-pointer shadow-md`}
                  style={{
                    padding: isMobile ? '0.5rem' : '1rem'
                  }}
                >
                  <skill.icon 
                    size={isMobile ? 18 : 28} 
                    className={skill.iconColor} 
                  />
                </div>
                <Badge 
                  variant="secondary" 
                  className={`whitespace-nowrap z-20 ${isMobile ? 'text-xs' : ''}`}
                >
                  {skill.label}
                </Badge>
              </div>
            </motion.div>
          );
        })}

        {/* Innerer Ring mit Unique Values */}
        {!isMobile && uniqueValues.map((value, index) => {
          const skillsCount = skills.length;
          const angle = ((index * 360) / skillsCount) + (360 / (skillsCount * 2)) - 90;
          const radius = currentRadius.innerRing;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={value.label}
              className="absolute z-10"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={isInView ? {
                opacity: 1,
                scale: 1,
                x: x,
                y: y,
              } : { opacity: 0, scale: 0, x: 0, y: 0 }}
              transition={{
                delay: (index + skills.length) * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 1.5
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  title={value.description}
                  className={`rounded-full ${value.color} hover:scale-110 transition-transform cursor-pointer shadow-md`}
                  style={{
                    padding: isMobile ? '0.5rem' : '0.75rem'
                  }}
                >
                  <value.icon 
                    size={isMobile ? 16 : 20} 
                    className={value.iconColor} 
                  />
                </div>
                <Badge 
                  variant="outline" 
                  className={`whitespace-nowrap z-20 bg-white text-black ${isMobile ? 'text-xs' : ''}`}
                >
                  {value.label}
                </Badge>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3 Schritte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 md:mt-20"
      >
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Schritt 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Sagen Sie uns, was Sie brauchen
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Website, Social Media, Videos, Online-Werbung... egal was.
            </p>
          </motion.div>

          {/* Schritt 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Wir stellen Ihr Team zusammen
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Noch am selben Tag bekommen Sie die richtigen Leute für Ihr Projekt.
            </p>
          </motion.div>

          {/* Schritt 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Nächste Woche geht's los
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kein Bewerbungsprozess, kein Einarbeiten - einfach starten.
            </p>
          </motion.div>
        </div>
              </motion.div>
      </div>
    </section>
  );
}   
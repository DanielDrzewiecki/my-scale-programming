import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from '@/content/content';
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const { features } = content;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <motion.section 
      ref={ref}
      style={{
        rotate: rotateProgress,
        scale: scaleProgress
      }}
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {features.title.main}{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {features.title.highlight}
              </span>
            </h2>
            {features.subtitle && (
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {features.subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {features.featureList.map((feature: string) => (
              <Badge
                key={feature}
                variant="secondary"
                className="text-xs sm:text-sm"
              >
                {feature}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.cards.map(({ title, description }) => (
              <Card key={title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{description}</p>
                  {title === "Performance Marketing" && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-none pl-0">
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Zielgerichtete Kampagnen auf verschiedenen Plattformen
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Datenbasierte Optimierung der Marketingstrategien
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Maximierung der Reichweite und Conversion-Raten
                      </li>
                    </ul>
                  )}
                  {title === "Digitales Recruiting" && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-none pl-0">
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Innovative Ansätze zur Talentgewinnung
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Nutzung moderner Social-Media-Kanäle
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Effiziente Ansprache passiver und aktiver Kandidaten
                      </li>
                    </ul>
                  )}
                  {title === "Employer Branding" && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-none pl-0">
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Entwicklung einer starken Arbeitgebermarke
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Authentische Darstellung der Unternehmenskultur
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 text-green-500 w-4 h-4" /> 
                        Steigerung der Attraktivität als Arbeitgeber
                      </li>
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

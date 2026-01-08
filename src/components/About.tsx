import { content } from '@/content/content';
import { Users, Target, Award, Clock, ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";


export const About = () => {
  const { about, team } = content;
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);
  
  return (
    <section
      id="about"
      className="py-16 sm:py-20"
      style={{ backgroundColor: 'rgb(0, 25, 50)' }}
    >
      <div className="container py-12">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={about.image.src}
            alt={about.image.alt}
            className="w-full md:w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {about.title.highlight}{" "}
                </span>
                <span className="text-white">{about.title.main}</span>
              </h2>
              {about.subtitle && (
                <p className="text-xl text-white mb-6 font-medium">
                  {about.subtitle}
                </p>
              )}
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-white mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {about.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex justify-center mb-2">
                    {index === 0 && <Users className="w-6 h-6 text-primary" />}
                    {index === 1 && <Target className="w-6 h-6 text-primary" />}
                    {index === 2 && <Award className="w-6 h-6 text-primary" />}
                    {index === 3 && <Clock className="w-6 h-6 text-primary" />}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    {stat.description}
                  </div>
                  <div className="text-xs text-gray-500 leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button moved to main section */}
      <div className="container text-center mt-12 hidden md:block">
        <button
          onClick={() => setIsTeamExpanded(!isTeamExpanded)}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          {isTeamExpanded ? (
            <>
              <ChevronUp className="w-5 h-5" />
              Weniger anzeigen
            </>
          ) : (
            <>
              <ChevronDown className="w-5 h-5" />
              Mehr über unser Team
            </>
          )}
        </button>
      </div>

      {/* Team Grid - Collapsible */}
      <div 
        className={`container grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 overflow-hidden mt-8 ${
          isTeamExpanded 
            ? 'max-h-[2000px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        {team.members.map(({ imageUrl, name, position }) => (
          <Card
            key={name}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader className="text-center">
              <img
                src={imageUrl}
                alt={`${name} - ${position}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <CardTitle className="text-xl font-bold">{name}</CardTitle>
              <CardDescription className="text-lg font-semibold text-primary">
                {position}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>


    </section>
  );
};

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Interface für Projektergebnisse
interface ProjectResult {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'website' | 'content';
  thumbnail: string;
  url: string;
  vimeoId?: string;
  client: string;
  date: string;
  tags: string[];
  posts?: string[];
}

// Carousel Component für Content Posts
const ContentCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Prüfe, welche Bilder tatsächlich geladen werden können
  useEffect(() => {
    const checkImages = async () => {
      const validImages: string[] = [];
      for (const img of images) {
        try {
          const response = await fetch(img, { method: 'HEAD' });
          if (response.ok) {
            validImages.push(img);
          }
        } catch {
          // Bild existiert nicht, überspringen
        }
      }
      setLoadedImages(validImages.length > 0 ? validImages : [images[0]]);
    };
    checkImages();
  }, [images]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % loadedImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + loadedImages.length) % loadedImages.length);
  };

  if (loadedImages.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <img 
        src={loadedImages[currentIndex]} 
        alt="Content Post"
        className="w-full h-full object-cover"
      />
      {loadedImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft size={16} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight size={16} className="text-gray-700" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {loadedImages.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Echte Projektdaten
const projectResults: ProjectResult[] = [
  // Websites
  {
    id: "10",
    title: "QDS Unternehmenswebsite",
    description: "Moderne und responsive Unternehmenswebsite für Q-Data Service GmbH - präsentiert IT-Services, Gebäudekommunikation und Smart Home Lösungen",
    type: "website",
    thumbnail: "/project-thumbnails/qds-website.png",
    url: "https://qds.de/",
    client: "QDS",
    date: "2024",
    tags: ["Corporate", "Website", "IT-Services"]
  },
  {
    id: "11",
    title: "Seehafen Wismar Website",
    description: "Professionelle Website für den Seehafen Wismar - informiert über Hafenlogistik, Dienstleistungen und wirtschaftliche Bedeutung der Region",
    type: "website",
    thumbnail: "/project-thumbnails/Hafen-Wismar.png",
    url: "https://hafen-wismar.de/",
    client: "Seehafen Wismar",
    date: "2024",
    tags: ["Logistik", "Website", "Hafen"]
  },
  {
    id: "12",
    title: "Kühn Inspiriert Website",
    description: "Moderne Website für Kühn Inspiriert - Spezialist für Büro- und Objekteinrichtung mit Fokus auf ergonomische und kommunikative Arbeitswelten",
    type: "website",
    thumbnail: "/project-thumbnails/kuehn.png",
    url: "https://www.kuehn-inspiriert.de/",
    client: "Kühn Inspiriert",
    date: "2024",
    tags: ["Büroeinrichtung", "Website", "Design"]
  },
  {
    id: "13",
    title: "Kompetenz Kompanie Website",
    description: "Professionelle Website für die Kompetenz Kompanie - Kompetenzentwicklung für den Mittelstand mit modularen Führungsausbildungen und Trainer-Zertifizierungen",
    type: "website",
    thumbnail: "/project-thumbnails/kompetenzkompanie.png",
    url: "https://kompetenzkompanie.de/",
    client: "Kompetenz Kompanie",
    date: "2024",
    tags: ["Kompetenzentwicklung", "Website", "Training"]
  },
  {
    id: "14",
    title: "Eriksen Karriere-Website",
    description: "Spezialisierte Karriere-Website für die eriksen gruppe - präsentiert Stellenangebote, Unternehmenskultur und Entwicklungsmöglichkeiten im Bauwesen",
    type: "website",
    thumbnail: "/project-thumbnails/eriksen-karriereseite.png",
    url: "https://eriksen.de/karriere/",
    client: "eriksen gruppe",
    date: "2024",
    tags: ["Karriere", "Website", "Recruiting"]
  },
  {
    id: "15",
    title: "Dachdeckermeister Huber Website",
    description: "Moderne Handwerks-Website für Dachdeckermeister Huber - präsentiert Dachdeckerei-Dienstleistungen und Expertise im Bereich erneuerbare Energien",
    type: "website",
    thumbnail: "/project-thumbnails/dachdeckermeister-huber-website.png",
    url: "https://dachdeckermeister-huber.eu/",
    client: "Dachdeckermeister Huber",
    date: "2024",
    tags: ["Handwerk", "Website", "Dachdeckerei"]
  }
];

export const ProjectResults = () => {
  const [activeType] = useState<'all' | 'video' | 'website' | 'content'>('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = activeType === 'all' 
    ? projectResults 
    : projectResults.filter(project => project.type === activeType);

  // Für mobile: nur 4 Projekte anzeigen, für Desktop: alle
  const displayProjects = isMobile && !showAll
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  const handleProjectClick = (project: ProjectResult) => {
    if (project.type === 'video' && project.vimeoId) {
      setCurrentVideoId(project.vimeoId);
      setIsVideoModalOpen(true);
    } else {
      window.open(project.url, '_blank');
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId(null);
  };

  return (
    <section className="container py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Einige unserer erfolgreichen Projekte
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Von professionellen Recruiting-Videos bis hin zu modernen Unternehmenswebsites - hier sehen Sie eine Auswahl unserer erfolgreichsten Projekte
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <Card 
            key={project.id} 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
            onClick={() => handleProjectClick(project)}
          >
            {/* Thumbnail */}
            <div 
              className="relative aspect-video overflow-hidden"
            >
              {project.type === 'content' && project.posts && project.posts.length > 0 ? (
                <ContentCarousel images={project.posts} />
              ) : (
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {project.type !== 'content' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {project.type === 'video' ? (
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-primary ml-1" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink size={24} className="text-primary" />
                    </div>
                  )}
                </div>
              )}
              <div className="absolute top-4 right-4 pointer-events-none">
                <Badge 
                  variant={project.type === 'video' ? 'default' : 'secondary'}
                  className={project.type === 'content' ? 'bg-pink-600 text-white border-pink-600 hover:bg-pink-600' : ''}
                >
                  {project.type === 'video' ? 'Video' : project.type === 'content' ? 'Social Media' : 'Website'}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {/* Client */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="font-medium">{project.client}</span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile: Mehr anzeigen Button */}
      {isMobile && filteredProjects.length > 4 && !showAll && (
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(true)}
            variant="outline"
            className="px-8 py-3"
          >
            Mehr Projekte anzeigen ({filteredProjects.length - 4} weitere)
          </Button>
        </div>
      )}

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Suchen Sie nach professionellen Videos oder einer modernen Website für Ihr Unternehmen?
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
                      Unverbindlich kennenlernen
        </motion.button>
      </motion.div>

      {/* Video Modal */}
      {isVideoModalOpen && currentVideoId && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <Button
              onClick={closeVideoModal}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <X size={24} />
            </Button>
            <iframe
              src={`https://player.vimeo.com/video/${currentVideoId}?autoplay=1&title=0&byline=0&portrait=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};
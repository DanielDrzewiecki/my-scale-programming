import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { content } from '@/content/content';
import { useEffect, useState, useRef } from 'react';
import { fetchGoogleRating, fetchTrustpilotRating, PlatformRating } from '@/lib/ratings';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Star, StarHalf } from 'lucide-react';

// Video-Referenzen
const videoReferences = [
  { id: '1151828990', title: 'Kundenstimme 1' },
  { id: '1131442769', title: 'Kundenstimme 2' },
  { id: '862045544', title: 'Kundenstimme 3' },
];

// Custom StarThreeQuarters component
const StarThreeQuarters = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    <path d="M12 2v15.77" fill="currentColor" />
    <path d="M12 17.77l-4.14 2.16 0.79-4.62-3.35-3.26 4.63-0.67L12 7.11" fill="currentColor" />
  </svg>
);

// Bewertungsübersicht Komponente
const RatingOverview = ({ platform, rating, total, logo }: { 
  platform: string; 
  rating: number; 
  total: number;
  logo: string;
}) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300">
    <img src={logo} alt={`${platform} Logo`} className="h-8 w-auto" />
    <div className="flex-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const value = i + 1;
          const remainder = rating % 1;
          const isQuarter = remainder > 0 && remainder < 0.5 && Math.ceil(rating) === value;
          const isHalf = remainder >= 0.5 && remainder < 0.75 && Math.ceil(rating) === value;
          const isThreeQuarters = remainder >= 0.75 && Math.ceil(rating) === value;
          const isFull = value <= Math.floor(rating);
          
          return (
            <span key={i} className={`${platform === 'Trustpilot' ? 'text-[#00b67a]' : 'text-yellow-400'}`}>
              {isQuarter ? (
                <StarHalf className="h-4 w-4 fill-[25%]" />
              ) : isHalf ? (
                <StarHalf className="h-4 w-4 fill-current" />
              ) : isThreeQuarters ? (
                <StarThreeQuarters className="h-4 w-4 fill-current" />
              ) : isFull ? (
                <Star className="h-4 w-4 fill-current" />
              ) : (
                <Star className="h-4 w-4" />
              )}
            </span>
          );
        })}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(2)}/5</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Basierend auf {total} Bewertungen
      </p>
    </div>
  </div>
);

export const TrustSlider = () => {
  const { testimonials } = content;
  const [google, setGoogle] = useState<PlatformRating | null>(null);
  const [trustpilot, setTrustpilot] = useState<PlatformRating | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Video Slider State
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [videoTouchStart, setVideoTouchStart] = useState<number | null>(null);
  const [videoTouchEnd, setVideoTouchEnd] = useState<number | null>(null);
  const videoSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchGoogleRating().then((d) => d && setGoogle(d));
    fetchTrustpilotRating().then((d) => d && setTrustpilot(d));
  }, []);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(testimonials.list.length / itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers für mobile Swipe-Navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Video Slider Navigation
  const nextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % videoReferences.length);
  };

  const prevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + videoReferences.length) % videoReferences.length);
  };

  // Video Touch handlers für mobile Swipe-Navigation
  const handleVideoTouchStart = (e: React.TouchEvent) => {
    setVideoTouchEnd(null);
    setVideoTouchStart(e.targetTouches[0].clientX);
  };

  const handleVideoTouchMove = (e: React.TouchEvent) => {
    setVideoTouchEnd(e.targetTouches[0].clientX);
  };

  const handleVideoTouchEnd = () => {
    if (!videoTouchStart || !videoTouchEnd) return;
    
    const distance = videoTouchStart - videoTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextVideoSlide();
    } else if (isRightSwipe) {
      prevVideoSlide();
    }
  };

  return (
    <section id="testimonials" className="container py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Das sagen unsere Kunden
      </h2>

      {/* Video Referenzen - Desktop: 3 nebeneinander, Mobile: Slider */}
      <div className="mb-12">
        {/* Desktop: 3 Videos nebeneinander */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {videoReferences.map((video, index) => (
            <div key={video.id} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&dnt=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading={index === 0 ? "eager" : "lazy"}
              ></iframe>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Slider */}
        <div className="relative lg:hidden">
          <div 
            ref={videoSliderRef}
            className="overflow-hidden"
            onTouchStart={handleVideoTouchStart}
            onTouchMove={handleVideoTouchMove}
            onTouchEnd={handleVideoTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
            >
              {videoReferences.map((video, index) => (
                <div key={video.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                      <iframe
                        src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&dnt=1`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading={index === 0 ? "eager" : "lazy"}
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Navigation Arrows - nur Mobile */}
          {videoReferences.length > 1 && (
            <>
              <button
                onClick={prevVideoSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
                aria-label="Vorheriges Video"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextVideoSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
                aria-label="Nächstes Video"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </>
          )}

        </div>
      </div>

      {/* Bewertungsübersicht */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a 
          href="https://www.google.com/search?q=my-scale+digitale+gmbh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <RatingOverview
            platform="Google"
            rating={google?.rating ?? 4.9}
            total={google?.total ?? 47}
            logo="/logos/google-logo.svg"
          />
        </a>
        <a 
          href="https://www.trustpilot.com/review/my-scale.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <RatingOverview
            platform="Trustpilot"
            rating={trustpilot?.rating ?? 4.8}
            total={trustpilot?.total ?? 23}
            logo="/logos/trustpilot-logo.svg"
          />
        </a>
      </div>

      {/* Kundenbewertungen Slider */}
      <div className="relative">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className={`grid gap-6 ${
                  itemsPerView === 1 ? 'grid-cols-1' : 
                  itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {testimonials.list
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((testimonial, index) => (
                    <Card key={`${slideIndex}-${index}`} className="hover:shadow-lg transition-shadow duration-300 h-56 flex flex-col">
                      <CardHeader className="pb-3 flex-shrink-0">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-sm font-semibold">{testimonial.name}</CardTitle>
                            <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col overflow-hidden">
                        <div className="flex items-center mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground relative" style={{
                          lineHeight: '1.4',
                          maxHeight: '7rem',
                          overflow: 'hidden'
                        }}>
                          <p style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            "{testimonial.comment}"
                          </p>
                          {testimonial.comment.length > 200 && (
                            <div className="absolute bottom-0 right-0 bg-card pl-8" style={{
                              backgroundImage: 'linear-gradient(to left, hsl(var(--card)) 50%, transparent)'
                            }}>
                              ...
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - nur auf Desktop sichtbar */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 z-10"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </>
        )}

      </div>
    </section>
  );
}; 
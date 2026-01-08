import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './ui/button';

export const VideoFeed = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  const videos = [
    {
      id: '871511496',
      title: 'GIGmbH Recruitingvideo',
    },
    {
      id: '1040811082', 
      title: 'technotrans Recruitingvideo',
    },
    {
      id: '1040811388',
      title: 'KMLS Recruitingvideo',
    }
  ];

  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnailPromises = videos.map(async (video) => {
        try {
          const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${video.id}`);
          const data = await response.json();
          return data.thumbnail_url.replace(/_[0-9]{3}x[0-9]{3}\.jpg$/, '.jpg');
        } catch (error) {
          console.error('Fehler beim Laden des Thumbnails:', error);
          return '';
        }
      });

      const resolvedThumbnails = await Promise.all(thumbnailPromises);
      setThumbnails(resolvedThumbnails);
    };

    fetchThumbnails();
  }, []);

  const handleVideoPlay = (index: number) => {
    setActiveVideo(index);
  };

  return (
    <section 
      id="videos" 
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Einblicke in unsere
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text ml-2">
            Recruiting Videos
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4 max-w-2xl mx-auto break-words hyphens-auto text-center">
          Entdecken Sie, wie wir Unternehmen bei der <wbr />Mitarbeitergewinnung und <wbr />Employer Branding unterstützen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative group">
              {thumbnails[index] ? (
                <img 
                  src={thumbnails[index]} 
                  alt={video.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-500" />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => handleVideoPlay(index)}
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://player.vimeo.com/video/${videos[activeVideo].id}`}
                className="w-full h-[300px] md:h-[500px]"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70"
              onClick={() => setActiveVideo(null)}
            >
              <X size={24} />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}; 
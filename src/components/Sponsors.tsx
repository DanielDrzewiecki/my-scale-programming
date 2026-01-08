import { Radar } from "lucide-react";
import { content } from '@/content/content';

export const Sponsors = () => {
  const { sponsors } = content;
  
  return (
    <>
      {/* Logo Band Section */}
      <section className="container py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {sponsors.title}
          </h2>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.companies.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={logo}
                alt={`${name} Logo`}
                className="max-h-12 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section
        id="partners"
        className="container py-16 sm:py-20"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="container">
            <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
              Unsere Expertise für Ihr Marketing
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {sponsors.areas.map(({ name }) => (
                <div
                  key={name}
                  className="flex items-center gap-1 text-muted-foreground/60"
                >
                  <span><Radar size={34} /></span>
                  <h3 className="text-xl font-bold">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

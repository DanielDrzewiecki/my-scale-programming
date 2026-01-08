import { motion } from "framer-motion";
import { content } from '@/content/content';

export const LogoSlider = () => {
  const { sponsors } = content;
  
  // Generate array of logo numbers from 1 to 65
  const logoNumbers = Array.from({ length: 65 }, (_, i) => i + 1);
  
  // Split into three rows for visual variety
  const firstRowLogos = logoNumbers.slice(0, 22);
  const secondRowLogos = logoNumbers.slice(22, 44);
  const thirdRowLogos = logoNumbers.slice(44);

  return (
    <section
      id="logos"
      className="container py-8 sm:py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          {sponsors.title}
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="flex mb-8">
          <motion.div
            className="flex gap-8 items-center"
            initial={{ x: "0%" }}
            animate={{
              x: "-50%",
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {/* First set */}
            {firstRowLogos.map((num) => (
              <div
                key={`first-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {firstRowLogos.map((num) => (
              <div
                key={`first-dup-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex mb-8">
          <motion.div
            className="flex gap-8 items-center"
            initial={{ x: "-50%" }}
            animate={{
              x: "0%",
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {/* First set */}
            {secondRowLogos.map((num) => (
              <div
                key={`second-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {secondRowLogos.map((num) => (
              <div
                key={`second-dup-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Third Row - Left to Right */}
        <div className="flex">
          <motion.div
            className="flex gap-8 items-center"
            initial={{ x: "0%" }}
            animate={{
              x: "-50%",
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {/* First set */}
            {thirdRowLogos.map((num) => (
              <div
                key={`third-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {thirdRowLogos.map((num) => (
              <div
                key={`third-dup-${num}`}
                className="flex-shrink-0 w-48 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`/logos/${num}.png`}
                  alt={`Kunde ${num}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}; 
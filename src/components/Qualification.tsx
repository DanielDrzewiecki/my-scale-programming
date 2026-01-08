import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export const Qualification = () => {
  const notRightFor = [
    "Sie bereits eine voll ausgestattete Marketing-Abteilung mit 5+ Spezialisten haben",
    "Sie ausschließlich interne Kontrolle über jeden einzelnen Arbeitsschritt benötigen",
    "Sie Marketing-Personal suchen, das täglich vor Ort in Ihrem Büro arbeitet",
    "Sie unbegrenztes Budget für langfristige Personalkosten zur Verfügung haben"
  ];

  const perfectFor = [
    "Sie Top-Ergebnisse wollen, ohne 5-stellige Personalkosten pro Monat zu zahlen",
    "Sie verschiedene Marketing-Kanäle testen möchten, bevor Sie große Investitionen tätigen",
    "Sie lieber für messbare Erfolge bezahlen als für Bürozeiten und Overhead",
    "Sie schnell online wachsen wollen - mit weniger Aufwand als eine interne Lösung"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ist unser{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Angebot das Richtige für Sie?
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Prüfen Sie in 30 Sekunden, ob unser Marketing-Service zu Ihrem Unternehmen passt
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Nicht das Richtige für Sie */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-red-200 dark:border-red-800"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
              <X className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
              Nicht das Richtige für Sie, wenn:
            </h3>
          </div>
          
          <div className="space-y-4">
            {notRightFor.map((item, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 bg-red-100 dark:bg-red-900/20 rounded-full p-1 flex-shrink-0">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Perfekt für Sie */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
              Perfekt für Sie, wenn:
            </h3>
          </div>
          
          <div className="space-y-4">
            {perfectFor.map((item, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 bg-green-100 dark:bg-green-900/20 rounded-full p-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Treffen die grünen Punkte auf Sie zu? Dann entdecken Sie, wie wir Ihr Wachstum beschleunigen:
        </p>
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Pakete & Preise ansehen
        </button>
      </motion.div>
    </section>
  );
};

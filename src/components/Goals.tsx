import { motion } from "framer-motion";
import { Settings, FileSpreadsheet, Brain, TrendingUp, ShieldCheck, Database } from "lucide-react";

const goals = [
  {
    id: 1,
    text: "Prozesse automatisieren",
    icon: Settings,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 2,
    text: "Excel-Listen ablösen",
    icon: FileSpreadsheet,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 3,
    text: "Kosten senken durch KI",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 4,
    text: "Effizienz steigern",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 5,
    text: "Fehleranfälligkeit reduzieren",
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 6,
    text: "Daten zentralisieren",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  }
];

export const Goals = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: 'rgb(0, 25, 50)' }}>
      <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Manuelle Prozesse kosten Sie Zeit, Geld und Nerven?
        </h2>
        <p className="text-lg text-white max-w-4xl mx-auto mb-8">
          Unsere Kunden wissen: ohne effiziente Prozesse geht es nicht. Doch Standardsoftware passt oft nicht und Excel-Listen stoßen schnell an ihre Grenzen. Wir entwickeln die passende Software-Lösung für Ihre individuellen Anforderungen.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            variants={itemVariants}
            className="relative p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 group cursor-pointer"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-125 transition-transform duration-500 shadow-lg">
                <goal.icon className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-black text-left leading-tight text-lg">
                  {goal.text}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <h3 className="text-center text-2xl lg:text-3xl font-bold mb-8 text-primary">
          Digitalisieren Sie Ihr Unternehmen jetzt.
        </h3>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Kostenlose Analyse anfordern
        </button>
      </motion.div>
      </div>
    </section>
  );
};

export default Goals;

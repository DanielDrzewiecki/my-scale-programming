import { motion } from "framer-motion";
import { Zap, TrendingUp, Coins, Award } from "lucide-react";

export const ExpertiseOnDemand = () => {
  const statistics = [
    {
      icon: Zap,
      percentage: "Maximal effizient",
      title: "",
      description: "Automatisieren Sie wiederkehrende Aufgaben und erledigen Sie Prozesse in Sekunden statt Stunden.",
      color: "text-primary"
    },
    {
      icon: Coins,
      percentage: "Kosten senken",
      title: "",
      description: "Schluss mit teuren Abo-Gebühren für Standardsoftware. Einmal investieren, dauerhaft profitieren.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      percentage: "Skalierbar",
      title: "",
      description: "Ihre Software wächst mit Ihrem Unternehmen. Fügen Sie neue Funktionen hinzu, wann immer Sie sie brauchen.",
      color: "text-primary"
    },
    {
      icon: Award,
      percentage: "Wettbewerbsvorteil",
      title: "",
      description: "Bieten Sie Kunden und Mitarbeitern digitale Services, die Ihre Konkurrenz noch lange nicht hat.",
      color: "text-primary"
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="container py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Warum erfolgreiche Unternehmen in{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              individuelle Software investieren
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Individuelle Software ist der einzige Mitarbeiter, der 24/7 Ihre Prozesse fehlerfrei ausführt. 
            Sie skaliert mit Ihrem Wachstum und passt sich genau Ihren Anforderungen an – Schluss mit teuren Workarounds und manueller Arbeit.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-xl md:text-2xl font-bold mb-2 ${stat.color}`}>
                {stat.percentage}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>



        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          {/* removed prompt line per request */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Unverbindlich kennenlernen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

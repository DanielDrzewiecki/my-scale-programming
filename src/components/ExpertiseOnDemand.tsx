import { motion } from "framer-motion";
import { Zap, TrendingUp, Search, Monitor } from "lucide-react";

export const ExpertiseOnDemand = () => {
  const statistics = [
    {
      icon: TrendingUp,
      percentage: "Mehr Anfragen",
      title: "",
      description: "Eine optimierte Website generiert automatisch mehr Leads als Ihre alte Visitenkarte im Netz.",
      color: "text-primary"
    },
    {
      icon: Search,
      percentage: "Top-Rankings",
      title: "",
      description: "Durch technisches SEO und relevante Inhalte finden Kunden Sie, bevor sie die Konkurrenz sehen.",
      color: "text-primary"
    },
    {
      icon: Monitor,
      percentage: "Mobile Ready",
      title: "",
      description: "Perfekte Darstellung auf jedem Smartphone – dort, wo Ihre Kunden heute suchen.",
      color: "text-primary"
    },
    {
      icon: Zap,
      percentage: "Highspeed",
      title: "",
      description: "Superschnelle Seiten sorgen für zufriedene Nutzer und bessere Google-Rankings.",
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
              moderne Websites investieren
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ihre Website ist der einzige Mitarbeiter, der 24/7 für Sie arbeitet, nie krank wird und keine Pause braucht. 
            Eine professionelle Webseite amortisiert sich oft schon nach wenigen Wochen durch gewonnene Neukunden oder qualifizierte Bewerbungen. 
            Setzen Sie auf messbare Ergebnisse statt "ganz hübsches Design":
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
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
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

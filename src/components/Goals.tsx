import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, ShoppingCart, UserPlus, Settings } from "lucide-react";

const goals = [
  {
    id: 1,
    text: "Auf Google gefunden werden",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 2,
    text: "Kaufbereite Kunden anziehen",
    icon: ShoppingCart,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 3,
    text: "Mitarbeiter gewinnen",
    icon: UserPlus,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 4,
    text: "Online-Umsatzkanal schaffen",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 5,
    text: "Mit begrenzten Budgets maximale Leistung erzielen",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    id: 6,
    text: "Konstante Auswertung und Optimierung",
    icon: Settings,
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
          Marketing kostet Sie nur Zeit, Geld und Nerven?
        </h2>
        <p className="text-lg text-white max-w-4xl mx-auto mb-8">
          Unsere Kunden wissen: ohne gutes Marketing geht es nicht. Doch für die interne Umsetzung fehlt es oft an Zeit und geeigneten Mitarbeitern, um selbstständig alle wichtigen Bereiche abzudecken
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
          Schaffen Sie mehr als all' die Jahre zuvor.
        </h3>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Unverbindlich kennenlernen
        </button>
      </motion.div>
      </div>
    </section>
  );
};

export default Goals;

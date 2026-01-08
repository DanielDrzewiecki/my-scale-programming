import { motion } from "framer-motion";

export const UrgencySection = () => {
  return (
    <section className="container py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Eine Fehleinstellung kostet Sie{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text">
              schnell 35.000 € oder mehr...
            </span>
          </h2>
        </motion.div>
        
      </div>
    </section>
  );
};

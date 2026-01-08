import { motion } from "framer-motion";

export const InhouseCosts = () => {
  const costs = [
    { role: "CMO", cost: "100.000 €" },
    { role: "Copywriter", cost: "50.000 €" },
    { role: "Video Editor", cost: "40.000 €" },
    { role: "Grafik Designer", cost: "40.000 €" },
    { role: "Content Creator", cost: "40.000 €" },
    { role: "Meta Media Buyer", cost: "50.000 €" },
    { role: "Google Media Buyer", cost: "50.000 €" },
    { role: "E-Mail Marketing Manager", cost: "45.000 €" },
    { role: "Influencer Marketing Manager", cost: "40.000 €" },
  ];

  const totalCost = 564200;
  const subtotal = 455000;

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
            Greift die Konkurrenz online Ihre{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Kunden ab?
            </span>
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Sie ahnen es bereits: Während Sie sich auf bewährte Vertriebswege konzentrieren, 
              gewinnt die Konkurrenz online Ihre Kunden.
            </p>
            
            <p>
              Aber das Tagesgeschäft lässt keine Zeit für Online-Marketing.
            </p>
            
            <p className="font-semibold text-foreground">
              Doch Fakt ist:{" "}
              <span className="text-primary font-bold">
                Digital aufgestellte B2B-Unternehmen wachsen 5x schneller.
              </span>{" "}
              Der Rest verliert jeden Monat Kunden an digitale Wettbewerber. 
              Das zeigen mehrere McKinsey-Studien.
            </p>
            
            <p className="font-semibold text-foreground">
              Das Problem: Ein eigenes Marketing-Team aufbauen kostet Sie schnell ein Vermögen.
            </p>
            
            <p className="text-lg">
              Es sei denn, Sie bekommen ein ganzes{" "}
              <span className="text-primary font-semibold">
                Experten-Team
              </span>{" "}
              für einen Bruchteil der Kosten.
            </p>
          </div>
        </motion.div>

        {/* Right Section - Cost Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-white text-xl font-medium mb-2">
              Das kostet Sie ein
            </h3>
            <h4 className="text-orange-400 text-3xl font-bold">
              Inhouse Marketing Team
            </h4>
          </div>

          <div className="space-y-4">
            {costs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0"
              >
                <span className="text-white font-medium">{item.role}</span>
                <span className="text-orange-400 font-bold text-lg">{item.cost}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-gray-700">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">
                  Subtotal zzgl. Nebenkosten (ca. 24%)
                </span>
                <span className="text-white font-semibold">
                  {subtotal.toLocaleString('de-DE')} €
                </span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                <span className="text-white text-xl font-bold">
                  Total Pro Jahr
                </span>
                <span className="text-orange-400 text-2xl font-bold">
                  {totalCost.toLocaleString('de-DE')} €
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-xl text-muted-foreground mb-6">
          Oder Sie bekommen ein komplettes Marketing-Team für einen Bruchteil der Kosten
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Potenzial-Check starten
        </button>
      </motion.div>
    </section>
  );
};

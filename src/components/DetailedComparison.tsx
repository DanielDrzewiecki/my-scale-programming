
import { X, Check } from "lucide-react";

export const DetailedComparison = () => {
  const comparisonData = [
    {
      bisher: "Unauffindbar bei Google & Co.",
      jetzt: "Top-Platzierungen für konstante Anfragen"
    },
    {
      bisher: "Veraltetes Design schreckt Besucher ab",
      jetzt: "Professioneller Auftritt schafft sofort Vertrauen"
    },
    {
      bisher: "Keine mobil optimierte Darstellung",
      jetzt: "Perfekte Ansicht auf allen Endgeräten"
    },
    {
      bisher: "Komplizierte Navigation, hohe Absprungrate",
      jetzt: "Klarer Aufbau führt Besucher zum Ziel"
    },
    {
      bisher: "Technisch langsam und unsicher",
      jetzt: "Superschnelle Ladezeiten und DSGVO-konform"
    }
  ];

  return (
    <section id="detailed-comparison" className="py-16 sm:py-20" style={{ backgroundColor: 'rgb(241, 90, 36)' }}>
      <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 leading-tight text-white">
          Eine schlechte Website kostet Sie jeden Tag bares Geld...
        </h2>
        <p className="text-lg text-white max-w-4xl mx-auto">
          Egal ob Sie neue Kunden gewinnen oder qualifizierte Mitarbeiter anziehen wollen: Ihre Website ist der erste Eindruck. 
          Ist dieser veraltet oder unprofessionell, klicken Besucher sofort weg – zur Konkurrenz. Eine moderne Website ist kein Kostenfaktor, sondern Ihre wichtigste Investition.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid md:grid-cols-2 bg-gray-50">
            <div className="p-6 text-center border-r border-gray-200">
              <h3 className="text-xl font-bold text-red-600 mb-2">Veraltete Standard-Webseite</h3>
              <p className="text-sm text-gray-600">Das verlieren Sie:</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-600 mb-2">Verkaufsstarke Unternehmenswebseite</h3>
              <p className="text-sm text-gray-600">Das gewinnen Sie:</p>
            </div>
          </div>

          {/* Desktop: Comparison Rows */}
          <div className="hidden md:block divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-2 min-h-[80px]">
                {/* Bisher Column */}
                <div className="p-6 flex items-center border-r border-gray-200 bg-red-50/30">
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-base text-gray-800 font-medium leading-relaxed">{item.bisher}</span>
                  </div>
                </div>
                
                {/* Jetzt Column */}
                <div className="p-6 flex items-center bg-green-50/30">
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-base text-gray-800 font-medium leading-relaxed">{item.jetzt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Grouped Comparison */}
          <div className="md:hidden">
            {/* Interner Marketingmitarbeiter Section */}
            <div className="bg-red-50/30 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-red-600 mb-3">Veraltete Standard-Webseite</h4>
              <div className="space-y-3">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-sm text-gray-800 font-medium leading-relaxed">{item.bisher}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Externes Marketingteam Section */}
            <div className="bg-green-50/30 rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-600 mb-3">Verkaufsstarke Unternehmenswebseite</h4>
              <div className="space-y-3">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-800 font-medium leading-relaxed">{item.jetzt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
                     <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
             style={{ backgroundColor: 'rgb(0, 25, 50)' }}
           >
             Unverbindlich kennenlernen
           </button>
        </div>
      </div>
      </div>
    </section>
  );
};

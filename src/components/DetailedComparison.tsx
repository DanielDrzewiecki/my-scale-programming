
import { X, Check } from "lucide-react";

export const DetailedComparison = () => {
  const comparisonData = [
    {
      bisher: "Excel-Chaos und manuelle Datenpflege",
      jetzt: "Zentrale Datenbank und automatisierte Prozesse"
    },
    {
      bisher: "Standardsoftware passt nicht zum Prozess",
      jetzt: "Software passt sich zu 100% Ihren Abläufen an"
    },
    {
      bisher: "Fehleranfällige manuelle Übertragung",
      jetzt: "Fehlerfreie Schnittstellen zwischen Systemen"
    },
    {
      bisher: "Langsame Arbeitsabläufe durch Workarounds",
      jetzt: "Maximale Effizienz durch optimierte Workflows"
    },
    {
      bisher: "Hohe laufende Lizenzkosten",
      jetzt: "Kosteneffiziente Entwicklung dank KI"
    }
  ];

  return (
    <section id="detailed-comparison" className="py-16 sm:py-20" style={{ backgroundColor: 'rgb(241, 90, 36)' }}>
      <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 leading-tight text-white">
          Ineffiziente Software kostet Sie jeden Tag bares Geld...
        </h2>
        <p className="text-lg text-white max-w-4xl mx-auto">
          Egal ob Sie Aufträge bearbeiten oder Projekte verwalten: Ihre Software ist das Rückgrat Ihres Unternehmens. 
          Ist diese starr oder fehleranfällig, verlieren Sie wertvolle Arbeitszeit. Eine maßgeschneiderte Software ist kein Kostenfaktor, sondern Ihr größter Hebel für Effizienz.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid md:grid-cols-2 bg-gray-50">
            <div className="p-6 text-center border-r border-gray-200">
              <h3 className="text-xl font-bold text-red-600 mb-2">Standardsoftware & Excel-Listen</h3>
              <p className="text-sm text-gray-600">Das verlieren Sie:</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-600 mb-2">Individuelle Softwarelösung</h3>
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
            {/* Standardsoftware Section */}
            <div className="bg-red-50/30 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-red-600 mb-3">Standardsoftware & Excel-Listen</h4>
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

            {/* Individuelle Software Section */}
            <div className="bg-green-50/30 rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-600 mb-3">Individuelle Softwarelösung</h4>
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

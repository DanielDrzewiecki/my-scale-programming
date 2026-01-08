import { useState } from "react";
import { content } from '@/content/content';
import { Share2, BarChart3, FileText, Zap } from "lucide-react";

export const MarketingTools = () => {
  const { marketingTools } = content;
  const [activeCategory, setActiveCategory] = useState("performance");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Share2": return <Share2 size={20} />;
      case "BarChart3": return <BarChart3 size={20} />;
      case "FileText": return <FileText size={20} />;
      case "Zap": return <Zap size={20} />;
      default: return <Share2 size={20} />;
    }
  };

  const activeCategoryData = marketingTools.categories.find(cat => cat.id === activeCategory);

  return (
    <section className="container py-24 sm:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
          {marketingTools.title.chip}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {marketingTools.title.main}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {marketingTools.title.highlight}
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {marketingTools.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column - Categories */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {marketingTools.categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gray-50 border-gray-300'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {getIcon(category.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${
                      activeCategory === category.id
                        ? 'text-blue-600'
                        : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Tools Grid */}
        <div className="lg:col-span-2">
          {activeCategoryData && (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {activeCategoryData.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} Logo`} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-xs" style={{display: 'none'}}>
                        {tool.name}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

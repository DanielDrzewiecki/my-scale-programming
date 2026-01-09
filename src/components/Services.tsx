import { content } from '@/content/content';
import { motion } from "framer-motion";
import { Camera, FileText, BarChart, Layout, Search, Palette, Users, Share2, Link, Database, Brain, Cloud, Code } from "lucide-react";

export const Services = () => {
  const { services } = content;
  
  const iconMap = {
    Camera: Camera,
    FileText: FileText,
    BarChart: BarChart,
    Layout: Layout,
    Search: Search,
    Palette: Palette,
    Users: Users,
    Share2: Share2,
    Link: Link,
    Database: Database,
    Brain: Brain,
    Cloud: Cloud,
    Code: Code,
  };

  return (
    <section
      id="services"
      className="container py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {services.title.highlight}
          </span>
          {services.title.main}
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          {services.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.serviceList.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

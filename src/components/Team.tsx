import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from '@/content/content';

export const Team = () => {
  const { team } = content;

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {team.title.highlight}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {team.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.members.map(({ imageUrl, name, position }) => (
          <Card
            key={name}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader className="text-center">
              <img
                src={imageUrl}
                alt={`${name} - ${position}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <CardTitle className="text-xl font-bold">{name}</CardTitle>
              <CardDescription className="text-lg font-semibold text-primary">
                {position}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Target,
  DollarSign,
  Timer,
  BarChart2,
  Briefcase,
  UserMinus,
  Sliders,
  ThumbsDown,
  HelpCircle,
  Users,
  PieChart,
  Clock,
  FileQuestion,
} from "lucide-react";
import { content } from "@/content/content";

export function Challenges() {
  const { challenges } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-6 h-6 text-red-500" />;
      case "DollarSign":
        return <DollarSign className="w-6 h-6 text-red-500" />;
      case "Timer":
        return <Timer className="w-6 h-6 text-red-500" />;
      case "BarChart2":
        return <BarChart2 className="w-6 h-6 text-red-500" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-red-500" />;
      case "UserMinus":
        return <UserMinus className="w-6 h-6 text-red-500" />;
      case "Sliders":
        return <Sliders className="w-6 h-6 text-red-500" />;
      case "ThumbsDown":
        return <ThumbsDown className="w-6 h-6 text-red-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-red-500" />;
      case "PieChart":
        return <PieChart className="w-6 h-6 text-red-500" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-red-500" />;
      case "FileQuestion":
        return <FileQuestion className="w-6 h-6 text-red-500" />;
      default:
        return <HelpCircle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="challenges" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {challenges.title.main}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {challenges.title.highlight}
          </span>
        </h2>

        <div className="text-muted-foreground text-xl mt-4 max-w-2xl mx-auto space-y-4">
          {challenges.description.map((desc, index) => (
            <p key={index} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.points.map((point, index) => (
          <Card key={index}>
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="mt-1 bg-red-100 p-1 rounded-2xl">
                {getIcon(point.icon)}
              </div>
              <div>
                <CardTitle>{point.title}</CardTitle>
                <CardDescription className="text-md mt-2">
                  {point.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
} 
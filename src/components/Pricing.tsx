import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { content } from '@/content/content';

export const Pricing = () => {
  const { pricing } = content;
  
  return (
    <section
      id="pricing"
      className="container py-16 sm:py-20"
    >
      <div className="bg-muted/50 border rounded-lg py-16">
        <div className="container px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {pricing.title.main}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              {pricing.title.highlight}
            </span>
          </h2>
          <h3 className="text-xl text-center text-muted-foreground mb-8">
            {pricing.subtitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-7xl mx-auto">
            {pricing.packages.map((pkg) => (
                <Card
                  key={pkg.title}
                  className={`w-full ${pkg.popular ? 'ring-2 ring-primary shadow-lg md:scale-105' : ''}`}
                >
                <CardHeader className="px-6 pt-6">
                  {pkg.popular && (
                    <Badge
                      variant="secondary"
                      className="text-xs font-semibold bg-red-500 text-white border-red-500 hover:bg-red-500/90 mb-4 w-fit"
                    >
                      BESTSELLER
                    </Badge>
                  )}
                  <div className="mb-4">
                    <CardTitle className="text-xl">
                      {pkg.title}
                    </CardTitle>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    {pkg.priceUnit && <span className="text-muted-foreground"> {pkg.priceUnit}</span>}
                  </div>

                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                {/* CTA Button removed for mobile optimization */}

                <hr className="w-full my-6 mx-6" />

                <CardFooter className="flex px-6 pb-6">
                  <div className="space-y-4 w-full">
                    {pkg.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="flex items-start"
                      >
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-sm leading-relaxed">{benefit}</span>
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

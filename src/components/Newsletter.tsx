import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { content } from '@/content/content';

export const Newsletter = () => {
  const { newsletter } = content;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          {newsletter.title.main}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {newsletter.title.highlight}
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          {newsletter.subtitle}
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder={newsletter.form.placeholder}
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button>{newsletter.form.button}</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

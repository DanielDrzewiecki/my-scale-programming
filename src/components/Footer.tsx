import { LogoIcon } from "./Icons";
import { content } from '@/content/content';

export const Footer = () => {
  const { footer } = content;
  
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href={footer.logo.href}
            className="font-bold text-xl flex"
          >
            <LogoIcon />
          </a>
        </div>

        {footer.sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{section.title}</h3>
            {section.links.map((link) => (
              <div key={link.label}>
                <a
                  rel="noreferrer noopener"
                  href={link.href}
                  className="opacity-60 hover:opacity-100"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          {footer.copyright.text}{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={footer.copyright.link.href}
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            {footer.copyright.link.text}
          </a>
        </h3>
      </section>
    </footer>
  );
};

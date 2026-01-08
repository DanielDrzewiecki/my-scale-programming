import { useState } from "react";
import { track } from "@vercel/analytics";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const routeList: RouteProps[] = [
  {
    href: "#detailed-comparison",
    label: "Ihre Vorteile",
  },
  {
    href: "#about",
    label: "Über Uns",
  },
  {
    href: "#pricing",
    label: "Preise",
  },
  {
    href: "#faq",
    label: "FAQ",
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavigation = (label: string, href: string) => {
    // Tracking für Navigationsklicks hinzufügen
    track('Navigation', { 
      label: label, 
      destination: href 
    });
    setIsOpen(false);
  };

  const handleMobileMenuToggle = () => {
    // Tracking für Mobile Menü-Interaktionen
    track('Mobile Menu', { 
      action: isOpen ? 'Close' : 'Open' 
    });
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex items-center">
            <a
              rel="noreferrer noopener"
              href="/"
              onClick={() => track('Logo Click')}
              className="ml-2 flex items-center"
            >
              <LogoIcon />
            </a>
          </NavigationMenuItem>

          {/* Mobile Navigation */}
          <span className="flex md:hidden items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger 
                className="px-2" 
                onClick={handleMobileMenuToggle}
              >
                <Menu
                  className="flex md:hidden h-5 w-5"
                >
                  <span className="sr-only">Menü</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    my-scale.de
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label, icon }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => handleNavigation(label, href)}
                      className={`w-full flex justify-center items-center ${buttonVariants({ 
                        variant: "ghost" 
                      })}`}
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                  {/* Mobile Kontakt-Button */}
                  <a
                    rel="noreferrer noopener"
                    href="#contact"
                    onClick={() => {
                      track('Mobile Contact Button Click');
                      setIsOpen(false);
                    }}
                    className={`w-full flex justify-center items-center mt-4 ${buttonVariants({ 
                      variant: "default" 
                    })}`}
                  >
                    Kontakt
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {routeList.slice(0, 6).map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                onClick={() => handleNavigation(route.label, route.href)}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <a
              rel="noreferrer noopener"
              href="#contact"
              onClick={() => track('Navbar Contact Button Click')}
              className={buttonVariants({ variant: "default" })}
            >
              Kontakt
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

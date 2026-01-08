import { useEffect } from 'react';
import { About } from "./About";
import { Contact } from "./Contact";

import { FAQ } from "./FAQ";
import { LogoSlider } from "./LogoSlider";
import { TrustSlider } from "./TrustSlider";
import { Goals } from "./Goals";

import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Pricing } from "./Pricing";
import { ScrollToTop } from "./ScrollToTop";



import { DetailedComparison } from "./DetailedComparison";
// import { Qualification } from "./Qualification";
import { ExpertiseOnDemand } from "./ExpertiseOnDemand";
import { ProjectResults } from "./ProjectResults";
import { Services } from "./Services";
import { CookieBanner } from "./CookieBanner";
import { Analytics } from "@vercel/analytics/react";


export const LandingPage: React.FC = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <LogoSlider />
      <Goals />
      <Services />
      <TrustSlider />
      <DetailedComparison />
      {/* <InhouseCosts /> */}
      {/* <SkillCircle /> */}
      <ExpertiseOnDemand />
      <ProjectResults />
      {/* <CustomerJourney /> */}
      
      
      {/* <CasesRow /> */}
      <About />
      {/* <Qualification /> */}
      <Pricing />
      {/* <UrgencySection /> */}
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Analytics />
      <CookieBanner />
    </>
  );
};

export default LandingPage;

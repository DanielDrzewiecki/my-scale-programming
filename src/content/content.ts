// index.html (meta tags) muss extra angepasst werden, da dies nicht über die content.ts geschehen kann

// TypeScript Interfaces für Testimonials
interface Testimonial {
  image: string;
  name: string;
  position: string;
  comment: string;
}

interface GoogleReview {
  image: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface TrustpilotReview {
  image: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const content = {
  hero: {
    chip: "",
    title: {
      highlight: "Digitale Sichtbarkeit durch eine verkaufsstarke",
      main: "Unternehmenswebseite."
    },
    subtitle: "Ihre Webseite ist mehr als eine Visitenkarte: Sie ist Ihr bester Verkäufer, der rund um die Uhr Kunden überzeugt und qualifizierte Bewerber begeistert.",
    description: "Veraltete Webseiten kosten Umsatz. Wir erstellen Ihren modernen Internetauftritt, der nicht nur gut aussieht, sondern funktioniert: Mehr Anfragen, bessere Sichtbarkeit bei Google und ein professioneller Eindruck, der im Gedächtnis bleibt.",
    features: [
      "Verkaufsoptimiertes Design",
      "Suchmaschinenoptimierung (SEO)", 
      "Mobil optimiert & schnell",
      "Individuelle Beratung"
    ],
    buttons: {
      primary: "Kostenlose Beratung anfordern",
      secondary: "Leistung & Preise"
    },
    ctaMicrocopy: "Kein Verkaufsgespräch. 20 Min, konkrete Analyse Ihrer Webseite.",
    benefits: [
      "Mehr Kundenanfragen",
      "Bessere Sichtbarkeit",
      "Professionelles Image",
      "Technische Perfektion"
    ],
    notices: [
      {
        icon: "EuroIcon",
        text: "Verkaufspsychologischer Aufbau",
        color: "text-green-600",
        bgColor: "bg-green-100"
      },
      {
        icon: "AwardIcon",
        text: "Professioneller Auftritt",
        color: "text-blue-700",
        bgColor: "bg-blue-100"
      }
    ],
  },

  casesRow: {
    title: "Überzeugen Sie sich selbst",
    subtitle: "Noch Zweifel? Schauen Sie sich die Erfolgsgeschichten unserer über 150 Kunden an.",
    linkText: "Zu unseren Referenzen",
    linkUrl: "https://my-scale.de/referenzen/",
    stats: [
      {
        number: "150+",
        description: "zufriedene Kunden"
      },
      {
        number: "7",
        description: "Jahre Erfahrung"
      },
      {
        number: "100%",
        description: "messbare Ergebnisse"
      }
    ]
  },

  sponsors: {
    title: "Über 150 mittelständische Unternehmen nutzen bereits my-scale",
    companies: [
      { name: "BAUHAUS", logo: "https://logoeps.com/wp-content/uploads/2013/03/bauhaus-vector-logo.png" },
      { name: "HORNBACH", logo: "https://logos-world.net/wp-content/uploads/2020/12/Hornbach-Logo.png" },
      { name: "OBI", logo: "https://logos-world.net/wp-content/uploads/2020/12/OBI-Logo.png" },
      { name: "REWE", logo: "https://logos-world.net/wp-content/uploads/2020/04/Rewe-Logo.png" },
      { name: "EDEKA", logo: "https://logos-world.net/wp-content/uploads/2020/04/Edeka-Logo.png" },
      { name: "ALDI", logo: "https://logos-world.net/wp-content/uploads/2020/04/Aldi-Logo.png" },
      { name: "LIDL", logo: "https://logos-world.net/wp-content/uploads/2020/04/Lidl-Logo.png" },
      { name: "KAUFLAND", logo: "https://logos-world.net/wp-content/uploads/2020/12/Kaufland-Logo.png" },
      { name: "METRO", logo: "https://logos-world.net/wp-content/uploads/2020/12/Metro-Logo.png" },
      { name: "REAL", logo: "https://via.placeholder.com/120x60/0056B3/FFFFFF?text=REAL" },
      { name: "TOOM", logo: "https://via.placeholder.com/120x60/E31E24/FFFFFF?text=TOOM" },
      { name: "HAGEBAU", logo: "https://via.placeholder.com/120x60/FF6600/FFFFFF?text=HAGEBAU" }
    ],
    areas: [
      { name: "Video- & Fotoproduktion" },
      { name: "Content & Social Media Marketing" },
      { name: "Performance Marketing" },
      { name: "Webdesign" },
      { name: "SEO Optimierung" },
      { name: "Markenaufbau" },
    ],
  },

  workflow: {
    title: {
      main: "So arbeiten wir",
      highlight: "in 4 Schritten"
    },
    subtitle: "Jede erfolgreiche Marketingstrategie beginnt mit einem tiefen Verständnis. Wir springen nicht einfach in Lösungen — wir hören zu, analysieren und entwickeln maßgeschneiderte Konzepte.",
    steps: [
      {
        number: "01",
        title: "Discovery Workshop",
        description: "Wir erkunden Ihre Ziele, Zielgruppen und technischen Anforderungen, um einen klaren Projektumfang zu definieren.",
        duration: "90 Min.",
        icon: "Target",
        highlighted: false
      },
      {
        number: "02", 
        title: "Marketing-Strategie",
        description: "Wir identifizieren, wo Marketing echten Mehrwert schafft und entwickeln einen Roadmap, der auf Ihr Unternehmen zugeschnitten ist.",
        duration: "1-2 Wochen",
        icon: "Rocket",
        highlighted: true,
        cta: "Workshop buchen"
      },
      {
        number: "03",
        title: "Umsetzung & Optimierung", 
        description: "Wir verwandeln Konzepte in funktionierende Lösungen — schnell, skalierbar und nutzerorientiert.",
        duration: "fortlaufend",
        icon: "BarChart",
        highlighted: false
      },
      {
        number: "04",
        title: "Übergabe & Support",
        description: "Wir gewährleisten eine reibungslose Übergabe, schulen Ihr Team und bieten kontinuierlichen Support für die Weiterentwicklung.",
        duration: "laufend", 
        icon: "TrendingUp",
        highlighted: false
      }
    ]
  },

  about: {
    title: {
      highlight: "Wir machen starke",
      main: "Unternehmen sichtbar",
    },
    subtitle: "Ihr gesamtheitlicher Partner für Wachstum und Digitalisierung.",
    description: [
      "Mit unserem über 13-köpfigen Expertenteam aus Informatikern, Marketingprofis, Beratern, Designern, Textern und Video- & Fotografen unterstützen wir Ihr Unternehmen dabei, modern, professionell & überzeugend aufzutreten und dauerhaft unabhängig von Jobportalen, Headhuntern und Personaldienstleistern zu werden.",
      "Praxisnah, sachgerecht und mit tiefem Verständnis für den Mittelstand und technische Berufe. Wir sind Ihr Partner für mehr Sichtbarkeit & gesamtheitliches Wachstum.",
    ],
    image: {
      src: "/team1.jpg",
      alt: "my-scale Team - Ihr Partner für Sichtbarkeit",
    },
    stats: [
      {
        number: "150+",
        description: "Zufriedene Kunden",
        detail: "Über 150 kleine und mittelständische Unternehmen setzen bereits auf unsere Expertise im digitalen Marketing und in der Mitarbeitergewinnung."
      },
      {
        number: "13+",
        description: "Engagierte Experten",
        detail: "Unser Team aus über 13 Digitalprofis arbeitet mit Leidenschaft an Ihrem Erfolg."
      },
      {
        number: "7+",
        description: "Jahre Erfahrung",
        detail: "Seit 2017 unterstützen wir Unternehmen erfolgreich bei ihrer digitalen Transformation und Marketingstrategie."
      }
    ]
  },

  howItWorks: {
    title: {
      main: "So funktioniert",
      highlight: "unsere Methode",
    },
    subtitle:
      "Effektives Marketing in vier strategischen Schritten: Datenbasiert, zielgerichtet, transparent.",
    steps: [
      {
        icon: "MedalIcon",
        title: "Analyse",
        description:
          "Tiefgehende Analyse Ihrer Marketingsituation, Zielgruppe und Wettbewerbslandschaft.",
      },
      {
        icon: "MapIcon",
        title: "Strategie",
        description:
          "Entwicklung einer maßgeschneiderten, datengetriebenen Marketingstrategie mit klaren Zielen.",
      },
      {
        icon: "PlaneIcon",
        title: "Umsetzung",
        description:
          "Professionelle Implementierung der Marketingmaßnahmen über verschiedene Kanäle und Formate.",
      },
      {
        icon: "GiftIcon",
        title: "Optimierung",
        description:
          "Kontinuierliche Performance-Analyse und agile Anpassung für maximale Marketingerfolge.",
      },
    ],
  },

  features: {
    title: {
      main: "Externer Marketingmitarbeiter:",
      highlight: "Mehr Leistung, weniger Kosten",
    },
    subtitle: "Einen geeigneten Mitarbeiter im Marketing zu finden und einzustellen, gestaltet sich für die meisten Unternehmen schwierig. Die Suche blockiert wertvolle Ressourcen und wenn Sie jemanden finden, dauert es Monate, bis sich der Mitarbeiter amortisiert und wirklich eigenständig arbeiten kann.",
    featureList: [
      "schnellere Umsetzung",
      "höhere Qualität",
      "sofortige Entlastung",
      "skalierbar & flexibel"
    ],
    cards: [
      {
        title: "Performance Marketing",
        description:
          "Datengetriebene Werbekampagnen mit Google Ads, Social Media Ads und präzisem Targeting für maximale Conversion.",
        image: {
          src: "/src/assets/performance.png",
          alt: "Performance Marketing",
        },
      },
      {
        title: "Digitales Recruiting",
        description:
          "Strategische Content-Entwicklung für Blogs, Social Media und Newsletter, die Ihre Zielgruppe begeistern und binden.",
        image: {
          src: "/src/assets/recruiting.png",
          alt: "Content Marketing",
        },
      },
      {
        title: "Employer Branding",
        description:
          "Entwicklung einer starken Markenidentität, die Ihre Unique Selling Points hervorhebt und Kunden anzieht.",
        image: {
          src: "/src/assets/branding.png",
          alt: "Markenentwicklung",
        },
      },
    ],
  },

  services: {
    title: {
      highlight: "Gebündelte Expertise",
      main: "- Ihre Website als Marketing-Zentrale",
    },
    subtitle: "Eine erfolgreiche Website steht nie allein. Sie ist der Dreh- und Angelpunkt all Ihrer Marketing-Aktivitäten. Wir sorgen dafür, dass alle Räder ineinandergreifen.",
    serviceList: [
      {
        title: "Karriereseiten",
        description: "Machen Sie Ihre Website zum Bewerbermagneten: Integrierte Karriereportale, die Fachkräfte überzeugen.",
        icon: "Users",
      },
      {
        title: "Suchmaschinenoptimierung (SEO)",
        description: "Gefunden werden, wo Ihre Kunden suchen: Technische und inhaltliche Optimierung für Top-Rankings bei Google.",
        icon: "Search",
      },
      {
        title: "Social Media Integration",
        description: "Nahtlose Verbindung Ihrer Website mit LinkedIn, Instagram & Co. für maximale Reichweite und Interaktion.",
        icon: "Share2",
      },
      {
        title: "Performance Ready",
        description: "Perfekt vorbereitet für Werbekampagnen: Landingpages und Tracking-Setups für Google & Social Ads.",
        icon: "BarChart",
      },
      {
        title: "Content & Copywriting",
        description: "Texte, die verkaufen: Professionelle Inhalte, die Ihre Botschaft klar kommunizieren und Vertrauen aufbauen.",
        icon: "FileText",
      },
      {
        title: "Foto- & Videoproduktion",
        description: "Visuelle Überzeugungskraft: Authentische Bilder und Videos direkt in Ihre Website eingebunden.",
        icon: "Camera",
      }
    ],
  },

  cta: {
    title: {
      main: "",
      highlight: "Ihr Erfolg",
      end: "beginnt hier"
    },
    description:
      "Vereinbaren Sie jetzt ein unverbindliches Kennlerngespräch und entwickeln Sie eine maßgeschneiderte Marketingstrategie für Ihren Unternehmenserfolg.",
    buttons: {
      primary: "Unverbindlich kennenlernen",
      secondary: "Unsere Leistungen entdecken"
    }
  },

  testimonials: {
    title: {
      main: "Was unsere",
      highlight: "Kunden sagen",
    },
    subtitle:
      "Erfahren Sie, wie unsere Expertise Unternehmen zu mehr Erfolg verhilft.",
    list: [
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=EGS",
        name: "Maren Sudmann",
        position: "energy grid service GmbH",
        comment:
          "Unsere Kampagne über my-scale läuft super, professionell und macht Spaß. Wir fühlen uns gut betreut und beraten. Ich finde das Preis/Leistungsverhältnis unschlagbar.",
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=MS",
         name: "Eike Marten",
         position: "GIG mbH",
        comment:
          "Seit fast zwei Jahren arbeiten wir erfolgreich mit my-scale zusammen, insbesondere in den Bereichen Marketing und Personalgewinnung. Dank dieser Kooperation konnten wir bereits mehrere offene Stellen besetzen. Der Kontakt ist stets sehr persönlich und angenehm, hervorzuheben ist die partnerschaftliche Zusammenarbeit. my-scale hat uns immer kompetent unterstützt.",
      },
       {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=GB",
        name: "Tobias Schenck",
         position: "schenck.de AG",
        comment:
          "Die Zusammenarbeit mit my-scale ist phantastisch und ich kann einfach nur danke sagen. Das, was diesen Dienstleister für mich besonders macht, ist, wie die sich in mich als Kunden eindenken und auf meine besonderen Ansprüche auch eingehen. Eine richtige Kooperation aufzubauen, wo nicht nur Dienstleistung erbracht wird, sondern auch gezielt Wissen transferiert und gemeinsam Strategie aufgebaut wir ist schon echt toll - uns hilft es unglaublich dabei, unsere Kommunikations- und Marketingprozesse aus der Vergangenheit in die Zukunft zu bringen. Weiter so und danke!",
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=SW",
        name: "Fiete Löwe",
         position: "Seehafen Wismar GmbH",
        comment:
          "Hervorragender Recruiting-Dienstleister – Absolut empfehlenswert! Ich arbeite seit einiger Zeit mit my-scale im Bereich Recruiting zusammen und habe schon einige Stellen durch effiziente social media Kampagnen besetzen können.",
      },
           {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=SH",
         name: "Susanne Hollmann",
         position: "Strahlenzentrum Hamburg",
        comment:
          "Sehr professionelle Zusammenarbeit, die auch noch sehr viel Spaß macht. Der Output bzw. der Erfolg für den Kunden ist entsprechend positiv !!! Ich kann die my-scale digitale GmbH zu 100% empfehlen.",
      },
        {
          image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CT",
        name: "Bastian Tau",
        position: "Creditreform Hannover-Celle Bissel KG",
        comment:
          "Mit der Dienstleistung von my-scale haben wir bewusst auf einen anderen Kanal der Ansprache gesetzt; mit sehr gutem Ergebnis.",
      },
         {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=EU",
         name: "Dr. Steffen Rothe",
          position: "Energieunion GmbH",
        comment:
          "Alles perfekt, tolles Team und gute Arbeit",
      },
          {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=BT",
         name: "Fritz Schlicher",
         position: "Bluetest Testservice GmbH",
        comment:
          "Kompetente Beratung, freundliche Unterstützung pro-aktive Projektbegleitung",
      },
          {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CM",
        name: "Klaas Klüther",
        position: "Creditreform Mecklenburg-Vorpommern von der Decken KG",
        comment:
          "Tolle, erfolgreiche Zusammenarbeit!",
      },
         {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CL",
        name: "Louise Boekhoff",
         position: "Creditreform Leer",
        comment:
          "Durch die professionelle Zusammenarbeit und das ausgezeichnete Konzept haben wir viele geeignete Bewerbungen erhalten. Wir konnten in Folge dessen unsere zwei offenen Stellen besetzen.",
      },
         {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CU",
        name: "Julian Glatz",
         position: "Curatherm Versorgungstechnik GmbH",
        comment:
          "Die Zusammenarbeit war reibungslos und unkompliziert. Das Ziel einen neuen Mitarbeiter zu finden wurde schnell erreicht. ",
      },
          {
         image: "https://placehold.co/150x150/E8F0FE/0049A5?text=PR",
         name: "Torge Gelard",
        position: "Prokon Regenerative Energien eG",
         comment:
          "Guter Kundenservice und eine sehr gute Zusammenarbeit - vielen Dank!",
      },
         {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CO",
        name: "Thomas Schüttenberg",
         position: "Creditreform Osnabrück",
         comment:
          "Exzellenter Recruiting-Service! Unsere Erfahrung mit my-scale waren durchweg positiv. Alle ausgeschriebenen Stellen konnten bisher schnell besetzt werden.",
      },
       {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CB",
        name: "Thomas Schüttenberg",
         position: "Creditreform Bielefeld",
        comment:
          "Exzellenter Recruiting-Service! Unsere Erfahrung mit my-scale waren durchweg positiv. Alle ausgeschriebenen Stellen konnten bisher schnell besetzt werden.",
      },
      {
       image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CM",
        name: "Julia Aldejohann",
        position: "Creditreform Münster",
         comment:
          "Auf Empfehlung unserer Geschäftsstelle in Osnabrück haben wir my-scale beauftragt und wurden nicht enttäuscht. Die Anzahl der durch die Kampagne eingegangenen Bewerbungen spricht für sich.",
      },
        {
          image: "https://placehold.co/150x150/E8F0FE/0049A5?text=MH",
        name: "Timo Harland",
        position: "Creditreform Magdeburg Harland GmbH & Co. KG",
        comment:
          "Unser Ziel, unseren Bewerbungsprozess neu aufzustellen, konnten wir mit my-scale sehr schnell umsetzen. Alles lief sehr persönlich und professionell, und die Umsetzung erfolgte sehr kurzfristig, sodass wir schneller als erwartet einen Erfolg erzielen konnten.",
      },
          {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=YH",
        name: "Dirk Markmann",
         position: "Yachtwerft Heiligenhafen GmbH & Co. KG",
        comment:
          "Sehr professionelle Betreuung. Immer wieder!!!!",
      },
           {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=GI",
        name: "Sabine Umland",
         position: "Gesellschaft für Industrie- und Gebäudetechnik mbH",
        comment:
          "Seit fast zwei Jahren arbeiten wir erfolgreich mit my-scale zusammen, insbesondere in den Bereichen Marketing und Personalgewinnung. Dank dieser Kooperation konnten wir bereits mehrere offene Stellen besetzen.",
      },
         {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=ZF",
         name: "Niklas Zagolla",
         position: "ZBV Fels GmbH",
        comment:
          "Vielen Dank für die professionelle Zusammenarbeit und die individuelle Betreuung! Weiter so!",
      },
        {
         image: "https://placehold.co/150x150/E8F0FE/0049A5?text=CA",
         name: "Mark Görgens",
         position: "Creditreform Accredis GmbH",
         comment:
          "Uns wurde my-scale von Geschäftspartnern empfohlen und wir haben direkt für drei Stellen über die Plattform passende Bewerber gesucht und auch gefunden. Die Zusammenarbeit war immer sehr gut und bei Fragen haben wir sehr schnell Rückmeldungen bekommen.",
      },
    ] as Testimonial[],
    google: [
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=JD",
        name: "Johannes Dörr",
        rating: 5,
        comment: "Sehr professionelles Team mit viel Expertise im Bereich digitales Recruiting. Die Zusammenarbeit war von Anfang an sehr angenehm und zielführend.",
        date: "2024-02-15"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=MS",
        name: "Maria Schmidt",
        rating: 5,
        comment: "Tolle Agentur mit einem super Team! Die Kommunikation war immer transparent und die Ergebnisse haben unsere Erwartungen übertroffen.",
        date: "2024-01-20"
      }
    ] as GoogleReview[],
    trustpilot: [
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=BP",
        name: "Backofenbau GmbH Parchim",
        rating: 5,
        comment: "Top Team und super Beratung und Betreuung! Ich bin von der Zusammenarbeit mit My-scale überzeugt und sehr zufrieden. Vom Onboarding bis zum kurzfristigen positiven Ergebniss eine positive Erfahrung. Ich kann das Team nur weiter empfehlen!!!",
        date: "2024-12-19"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=ME",
        name: "M. Erstling",
        rating: 5,
        comment: "Die Zusammenarbeit mit my-scale läuft einfach sehr gut. Die erste Kampagne war sehr erfolgreich und wir konnten die gesuchten Stellen besetzen. Zur Zeit läuft eine weitere Kampagne und auch in Zukunft werden wir weiter mit my-scale arbeiten um unsere offenen Stellen zu besetzen.",
        date: "2024-10-30"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=MF",
        name: "Maurice Fürle",
        rating: 5,
        comment: "Wir arbeiten seit kurzer Zeit mit der My-Scale GmbH zusammen. Trotz Marketing Vorkenntnissen konnten wir mit einer gemeinsamen Kampagne viele neue Impulse mitnehmen und unsere Ergebnisse in der Neukundengewinnung deutlich steigern. Die gesamte Betreuung lief Grund auf professionell ab. Bei Rückfragen wurde zuverlässig geantwortet. Es wurden alle Versprechungen gehalten. Wer für sein Unternehmen marktgerecht Neukunden gewinnen möchte ist hier an der richtigen Stelle! Klare Empfehlung!",
        date: "2024-09-30"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=TS",
        name: "Tobias Schenck",
        rating: 5,
        comment: "Die Zusammenarbeit mit my-scale ist phantastisch und ich kann einfach nur danke sagen. Das, was diesen Dienstleister für mich besonders macht, ist, wie die sich in mich als Kunden eindenken und auf meine besonderen Ansprüche auch eingehen. Eine richtige Kooperation aufzubauen, wo nicht nur Dienstleistung erbracht wird, sondern auch gezielt Wissen transferiert und gemeinsam Strategie aufgebaut wir ist schon echt toll - uns hilft es unglaublich dabei, unsere Kommunikations- und Marketingprozesse aus der Vergangenheit in die Zukunft zu bringen.",
        date: "2024-08-09"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=AC",
        name: "Alessandro Cianotti",
        rating: 5,
        comment: "Wir haben sehr gute Erfahrungen mit der my-scale GmbH gemacht. my-scale hat uns bei der Suche nach Teilnehmern für unsere Umschulungsmaßnahme unterstützt. Die Geschäftsführer Daniel und Bastian sind sehr professionell, freundlich und zeigen großen Teamgeist bei der Arbeit an gemeinsamen Projekten. Wir freuen uns auf weiter gute Zusammenarbeit!",
        date: "2024-10-09"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=MS",
        name: "Maren S.",
        rating: 5,
        comment: "Unsere Kampagne über my-scale läuft seit ca. 2 Monaten (für 6). Die Herangehensweise und Zusammenarbeit mit dem Team und insbesondere mit unserem Ansprechpartner ist super, professionell und macht Spaß. Wir fühlen uns gut betreut und beraten. Bei Fragen oder Anliegen sind sie gut und schnell erreichbar. Wir machen regelmäßig Termine, in denen wir uns austauschen und ggf. eine Anpassung der Kampagne vornehmen. Ich finde das Preis/Leistungsverhältnis unschlagbar und Danke für die tolle (Zusammen)Arbeit.",
        date: "2024-08-15"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=AD",
        name: "An dreas",
        rating: 5,
        comment: "Die Zusammenarbeit mit dem Team von my-scale läuft ausgezeichnet. Innerhalb weniger Wochen konnten wir bereits zwei Stellen besetzen und freuen uns auf weitere tolle Mitarbeiter, um unsere gute Auftragslage auch abarbeiten zu können. Als mittelständisches Unternehmen haben wir in my-scale einen sehr kompetenten Partner für die Mitarbeitergewinnung gefunden. Alleine könnten wir diese Erfolge in der Personalakquise nie erzielen.",
        date: "2024-10-29"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=PS",
        name: "Petra Schmidt",
        rating: 5,
        comment: "Wir als großes Bauunternehmen mussten für die Mitarbeitergewinnung ebenfalls andere Wege einschlagen, da die bisherigen Kanäle für Stellenanzeigen kaum noch Erfolg brachten. Durch die Kampagne(n) konnten wir tatsächlich auf uns aufmerksam machen und erhielten zahlreiche Bewerbungen. Die Zusammenarbeit mit unserem Ansprechpartner ist unkompliziert, Wünsche werden angenommen und schnell umgesetzt. Wir fühlen uns gut betreut und freuen uns weiterhin auf eine hervorragende Kooperation.",
        date: "2024-09-26"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=SU",
        name: "Sabine Umland",
        rating: 4,
        comment: "Seit fast zwei Jahren arbeiten wir erfolgreich mit my-scale zusammen, insbesondere in den Bereichen Marketing und Personalgewinnung. Dank dieser Kooperation konnten wir bereits mehrere offene Stellen besetzen. Der Kontakt ist stets sehr persönlich und angenehm, hervorzuheben ist die partnerschaftliche Zusammenarbeit. my-scale hat uns immer kompetent unterstützt.",
        date: "2024-08-07"
      },
      {
        image: "https://placehold.co/150x150/E8F0FE/0049A5?text=PB",
        name: "Pamela Buggenhagen",
        rating: 5,
        comment: "Junges dynamisches Team mit professioneller Arbeit und Begleitung durch den Prozess",
        date: "2024-12-12"
      }
    ] as TrustpilotReview[]
  },


  team: {
    title: {
      highlight: "Das sind die Experten hinter Ihrem Erfolg",
    },
    subtitle:
      "Jeder unserer Experten bringt jahrelange Erfahrung auf seinem Gebiet mit. Das bedeutet: Sie bekommen die gleiche Qualität wie Konzerne mit Millionen-Budgets für einen Bruchteil der Kosten.",
    members: [
      {
        imageUrl: "/bastian.png",
        name: "Bastian Reinkober",
        position: "Geschäftsführung"
      },
      {
        imageUrl: "/daniel.png",
        name: "Daniel Drzewiecki",
        position: "Geschäftsführung"
      },
      {
        imageUrl: "/patrik.png",
        name: "Patrik Kramer",
        position: "Senior Marketing Consultant"
      },
      {
        imageUrl: "/toralf.png",
        name: "Toralf Jansen",
        position: "Senior Marketing Consultant"
      },
      {
        imageUrl: "/tim.png",
        name: "Tim Lübke",
        position: "Marketing Consultant"
      },
      {
        imageUrl: "/annika.png",
        name: "Annika Reichel",
        position: "Designer"
      },
      {
        imageUrl: "/maxx.png",
        name: "Maxx Meyer",
        position: "Marketing Consultant"
      },
      {
        imageUrl: "/dennis2.png",
        name: "Dennis Krüger",
        position: "Entwickler"
      },
      {
        imageUrl: "/fabio.png",
        name: "Fabio Kaschel",
        position: "Video- & Fotograf"
      },
      {
        imageUrl: "/vanessa.png",
        name: "Vanessa Herrmann",
        position: "Operations Manager"
      },
      {
        imageUrl: "/alex.png",
        name: "Alexander Haufe",
        position: "Video- & Fotograf",
        socialNetworks: []
      },
      {
        imageUrl: "/lisa.png",
        name: "Lisa Wrogemann",
        position: "Content Managerin",
        socialNetworks: []
      }
    ]
  },



   pricing: {
    title: {
      highlight: "Preisgestaltung",
      main: "Transparente"
    },
    subtitle: "Jederzeit volle Kostenkontrolle. Ohne Überraschungen.",
    priceAnchor: {
      title: "Marketing-Paket",
      startingPrice: "ab 2.499",
      description: "Strategieentwicklung, Webseiten, Social Media, Video, Content & Werbung"
    },
    packages: [
      {
        title: "Landingpage",
        popular: false,
        price: "ab 2.000 €",
        priceUnit: "",
        description: "Perfekt für spezifische Kampagnen oder Produkte",
        buttonText: "Angebot anfordern",
        benefits: [
          "Fokus auf Conversion",
          "Klares Design",
          "Schnelle Ladezeit",
          "Mobile optimiert",
          "Kontaktformular-Integration"
        ],
      },
      {
        title: "Unternehmenswebseite (S)",
        popular: true,
        price: "ab 6.000 €",
        priceUnit: "",
        description: "Der professionelle Einstieg für kleine Unternehmen",
        buttonText: "Angebot anfordern",
        benefits: [
          "Bis zu 10 Unterseiten",
          "Modernes Design",
          "SEO-Basisoptimierung",
          "Mobile & Tablet optimiert",
          "Blog-Funktionalität",
          "Datenschutzkonform"
        ],
      },
      {
        title: "Unternehmenswebseite (L)",
        popular: false,
        price: "Individuell",
        priceUnit: "",
        description: "Umfassende Lösung für etablierte Unternehmen",
        buttonText: "Angebot anfordern",
        benefits: [
          "Unbegrenzte Unterseiten",
          "Premium Design & Animationen",
          "Erweiterte SEO-Strategie",
          "Mehrsprachigkeit möglich",
          "Integration von Drittsystemen",
          "Content-Erstellung inklusive"
        ],
      },
    ],
  },


  contact: {
    title: {
      highlight: "unverbindlichen Gespräch kennen",
      main: "Lernen Sie uns in einem",
      end: ""
    },
    subtitle:
      "Lernen Sie uns kennen und erfahren Sie, was für Ihr Unternehmen möglich ist. In unserem unverbindlichen Kennlerngespräch besprechen wir Ihre Marketingziele und zeigen Ihnen konkrete Möglichkeiten auf.",
    form: {
      titleHighlight: "Unverbindliches",
      title: "Kennlerngespräch",
      successMessage: "Ihre Anfrage wurde erfolgreich gesendet!",
      errorMessage: "Fehler beim Senden. Bitte versuchen Sie es später erneut.",
      description: "",
      landingPageTopic: "Externer Marketingmitarbeiter",
      fields: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        interest: "Ich interessiere mich für",
      },
      interestOptions: [
        "Unternehmenswebseite",
        "Landingpage",
        "Karriereseite",
        "Online-Marketing",
        "Sonstiges"
      ],
      button: "Unverbindlich kennenlernen",
    },
    info: {
      title: "my-scale digitale GmbH",
      description: "Ihr Partner für innovative Marketinglösungen im Mittelstand:",
      email: {
        label: "E-Mail",
        value: "info@my-scale.de",
      },
      phone: {
        label: "Telefon",
        value: "03841/758-2790",
      },
      address: {
        label: "Standort",
        street: "Alter Holzhafen 19",
        city: "23966 Wismar",
      },
    },
  },

  newsletter: {
    title: {
      main: "Bleiben Sie informiert",
      highlight: "mit unserem Newsletter",
    },
    subtitle:
      "Erhalten Sie regelmäßig aktuelle Marketing-Trends, Tipps und exklusive Angebote von my-scale.",
    form: {
      placeholder: "Ihre E-Mail-Adresse",
      button: "Abonnieren",
    },
  },

  faq: {
    title: {
      main: "Häufig gestellte",
      highlight: "Fragen",
    },
    questions: [
      {
        question:
          "Wie lange dauert die Erstellung einer neuen Webseite?",
        answer:
          "Der Zeitrahmen hängt stark vom gewünschten Umfang ab. Für eine kompakte Landingpage benötigen wir meist ein bis zwei Wochen. Eine umfangreichere Unternehmenswebseite realisieren wir in der Regel innerhalb von vier bis acht Wochen. Zu Projektbeginn erstellen wir gemeinsam einen verbindlichen Zeitplan.",
      },
      {
        question:
          "Kann ich Inhalte später selbst ändern?",
        answer:
          "Ja, das ist problemlos möglich. Wir bauen Ihre Webseite so auf, dass Sie Texte und Bilder ganz einfach selbst austauschen können. Dafür sind keine Programmierkenntnisse nötig und wir zeigen Ihnen in einer kurzen Einführung genau, wie es funktioniert.",
      },
      {
        question:
          "Wird meine Webseite auch auf Handys gut aussehen?",
        answer:
          "Auf jeden Fall. Wir entwickeln nach dem Prinzip 'Mobile First'. Das heißt für Sie: Ihre Webseite sieht auf Smartphones, Tablets und Desktop-Computern gleichermaßen professionell aus und lässt sich auf allen Geräten intuitiv bedienen.",
      },
      {
        question:
          "Kümmern Sie sich auch um die Suchmaschinenoptimierung?",
        answer:
          "Ja, eine solide technische Basisoptimierung ist bei uns immer im Preis enthalten. Zusätzlich bieten wir Ihnen gerne weiterführende Strategien an, mit denen wir Ihre Sichtbarkeit bei Google dauerhaft und nachhaltig steigern.",
      },
      {
        question:
          "Was kostet eine neue Webseite?",
        answer:
          "Eine Landingpage beginnt bei uns ab 2.000 Euro. Für eine vollständige Unternehmenswebseite starten die Preise ab 6.000 Euro. Ihre individuellen Anforderungen und Wünsche besprechen wir am besten persönlich in einem kostenlosen Beratungsgespräch.",
      },
      {
        question:
          "Helfen Sie auch bei der Erstellung von Texten und Bildern?",
        answer:
          "Selbstverständlich. Wir bieten Ihnen den kompletten Service aus einer Hand an. Das reicht von professionellen Werbetexten über hochwertige Fotoshootings bis hin zu authentischen Imagevideos für Ihren perfekten Auftritt.",
      },
      {
        question:
          "Was passiert nach der Fertigstellung der Webseite?",
        answer:
          "Wir lassen Sie auch nach dem Go-live nicht allein. Gerne übernehmen wir die regelmäßige Wartung für Updates, Backups und Sicherheit. So bleibt Ihre Seite technisch immer auf dem neuesten Stand und Sie müssen sich um nichts kümmern.",
      },
      {
        question:
          "Wir haben schon eine Webseite. Können Sie diese überarbeiten?",
        answer:
          "Ja, wir führen auch Relaunches durch. Dabei schauen wir uns Ihre bestehende Seite genau an, übernehmen funktionierende Inhalte und geben ihr ein modernes sowie verkaufsstarkes Upgrade.",
      },
      {
        question:
          "Ist die neue Webseite dann auch datenschutzkonform?",
        answer:
          "Datenschutz nehmen wir sehr ernst. Wir integrieren alle nötigen Elemente wie Cookie-Banner und Datenschutzerklärungen direkt für Sie. Zudem achten wir penibel auf eine saubere technische Umsetzung, indem wir beispielsweise Google Fonts lokal einbinden.",
      }
    ],
    contact: {
      text: "Haben Sie noch Fragen?",
      linkText: "Kontaktieren Sie uns",
      href: "#contact",
    },
  },

  footer: {
    logo: {
      text: "my-scale",
      href: "/",
    },
    sections: [
      {
        title: "Über uns",
        links: [
          { label: "Team", href: "#about" },
          { label: "Referenzen", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Links",
        links: [
          { label: "Impressum", href: "https://my-scale.de/impressum" },
           { label: "Datenschutz", href: "https://my-scale.de/datenschutz" },
        ],
      },
    ],
    copyright: {
      text: "© 2025 ",
      link: {
        text: "my-scale.de",
        href: "https://my-scale.de",
      },
    },
  },

  heroCards: {
    testimonial: {
      image: "/egs.jpg",
      name: "Maren Sudmann",
      position: "energy grid service GmbH",
      comment:
        '"Unsere Marketingstrategie von my-scale hat unsere Online-Sichtbarkeit komplett transformiert. Professionell und mit messbaren Ergebnissen."',
    },
    team: {
      image: "/bastian.png",
      name: "Bastian Reinkober",
      position: "Geschäftsführer",
      comment: "Wir unterstützen Unternehmen mit maßgeschneiderten Marketinglösungen.",
      linkedin: "https://linkedin.com/in/bastian-reinkober-%F0%9F%93%88-b09706199/"
    },
    pricing: {
      title: "Kostenlose Marketing-Beratung",
      badge: "Empfohlen",
      duration: "",
      description: "Entwickeln Sie Ihre individuelle Marketingstrategie für maximalen Unternehmenserfolg",
      benefits: [
        "Individuelle Marketingberatung",
        "Analyse Ihrer digitalen Potenziale",
        "Strategieentwicklung",
      ],
    },
    expertise: {
      title: "Digitales Marketing für Unternehmen",
      description: "Innovative Lösungen für Sichtbarkeit, Kundengewinnung und Markenwachstum"
    }
  },

    statistics: {
    stats: [
      {
        quantity: "150+",
        description: "Über 150+ Kunden vertrauen auf my-scale",
      },
      {
        quantity: "10+",
        description: "Jahre digitale Marketingexpertise",
      },
    ],
  },

  comparison: {
    title: {
      main: "Warum externer",
      highlight: "Marketingmitarbeiter?"
    },
    subtitle: "Der direkte Vergleich zeigt die Vorteile",
    options: [
      {
        title: "Interner Hire",
        description: "Festanstellung",
        pros: [
          "Vollzeit verfügbar",
          "Internes Know-how"
        ],
        cons: [
          "€60.000+ Jahresgehalt",
          "6+ Monate Einarbeitung", 
          "30 Urlaubstage + Krankheit",
          "Begrenztes Skill-Set",
          "Kündigungsschutz"
        ],
        color: "red"
      },
      {
        title: "Freelancer",
        description: "Projekt-basiert",
        pros: [
          "Spezifische Expertise",
          "Flexible Verfügbarkeit"
        ],
        cons: [
          "€800-1500/Tag",
          "Keine Garantien",
          "Wechselnde Qualität",
          "Koordinationsaufwand",
          "Nur Teilbereiche"
        ],
        color: "orange"
      },
      {
        title: "Externer MA",
        description: "my-scale Team",
        pros: [
          "Holen Sie sich erfahrene Marketing-Experten auf Knopfdruck - ohne die Personalkosten",
          "Erhalten Sie sofort ein gesamtes Team an Marketing-Profis für weniger als die Kosten eines Junior-Marketers",
          "Perfekt, um online durchzustarten oder in kurzer Zeit messbare Ergebnisse zu erzielen",
          "Keine Personalkosten, keine Einstellungsrisiken, kein Stress"
        ],
        cons: [
          "Externes Management nötig"
        ],
        color: "green",
        recommended: true
      }
    ]
  },

  challenges: {
    title: {
      main: "interner vs.",
      highlight: "externer Marketingmitarbeiter"
    },
    description: [
      "Nachteile interner MA: lange ressourcenintensive Einarbeitungszeit, 6 Wochen Urlaub + Krankheitstage, späte Entlastung.",
      "Vorteile externer MA: sofort einsatzbereit, keine Einarbeitung, höhere Qualität, schnellere Umsetzung, 365 Tage Leistung."
    ],
    points: [
      {
        title: "Begrenzte Marketingkapazitäten",
        description: "Fehlende interne Ressourcen für professionelles Marketing und strategische Planung.",
        icon: "Users"
      },
      {
        title: "Mangelnde digitale Expertise",
        description: "Unzureichende Kenntnisse in modernen Marketingkanälen wie Social Media, SEO und Content Marketing.",
        icon: "ThumbsDown"
      },
      {
        title: "Ineffektive Online-Präsenz",
        description: "Schwache Sichtbarkeit und geringe Reichweite in digitalen Medien und Suchmaschinen.",
        icon: "Globe"
      },
      {
        title: "Hohe Marketingkosten",
        description: "Ineffiziente Werbeausgaben ohne messbare Ergebnisse und klare Zielgruppenansprache.",
        icon: "DollarSign"
      },
      {
        title: "Fehlende Marketingstrategie",
        description: "Keine systematische und ganzheitliche Marketingplanung für nachhaltiges Unternehmenswachstum.",
        icon: "PieChart"
      },
      {
        title: "Niedriger Conversions-Erfolg",
        description: "Geringe Umwandlung von Websitebesuchern in tatsächliche Leads und Kunden.",
        icon: "TrendingUpIcon"
      },
      {
        title: "Veraltete Marketinginstrumente",
        description: "Nutzung veralteter Marketingmethoden, die die Zielgruppe nicht mehr erreichen.",
        icon: "Clock"
      },
      {
        title: "Mangelnde Zielgruppenanalyse",
        description: "Fehlende Kenntnisse über die eigenen Zielgruppen und deren digitale Verhaltensweisen.",
        icon: "SearchIcon"
      }
    ]
  },

  marketingTools: {
    title: {
      chip: "MARKETING-TOOLS & FRAMEWORKS",
      main: "Smart Tools für",
      highlight: "erfolgreiche Marketingteams"
    },
    subtitle: "Wir nutzen die besten Marketing-Tools und Frameworks — für schnelle, flexible und zuverlässige Marketingkampagnen.",
    categories: [
      {
        id: "social-media",
        title: "Social Media Marketing",
        description: "Professionelle Social Media Strategien für maximale Reichweite und Engagement",
        icon: "Share2",
        active: true,
        tools: [
          { name: "Instagram", logo: "/logos/instagram.svg" },
          { name: "LinkedIn", logo: "/logos/linkedin.svg" },
          { name: "Facebook", logo: "/logos/facebook.svg" },
          { name: "TikTok", logo: "/logos/tiktok.svg" },
          { name: "YouTube", logo: "/logos/youtube.svg" }
        ]
      },
      {
        id: "performance",
        title: "Performance Marketing",
        description: "Datengetriebene Werbekampagnen mit präzisem Targeting für maximale Conversion",
        icon: "BarChart3",
        active: false,
        tools: [
          { name: "Google Ads", logo: "/logos/google-ads.svg" },
          { name: "Meta Ads", logo: "/logos/meta-ads.svg" },
          { name: "LinkedIn Ads", logo: "/logos/linkedin-ads.svg" },
          { name: "TikTok Ads", logo: "/logos/tiktok-ads.svg" },
          { name: "Google Analytics", logo: "/logos/google-analytics.svg" }
        ]
      },
      {
        id: "content",
        title: "Content & SEO",
        description: "Content-Strategien und SEO-Optimierung für nachhaltige Sichtbarkeit",
        icon: "FileText",
        active: false,
        tools: [
          { name: "WordPress", logo: "/logos/wordpress.svg" },
          { name: "Shopify", logo: "/logos/shopify.svg" },
          { name: "Ahrefs", logo: "/logos/ahrefs.svg" },
          { name: "SEMrush", logo: "/logos/semrush.svg" },
          { name: "Yoast SEO", logo: "/logos/yoast.svg" }
        ]
      },
      {
        id: "automation",
        title: "Marketing Automation",
        description: "Automatisierte Marketingprozesse für effiziente Lead-Generierung und Kundenbindung",
        icon: "Zap",
        active: false,
        tools: [
          { name: "Mailchimp", logo: "/logos/mailchimp.svg" },
          { name: "HubSpot", logo: "/logos/hubspot.svg" },
          { name: "Zapier", logo: "/logos/zapier.svg" },
          { name: "ActiveCampaign", logo: "/logos/activecampaign.svg" },
          { name: "ConvertKit", logo: "/logos/convertkit.svg" }
        ]
      }
    ]
  },

  customerJourney: {
    title: {
      main: "Transformation",
      highlight: "Ihre digitale"
    },
    subtitle: "Von der veralteten Webseite zur kompletten digitalen Bandbreite",
    description: "Egal wo Ihr Unternehmen gerade steht - wir analysieren Ihre individuelle Situation, konzeptionieren eine maßgeschneiderte Strategie, definieren klare Ziele und erstellen einen konkreten Maßnahmenplan für Ihren digitalen Erfolg.",
    journey: [
      {
        phase: "Vorher",
        title: "Veraltete Webseite",
        description: "Statische, nicht-optimierte Webpräsenz ohne moderne Marketinginstrumente",
        problems: [
          "Schlechte Google-Rankings",
          "Keine Social Media Präsenz",
          "Veraltetes Design",
          "Keine Lead-Generierung",
          "Fehlende Zielgruppenansprache"
        ],
        icon: "Globe",
        color: "red"
      },
      {
        phase: "Transformation",
        title: "Digitale Transformation",
        description: "Systematische Aufrüstung aller digitalen Kanäle und Marketinginstrumente",
        benefits: [
          "Moderne, responsive Webseite",
          "Social Media Aufbau",
          "SEO Optimierung",
          "Content Marketing",
          "Performance Marketing"
        ],
        icon: "Rocket",
        color: "blue"
      },
      {
        phase: "Nachher",
        title: "Komplette digitale Bandbreite",
        description: "Vollständig digitalisierte Marketingstrategie mit messbaren Ergebnissen",
        results: [
          "Bessere Kundenqualität",
          "Einfachere Mitarbeitergewinnung",
          "Optimierte Prozesse",
          "Mehr Zeit für Kernaufgaben",
          "Messbare ROI-Steigerung"
        ],
        icon: "TrendingUp",
        color: "green"
      }
    ],
    benefits: [
      {
        title: "Bessere Kunden",
        description: "Durch gezielte Marketingstrategien erreichen Sie qualifiziertere Kunden mit höherem Wert.",
        icon: "Users",
        metric: "+40%"
      },
      {
        title: "Einfachere Mitarbeitergewinnung",
        description: "Employer Branding und Recruiting-Marketing machen Sie zum attraktiven Arbeitgeber.",
        icon: "UserPlus",
        metric: "+60%"
      },
      {
        title: "Optimierte Prozesse",
        description: "Automatisierte Marketingprozesse sparen Zeit und reduzieren Fehler.",
        icon: "Settings",
        metric: "-50%"
      },
      {
        title: "Mehr Zeit für Kernaufgaben",
        description: "Externes Marketing-Team übernimmt alle Marketingaufgaben, Sie fokussieren sich auf Ihr Kerngeschäft.",
        icon: "Clock",
        metric: "+70%"
      }
    ]
  },
};


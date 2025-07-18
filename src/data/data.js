const mainMenu = [
  {
    href: "#",
    text: "home",
  },
  {
    href: "#chi-sono",
    text: "chi sono",
  },
  {
    href: "#portfolio",
    text: "portfolio",
  },
  {
    href: "#competenze",
    text: "competenze",
  },
  {
    href: "#contatti",
    text: "contatti",
  },
];

const allskills = [
   {
    name: "HTML",
    image_skill: "html.png",
  },
  {
    name: "CSS",
    image_skill: "css.png",
  },
  {
    name: "SASS",
    image_skill: "sass.png",
  },
  {
    name: "Bootstrap",
    image_skill: "bootstrap.svg",
  },
  {
    name: "JavaScript",
    image_skill: "javascript.png",
  },
  {
    name: "PHP",
    image_skill: "php.png",
  },
  {
    name: "C#",
    image_skill: "csharp.png",
  },
  {
    name: ".Net",
    image_skill: "net.webp",
  },
  {
    name: ".Net Core",
    image_skill: "netcore.png",
  },
  {
    name: "ASP.NET MVC",
    image_skill: "mvc.png",
  },
  {
    name: "Angular",
    image_skill: "angular.webp",
  },
  {
    name: "TypeScript",
    image_skill: "typescript.png",
  },
  {
    name: "Vue.js",
    image_skill: "vue.png",
  },
  {
    name: "Node.js",
    image_skill: "node.png",
  },
  {
    name: "Vite.js",
    image_skill: "vite.svg",
  },
  {
    name: "React",
    image_skill: "react.webp",
  },
  {
    name: "Laravel",
    image_skill: "laravel.png",
  },
  {
    name: "Wordpress",
    image_skill: "wordpress.png",
  },
  {
    name: "Sql Server",
    image_skill: "Sqlserver.png",
  },
  {
    name: "Oracle",
    image_skill: "oracle.png",
  },
  {
    name: "MySQL",
    image_skill: "mysql.svg",
  },
  {
    name: "DBeaver",
    image_skill: "dbeaver.png",
  },
  {
    name: "PhpMyAdmin",
    image_skill: "php_my_admin.png",
  },
  {
    name: "Keycloak",
    image_skill: "keycloak.png",
  },
  {
    name: "PM2",
    image_skill: "pm2.webp",
  },
  {
    name: "GitLab",
    image_skill: "gitlab.webp",
  },
  {
    name: "Git Hub",
    image_skill: "github.png",
  },
  {
    name: "Visual Studio Code",
    image_skill: "vscode.jpg",
  },
  {
    name: "Visual Studio",
    image_skill: "visualstudio.webp",
  },
  {
    name: "Windows",
    image_skill: "windows.png",
  },
  {
    name: "Linux",
    image_skill: "linux.webp",
  }
];

const portfolio = [
  {
    title: "Revisal",
    image: "revisal.webp",
    altrolink: "https://lp.revisal.it/?utm_source=google&utm_medium=cpc&utm_campaign=12795954438&utm_content=122005920620&utm_term=revisal%20maggioli&gad_source=1&gad_campaignid=12795954438&gbraid=0AAAAACbbvcemAdmtkFS5esyK8fLdGhr0T&gclid=Cj0KCQjw-NfDBhDyARIsAD-ILeBp3ygHAJ05I5bJvdhIHj-E0cb32UOunoeL22c0yU3qWiTN7IrKEcQaAhLvEALw_wcB",
    link_website: "https://revisal.maggiolicloud.it/",
    link_github: "",
    descrizione: "Revisal è una piattaforma digitale sviluppata per semplificare la gestione della revisione legale e revisione contabile.",
    visibile: true,
    technologies:[
      'angular.webp',
      'typescript.png',
      'Sqlserver.png',      
    ]
  },
  {
    title: "IsyTravel",
    image: "isytravel.webp",
    altrolink: "",
    link_website: "https://www.isytravel.com/",
    link_github: "",
    descrizione: "IsyTravel è una piattaforma (e‑commerce) dedicata al turismo esperienziale, promossa da un tour operator italiano impegnato nel turismo responsabile. Il sito offre la possibilità di acquistare pacchetti selezionati che spaziano dal trekking e cicloturismo, fino a esperienze enogastronomiche, relax e viaggi accessibili. Inoltre, la piattaforma offre un servizio di noleggio di biciclette e altri mezzi, pensato per arricchire e personalizzare ogni avventura.",
    visibile: true,
    technologies:[
      'net.webp',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',      
    ]
  },
  {
    title: "Auxilium",
    image: "auxilium.webp",
    altrolink: "https://www.maggioli.com/it-it/soluzioni/software/auxilium",
    link_website: "https://auxilium.auslromagna.it/",
    link_github: "",
    descrizione: "Auxilium è un gestionale sviluppato per supportare l’AUSL Romagna nella gestione integrata di pratiche relative a protesi, ausili, dispositivi monouso, ossigenoterapia e servizi correlati. A partire da ottobre 2020, è stato adottato per la gestione dei dispositivi monouso, consentendo alle farmacie convenzionate di accedere in tempo reale al piano terapeutico di ogni paziente.",
    visibile: true,
    technologies:[
      'net.webp',
      'netcore.png',
      'csharp.png',
      'oracle.png'
    ]
  },
  {
    title: "BiancoNero Beach",
    image: "bianconero.webp",
    altrolink: "",
    link_website: "https://www.bianconerobeach.it/",
    link_github: "",
    descrizione: "Una piattaforma per la gestione online di Bagno Bianconero, lo stabilimento balneare a Tagliata di Cervia ricco di servizi. Il sito consente di scoprire comodamente le offerte, i comfort e le attività disponibili per una vacanza rilassante, e di prenotare il proprio ombrellone comodamente da casa.",
    visibile: true,
    technologies:[
      '.net.webp',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',      
    ]
  },
  {
    title: "AvantCRAFT",
    image: "avantcraft.webp",
    altrolink: "",
    link_website: "https://avantcraft.cnaemiliaromagna.it/",
    link_github: "",
    descrizione: "Progetto digitale che promuove la formazione di artigiani qualificati attraverso soluzioni inclusive e immersive. Realizzato in collaborazione con CNA Emilia-Romagna e finanziato dal FESR, il sito valorizza il patrimonio artigianale e le tecniche tradizionali tramite contenuti interattivi, storie, bandi e una struttura informativa chiara.",
    visibile: true,
    technologies:[
      '.net.webp',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',
    ]
  },
  {
    title: "TexActive",
    image: "texactive.webp",
    altrolink: "",
    link_website: "https://www.texactive.eu/",
    link_github: "",
    descrizione: "Sito informativo per un’azienda specializzata nella progettazione, realizzazione e manutenzione di impianti di climatizzazione, refrigerazione, ricambio aria e riscaldamento a pavimento.",
    visibile: true,
    technologies:[
      '.net.webp',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',
    ]
  },
  {
    title: "InSosta Comune di Pistoia",
    image: "insosta.webp",
    altrolink: "",
    link_website: "https://pistoia.insosta.it/splash",
    link_github: "",
    descrizione: "Portale online per la gestione del Piano Sosta del Comune di Pistoia. Offre funzionalità per registrarsi, richiedere o rinnovare permessi, consultare tariffe e mappe delle aree di sosta, con procedura completamente digitale.",
    visibile: true,
    technologies:[
      'node.png',
      'react.webp',
      'javascript.png',
      'pm2.webp'
    ]
  },
  {
    title: "I Razzi Store - Bologna",
    image: "irazzistore.webp",
    altrolink: "",
    link_website: "https://www.razzistore-bologna.it/",
    link_github: "",
    descrizione: "Sito vetrina per un’azienda bolognese specializzata nell'attiva di vendita di fuochi d’artificio, petardi, fumogeni, fontane pirotecniche e articoli per feste.",
    visibile: true,
    technologies:[
      'wordpress.png'
    ]
  },
  {
    title: "Deliveboo",
    image: "deliveboo.webp",
    altrolink: "",
    link_website: "",
    link_github: "https://github.com/pierdomenicoguarnieri/deliveboo-back-end",
    descrizione: "Web app che permette di ordinare cibo a domicilio.",
    visibile: true,
    technologies:[
      'laravel.png',
      'vue.png',
      'javascript.png',
      'php.png',
      'php_my_admin.png',
      'mysql.svg',
      'sass.png'
    ]
  }
  // {
  //   title: "Boolfolio",
  //   image: "boolfolio.webp",
  //   link_website: "",
  //   link_github: "https://github.com/nvaccina/laravel-api",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'laravel.png',
  //     'vue.png',
  //     'javascript.png',
  //     'php.png',
  //     'php_my_admin.png',
  //     'mysql.svg',
  //     'sass.png'
  //   ]
  // },
  // {
  //   title: "Driving School",
  //   image: "driving_school.webp",
  //   link_website: "https://nvaccina-driving-school.netlify.app",
  //   link_github: "https://github.com/nvaccina/proj-html-vuejs ",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'laravel.png',
  //     'vue.png',
  //     'javascript.png',
  //     'css.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Boolflix",
  //   image: "boolflix.png",
  //   link_website: "",
  //   link_github: "https://github.com/nvaccina/vite-boolflix",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'vue.png',
  //     'vite.svg',
  //     'javascript.png',
  //     'css.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Boolzaap",
  //   image: "boolzaap.png",
  //   link_website: "https://nvaccina-boolzapp.netlify.app",
  //   link_github: "https://github.com/nvaccina/vue-boolzapp",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'vue.png',
  //     'javascript.png',
  //     'css.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Replies Spotify",
  //   image: "replies_spotify.png",
  //   link_website: "https://nvaccina-replies-spotifyweb.netlify.app",
  //   link_github: "https://github.com/nvaccina/html-css-spotifyweb",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'css.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Replies Dc Comics",
  //   image: "dc_comics.png",
  //   link_website: "",
  //   link_github: "https://github.com/nvaccina/laravel-dc-comics",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'laravel.png',
  //     'php.png',
  //     'javascript.png',
  //     'sass.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Replies Discord",
  //   image: "discord.png",
  //   link_website: "https://nvaccina-discord.netlify.app",
  //   link_github: "https://github.com/nvaccina/htmlcss-discord",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'css.png',
  //     'html.png'
  //   ]
  // },
  // {
  //   title: "Campominato",
  //   image: "campominato.png",
  //   link_website: "https://nvaccina-campominato.netlify.app",
  //   link_github: "https://github.com/nvaccina/js-campominato-dom",
  //   descrizione:"",
  //   visibile: false,
  //   technologies:[
  //     'javascript.png',
  //     'css.png',
  //     'html.png'
  //   ]
  // },
];

const social = [
  {
    name: 'Linkedin',
    icon: "fa-brands fa-linkedin",
    href: "https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/"
  },
  {
    name: 'Git Hub',
    icon: "fa-brands fa-github",
    href: "https://github.com/nvaccina"
  },
  {
    name: 'Facebook',
    icon: "fa-brands fa-facebook-f",
    href: "https://www.facebook.com/niccolo.vaccina"
  },
  {
    name: 'Instagram',
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/nico_vaccio/?hl=it"
  }
];

const timelines = [
  {
    title: "Nato a Forlì (FC)",
    body: "",
    image: "",
    date: "1999"
  },
  {
    title: "Diploma di Geometra",
    azienda: "Istituto Tecnico Geometri “Garibaldi/Da Vinci”",
    body: "Diplomato in Costruzioni Ambiente e Territorio Tecnologie del Legno nelle Costruzioni",
    image: "",
    date: "Set. 2013 - Giu. 2018"
  },
  {
    title: "Consulente Immobiliare e Procacciatore d’Affari",
    azienda: "Casa Facile Agenzia Immobiliare",
    body: "Relazioni con il pubblico e amministrazione. Gestione incarichi di vendita e affitto in autonomia.",
    image: "",
    date: "Ott. 2018 - Feb. 2023"
  },
  {
    title: "Corso di formazione per Jr. Full Stack Web Developer",
    azienda: "Boolean Careers",
    body: "Corso di programmazione immersivo della durata di 6 mesi (oltre 700 ore complessive), il cui obbiettivo è quello di formare Full Stack Web Developers attraverso lezioni teoriche ed esercitazioni pratiche giornaliere, sia individuali che in team.",
    image: "",
    date: "Feb. 2023 - Ago. 2023"
  },
  {
    title: "Full Stack Web Developer",
    azienda: "Input S.r.l.",
    body: "Sviluppo software per il controllo e il rilevamento della sosta nei parcheggi pubblici e privati con integrazione della piattaforma di pagamento XPay di Nexi. Gestione database tramite DBeaver e collegamenti al server OVHcloud.",
    image: "",
    date: "Ago. 2023 - Ott. 2023"
  },
  {
    title: "Full Stack Web Developer",
    azienda: "BSD Software Srl",
    body: "Sviluppo di applicazioni web responsive, sia Back-End che Front-End, basate su .NET Framework, ASP.NET Core MVC e Angular. Progettazione, sviluppo e manutenzione di siti web, piattaforme e-commerce e software gestionali, adattati alle specifiche esigenze del cliente, con esperienza sia in contesti B2B che B2C.",
    image: "",
    date: "Da Ott. 2023"
  }
]


export {mainMenu, allskills, portfolio, social, timelines};
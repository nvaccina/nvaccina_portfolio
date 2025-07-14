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
    href: "#competenze",
    text: "competenze",
  },
  {
    href: "#portfolio",
    text: "portfolio",
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
    image_skill: "net.png",
  },
  {
    name: "ASP.NET MVC",
    image_skill: "mvc.png",
  },
  {
    name: "Angular",
    image_skill: "angular.png",
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
    image_skill: "react.png",
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
    name: "PM2",
    image_skill: "pm2.png",
  },
  {
    name: "GitLab",
    image_skill: "gitlab.png",
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
    image_skill: "visualstudio.png",
  },
  {
    name: "Windows",
    image_skill: "windows.png",
  },
  {
    name: "Linux",
    image_skill: "linux.png",
  }
];

const portfolio = [
  {
    title: "IsyTravel",
    image: "isytravel.png",
    link_website: "https://www.isytravel.com/",
    link_github: "",
    descrizione:"Una descrizione del sito e delle tecnologie che ho utilizzato. Ma non troppo lunga.",
    visibile: true,
    technologies:[
      'net.png',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',      
    ]
  },
  {
    title: "BiancoNero Beach",
    image: "bianconero.png",
    link_website: "https://www.bianconerobeach.it/",
    link_github: "",
    descrizione:"",
    visibile: true,
    technologies:[
      '.NET.png',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',      
    ]
  },
  {
    title: "AvantCRAFT",
    image: "avantcraft.png",
    link_website: "https://avantcraft.cnaemiliaromagna.it/",
    link_github: "",
    descrizione:"",
    visibile: true,
    technologies:[
      '.NET.png',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',
    ]
  },
  {
    title: "TexActive",
    image: "texactive.png",
    link_website: "https://www.texactive.eu/",
    link_github: "",
    descrizione:"",
    visibile: true,
    technologies:[
      '.NET.png',
      'mvc.png',
      'csharp.png',
      'javascript.png',
      'Sqlserver.png',
    ]
  },
  {
    title: "InSosta Comune di Pistoia",
    image: "insosta.png",
    link_website: "https://pistoia.insosta.it/splash",
    link_github: "",
    descrizione:"",
    visibile: true,
    technologies:[
      'node.png',
      'react.png',
      'javascript.png',
      'pm2.png',
      'dbeaver.png'
    ]
  },
  {
    title: "I Razzi Store - Bologna",
    image: "irazzistore.png",
    link_website: "https://www.razzistore-bologna.it/",
    link_github: "",
    descrizione:"",
    visibile: true,
    technologies:[
      'wordpress.png'
    ]
  },
  {
    title: "Deliveboo",
    image: "deliveboo.png",
    link_website: "",
    link_github: "https://github.com/pierdomenicoguarnieri/deliveboo-back-end",
    descrizione:"",
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
  //   image: "boolfolio.png",
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
  //   image: "driving_school.png",
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
const mainMenu = [
  {
    href: "#",
    text: "home",
    isActive: true,
  },
  {
    href: "#about",
    text: "about",
    isActive: false,
  },
  {
    href: "#skills",
    text: "skills",
    isActive: false,
  },
  {
    href: "#portfolio",
    text: "portfolio",
    isActive: false,
  },
  {
    href: "#contacts",
    text: "contacts",
    isActive: false,
  },
];

const skills = [
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
    name: "JavaScript",
    image_skill: "javascript.png",
  },
  {
    name: "PHP",
    image_skill: "php.png",
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
    name: "Laravel",
    image_skill: "laravel.png",
  },
  {
    name: "Vite",
    image_skill: "vite.svg",
  },
  {
    name: "MySql",
    image_skill: "mysql.svg",
  },
  {
    name: "PhpMyAdmin",
    image_skill: "php_my_admin.png",
  },
  {
    name: "Git Hub",
    image_skill: "github.png",
  },
  {
    name: "Visual Studio Code",
    image_skill: "vscode.jpg",
  },

];

const portfolio = [
  {
    title: "Deliveboo",
    image: "deliveboo.png",
    link_website: "https://github.com/pierdomenicoguarnieri/deliveboo-front-end",
    link_github: "https://github.com/pierdomenicoguarnieri/deliveboo-back-end",
    technologies:[
      'laravel.png',
      'vue.png',
      'javascript.png',
      'php.png',
      'php_my_admin.png',
      'mysql.svg',
      'sass.png'
    ]
  },
  {
    title: "Boolfolio",
    image: "boolfolio.png",
    link_website: "",
    link_github: "https://github.com/nvaccina/laravel-api",
    technologies:[
      'laravel.png',
      'vue.png',
      'javascript.png',
      'php.png',
      'php_my_admin.png',
      'mysql.svg',
      'sass.png'
    ]
  },
  {
    title: "Driving School",
    image: "driving_school.png",
    link_website: "https://nvaccina-driving-school.netlify.app",
    link_github: "https://github.com/nvaccina/proj-html-vuejs ",
    technologies:[
      'laravel.png',
      'vue.png',
      'javascript.png',
      'css.png',
      'html.png'
    ]
  },
  {
    title: "Boolflix",
    image: "boolflix.png",
    link_website: "",
    link_github: "https://github.com/nvaccina/vite-boolflix",
    technologies:[
      'vue.png',
      'javascript.png',
      'css.png',
      'html.png'
    ]
  },
  {
    title: "Boolzaap",
    image: "boolzaap.png",
    link_website: "https://nvaccina-boolzapp.netlify.app",
    link_github: "https://github.com/nvaccina/vue-boolzapp",
    technologies:[
      'vue.png',
      'javascript.png',
      'css.png',
      'html.png'
    ]
  },
  {
    title: "Replies Spotify",
    image: "replies_spotify.png",
    link_website: "https://nvaccina-replies-spotifyweb.netlify.app",
    link_github: "https://github.com/nvaccina/html-css-spotifyweb",
    technologies:[
      'css.png',
      'html.png'
    ]
  },
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
    href: "#"
  }
];


export {mainMenu, skills, portfolio, social};
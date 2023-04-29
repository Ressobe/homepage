export const SITE_TITLE = "Bartosz Sobina Home Page";
export const SITE_DESCRIPTION = "My homepage created with astro, react and tailwind";
export const GITHUB_URL = "https://github.com/Ressobe";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
export const DEVICONS_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Workflow", href: "/workflow" },
];

export const BASIC_SKILLS = [
  {
    title: "HTML",
    src: DEVICONS_URL + "/html5/html5-original.svg",
    text: "Everyday I learn about different elements HTML 5 has to offer, breaking out of making evrything div",
  },

  {
    title: "CSS",
    src: DEVICONS_URL + "/css3/css3-original.svg",
    text: "I use CSS on a daily basis and I am familiar with modern CSS practices FlexBox and Grid",
  },

  {
    title: "Javascript",
    src: DEVICONS_URL + "javascript/javascript-original.svg",
    text: "Regularly working with ES6 syntax. Such as arrow functions, template literals, ternary",
  },
];

export const OTHER_SKILLS = [
  {
    title: "React",
    src: DEVICONS_URL + "react/react-original.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae diam ac erat aliquam accumsan vel vel nibh. Donec condimentum nisi sapien, tincidunt pretium erat accumsan vitae",
  },

  {
    title: "Python",
    src: DEVICONS_URL + "python/python-original.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae diam ac erat aliquam accumsan vel vel nibh. Donec condimentum nisi sapien, tincidunt pretium erat accumsan vitae",
  },
];

export const FREE_TIME_SKILLS = [
  {
    title: "Linux",
    src: DEVICONS_URL + "linux/linux-original.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae diam ac erat aliquam accumsan vel vel nibh. Donec condimentum nisi sapien",
  },
];

export const FAMILIAR_SKILLS = [
  {
    title: "Git",
    src: DEVICONS_URL + "git/git-original.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae diam ac erat aliquam accumsan vel vel nibh. Donec condimentum nisi sapien, tincidunt pretium erat accumsan vitae",
  },

  {
    title: "Typescript",
    src: DEVICONS_URL + "typescript/typescript-original.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae diam ac erat aliquam accumsan vel vel nibh. Donec condimentum nisi sapien, tincidunt pretium erat accumsan vitae",
  },
];

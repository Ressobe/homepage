export const SITE_TITLE = "Bartosz Sobina Home Page";
export const SITE_DESCRIPTION = "My homepage created using astro, react and tailwind css";
export const GITHUB_URL = "https://github.com/Ressobe";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
export const DEVICONS_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Posts", href: "/posts" },
  { label: "Workflow", href: "/workflow" },
];


export const SKILLS: {
  name: string;
  src: string;
  level: number;
}[] = [
  {
    name: "HTML",
    src: "/html5/html5-original.svg",
    level: 5,
  },

  {
    name: "CSS",
    src: "/css3/css3-original.svg",
    level: 3,
  },

  {
    name: "Javascript",
    src: "javascript/javascript-original.svg",
    level: 2,
  },

  {
    name: "React",
    src: "react/react-original.svg",
    level: 2,
  },

  {
    name: "Python",
    src: "python/python-original.svg",
    level: 4,
  },

  {
    name: "Linux",
    src: "linux/linux-original.svg",
    level: 3,
  },

  {
    name: "Git",
    src: "git/git-original.svg",
    level: 2,
  },

  {
    name: "Typescript",
    src: "typescript/typescript-original.svg",
    level: 1,
  },
];

export const TO_LEARN: {
  name: string;
  src: string;
}[] = [{ name: "rust", src: "rust/rust-plain.svg" }];

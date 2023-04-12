export const SITE_TITLE = "Bartosz Sobina Home Page";
export const SITE_DESCRIPTION = "My homepage created using astro, react and tailwind css";
export const GITHUB_URL = "https://github.com/Ressobe";
export const REPO_URL = `${GITHUB_URL}/homepage`;
export const DEVICONS_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Posts", href: "/posts" },
];

export const PROJECTS: {
  href: string;
  src: string;
  projectTitle: string;
  projectDescription: string;
}[] = [
  {
    href: `${GITHUB_URL}/terminalSite`,
    src: "/terminalSite.png",
    projectTitle: "Terminal Style Website",
    projectDescription:
      "Most of the time I 'm spending inside terminal thats why I created this site",
  },

  {
    href: `${GITHUB_URL}/terminalSite`,
    src: "/terminalSite.png",
    projectTitle: "Terminal Style Website",
    projectDescription:
      "Most of the time I 'm spending inside terminal thats why I created this site",
  },
  {
    href: `${GITHUB_URL}/terminalSite`,
    src: "/terminalSite.png",
    projectTitle: "Terminal Style Website",
    projectDescription:
      "Most of the time I 'm spending inside terminal thats why I created this site",
  },
  {
    href: `${GITHUB_URL}/terminalSite`,
    src: "/terminalSite.png",
    projectTitle: "Terminal Style Website",
    projectDescription:
      "Most of the time I 'm spending inside terminal thats why I created this site",
  },
];

export const STACK: {
  name: string;
  src: string;
  level: number;
}[] = [
  {
    name: "html",
    src: "/html5/html5-original.svg",
    level: 3,
  },

  {
    name: "css",
    src: "/css3/css3-original.svg",
    level: 3,
  },

  {
    name: "javascript",
    src: "javascript/javascript-original.svg",
    level: 2,
  },

  {
    name: "react",
    src: "react/react-original.svg",
    level: 2,
  },

  {
    name: "python",
    src: "python/python-original.svg",
    level: 4,
  },

  {
    name: "linux",
    src: "linux/linux-original.svg",
    level: 3,
  },

  {
    name: "git",
    src: "git/git-original.svg",
    level: 2,
  },

  {
    name: "typescript",
    src: "typescript/typescript-original.svg",
    level: 1,
  },
];

export const TO_LEARN: {
  name: string;
  src: string;
}[] = [{ name: "rust", src: "rust/rust-plain.svg" }];

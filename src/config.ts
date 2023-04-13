export const SITE_TITLE = "Bartosz Sobina Home Page";
export const SITE_DESCRIPTION = "My homepage created using astro, react and tailwind css";
export const GITHUB_URL = "https://github.com/Ressobe";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
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
enum SkillsCategory {
  "frontend",
  "backend",
  "tools",
}

export const SKILLS: {
  name: string;
  src: string;
  level: number;
  category: SkillsCategory;
}[] = [
  {
    name: "HTML",
    src: "/html5/html5-original.svg",
    level: 5,
    category: SkillsCategory.frontend,
  },

  {
    name: "CSS",
    src: "/css3/css3-original.svg",
    level: 3,
    category: SkillsCategory.frontend,
  },

  {
    name: "Javascript",
    src: "javascript/javascript-original.svg",
    level: 2,
    category: SkillsCategory.frontend,
  },

  {
    name: "React",
    src: "react/react-original.svg",
    level: 2,
    category: SkillsCategory.frontend,
  },

  {
    name: "Python",
    src: "python/python-original.svg",
    level: 4,
    category: SkillsCategory.backend,
  },

  {
    name: "Linux",
    src: "linux/linux-original.svg",
    level: 3,
    category: SkillsCategory.tools,
  },

  {
    name: "Git",
    src: "git/git-original.svg",
    level: 2,
    category: SkillsCategory.tools,
  },

  {
    name: "Typescript",
    src: "typescript/typescript-original.svg",
    level: 1,
    category: SkillsCategory.tools,
  },
];

export const TO_LEARN: {
  name: string;
  src: string;
  category: SkillsCategory;
}[] = [{ name: "rust", src: "rust/rust-plain.svg", category: SkillsCategory.backend }];

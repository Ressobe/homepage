import { useEffect, useState } from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const initializeTheme = () => {
  if (import.meta.env.SSR) {
    return undefined;
  }
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
    return "dark";
  }
  return "light";
};

export default function ThemeToggleButton() {
  const [mount, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(initializeTheme());

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
    setTheme(currentTheme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mount ? (
    <div>
      <button onClick={switchTheme}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  ) : (
    <div />
  );
}

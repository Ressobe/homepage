import { useEffect, useState } from "react";
import { SKILLS, categories } from "../config";
import SkillItem from "./SkillItem";

const filtrSkills = (currentCategory) => {
  return SKILLS.filter((item) => item.category === currentCategory);
};

export default function Skills() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [skillsFiltred, setSkillsFiltred] = useState(() =>
    filtrSkills(categories[currentCategory])
  );

  const handleClickArrowRight = () => {
    let idx = currentCategory;
    if (idx === categories.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
    setCurrentCategory(idx);
  };

  const handleClickArrowLeft = () => {
    let idx = currentCategory;
    if (idx === 0) {
      idx = categories.length - 1;
    } else {
      idx--;
    }
    setCurrentCategory(idx);
  };

  useEffect(() => {
    setSkillsFiltred(filtrSkills(categories[currentCategory]));
  }, [currentCategory]);

  return (
    <div className="relative min-w-max h-80 bg-orange-200 dark:bg-zinc-700  mt-10 text-center border-2 border-orange-300 dark:border-zinc-600 rounded">
      <button
        className="absolute left-0 cursor-pointer my-1 mx-4 hover:opacity-60 active:opacity-40"
        onClick={() => handleClickArrowLeft()}
      >
        <img className="w-12" src="/left-long-solid.svg" />
      </button>

      <button
        className="absolute right-0 cursor-pointer my-1 mx-4 hover:opacity-60 active:opacity-40"
        onClick={() => handleClickArrowRight()}
      >
        <img className="w-12" src="/right-long-solid.svg" />
      </button>

      <div className="mt-10 flex-col justify-center items-center w-full h-full">
        <h1 className="font-bold mt-5">🧰 {categories[currentCategory].toUpperCase()} </h1>
        {skillsFiltred.map(({ name, src, level }) => (
          <SkillItem key={name} name={name} src={src} level={level} />
        ))}
      </div>
    </div>
  );
}

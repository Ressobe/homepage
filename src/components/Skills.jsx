import { useEffect, useState } from "react";
import { SKILLS, categories } from "../consts";
import SkillItem from "./SkillItem";

// Slide animation from left and right

const filtrSkills = (currentCategory) => {
  return SKILLS.filter((item) => item.category === currentCategory);
};

export default function Skills() {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [skillsFiltred, setSkillsFiltred] = useState(() => filtrSkills(categories[categoryIdx]));

  const handleClickArrowRight = () => {
    const isLastCategory = categoryIdx === categories.length - 1;
    const newIdx = isLastCategory ? 0 : categoryIdx + 1;
    setCategoryIdx(newIdx);
  };

  const handleClickArrowLeft = () => {
    const isFristCategory = categoryIdx === 0;
    const newIdx = isFristCategory ? categories.length - 1 : categoryIdx - 1;
    setCategoryIdx(newIdx);
  };

  useEffect(() => {
    setSkillsFiltred(filtrSkills(categories[categoryIdx]));
  }, [categoryIdx]);

  return (
    <div className="relative min-w-max bg-orange-100 dark:bg-zinc-700 text-center dark:border-zinc-600 rounded">
      <h2 className="mt-5 text-xl font-bold">{categories[categoryIdx].toUpperCase()}</h2>
      <div className="mt-2 grid grid-cols-1 grid-rows-3 gap-4  md:grid-rows-3 md:grid-cols-2 max-h-min">
        {skillsFiltred.map(({ name, src, level }) => (
          <SkillItem key={name} name={name} src={src} level={level} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          className="cursor-pointer mx-4 hover:opacity-60 active:opacity-40"
          onClick={() => handleClickArrowLeft()}
        >
          <img className="w-8" src="/left-long-solid.svg" />
        </button>

        {categories.map((_, i) => (
          <div
            key={i}
            className={`mx-2 opacity-80 ease-in duration-150 inline-block w-4 h-4 rounded-full cursor-pointer ${
              i === categoryIdx ? "bg-zinc-900 dark:bg-zinc-400" : "bg-zinc-500  dark:bg-black"
            }`}
            onClick={() => setCategoryIdx(i)}
          />
        ))}
        <button
          className="cursor-pointer mx-4 hover:opacity-60 active:opacity-40"
          onClick={() => handleClickArrowRight()}
        >
          <img className="w-8" src="/right-long-solid.svg" />
        </button>
      </div>
    </div>
  );
}

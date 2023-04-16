import { useEffect, useState } from "react";
import { SKILLS, categories } from "../consts";
import SkillItem from "./SkillItem";

const filtrSkills = (currentCategory) => {
  return SKILLS.filter((item) => item.category === currentCategory);
};

export default function Skills() {
  const [currentCategoryIdx, setCurrentCategory] = useState(0);
  const [skillsFiltred, setSkillsFiltred] = useState(() =>
    filtrSkills(categories[currentCategoryIdx])
  );

  const handleClickArrowRight = () => {
    const isLastSlide = currentCategoryIdx === categories.length - 1;
    const newIdx = isLastSlide ? 0 : currentCategoryIdx + 1;
    setCurrentCategory(newIdx);
  };

  const handleClickArrowLeft = () => {
    const isFristSlide = currentCategoryIdx === 0;
    const newIdx = isFristSlide ? categories.length - 1 : currentCategoryIdx - 1;
    setCurrentCategory(newIdx);
  };

  useEffect(() => {
    setSkillsFiltred(filtrSkills(categories[currentCategoryIdx]));
  }, [currentCategoryIdx]);

  return (
    <div className="relative min-w-max bg-orange-100 dark:bg-zinc-700   text-center border-2 border-orange-300 dark:border-zinc-600 rounded">
      <h2 className="mt-3 text-xl font-bold">{categories[currentCategoryIdx].toUpperCase()}</h2>
      <div className="mt-3  grid  grid-cols-1 grid-rows-3 gap-3 md:grid-rows-3 md:grid-cols-2 max-h-min">
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

        {Array(categories.length)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className={`mx-2 opacity-80 ease-in duration-150 inline-block w-4 h-4 rounded-full  ${
                i === currentCategoryIdx
                  ? "bg-zinc-900 dark:bg-zinc-400"
                  : "bg-zinc-500  dark:bg-black"
              }`}
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

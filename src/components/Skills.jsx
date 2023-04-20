import { useEffect, useState } from "react";
import { SKILLS, categories } from "../consts";
import SkillItem from "./SkillItem";

// Slide animation from left and right
// Count this from index and pass to skillitem

const filtrSkills = (currentCategory) => {
  return SKILLS.filter((item) => item.category === currentCategory);
};
export default function Skills() {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [skillsFiltred, setSkillsFiltred] = useState(() => filtrSkills(categories[categoryIdx]));

  const [animate, setAnimate] = useState(false);
  const [slideAnimationDirection, setSlideAnimationDirection] = useState("right");

  const categoryDotClicked = (idx) => {
    if (idx > categoryIdx) {
      setSlideAnimationDirection("left");
    } else if (idx < categoryIdx) {
      setSlideAnimationDirection("right");
    } else {
      setSlideAnimationDirection("");
    }

    setCategoryIdx(idx);

    setAnimate(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(false);
      setSlideAnimationDirection(""); // resetujemy kierunek animacji po zakończeniu animacji
    }, 800);

    return () => {
      clearTimeout(timeoutId); // czyścimy timer przy każdym wywołaniu useEffect
    };
  }, [animate, slideAnimationDirection]);

  useEffect(() => {
    setSkillsFiltred(filtrSkills(categories[categoryIdx]));
  }, [categoryIdx]);

  return (
    <>
      <div className="relative  bg-orange-100 dark:bg-zinc-800 text-center  rounded">
        <h2 className="mt-5 text-xl font-bold">{categories[categoryIdx].toUpperCase()}</h2>

        <div className="overflow-hidden">
          <div className="flex">
            <div className="mt-2 grid grid-cols-1 grid-rows-3 gap-2  md:grid-rows-2 md:grid-cols-2 gap-y-6 min-h-full min-w-full ">
              {SKILLS.map(({ name, src, level }) => (
                <SkillItem key={name} name={name} src={src} level={level} />
              ))}
            </div>
          </div>
        </div>
        {/* ksdfjfjk */}
      </div>
      <div className="text-center mt-5">
        {categories.map((_, i) => (
          <div
            key={i}
            className={`mx-2 opacity-80 ease-in duration-150 inline-block w-6 h-6 rounded-full cursor-pointer ${
              i === categoryIdx ? "bg-zinc-900 dark:bg-zinc-400" : "bg-zinc-500  dark:bg-black"
            }`}
            onClick={() => categoryDotClicked(i)}
          />
        ))}
      </div>
    </>
  );
}

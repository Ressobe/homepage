import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import { SKILLS } from "../consts";

// On hover show icons and stop autplay

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickArrowRight = () => {
    const isLastCategory = activeIndex === SKILLS.length - 1;
    const newIdx = isLastCategory ? 0 : activeIndex + 1;
    setActiveIndex(newIdx);
  };

  const handleClickArrowLeft = () => {
    const isFristCategory = activeIndex === 0;
    const newIdx = isFristCategory ? SKILLS.length - 1 : activeIndex - 1;
    setActiveIndex(newIdx);
  };

  useEffect(() => {
    const data = localStorage.getItem("skills-idx");
    if (data) {
      setActiveIndex(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("skills-idx", JSON.stringify(activeIndex));
  }, [activeIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isLastCategory = activeIndex === SKILLS.length - 1;
      const newIdx = isLastCategory ? 0 : activeIndex + 1;
      setActiveIndex(newIdx);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div className="overflow-hidden max-w-lg flex-col justify-center mx-auto">
      <div
        className="whitespace-nowrap transition-transform duration-200 shadow-black"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {SKILLS.map(({ name, src, level }) => {
          return <CarouselItem key={name} name={name} src={src} level={level} width={"100%"} />;
        })}
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={handleClickArrowLeft}>
          <img className="w-3.5" src="/chevron-left-solid.svg" />
        </button>
        <div className="flex justify-around items-center">
          {SKILLS.map((_, i) => (
            <input
              type="radio"
              name="select-by-idx"
              key={i}
              className={`appearance-none   w-6 py-1  rounded-sm border-black mx-1  cursor-pointer ${
                i === activeIndex ? "bg-zinc-900 dark:bg-zinc-400" : "bg-zinc-500  dark:bg-black"
              }`}
              checked={i === activeIndex ? 1 : 0}
              onChange={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button onClick={handleClickArrowRight}>
          <img className="w-3.5" src="/chevron-right-solid.svg" />
        </button>
      </div>
    </div>
  );
}

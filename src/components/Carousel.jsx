import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import { SKILLS } from "../consts";

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
      setActiveIndex(parseInt(JSON.parse(data)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("skills-idx", JSON.stringify(activeIndex));
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

      <div className="flex justify-evenly">
        <button onClick={handleClickArrowLeft}>
          <img className="w-10" src="/left-long-solid.svg" />
        </button>
        <div className="flex justify-around items-center">
          {SKILLS.map((_, i) => (
            <input
              type="radio"
              name="select-by-idx"
              key={i}
              className={`mx-1 opacity-80 ease-in duration-150 inline-block w-4 h-4 rounded-full cursor-pointer ${
                i === activeIndex ? "bg-zinc-900 dark:bg-zinc-400" : "bg-zinc-500  dark:bg-black"
              }`}
              defaultChecked={i === activeIndex ? 1 : 0}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button onClick={handleClickArrowRight}>
          <img className="w-10" src="/right-long-solid.svg" />
        </button>
      </div>
    </div>
  );
}

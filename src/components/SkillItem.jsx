import { DEVICONS_URL } from "../consts";

export default function SkillItem({ name, src, level }) {
  const rest = 5 - level;
  return (
    <div className="mx-auto">
      <h1 className="block text-lg">{name}</h1>
      <div className=" p-8 flex items-center bg-orange-200 dark:bg-zinc-600 rounded">
        <div className="inline-block ">
          <a>
            <img className="w-10 h-10" src={DEVICONS_URL + src} alt={name} title={name} />
          </a>
        </div>
        {Array(level)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className="ml-2 inline-block w-4 h-4 bg-black dark:bg-zinc-300 rounded-full"
            />
          ))}
        {Array(rest)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className="ml-2 inline-block w-4 h-4 border-black border-2 dark:border-zinc-300 rounded-full"
            />
          ))}
      </div>
    </div>
  );
}

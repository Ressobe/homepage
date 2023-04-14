import { DEVICONS_URL } from "../config";

export default function SkillItem({ name, src, level }) {
  const rest = 5 - level;
  return (
    <div className="my-4">
      <div className="inline-block align-middle">
        <img className="w-9 h-9" src={DEVICONS_URL + src} alt={name} title={name} />
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
  );
}

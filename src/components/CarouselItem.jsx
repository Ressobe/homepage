import { DEVICONS_URL } from "../consts";

export default function CarouselItem({ name, src, level, width }) {
  const rest = 5 - level;
  return (
    <div className="inline-flex items-center justify-center h-32" style={{ width: width }}>
      <img className="w-14" src={DEVICONS_URL + src} />
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

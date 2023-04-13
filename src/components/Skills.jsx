import { SKILLS } from "../config";
import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <div className="mt-10 text-center border-2 flex-col justify-center items-center">
      <h1 className="font-bold mt-5">🧰 My skill set</h1>
      <p>How well I known something (frontend / backend / tools)</p>
      {SKILLS.map(({ name, src, level }) => (
        <SkillItem name={name} src={src} level={level} />
      ))}
    </div>
  );
}

import { useState } from "react";
import BarsIcon from "./BarsIcon";
import Menu from "./Menu";

export default function MenuToggleButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div class='min-w-max bg-orange-300 p-[5px] rounded relative mr-6'>
      <button type='button' onClick={handleClick}>
        <BarsIcon />
      </button>
      {open && <Menu />}
    </div>
  );
}

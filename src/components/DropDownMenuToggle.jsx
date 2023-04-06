import { useState } from "react";
import BarsIcon from "./BarsIcon";

export default function DropDownMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div class="min-w-max bg-orange-300 p-[5px] rounded">
      <button type="button" onClick={handleClick}>
        <BarsIcon />
        {open && <h1>HI</h1>}
      </button>
    </div>
  );
}

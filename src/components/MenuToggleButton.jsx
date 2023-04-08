import { useState } from "react";
import BarsIcon from "./BarsIcon";
import Menu from "./Menu";

export default function MenuToggleButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button type='button' onClick={handleClick}>
        <BarsIcon />
      </button>
      {open && <Menu />}
    </>
  );
}

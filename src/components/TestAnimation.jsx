import { useState } from "react";

export default function TestAnimation() {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    // Update the state to trigger the animation
    setAnimate(true);

    // Reset the state after the animation duration
    setTimeout(() => {
      setAnimate(false);
    }, 3000); // Replace 1000 with the actual duration of your animation
  };

  return (
    <div>
      <button onClick={handleClick}>Animate</button>
      <div className={animate ? "animate-slide-from-left" : ""}>Element to animate</div>
    </div>
  );
}

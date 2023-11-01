import React, { useState } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleHook {
  createRipple: (event: React.MouseEvent<HTMLButtonElement>) => void;
  renderRipples: () => React.ReactNode;
}

function useRippleEffect(): RippleHook {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple !== newRipple)
      );
    }, 600); // Adjust the animation duration (600ms) as needed
  };

  const renderRipples = () => {
    return ripples.map((ripple) => (
      <span
        key={ripple.id}
        className="ripple"
        style={{
          left: ripple.x + "px",
          top: ripple.y + "px",
          width: ripple.size + "px",
          height: ripple.size + "px",
        }}
      ></span>
    ));
  };

  return { createRipple, renderRipples };
}

export default useRippleEffect;

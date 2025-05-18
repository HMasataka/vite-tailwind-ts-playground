import React, { ReactNode, useState } from "react";

interface PressableProps {
  children: (props: { pressed: boolean }) => ReactNode;
}

const Pressable = ({ children }: PressableProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // マウスが離れたときもリセット
      style={{
        display: "inline-block",
        cursor: "pointer",
        opacity: isPressed ? 0.5 : 1,
        transition: "opacity 0.2s",
      }}
    >
      {typeof children === "function"
        ? children({ pressed: isPressed })
        : children}
    </div>
  );
};

export default Pressable;

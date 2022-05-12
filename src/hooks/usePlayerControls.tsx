import { useEffect, useState } from "react";

export const usePlayerControls = () => {
  const keys: any = {
    KeyW: "forward",
    ArrowUp: "forward",
    KeyS: "backward",
    ArrowDown: "backward",
    KeyA: "left",
    ArrowLeft: "left",
    KeyD: "right",
    ArrowRight: "right",
    Space: "jump",
    ShiftLeft: "sprint",
  };
  const moveFieldByKey = (key: any) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    sprint: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      setMovement((movement) => ({
        ...movement,
        [moveFieldByKey(event.code)]: true,
      }));
    };
    const handleKeyUp = (event: any) => {
      setMovement((movement) => ({
        ...movement,
        [moveFieldByKey(event.code)]: false,
      }));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

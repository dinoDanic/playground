import { useEffect, useState } from "react";
import { useStore } from "./useStore";

const actionByKey = (key: any) => {
  const keys: any = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
  };
  return keys[key];
};

const textureByKey = (key: any) => {
  const keys: any = {
    Digit1: "dirt",
  };
  return keys[key];
};

export const useKeyboard = () => {
  const [movement, setMovment] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });
  const setTexture = useStore((state: any) => state.setTexture);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (actionByKey(e.code)) {
        setMovment((state) => ({ ...state, [actionByKey(e.code)]: true }));
      }
    };
    const handleKeyUp = () => {};

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
};

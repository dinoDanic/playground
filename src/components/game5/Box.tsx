import { useBox } from "@react-three/cannon";
import React from "react";

export const Box = () => {
  const [ref, api] = useBox(() => ({
    mass: 10,
    position: [10, 1, 0],
    args: [0.5, 0.5, 0.5],
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial />
    </mesh>
  );
};

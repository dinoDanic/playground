import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

export const Player = ({ ...props }) => {
  const ref = useRef<any>();
  const { camera } = useThree();
  const [] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));
  useFrame(() => {
    camera.position.copy(ref.current.position);
  });
  return <mesh ref={ref} />;
};

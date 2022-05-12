import { usePlane } from "@react-three/cannon";
import React from "react";

export const Ground = () => {
  const [ref, api] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshStandardMaterial attach="material" color={"#ada8a8"} />
    </mesh>
  );
};

import { Backdrop, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { SpotLightHelper } from "three";

export const Background = () => {
  const spotLightRef = useRef<any>();
  useHelper(spotLightRef, SpotLightHelper, "teal");
  return (
    <group>
      <Backdrop
        receiveShadow
        castShadow
        floor={1}
        segments={1}
        position={[0, -5, -5]}
        scale={[30, 30, 1]}
      >
        <meshStandardMaterial color="#190000" envMapIntensity={0.5} />
      </Backdrop>
    </group>
  );
};

import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";

export const BackgroundLight = () => {
  const spotLightRef = useRef<any>();
  useHelper(spotLightRef, PointLightHelper, 0.6, "teal");
  return (
    <pointLight
      ref={spotLightRef}
      color="red"
      position={[10, 20, -4]}
      distance={23}
      power={20}
      intensity={5}
    />
  );
};

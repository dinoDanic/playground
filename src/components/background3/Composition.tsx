import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useWindowScrollPosition } from "rooks";
import { Bg } from "./bg";
import { Model } from "./Model";
import { Particles } from "./Particles";

export const Composition = () => {
  const groupRef = useRef<any>();
  const modelRef = useRef<any>();
  const { mouse } = useThree();
  const { scrollY } = useWindowScrollPosition();

  useFrame(() => {
    // groupRef.current.rotation.y = -mouse.x / 2;
    // groupRef.current.rotation.x = mouse.y / 2;
    // groupRef.current.position.y = scrollY / 400;
    // modelRef.current.rotation.y = scrollY / 400;
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <group ref={groupRef}>
        <Particles count={50} color="#106461" />
        <Particles count={50} color="#16a3b6" />
        <Particles count={130} two color="#106a54" />
        <Particles count={50} two color="#0b5047" />
        <Particles count={10} two color="#ff7979" />
        <group ref={modelRef}>
          <Model />
        </group>
      </group>
      <Bg />
    </>
  );
};

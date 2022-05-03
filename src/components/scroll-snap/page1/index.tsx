import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Scene } from "./scene";
import { BoxHelper, SpotLightHelper, PointLightHelper } from "three";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import * as THREE from "three";
import {
  Backdrop,
  OrbitControls,
  ScrollControls,
  useHelper,
} from "@react-three/drei";
import { Background } from "../../../../public/scroll-snap/background";
import { BackgroundLight } from "../../../../public/scroll-snap/background-light";

interface Props {}

export const Page1: React.FC<Props> = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <Canvas shadows camera={{ fov: 60 }}>
        <color attach="background" args={["black"]} />
        <Scene />
        <BackgroundLight />
        <Background />
        <OrbitControls />
        <EffectComposer>
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  DepthOfField,
  DotScreen,
  EffectComposer,
  GodRays,
} from "@react-three/postprocessing";
import { Bg } from "components/background3/bg";
import { Model } from "components/background3/Model";
import { Particles } from "components/background3/Particles";
import { useControls } from "leva";

const Background3 = () => {
  /* TODO: ADD A OBJEJCT */
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed" }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 22 }}>
        {/* <OrbitControls /> */}
        <Particles count={30} color="#106461" />
        <Particles count={30} color="#16a3b6" />
        <Particles count={50} two color="#0b5047" />
        <Particles count={10} two color="#ff7979" />
        <Bg />
        <Model />
        <EffectComposer>
          {/* <DepthOfField
            focusDistance={0.01}
            focalLength={0.02}
            width={400}
            height={400}
          /> */}
          {/* <DotScreen scale={10} opacity={0.001} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3;

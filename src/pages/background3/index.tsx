import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Bg } from "components/background3/bg";
import { Particles } from "components/background3/Particles";
import { Particles2 } from "components/background3/Particles2";
import { useControls } from "leva";
import React from "react";

const Background3 = () => {
  const { focusDistance } = useControls({
    focusDistance: {
      min: 0,
      max: 1,
      value: 0,
    },
    focalLength: {
      min: 0,
      max: 1,
      value: 0.1,
    },
    bokehScale: {
      min: 0,
      max: 10,
      value: 2,
    },
  });
  /* TODO: ADD A OBJEJCT */
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed" }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 22 }}>
        <OrbitControls />
        <Particles count={30} color="#106461" />
        <Particles count={30} color="#16a3b6" />
        <Particles count={50} two color="#0b5047" />
        <Particles count={10} two color="#ff7979" />

        <Bg />
        <EffectComposer>
          <DepthOfField focusDistance={focusDistance} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3;

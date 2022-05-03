import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Composer } from "components/background/Composer";
import React from "react";

const Background = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed" }}>
      <Canvas>
        <Composer />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Background;

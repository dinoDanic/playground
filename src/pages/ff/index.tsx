import { Canvas, useLoader } from "@react-three/fiber";
import { Scene } from "components/ff/scene";
import React, { useEffect } from "react";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  useGLTF,
} from "@react-three/drei";

const Ff = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed" }}>
      <Canvas camera={{ fov: 10, position: [0, 40, 0] }}>
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={5}>
          <Scroll>
            <Scene />
          </Scroll>
          <Scroll html>
            <h1>hello</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Ff;

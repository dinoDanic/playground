import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Page2 = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

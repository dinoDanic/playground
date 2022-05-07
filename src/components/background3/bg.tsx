import { Depth, LayerMaterial, Noise } from "lamina";
import * as THREE from "three";
import React from "react";

export const Bg = () => {
  return (
    <mesh scale={10} position={[0, 0, 0]}>
      <planeBufferGeometry args={[100, 100, 1]} />
      <LayerMaterial>
        <Depth
          colorB="black"
          colorA="#0e4418"
          near={20}
          far={55}
          origin={[20, 31, 0]}
        />
        <Noise
          type="white"
          scale={10}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.25}
        />
      </LayerMaterial>
    </mesh>
  );
};

import { Depth, LayerMaterial, Noise } from "lamina";
import * as THREE from "three";
import React from "react";

export const Bg = () => {
  return (
    <mesh scale={10} position={[0, 0, 0]}>
      <planeBufferGeometry args={[100, 100, 1]} />
      <LayerMaterial attach="material">
        <Depth
          colorB="black"
          colorA="#11531d"
          near={20}
          far={45}
          origin={[10, 31, 0]}
        />
        <Noise
          type="white"
          scale={10}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
};

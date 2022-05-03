import { Depth, LayerMaterial, Noise } from "lamina";
import React from "react";
import * as THREE from "three";

export const Composer = () => {
  return (
    <>
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorA="black"
            alpha={0.9}
            mode="multiply"
            near={0}
            far={300}
            origin={[10, 10, 10]}
          />
          <Depth
            colorA="#ff0000"
            alpha={0.9}
            mode="multiply"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
};

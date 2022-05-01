import React, { lazy, useEffect, useRef, useState } from "react";
import { AnimationClip, Object3D } from "three";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";

const rsqw = (t: any, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export const Scene = () => {
  const ref = useRef<any>();
  const scroll = useScroll();

  const model = useGLTF("http://localhost:3000/iphone.gltf");

  // const r1 = scroll.range(0 / 4, 1 / 4);
  // const r2 = scroll.range(1 / 4, 1 / 4);
  // console.log(r1);

  useFrame((state, delta) => {
    // ref.current.rotation.x = -2;
    // ref.current.rotation.y = -0.7;
    // ref.current.rotation.z = -0.6;
    // ref.current.position.z = 2;
  });
  return (
    <group scale={1} ref={ref} position={[0, 0, 0]}>
      <primitive object={model.scene} />
      <pointLight position={[0, 0, 2]} />
    </group>
  );
};

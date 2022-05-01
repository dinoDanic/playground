import React, { lazy, useEffect, useRef, useState } from "react";
import { AnimationClip, Object3D } from "three";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";

interface Props {}

export const Scene: React.FC<Props> = () => {
  const ref = useRef<any>();
  const scroll = useScroll();

  const model = useGLTF("http://localhost:3000/iphone.gltf");
  scroll.offset;

  // Will start increasing when 1 / 3 of the scroll distance is reached,
  // and reach 1 when it reaches 2 / 3rds.

  useFrame((state, delta) => {
    console.log(window.innerWidth);
    const a = scroll.range(1 / scroll.pages, 2 / scroll.pages);
    ref.current.position.x = 12;
    ref.current.position.x = a * 2;
  });
  return (
    <group ref={ref}>
      <primitive object={model.scene} />
      <pointLight position={[0, 0, 2]} />
    </group>
  );
};

import { useGLTF, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { SpotLightHelper } from "three";

export const Model = () => {
  const model = useGLTF("http://localhost:3000/background3/grass.gltf");
  const spotLightRef = useRef<any>();
  const groupRef = useRef<any>();
  const { mouse } = useThree();

  useHelper(spotLightRef, SpotLightHelper, "blue");
  useFrame(() => {
    groupRef.current.rotation.y = -mouse.x / 5;
    groupRef.current.rotation.x = mouse.y / 5;
  });
  return (
    <group scale={1} position={[0, 0, 47]}>
      {/* <ambientLight intensity={0.1} /> */}
      <spotLight ref={spotLightRef} position={[5, 2, 3]} intensity={0.5} />
      <primitive ref={groupRef} object={model.scene} />
    </group>
  );
};

import { useGLTF, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { SpotLightHelper } from "three";

export const Model = () => {
  const model = useGLTF("http://localhost:3000/background3/grass.gltf");
  const spotLightRef = useRef<any>();
  const groupRef = useRef<any>();
  const { mouse } = useThree();
  useFrame(() => {
    groupRef.current.rotation.y = -mouse.x / 10;
    groupRef.current.rotation.x = mouse.y / 10;
  });

  useHelper(spotLightRef, SpotLightHelper, "blue");
  return (
    <group ref={groupRef} scale={2} position={[0, 0, 45]}>
      {/* <ambientLight intensity={0.1} /> */}
      <spotLight ref={spotLightRef} position={[5, 2, 3]} intensity={0.5} />
      <primitive object={model.scene} />
    </group>
  );
};

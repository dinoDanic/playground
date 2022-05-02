import {
  OrbitControls,
  useCursor,
  useGLTF,
  useHelper,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";

export const Scene = () => {
  const model = useGLTF("http://localhost:3000/scroll-snap/cash/cash.gltf");
  const ref = useRef<any>();
  const spotLightRef2 = useRef<any>();
  useHelper(spotLightRef2, SpotLightHelper, "blue");

  useFrame((state, delta) => {
    // ref.current.rotation.x = -0.2;
    // ref.current.position.x = state.mouse.x / 4;
    // ref.current.rotation.y = state.mouse.x / 4;
    ref.current.rotation.y = -0.5;
    // ref.current.rotation.z = 0.2;
  });
  return (
    <group ref={ref} scale={4} position={[0, -1.8, 0]}>
      <primitive object={model.scene} />
      <spotLight
        ref={spotLightRef2}
        color="green"
        angle={0.4}
        position={[3, 0, 1.5]}
        distance={15.5}
        power={35}
        intensity={5}
      />
    </group>
  );
};

import { useBox, useCompoundBody, useCylinder } from "@react-three/cannon";
import {
  FirstPersonControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboard } from "hooks/useKeyboard";
import React, { useRef } from "react";
import { Mesh, Vector3 } from "three";

export const Player = () => {
  const { camera } = useThree();
  const playerRef = useRef<Mesh>(null);
  const { w, a, s, d } = useKeyboard();

  // const [ref, api] = useBox(() => ({ mass: 0.1, position: [0, 1, 0] }));
  const [ref, api] = useCylinder(() => ({ mass: 0.1, position: [0, 1, 0] }));
  // const [ref, api] = useCompoundBody(() => ({
  //   mass: 30,
  //   shapes: [{ args: [1.5], position: [0, 5, 0], type: "Sphere" }],
  // }));
  // console.log(ref);

  useFrame(() => {
    if (!ref.current) return;
    // const { x, y, z } = ref.current.position;
    // camera.position.copy(ref.current.position);
    // console.log(ref.current.position);
    // console.log(ref.current);

    // console.log(api.position);

    if (w) {
      api.angularVelocity.set(0, 0, -4);
    }
    if (s) {
      api.angularVelocity.set(0, 0, 2);
    }
    if (a) {
      api.angularVelocity.set(-4, 0, 0);
    }
    if (d) {
      api.angularVelocity.set(4, 0, 0);
    }
  });

  const look = () => {};

  return (
    <group>
      <PerspectiveCamera
        makeDefault
        position={[0, 4, 8]}
        rotation={[-0.3, 0, 0]}
      />
      {/* <PointerLockControls camera={camera} /> */}
      <mesh ref={ref} receiveShadow castShadow position={[0, 0, 0]}>
        <cylinderGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

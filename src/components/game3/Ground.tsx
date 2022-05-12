import { usePlane } from "@react-three/cannon";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";

export const Ground = ({ ...props }) => {
  const meshRef = useRef<Mesh>(null);

  const [ref, api] = usePlane<any>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = -Math.PI / 2;
  }, []);

  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry args={[100, 100, 100]} />
      <meshStandardMaterial />
    </mesh>
  );
};

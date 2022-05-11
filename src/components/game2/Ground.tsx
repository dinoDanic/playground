import { usePlane } from "@react-three/cannon";
import React from "react";
import { RepeatWrapping, TextureLoader } from "three";
import grass from "./images/grass.jpg";

export const Ground = ({ ...props }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass.src);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};

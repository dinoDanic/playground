import { useBox } from "@react-three/cannon";
import React from "react";
// import * as textures from "./textures";
import dynamic from "next/dynamic";
import { TextureLoader } from "three";
import dirtImg from "./images/dirt.jpg";

interface Props {
  position: any;
  type: "wood";
}

export const Cube: React.FC<Props> = ({ position, type, ...props }) => {
  const dirt = new TextureLoader().load(dirtImg.src);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    ...props,
  }));
  return (
    <mesh castShadow ref={ref}>
      {[...Array(6)].map((i, index) => (
        <meshStandardMaterial key={index} map={dirt} />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};

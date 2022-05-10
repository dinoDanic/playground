import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useKey, useKeys } from "rooks";

interface Props {}

export const Player: React.FC<Props> = ({ ...props }) => {
  const group = useRef<any>();
  useKey(
    ["s"],
    (e) => {
      console.log("asdf");
    },
    {
      target: group,
    }
  );
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/survivor-male/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <camera attach="camera" />
      <primitive object={nodes.LeftFootCtrl} />
      <primitive object={nodes.RightFootCtrl} />
      <primitive object={nodes.HipsCtrl} />
      <skinnedMesh
        geometry={nodes.characterMedium.geometry}
        material={materials["skin.001"]}
        skeleton={nodes.characterMedium.skeleton}
      />
    </group>
  );
};

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/survivor-male/model.gltf"
);

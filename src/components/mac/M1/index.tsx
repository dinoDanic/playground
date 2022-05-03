import { useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";
import { Material, Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface Props {
  ref: any;
  texture: any;
  scale?: any;
  rotation?: any;
  position?: any;
}

import { GLTF as GLTFThree } from "three/examples/jsm/loaders/GLTFLoader";
declare module "three-stdlib" {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, Mesh>;
    materials: Record<string, Material>;
  }
}

export const M1: React.FC<Props> = forwardRef(
  ({ texture, ...props }, ref: any) => {
    const { nodes, materials } = useGLTF("/mac/mbp-v1-pipe.glb");

    return (
      <group {...props} dispose={null}>
        <group ref={ref} position={[0, -0.36, -10.5]}>
          <mesh
            geometry={nodes.back_1.geometry}
            material={materials.blackmatte}
          />
          <mesh
            receiveShadow
            castShadow
            geometry={nodes.back_2.geometry}
            material={materials.aluminium}
          />
          <mesh geometry={nodes.matte.geometry}>
            <meshLambertMaterial map={texture} toneMapped={false} />
          </mesh>
        </group>
        <mesh
          geometry={nodes.body_1.geometry}
          material={materials.aluminium}
          material-color="#aaaaaf"
          material-envMapIntensity={0.2}
        />
        <mesh
          geometry={nodes.body_2.geometry}
          material={materials.blackmatte}
        />
      </group>
    );
  }
);

M1.displayName = "Search";

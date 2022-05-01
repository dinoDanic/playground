import { useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { M1 } from "../M1";
import * as THREE from "three";

const rsqw = (t: any, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export const Composition = () => {
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const [textureRed, textureBlue] = useTexture([
    "/mac/blue.jpg",
    "/mac/red.jpeg",
  ]);

  const groupRef = useRef<any>();
  const mbp16 = useRef<any>();
  const mbp14 = useRef<any>();
  const keyLight = useRef<any>();
  const stripLight = useRef<any>();
  const fillLight = useRef<any>();

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 4);
    const r3 = scroll.visible(4 / 5, 1 / 5);
    mbp16.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33;

    mbp14.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) - r2 * 0.39;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      (-Math.PI / 1.45) * r2,
      4,
      delta
    );
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      (-width / 7) * r2,
      4,
      delta
    );
    groupRef.current.scale.x =
      groupRef.current.scale.y =
      groupRef.current.scale.z =
        THREE.MathUtils.damp(
          groupRef.current.scale.z,
          1 + 0.24 * (1 - rsqw(r1)),
          4,
          delta
        );
    keyLight.current.position.set(
      0.25 + -15 * (1 - r1),
      4 + 11 * (1 - r1),
      3 + 2 * (1 - r1)
    );
  });
  return (
    <>
      <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera args={[-10, 10, 10, -10, 0.5, 30]} />
      </directionalLight>
      <group ref={groupRef} position={[0, 0, 0]}>
        <spotLight
          ref={stripLight}
          position={[width * 2.5, 0, width]}
          angle={0.19}
          penumbra={1}
          intensity={0.25}
        />
        <spotLight
          ref={fillLight}
          position={[0, -width / 2.4, -width * 2.2]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          distance={width * 3}
        />
        <M1 ref={mbp16} texture={textureBlue} scale={width / 67} />
        <M1
          ref={mbp14}
          texture={textureBlue}
          scale={width / 77}
          rotation={[0, Math.PI, 0]}
          position={[0, 0, -width / 2.625]}
        />
      </group>
    </>
  );
};

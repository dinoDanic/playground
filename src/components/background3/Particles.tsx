import { useFrame, useThree } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Color, Depth, LayerMaterial, Noise } from "lamina";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

interface Props {
  two?: boolean;
  color: string;
  count: number;
}

export const Particles: React.FC<Props> = ({ two, count, color }) => {
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { mouse } = useThree();

  const light = useRef<any>();
  const mesh = useRef<any>();
  const ringRef = useRef<any>();
  const groupRef = useRef<any>();
  console.log(ringRef);

  useFrame(() => {
    console.log(groupRef);

    groupRef.current.rotation.y = -mouse.x / 20;
    groupRef.current.rotation.x = mouse.y / 20;
    particles.forEach((particle, index) => {
      const { factor, speed, x, y, z, scale, rotationSpeed } = particle;

      const t = (particle.time += speed);

      dummy.position.set(
        x + Math.cos((t / 200) * factor) + (Math.sin(t * 1) * factor) / 200,
        y + Math.sin((t / 200) * factor) + (Math.cos(t * 1) * factor) / 200,
        // z
        z + Math.cos((t / 100) * factor) + (Math.sin(t * 3) * factor) / 100

        // x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        // y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        // z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      const s = Math.cos(t);
      dummy.scale.set(scale, scale, scale);
      // dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.rotation.z += Math.cos(rotationSpeed) / 1500;
      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  function generateRandom(min: number, max: number) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = generateRandom(0, 100);
      const factor = generateRandom(20, 120);
      const speed = generateRandom(0.01, 0.015) / 2;
      const x = two ? generateRandom(15, 0) : generateRandom(-15, 0);
      const scale = generateRandom(0.5, 1.51);
      const y = two ? generateRandom(-10, 0) : generateRandom(0, 10);
      const z = generateRandom(1, 15);
      const rotationSpeed = generateRandom(0.0005, 0.0006);

      temp.push({ time, factor, speed, x, y, z, scale, rotationSpeed });
    }
    return temp;
  }, [count]);

  return (
    <group position={[0, 0, 0]} ref={groupRef}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <ringGeometry ref={ringRef} args={[0, 0.3, 5]} />
        <meshBasicMaterial color={color} opacity={0.03} transparent />
      </instancedMesh>
    </group>
  );
};

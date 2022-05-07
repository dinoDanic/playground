import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export const Particles2 = () => {
  const { gl } = useThree();
  const textureLoader = new THREE.TextureLoader();
  const particleTexture = textureLoader.load("/background3/1.png");

  const particlesGeometry = new THREE.BufferGeometry();
  const count = 50000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial();

  particlesMaterial.size = 0.1;
  particlesMaterial.sizeAttenuation = true;

  particlesMaterial.color = new THREE.Color("#ff88cc");

  particlesMaterial.transparent = true;
  particlesMaterial.alphaMap = particleTexture;
  // particlesMaterial.alphaTest = 0.01
  // particlesMaterial.depthTest = false
  particlesMaterial.depthWrite = false;
  particlesMaterial.blending = THREE.AdditiveBlending;

  particlesMaterial.vertexColors = true;

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  return (
    <>
      <mesh></mesh>
    </>
  );
};

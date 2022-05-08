import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import React, { useRef } from "react";
import { useWindowScrollPosition } from "rooks";
import styled from "styled-components";
import { Bg } from "./bg";
import { Composition } from "./Composition";
import { Model } from "./Model";
import { Particles } from "./Particles";

export const Page1 = () => {
  return (
    <Container>
      <Content>
        <Title>LOREM. SOMETHING</Title>
      </Content>
      <Canvas camera={{ position: [0, 0, 50], fov: 22 }}>
        <Composition />
        <EffectComposer>
          {/* <DepthOfField
            focusDistance={0.01}
            focalLength={0.02}
            width={600}
            height={600}
          /> */}
          {/* <DotScreen scale={10} opacity={0.001} /> */}
        </EffectComposer>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  color: white;
`;

const Title = styled.div`
  background-color: transparent;
  font-weight: bolder;
  font-size: 80px;
`;

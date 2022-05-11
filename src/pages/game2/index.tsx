import { Physics } from "@react-three/cannon";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "components/game2/Cube";
import { Ground } from "components/game2/Ground";
import { Player } from "components/game2/Player";
import React from "react";
import styled from "styled-components";

const Game2 = () => {
  return (
    <Container>
      <Canvas shadows>
        <OrbitControls />
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.25} />
        <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground />
          <Player />
          <Cube position={[0, 1, 0]} type="wood" />
        </Physics>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default Game2;

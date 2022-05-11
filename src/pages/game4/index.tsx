import { Debug, Physics } from "@react-three/cannon";
import {
  FirstPersonControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "components/game3/Ground";
import { Player } from "components/game3/Player";
import React from "react";
import styled from "styled-components";

const Game4 = () => {
  return (
    <Container>
      <Canvas shadows camera={{ position: [0, 10, 10] }}>
        {/* <PerspectiveCamera makeDefault /> */}
        {/* <OrbitControls /> */}
        <pointLight castShadow intensity={1} position={[2, 5, 2]} />
        <Sky />
        <Physics>
          <Ground />
          <Player />
        </Physics>
        <ambientLight intensity={0.5} />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;
export default Game4;

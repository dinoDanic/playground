import { OrbitControls, Stage, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Floor } from "components/game/floor";
import { Player } from "components/game/player";
import React, { useRef } from "react";
import { useKey, useKeys } from "rooks";
import styled from "styled-components";
import { GridHelper } from "three";

const Game = () => {
  const containerRef = useRef<any>();
  const [isEventActive, setIsEventActive] = React.useState(true);
  return (
    <Container>
      <Canvas ref={containerRef} camera={{ fov: 50 }}>
        <OrbitControls
        // ref={ref}
        // enableZoom={false}
        // enablePan={false}
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <gridHelper args={[100, 100, 100]} />
        <Player />
        <Floor />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Game;

import { Debug, Physics } from "@react-three/cannon";
import { Cloud, OrbitControls, Sky, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Box } from "components/game5/Box";
import { Dude } from "components/game5/Dude";
import { Ground } from "components/game5/Ground";
import React, { Suspense } from "react";
import styled from "styled-components";
import { TextureLoader } from "three";

// useLoader.preload(TextureLoader, "/game5/Dude/ClothedLightSkin.png");
// useGLTF.preload("/game5/Dude/Dude.gltf");

const Game5 = () => {
  return (
    <Container>
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <Sky />
          <ambientLight castShadow />
          <pointLight castShadow intensity={1} />
          <Physics>
            {/* <Debug color="red"> */}
            <Dude />
            <Box />
            <Ground />
            {/* </Debug> */}
          </Physics>
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default Game5;

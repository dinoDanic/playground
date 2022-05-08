import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  DepthOfField,
  DotScreen,
  EffectComposer,
  GodRays,
} from "@react-three/postprocessing";
import { Bg } from "components/background3/bg";
import { Model } from "components/background3/Model";
import { Particles } from "components/background3/Particles";
import { useControls } from "leva";
import styled from "styled-components";
import { Page1 } from "components/background3/Page1";
import { Page2 } from "components/background3/Page2";

const Background3 = () => {
  return (
    <Container>
      <Page1 />
      <Page2 />
    </Container>
  );
};

const Container = styled.div`
  height: 400vh;
`;

const Page = styled.div`
  scroll-snap-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  z-index: 10;
  color: white;
`;

const Title = styled.div`
  background-color: transparent;
  height: 300px;
`;

export default Background3;

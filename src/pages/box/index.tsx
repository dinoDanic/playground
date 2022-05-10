import { Element } from "components/box/Element";
import React from "react";
import styled from "styled-components";

const Box = () => {
  return (
    <Container>
      <MobileFrame>
        <Element />
        <Element />
        <Element />
        <Element />
      </MobileFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileFrame = styled.div`
  position: relative;
  width: 350px;
  border-radius: 16px;
  padding: 16px;
  border: 3px solid rebeccapurple;
  height: 80vh;
`;

export default Box;

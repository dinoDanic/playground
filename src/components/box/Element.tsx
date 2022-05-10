import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export const Element = () => {
  const layerRef = useRef<any>();
  const containerRef = useRef<any>();
  const [open, setOpen] = useState(false);
  const [height, setheight] = useState(0);
  const [top, setTop] = useState(0);
  useEffect(() => {
    console.log(containerRef.current.offsetTop);

    setTop(containerRef.current.offsetTop);
    setheight(containerRef.current.clientHeight);
  }, []);

  return (
    <Container ref={containerRef} open={open}>
      Element
      <Layer
        height={height}
        top={top}
        ref={layerRef}
        onClick={() => setOpen(!open)}
        open={open}
      />
    </Container>
  );
};

const openMe = css`
  position: static;
`;

const Container = styled.div<Pr>`
  border: 2px solid rebeccapurple;
  border-radius: 10px;
  margin-bottom: 16px;
  /* position: relative; */
  padding: 16px;
  ${({ open }) => open && openMe}
`;

interface Pr {
  open: boolean;
  height?: number;
  top?: number;
}

const openStyle = css`
  top: 0px;
  height: 100%;
`;

const Layer = styled.div<Pr>`
  background-color: blue;
  width: 100%;
  position: absolute;
  height: ${({ height }) => `${height}px`};
  top: ${({ top }) => `${top}px`};
  left: 0;
  transition: 1s ease all;
  ${({ open }) => open && openStyle}
`;

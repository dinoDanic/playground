import { Page1 } from "components/scroll-snap/page1";
import { Page2 } from "components/scroll-snap/page2";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollSnap = () => {
  const [activePage, setActivePage] = useState(null);
  useEffect(() => {}, []);
  return (
    <>
      <Container>
        <Page>
          <Page1 />
        </Page>
        <Page>
          <Page2 />
        </Page>
        <Page>page 3</Page>
      </Container>
    </>
  );
};

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  width: 100%;
  height: 100vh;
  &:first-of-type {
    div {
      scroll-snap-align: center;
      width: 100%;
      height: 100vh;
      /* border: 3px solid blue; */
    }
  }
`;

const Page = styled.div``;

export default ScrollSnap;

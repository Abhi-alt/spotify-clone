import styled from "styled-components";
import SideBar from "./SideBar";
import Body from "./Body";
import React from "react";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <Container>
      <Content>
        <SideBar />
        <Body spotify={spotify} />
      </Content>
      <Footer />
    </Container>
  );
}

export default Player;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
`;

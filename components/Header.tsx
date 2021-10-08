import styled from "styled-components";
import { transparentize } from "polished";
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "../_constants";
import { Logo } from "./Logo";
import React from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <NavBar />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  box-shadow: 0 3px 10px ${(p) => transparentize(0.9, p.theme.pageForeground)};
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (min-width: 767px) {
    height: ${HEADER_HEIGHT}px;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin: auto;
  height: 100%;
  gap: 12px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 848px;
  }
`;

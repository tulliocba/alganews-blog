import styled from "styled-components";
import { transparentize } from "polished";
import { FOOTER_HEIGHT } from "../_constants";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <span>logo</span>
        <span>créditos</span>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 848px;
  margin: auto;
  height: 100%;
`;

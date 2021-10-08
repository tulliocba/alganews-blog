import { ReactNode } from "react";
import styled from "styled-components";
import {
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
} from "../_constants";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  margin-top: ${MOBILE_HEADER_HEIGHT}px;

  @media screen and (min-width: 767px) {
    margin-top: ${HEADER_HEIGHT}px;
  }
`;

const Container = styled.div`
  max-width: 848px;
  margin: auto;
  padding: 16px;
`;

import { ReactNode } from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
    min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

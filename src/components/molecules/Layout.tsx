import * as React from "react";
import styled from "@emotion/styled";
import { Box, Grid, GridProps } from "@chakra-ui/react";

const Wrapper = styled(Grid)`
  grid-template-areas: "left main right";

  grid-template-columns: auto min(100%, max(30vw, 450px)) auto;
  width: 100%;
`;
export interface ILayoutProps extends GridProps {}

const ResponsiveWrapper = (props: GridProps) => (
  <Wrapper {...props}>
    <Box gridArea={"left"} />
    <Box gridArea={"main"}>{props.children}</Box>
    <Box gridArea={"right"} />
  </Wrapper>
);

export const LayoutComponent = (props: ReturnType<typeof useLayout>) => {
  return (
    <Box zIndex={0}>
      <ResponsiveWrapper position={"sticky"} top={0} zIndex={1}>
        <Box background={"#fff"}>Header</Box>
      </ResponsiveWrapper>
      <ResponsiveWrapper height={"100vh"}>
        <Box background={"gray"} height={"100%"}>
          {props.children}
        </Box>
      </ResponsiveWrapper>
      <ResponsiveWrapper position={"sticky"} bottom={0} zIndex={1}>
        <Box background={"#fff"}>Footer</Box>
      </ResponsiveWrapper>
    </Box>
  );
};

export const Layout = (props: ILayoutProps) => {
  return <LayoutComponent {...useLayout(props)} />;
};

export const useLayout = (props: ILayoutProps) => {
  return {
    ...props,
  };
};

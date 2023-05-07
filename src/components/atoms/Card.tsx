import * as React from "react";
import { Box, BoxProps, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface ICardProps extends BoxProps {
  title?: string;
  footer?: ReactNode;
}
const CardWrapper = styled(Box)<ICardProps>`
  --box-shadow: rgba(150, 149, 149, 0.47);
  margin: 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px var(--box-shadow);
  contain: paint;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;

  &:after,
  &:before {
    content: "";
    flex: 1;
    border-bottom: 1px dashed;
  }

  &:before {
    margin-right: 10px;
  }
  &:after {
    margin-left: 10px;
  }
`;

const Content = styled(Box)`
  padding: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = styled(Box)`
  position: sticky;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 0px 5px 0px var(--box-shadow);
  text-align: center;
`;
export const Card = (props: ReturnType<typeof useCard>) => {
  const { children, title, footer } = props;
  return (
    <CardWrapper {...props}>
      {title && <Title>{title}</Title>}
      {children && <Content>{children}</Content>}
      {footer && <Footer>{footer}</Footer>}
    </CardWrapper>
  );
};

export const useCard = (props: ICardProps) => {
  return {
    ...props,
  };
};

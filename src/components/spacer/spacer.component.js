import styled, { useTheme } from "styled-components/native";
import React from "react";
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariants = (position, size, theme) => {
  const positionValue = positionVariant[position];
  const sizeValue = sizeVariant[size];
  const value = theme.space[sizeValue];
  return `${positionValue} : ${value}`;
};
const SpacerVariant = styled.View`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariants(position, size, theme);
  return <SpacerVariant variant={variant}>{children}</SpacerVariant>;
};
Spacer.defaultprops = {
  position: "top",
  size: "small",
};

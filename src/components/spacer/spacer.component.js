import React from "react";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: "size_04",
  medium: "size_08",
  large: "size_16",
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const pixelSize = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[pixelSize];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

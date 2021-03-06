import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  width,
  height,
  fontSize,
  flex,
  alignSelf,
  display
} from "styled-system";
import { cursor, float } from "./utils";

const Icon = styled.i`
  ${display}
  ${flex}
  ${space}
  ${color}
  ${width}
  ${height}
  ${fontSize}
  ${alignSelf}
  ${cursor}
  ${float}
  border: 0;
  background-color: transparent;
  &:hover {
    color: #7d7d7d;
  }
  transition: all ease 0.2s;
`;

Icon.defaultProps = {
  display: "flex",
  flexDirection: "column",
  className: "material-icons",
  cursor: "pointer",
  padding: 0
};

export default props => {
  const { name, ...rest } = props;
  return <Icon {...rest}>{name}</Icon>;
};

import React from "react";
import { StyledColumnTitle } from "./styles"

export const ColumnTitle = ({children}: {children: React.ReactNode}) => {
  return <StyledColumnTitle>{children}</StyledColumnTitle>
}

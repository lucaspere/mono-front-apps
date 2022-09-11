import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnTitle } from "./ColumnTitle";
import { StyledColumnContainer } from "./styles";

type ColumnProps = React.PropsWithChildren<{
  text: string;
}>;

export const ColumnContainer = ({text, children}: ColumnProps) => {
  return (
    <StyledColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark/>
    </StyledColumnContainer>
  );
}

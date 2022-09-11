import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer } from "./ColumnContainer";
import { StyledAppContainer } from "./styles";

export const AppContainer = () => {
  return (
    <StyledAppContainer>
      <ColumnContainer text="To Do">
        <Card text="Generate app scaffold" />
      </ColumnContainer>
      <ColumnContainer text="In Progress">
        <Card text="Learn Typescript" />
      </ColumnContainer>
      <ColumnContainer text="Done">
        <Card text="Begin to use static typing" />
      </ColumnContainer>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
    </StyledAppContainer>
  );
}

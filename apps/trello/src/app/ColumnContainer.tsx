import React from "react";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { Card } from "./Card";
import { ColumnTitle } from "./ColumnTitle";
import { StyledColumnContainer } from "./styles";
import { addTask } from "../state/actions";

type ColumnProps = {
  text: string;
  id: string;
};

export const ColumnContainer = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <StyledColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => <Card text={task.text} key={task.id} id={task.id} />)}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch(addTask(text, id))} dark/>
    </StyledColumnContainer>
  );
}

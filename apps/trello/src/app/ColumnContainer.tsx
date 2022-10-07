import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { Card } from "./Card";
import { ColumnTitle } from "./ColumnTitle";
import { StyledColumnContainer } from "./styles";
import { addTask, moveList } from "../state/actions";
import { useRef } from "react";
import { useItemDrag } from "./useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "../utils/isHidden";

type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean
};

export const ColumnContainer = ({ text, id, isPreview }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggerItem } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!draggerItem) return
      if (draggerItem.type === "COLUMN")
        if (draggerItem.id === id) return

      dispatch(moveList(draggerItem.id, id))
    }
  })
  const { drag } = useItemDrag({ type: "COLUMN", id, text })

  drag(drop(ref))

  return (
    <StyledColumnContainer ref={ref} isHidden={isHidden(draggerItem, "COLUMN", id)} isPreview={isPreview}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => <Card text={task.text} key={task.id} id={task.id} />)}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch(addTask(text, id))} dark/>
    </StyledColumnContainer>
  );
}

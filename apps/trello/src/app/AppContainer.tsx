import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { ColumnContainer } from "./ColumnContainer";
import { StyledAppContainer } from "./styles";
import { addList } from "../state/actions";
import { CustomDragLayer } from "./CustomDragLayer";

export const AppContainer = () => {
  const { lists, dispatch } = useAppState()

  return (
    <StyledAppContainer>
      <CustomDragLayer />
      {lists.map(list => <ColumnContainer text={list.text} key={list.id} id={list.id}/>)}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))}/>
    </StyledAppContainer>
  );
}

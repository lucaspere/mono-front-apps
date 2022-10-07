import { useRef } from "react";
import { useDrop } from "react-dnd";
import { moveList } from "../state/actions";
import { useAppState } from "../state/AppStateContext";
import { StyledCardContainer } from "./styles";
import { useItemDrag } from "./useItemDrag";

type CardProps = {
  text: string;
  id: string;
}

export const Card = ({ id, text }: CardProps) => {
  const { draggerItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'CARD',
    hover() {
      if (!draggerItem) return

      dispatch(moveList(draggerItem.id, id))
    }
  })

  return <StyledCardContainer ref={ref}>{text}</StyledCardContainer>
}

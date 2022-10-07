import { useDragLayer } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { ColumnContainer } from "./ColumnContainer";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";

export const CustomDragLayer = () => {
  const { draggerItem } = useAppState()
  const { currentOffset } = useDragLayer(monitor => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggerItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <ColumnContainer id={draggerItem?.id} text={draggerItem?.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>

  ) : null
}

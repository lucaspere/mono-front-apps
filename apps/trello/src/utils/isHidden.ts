import { DragItem } from '../app/DragItem';

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean =>
  !isPreview && draggedItem?.type === itemType && draggedItem.id === id;

import React, { createContext, Dispatch, useContext } from "react"
import { useImmerReducer } from "use-immer"
import { DragItem } from "../app/DragItem"
import { Action } from "./actions"
import { List, Task, AppState, appStateReducer } from "./appStateReducer"

type AppStateContextProps = {
  draggerItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
}

const appData: AppState = {
  draggerItem: null,
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
  ]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => useContext(AppStateContext);
export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggerItem } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ draggerItem, lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

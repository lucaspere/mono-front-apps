import styled from 'styled-components';
import { AppContainer } from './AppContainer';
import { AppStateProvider } from '../state/AppStateContext';
import { DndProvider } from 'react-dnd';
import {HTML5Backend as backend} from 'react-dnd-html5-backend';
const StyledApp = styled.div`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, #root {
    height: 100%;
  }
`;

export function App() {
  return (
    <DndProvider backend={backend}>
    <AppStateProvider>
      <StyledApp>
        <AppContainer />
      </StyledApp>
    </AppStateProvider>
    </DndProvider>
  );
}

export default App;

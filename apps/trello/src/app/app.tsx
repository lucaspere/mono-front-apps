import styled from 'styled-components';
import { AppContainer } from './AppContainer';
import { AppStateProvider } from '../state/AppStateContext';

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
    <AppStateProvider>
      <StyledApp>
        <AppContainer />
      </StyledApp>
    </AppStateProvider>
  );
}

export default App;

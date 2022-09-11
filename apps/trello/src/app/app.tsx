import styled from 'styled-components';
import { AppContainer } from './AppContainer';

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
    <StyledApp>
      <AppContainer />
    </StyledApp>
  );
}

export default App;

import { useState } from 'react';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;
const actx = new AudioContext();
const out = actx.destination;

const osc1 = actx.createOscillator();
const gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

const Osc1 = ({ changeFreq, osc1 }: any) => {
  return (
    <div>
      <input value={osc1} max="5000" onChange={changeFreq} type="range" />
    </div>
  );
};
export function App() {
  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value);
  const [osc1Detune, setOsc1Detune] = useState(osc1.detune.value);

  const changeOsc1Freq = (e: any) => {
    const { value } = e.target;
    setOsc1Freq(value);

    osc1.frequency.value = value;
  };
  const changeOsc1Detune = (e: any) => {
    const { value } = e.target;
    setOsc1Detune(value);

    osc1.detune.value = value;
  };

  return (
    <StyledApp>
      <h1>Sliders</h1>
      <button onClick={() => osc1.start()}>Start</button>
      <div>
        <h2>Frequency</h2>
        <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} />
      </div>
      <div>
        <h2>Detune</h2>
        <Osc1 changeFreq={changeOsc1Detune} freq={osc1Detune} />
      </div>
    </StyledApp>
  );
}

export default App;

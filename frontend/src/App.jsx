import React from 'react';
import Retro80sSynth from './components/Retro80sSynth.jsx';
import DogPictureRotator from './components/DogPictureRotator.jsx';

function App() {
  return (
    <div className="App">
      <Retro80sSynth>
        <DogPictureRotator />
      </Retro80sSynth>
    </div>
  );
}

export default App;
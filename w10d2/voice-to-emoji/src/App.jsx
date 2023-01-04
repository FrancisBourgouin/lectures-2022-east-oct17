import { useState } from "react";

import { coolLabels, listen } from "./helpers/voiceHelpers";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const listenAction = (result) => {
    const scores = Array.from(result.scores);
    const biggestNumber = Math.max(...scores);
    const biggestNumberIndex = scores.indexOf(biggestNumber);

    biggestNumberIndex !== 2 && setCurrentIndex(biggestNumberIndex);
  };

  const options = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  return (
    <div className="App">
      <header>
        <h1>Super Voice to Emoji with cools words.</h1>
      </header>
      <button onClick={() => listen(listenAction, options)}>START THE LISTENING</button>
      <h1 style={{ fontSize: "5em" }}>{coolLabels[currentIndex]}</h1>
    </div>
  );
}

export default App;

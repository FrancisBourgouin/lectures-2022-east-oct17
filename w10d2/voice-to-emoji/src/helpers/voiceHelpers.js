import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

const createModel = async () => {
  const URL = "http://localhost:3000/model/";
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // check that model and metadata are loaded via HTTPS requests.

  // return recognizer.ensureModelLoaded().then(() => recognizer)

  await recognizer.ensureModelLoaded();

  return recognizer;
};

export const listen = async (listenAction, options) => {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // get class labels

  recognizer.listen(listenAction, options);

  // Stop the recognition in 5 seconds.
  // setTimeout(() => recognizer.stopListening(), 5000);
};

export const coolLabels = [
  "👽👾👽",
  "🦙🧗🦙",
  "🏜️🦗🏜️",
  "🤡🤡🤡",
  "🐬🌊🐬",
  "🤓🤓🤓",
  "🐸🐸🐸",
];

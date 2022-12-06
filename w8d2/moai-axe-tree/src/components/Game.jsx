import { useEffect, useState } from "react";
import { determineWinner, pickOppositeEmoji } from "../helpers/gameHelpers";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const selectOption = (choice) => {
    setTimeout(() => {
      setPlayerChoice(choice);
      const computerChoice = pickOppositeEmoji(choice);

      const newResult = determineWinner(choice, computerChoice);

      setResult(newResult);
    }, 1500);
  };
  return (
    <div>
      <main className="game">
        <Computer />
        <Player playerChoice={playerChoice} selectOption={selectOption} />
      </main>
      <Result result={result} />
    </div>
  );
}

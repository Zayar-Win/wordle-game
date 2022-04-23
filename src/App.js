import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3008/letters")
      .then((data) => data.json())
      .then((result) =>
        setSolution(
          result[
            Math.floor(
              Math.random() * result.length
            )
          ].word
        )
      );
  }, []);

  return (
    <div className='App dark'>
      <h2>Wordle</h2>
      {solution && (
        <GameBoard solution={solution} />
      )}
    </div>
  );
}

export default App;

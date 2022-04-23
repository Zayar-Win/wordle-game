import { useState } from "react";

const useWordle = (solution) => {
  const [guesses, setGuesses] = useState([
    ...Array(6),
  ]);
  const [count, setCount] = useState(0);
  const [currentGuess, setCurrentGuess] =
    useState("");
  const [isCorrect, setIsCorrect] =
    useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    const currentSolution = [...solution];
    let formattedGuess = [...currentGuess].map(
      (l) => {
        return { key: l, color: "grey" };
      }
    );
    formattedGuess.forEach((l, i) => {
      if (currentSolution[i] === l.key) {
        formattedGuess[i].color = "green";
      }
    });

    formattedGuess.forEach((l, i) => {
      if (
        currentSolution.includes(l.key) &&
        l.color !== "green"
      ) {
        formattedGuess[i].color = "yellow";
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      console.log("hit");
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      let newGuess = [...prev];
      console.log(newGuess);
      newGuess[count] = formattedGuess;
      return newGuess;
    });

    setUsedKeys((prev) => {
      formattedGuess.forEach((l) => {
        const currentColor = prev[l.color];
        if (l.color === "green") {
          prev[l.key] = "green";
          return;
        }
        if (l.color === "yellow") {
          prev[l.key] = "yellow";
          return;
        }
        if (l.color === "grey") {
          prev[l.key] = "grey";
          return;
        }
      });

      return prev;
    });

    setCount((prev) => prev + 1);

    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        return;
      }

      if (count > 5) {
        //TODO : show modal
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) =>
        prev.slice(0, -1)
      );
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return {
    guesses,
    handleKeyup,
    currentGuess,
    isCorrect,
    count,
    usedKeys,
  };
};

export default useWordle;

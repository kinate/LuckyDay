import { useState } from "react";

export default function Draw() {
  function getRandomNumber() {
    const min = 0;
    const max = 10;
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  const [luckyNumber, setLuckyNumber] = useState(getRandomNumber());
  const [inputValue, setInputValue] = useState<string>("");
  const [isNumberAboveTen, setIsNumberAboveTen] = useState(false);
  const [tryCounter, SetTryCounter] = useState(3);
  const [isWinner, setIsWinner] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(inputValue) <= 10) {
      setIsNumberAboveTen(false);
      setInputValue(event.target.value);
    } else {
      setIsNumberAboveTen(true);
      setInputValue(event.target.value);
    }
  };

  function handleEvent() {
    console.log(inputValue);
    if (luckyNumber === Number(inputValue)) {
      setIsWinner(true);
      setLuckyNumber(getRandomNumber());
      SetTryCounter(3);
      console.log(typeof Number(inputValue));
    } else {
      setIsWinner(false);
      SetTryCounter(tryCounter-1);
      console.log(luckyNumber);
    }
  }

  return (
    <>
      <h1>{isWinner ? "🎉" : "😎"}</h1>
      <h3> Guess the number 0 to 10 </h3>

      <p>
        You have <b>{tryCounter}</b> chance to try
      </p>
      <div>
        <input type="tel" value={inputValue} onChange={handleInput} />{" "}
        {/* BUG onChange doesnt work propery*/}
      </div>
      <br />
      <button disabled={isNumberAboveTen} onClick={handleEvent}>
        {isNumberAboveTen ? "Hey! just 1-10 😡" : "Try my lucky"}
      </button>
    </>
  );
}

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
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-4 mx-auto" >
          <div className="card p-4 text-center" style={{background:'#000',color:'#fff'}}>
      <h1 style={{ 
      backgroundColor: 'white', 
      borderRadius: '40%', 
      width: '60px', 
      height: '60px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: '0 auto' 
    }}>{isWinner ? "🎉" : "😎"}</h1>
      <h4> Pick a number 0 to 10 </h4>

      <p>
        You have <b>{tryCounter}</b> chances to try
      </p>
      <div>
        <input className="form-control" type="tel" value={inputValue} onChange={handleInput} />{" "}
        {/* BUG onChange doesnt work propery*/}
      </div>
      <br />
      <button className="btn btn-primary" disabled={isNumberAboveTen} onClick={handleEvent}>
        {isNumberAboveTen ? "Hey! just 1-10 😡" : "Try my lucky"}
      </button>
      </div>
      <p style={{color:'#ccc'}}>@2024 Luck Day</p>
      </div>
      </div>
      </div>
    </>
  );
}

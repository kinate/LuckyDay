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
  const [isBorderActive, setIsBorderActive] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

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
      SetTryCounter(tryCounter - 1);
      setIsBorderActive(true);
      setTimeout(() => {
        setIsBorderActive(false);
      }, 1000);
      //Set restricted true if attempt 3 times.
      if (tryCounter < 1) {
        setIsRestricted(true);
      }
    }
  }

  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-12 col-md-4 mx-auto">
            <div
              className={`card p-4 text-center border ${
                isBorderActive ? "border-danger border-2" : ""
              } ${isWinner ? "border-success border-2" : ""}`}
              style={{ background: "#F8F8F8" }}
            >
              <h1
                style={{
                  backgroundColor: "white",
                  borderRadius: "40%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              >
                {isWinner ? "🎉" : "😎"}
              </h1>
              <h4>
                {isWinner ? "You are a Winner!!" : "Pick a number 0 to 10"}{" "}
              </h4>

              {!isWinner && (
                <p>
                  You have <b>{tryCounter}</b> chances to try
                </p>
              )}
              <div>
                <input
                  className="form-control"
                  type="tel"
                  value={inputValue}
                  onChange={handleInput}
                />{" "}
                {/* BUG onChange doesnt work propery*/}
              </div>
              <br />
              {isRestricted ? (
                <p style={{ color: "red" }}>You are not lucky today 😌</p>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={isNumberAboveTen}
                  onClick={handleEvent}
                >
                  {isNumberAboveTen ? "Hey! just 1-10 😡" : "Try my lucky"}
                </button>
              )}
            </div>
            <p style={{ color: "#ccc" }}>@2024 Luck Day</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState, useRef } from "react";
import "../styles/countdown.css";
import renderTime from "./TimerClock";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function CountDown() {
  const [playing, setPlaying] = useState(false);
  const timerValue = useRef(0);
  const initalRef = useRef(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [reset, setReset] = useState(0);
  function handelTimer() {
    if (playing) {
      setPlaying((prev) => !prev);
    }
    if (!playing) {
      timerValue.current = displayValue;
      setReset((prev) => prev + 1);
      setPlaying((prev) => !prev);
    }
  }

  const hours = Math.floor(displayValue / 3600);
  const minutes = Math.floor((displayValue % 3600) / 60);
  const seconds = displayValue % 60;
  const HOURS = String(hours).padStart(2, "0");
  const MINUTS = String(minutes).padStart(2, "0");
  const SECONDS = String(seconds).padStart(2, "0");

  function addSec() {
    setDisplayValue((prev) => prev + 1);
    setPlaying(false);
  }
  function addMin() {
    setDisplayValue((prev) => prev + 60);
    setPlaying(false);
  }
  function addHr() {
    setDisplayValue((prev) => prev + 3600);
    setPlaying(false);
  }

  function subSec() {
    setDisplayValue((prev) => Math.max(prev - 1, 0));
    setPlaying(false);
  }

  function subMin() {
    setDisplayValue((prev) => Math.max(prev - 60, 0));
    setPlaying(false);
  }

  function subHr() {
    setDisplayValue((prev) => Math.max(prev - 3600, 0));
    setPlaying(false);
  }

  return (
    <div className='countDown'>
      <div className='CircleBody'>
        <CountdownCircleTimer
          key={reset}
          isPlaying={playing}
          strokeWidth={5}
          trailColor='hsla(232, 39%, 16%, 1)'
          duration={timerValue.current}
          rotation={"counterclockwise"}
          colors={["hsla(0, 100%, 71%, 1)"]}
          onComplete={() => {
            return {
              shouldRepeat: false,
              newInitialRemainingTime: timerValue.current,
            };
          }}>
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className='timercontrolls'>
        <div className='heading'>
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div className='heading btn'>
          <button onClick={addHr} className='upBtn'></button>
          <button onClick={addMin} className='upBtn'></button>
          <button onClick={addSec} className='upBtn'></button>
        </div>
        <div className='timeReading'>
          <p>{HOURS}</p>
          {":"}
          <p>{MINUTS}</p>
          {":"}
          <p>{SECONDS}</p>
        </div>
        <div className='heading btn'>
          <button onClick={subHr} className='dBtn'></button>
          <button onClick={subMin} className='dBtn'></button>
          <button onClick={subSec} className='dBtn'></button>
        </div>
        <button className='startBtn' onClick={handelTimer}>
          START
        </button>
      </div>
    </div>
  );
}

export default CountDown;

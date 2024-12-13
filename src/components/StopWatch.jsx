import React, { useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
    setTime(0);
  };

  //mm:ss:ms
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className='stopwatchsection p-2' >
      <div>
        <h1>Stopwatch</h1>
        <h2>{formatTime(time)}</h2>
        <div className="stopwatchbtn">
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      
      <div>
        <Clock value={new Date(time)} />
      </div>
    </div>
  );
}

export default Stopwatch;
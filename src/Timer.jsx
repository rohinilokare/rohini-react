import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning, startTime]);

  const handleStart = () => {
    setStartTime(Date.now() - elapsedTime);
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleReset = () => {
    setStartTime(null);
    setElapsedTime(0);
    setTimerRunning(false);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    const hours = Math.floor(time / (1000 * 60 * 60)) % 24;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>Elapsed Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleStart} disabled={timerRunning}>Start</button>
      <button onClick={handleStop} disabled={!timerRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

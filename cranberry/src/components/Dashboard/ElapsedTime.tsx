import React, { useState, useEffect } from "react";
import useElapsedTime from "../../hooks/useElapsedTime";

export default function ElapsedTime({ quitDate } : { quitDate: Date }) {

  const elapsedTime = useElapsedTime(quitDate);
  
  // console.log("ElapsedTime rendered.") // ! CONSOLE LOG

  return (
    <div className="time-elapsed">
      <h1>Time Smoke Free</h1>
      <br/>
      <ul>
        <li>
          <h1>{elapsedTime.days}</h1>
          <p>Days</p>
        </li>
        <li>
          <h1>{elapsedTime.hours}</h1>
          <p>Hours</p>
        </li>
        <li>
          <h1>{elapsedTime.minutes}</h1>
          <p>Minutes</p>
        </li>
        <li>
          <h1>{elapsedTime.seconds}</h1>
          <p>Seconds</p>
        </li>

      </ul>
    </div>
  );
}

interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
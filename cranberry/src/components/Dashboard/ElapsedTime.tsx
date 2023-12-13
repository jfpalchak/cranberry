import React, { useState, useEffect } from "react";
import useElapsedTime from "../../hooks/useElapsedTime";

export default function ElapsedTime({ quitDate } : { quitDate: Date }) {

  const elapsedTime = useElapsedTime(quitDate);
  
  // console.log("ElapsedTime rendered.") // ! CONSOLE LOG

  return (
    <div className="time-elapsed">
      <h1>{`D: ${elapsedTime.days} H: ${elapsedTime.hours} M: ${elapsedTime.minutes} S: ${elapsedTime.seconds}`}</h1>
    </div>
  );
}

interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
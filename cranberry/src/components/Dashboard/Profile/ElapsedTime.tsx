import useElapsedTime from "../../../hooks/useElapsedTime";

export default function ElapsedTime({ quitDate } : { quitDate: Date | string }) {
  
  quitDate = (typeof quitDate === 'string' ? new Date(quitDate) : quitDate);
  const elapsedTime = useElapsedTime(quitDate);

  return (
    <div className="time-elapsed">
      <h1>Time Smoke Free</h1>
      <br/>
      <ul>
        {Object.entries(elapsedTime).map(([unit, time]) => {
          if ( unit === 'years' && !time
            || unit === 'months' && !time
            || unit === 'days' && !time) {
            return
          } else {
          return (
            <li key={unit}>
              <h1 className="time">{time}</h1>
              <p className="unit">{unit}</p>
            </li>
          );
        }})}
      </ul>
    </div>
  );
}
import { useElapsedTime } from "../../../hooks/";

export default function ElapsedTime({ userQuitDate } : { userQuitDate: Date | string }) {
  
  userQuitDate = (typeof userQuitDate === 'string' ? new Date(userQuitDate) : userQuitDate);
  const elapsedTime = useElapsedTime(userQuitDate);

  return (
    <div className="time-elapsed">
      <h1>Time Smoke Free</h1>
      <br/>
      <ul>
        {Object.entries(elapsedTime).map(([unit, time]) => {
          if ( (unit === 'years' && !time)
            || (unit === 'months' && !time)
            || (unit === 'days' && !time) ) {
            return null;
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
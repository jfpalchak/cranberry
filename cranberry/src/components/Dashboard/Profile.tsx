
export default function Profile() {
  return (
    <section className="user-profile">
      <h1>User Profile</h1>

      <div className="profile-content">

        <div className="profile col">
          <div className="timer">
            Time Smoke Free:
          </div>
          <div className="progress-trackers">
            <div className="money-tracker">
              Money Saved:
            </div>
            <div className="avoided-tracker">
              Cigarettes Avoided:
            </div>
            <div className="time-gained-tracker">
              Time Spent Not Smoking:
            </div>
            <div className="life-regained-tracker">
              Life Gained Back:
            </div>
          </div>
          <div className="breakdown">
            Stat Breakdown / Recent Journals(?)
          </div>
        </div>

        <div className="profile col">
          <div className="tip">
            Tip of the Day
          </div>
          <div className="health-progress">
            Health Progress
          </div>
        </div>
        
      </div>
    </section>
  );
}
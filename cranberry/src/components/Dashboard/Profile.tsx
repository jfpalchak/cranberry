import { IUser } from "../../types";
import React, { useState, useEffect } from "react";
import ElapsedTime from "./ElapsedTime";
import useDataCalculations from "../../hooks/useDataCalculations";

export default function Profile(props: ProfileProps) {

  const { user } = props;

  user.quitDate = new Date("12-11-2023"); // ! NEED TO ADD ABILITY TO SET QUIT DATE

  const userProgress = useDataCalculations(user);

  console.log("Profile Rendered.")
  console.log(user)
  console.log("User progress data: ", userProgress);

  return (
    <section className="user-profile dash-section">
      <div className="section-header">
        <h1>Profile</h1>
      </div>

      <div className="profile-content">

        <div className="profile-col">
          <ElapsedTime quitDate={user.quitDate} />
          <div className="progress-trackers">
            <div className="money-tracker tracker">
              <h3>${userProgress?.moneySaved.toFixed(2)}</h3>
              <p>Money Saved</p>
            </div>
            <div className="avoided-tracker tracker">
              <h3>{userProgress?.cigsAvoided.toFixed(2)}</h3>
              <p>Smokes Avoided</p>
            </div>
            <div className="time-gained-tracker tracker">
              <h3>{(userProgress?.timeSaved! / 60).toFixed(2)}</h3>
              <p>Time Saved</p>
            </div>
            <div className="life-regained-tracker tracker">
              <h3>(TBD)</h3>
              <p>Time Gained</p>
            </div>
          </div>
          <div className="breakdown">
            Stat Breakdown / Recent Journals(?)
          </div>
        </div>

        <div className="profile-col">
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

type ProfileProps = {
  user: IUser;
}

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}
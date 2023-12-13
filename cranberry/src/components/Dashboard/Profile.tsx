import { IUser } from "../../types";
import React, { useState, useEffect } from "react";
import ElapsedTime from "./ElapsedTime";
import useDataCalculations from "../../hooks/useDataCalculations";

export default function Profile(props: ProfileProps) {

  const { user } = props;

  user.quitDate = new Date("12-11-2023");
  const userProgress = useDataCalculations(user);

  console.log("Profile Rendered.")
  console.log(user)
  console.log("User progress data: ", userProgress);

  return (
    <section className="user-profile">
      <h1>User Profile</h1>

      <div className="profile-content">

        <div className="profile col">
          <ElapsedTime quitDate={user.quitDate} />
          <div className="progress-trackers">
            <div className="money-tracker">
              <h3>Money Saved:</h3>
              <h4>${userProgress?.moneySaved.toFixed(2)}</h4>
            </div>
            <div className="avoided-tracker">
              Cigarettes Avoided: {userProgress?.cigsAvoided.toFixed(2)}
            </div>
            <div className="time-gained-tracker">
              Time Spent Not Smoking: {(userProgress?.timeSaved! / 60).toFixed(2)}
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

type ProfileProps = {
  user: IUser;
}

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}
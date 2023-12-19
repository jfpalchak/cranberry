import React, { useState, useEffect } from "react";
import ElapsedTime from "./ElapsedTime";
import useProgressCalculations from "../../../hooks/useDataCalculations";
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import { Tooltip } from "@mui/material";
import type { IUser } from "../../../types";
import './Profile.css';

const moneyTrackerText = "This is calculated by multiplying the number of cigarettes you would have otherwise smoked by the cost of one cigarette per pack, according to your registration data.";

export default function Profile({ user }: ProfileProps) {
  
  const userProgress = useProgressCalculations(user);

  return (
    <section className="user-profile dash-section">
      <div className="section-header">
        <h1>Profile</h1>
      </div>

      <div className="profile-content">

        <div className="profile-col">

          <ElapsedTime quitDate={user.quitDate} />

          <div className="progress-trackers">
          <Tooltip title={moneyTrackerText} >
            <div className="money-tracker tracker">
              <AttachMoneyIcon />
              <div className="info">
                <h3>{userProgress?.moneySaved.toFixed(2)}</h3>
                <p>money saved</p>
              </div>
            </div>
            </Tooltip>
            <div className="avoided-tracker tracker">
              <SmokeFreeIcon />
              <div className="info">
                <h3>{userProgress?.cigsAvoided.toFixed()}</h3>
                <p>cigarettes avoided</p>
              </div>
            </div>
            <div className="time-gained-tracker tracker">
              <MoreTimeIcon />
              <div className="info">
                <h3>{(userProgress?.timeSaved! / 60).toFixed(2)}</h3>
                <p>time saved (hours)</p>
              </div>
            </div>
            <div className="life-regained-tracker tracker">
              <div className="info">
                <h3>(TBD)</h3>
                <p>time gained</p>
              </div>
            </div>
          </div>
          <div className="milestones">
            Milestones

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
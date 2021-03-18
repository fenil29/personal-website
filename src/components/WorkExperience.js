import React from "react";
import "./WorkExperience.css";

import { Timeline } from 'antd';

let dot = <div className="timeline-dot">


</div>

function WorkExperience() {
  return (
    <div className="work-exp-container main-container">
      <h1 className="title">Work Experience</h1>
      <Timeline className="timeline-container">
        <Timeline.Item dot={dot} label="f">Full Stack developer Intern</Timeline.Item>
        <Timeline.Item dot={dot} >Full Stack developer Intern</Timeline.Item>
      </Timeline>
    </div>
  );
}

export default WorkExperience;

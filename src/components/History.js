import React from "react"
import "./History.css"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import Image from "../components/image"

import { MdWork,MdSchool } from 'react-icons/md';

function History() {
  return (
    <div className="technologies-container main-container">
      <h1 className="title" id="experience-and-education">Experience and Education</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2021 - Present"
          // iconStyle={{ background: "var(--secondary-background-color)", color:  "var(--secondary-background-color)" }}
          icon={<MdSchool />}
        >
          <div className="history-image">
            <Image type={"details-image"} filename={"uwin-logo.jpg"} />
          </div>
          <h3 className="vertical-timeline-element-title">
            Master of Applied Computing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Windsor
          </h4>
          {/* <p>Creative Direction, Visual Design</p> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "var(--secondary-background-color)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jan 2021 – June 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <div className="history-image">
            <Image type={"details-image"} filename={"tr-logo.jpg"} />
          </div>

          <h3 className="vertical-timeline-element-title">Technology Intern</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <h4 className="vertical-timeline-element-subtitle">
            Thomson Reuters
          </h4>
          {/* <p>
          
          </p> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2017 – June 2021"
          // iconStyle={{ background: "var(--secondary-background-color)", color:  "var(--secondary-background-color)" }}
          icon={<MdSchool />}
        >
          <div className="history-image">
            <Image type={"details-image"} filename={"charusat-logo.png"} />
          </div>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Charusat University
          </h4>
          {/* <p>Creative Direction, Visual Design</p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default History

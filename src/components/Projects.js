import React from "react"

import "./Projects.css"

import ProjectCard from "./ProjectCard"

import javaScriptSvg from "../asserts/javascript.svg"
import pythonSvg from "../asserts/python.svg"
import opencvSvg from "../asserts/opencv.svg"
import arduinoSvg from "../asserts/arduino.svg"
import androidSvg from "../asserts/android.svg"
import nodejsSvg from "../asserts/nodejs.svg"
import reactSvg from "../asserts/react.svg"
import EjsSvg from "../asserts/ejs.svg"
import postgresqlSvg from "../asserts/postgresql.svg"
import expressSvg from "../asserts/express.svg"
import jwtSvg from "../asserts/jwt.svg"
import mongodbSvg from "../asserts/mongodb.svg"
import electronSvg from "../asserts/electron.svg"
import redisSvg from "../asserts/redis.svg"
import azureSvg from "../asserts/azure.svg"
import dockerSvg from "../asserts/docker.svg"
import githubActionsSvg from "../asserts/github-actions.svg";


let projects = [
  {
    title: "Habbit Space",
    type: "Web Application",
    imgName: "habbit-space.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "A Minimal Habit Tracker- Completely Free and Open Source tracker to track your habit easily",
    descriptionLong:
      "A Minimal Habit Tracker- Completely Free and Open Source tracker to track your habit easily",
    button: {
      viewCodeUrl: "",
      viewProjectUrl: "https://habbit.space/",
    },
    technologyUsed: [
      { name: "ReactJs", img: reactSvg },
      { name: "NodeJs", img: nodejsSvg },
      { name: "ExpressJs", img: expressSvg },
      { name: "PostgreSQL", img: postgresqlSvg },
      { name: "Redis", img: redisSvg },
      { name: "Github Actions", img: githubActionsSvg },
      { name: "Docker", img: dockerSvg },
      { name: "Azure", img: azureSvg },
    ],
  },
  {
    title: "Appoint Meet",
    type: "Web Application",
    imgName: "appoint-meet.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Appoint-Meet is an Online Booking System to manage all appointment scheduling process for businesses and individuals.",
    descriptionLong:
      "Appoint-Meet is an Online Booking System to manage all appointment scheduling process for businesses and individuals.",
    button: {
      viewCodeUrl: "",
      viewProjectUrl: "https://appoint-meet.herokuapp.com/",
    },
    technologyUsed: [
      { name: "ReactJs", img: reactSvg },
      { name: "NodeJs", img: nodejsSvg },
      { name: "ExpressJs", img: expressSvg },
      { name: "PostgreSQL", img: postgresqlSvg },
      { name: "JWT", img: jwtSvg },
    ],
  },
  {
    title: "Park Spot",
    type: "Mobile Application (cross platform)",
    imgName: "park-spot.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Park Spot is a mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. This application collects data on each entry and exit of the vehicle and analyses it for the best business decisions.",
    descriptionLong:
      "Park Spot is a cross-platform mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. The drivers can easily scan the QR code to get the parking spot. The app is user friendly. The app takes the time of entry when a spot is provided and the time of exit when the spot is left. This application also collects all the entry and exit data of each vehicle and analyzes it for the best business decisions. In this project, there is also an automated billing system that produces the bill with respect to the time the vehicle spends in the parking lot.",
    button: {
      viewCodeUrl: "",
      viewProjectUrl:
        "https://github.com/fenil29/park-spot-mobile-app-react-native",
    },
    technologyUsed: [
      { name: "React Native", img: reactSvg },
      { name: "NodeJs", img: nodejsSvg },
      { name: "ExpressJs", img: expressSvg },
      { name: "PostgreSQL", img: postgresqlSvg },
      { name: "JWT", img: jwtSvg },
    ],
  },
  {
    title: "Employee Management System",
    type: "Web Application",
    imgName: "employee-management-system.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Employee Management system is a web application that enables users to create,store and manage Employee Records",
    descriptionLong:
      "Employee Management system is a web application that enables users to create,store and manage Employee Records. The application also provides facilities of a payroll system and leave application. It is a management system that helps to manage employees and also the company’s different task and project.Employee management system can manage and store details like employees personal info and also details of different department of the company and different branches of the organization",
    button: {
      viewCodeUrl:
        "https://github.com/fenil29/employee-management-system-frontend-react",
      viewProjectUrl: "https://employee-management-fk.netlify.com/",
    },
    technologyUsed: [
      { name: "React", img: reactSvg },
      { name: "ExpressJs", img: expressSvg },
      { name: "NodeJs", img: nodejsSvg },
      { name: "MongoDB", img: mongodbSvg },
      { name: "JWT", img: jwtSvg },
    ],
  },
  {
    title: "Missing Person Report",
    type: "Web Application",
    imgName: "missing-person-report.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Web Application that shows all the missing persons. You can create an account and upload the missing person details with photos and so other people can help you.",
    descriptionLong:
      "Web Application that shows all the missing persons. You can create an account and upload the missing person details with photos and so other people can help you.",
    button: {
      viewCodeUrl: "https://github.com/fenil29/Missing-Person-Report",
      viewProjectUrl: "https://missing-person-report.herokuapp.com/",
    },
    technologyUsed: [
      { name: "EJS", img: EjsSvg },
      { name: "ExpressJs", img: expressSvg },
      { name: "NodeJs", img: nodejsSvg },
      { name: "MongoDB", img: mongodbSvg },
    ],
  },
  {
    title: "Vehicle Speed Detection",
    type: "Python Script",
    imgName: "vehicle-speed-detection.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Vehicle Speed Detection is a Python Script to track and detect the speed of a moving vehicle.",
    descriptionLong:
      "Vehicle Speed Detection is a Python Script to track and detect the speed of a moving vehicle. This script can automatically detect the lane in the highway and split the output based on each lane and automatically capture the image of an over-speeding vehicle.",
    button: {
      viewCodeUrl: "https://github.com/fenil29/vehicle-speed-detection",
      viewProjectUrl: "",
    },
    technologyUsed: [
      { name: "OpenCV", img: opencvSvg },
      { name: "Python", img: pythonSvg },
    ],
  },
  {
    title: "Smart Home",
    type: "Android Application and IoT",
    imgName: "home-automation.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "The main aim of this project is to control the Electric Equipment present in our Homes or Offices using a smartphone",
    descriptionLong:
      "The main aim of this project is to control the Electric Equipment present in our Homes or Offices using a smartphone.Equipment like lights, fans, ACs, etc. can be controlled by this application.You can access your Equipment from anywhere in the Range of the Wi-Fi module or when your mobile is connected to the Internet.",
    button: {
      viewCodeUrl: "",
      viewProjectUrl:
        "https://github.com/fenil29/home-automation-system-android-application",
    },
    technologyUsed: [
      { name: "Arduino", img: arduinoSvg },
      { name: "Android", img: androidSvg },
    ],
  },
  {
    title: "Pomodoro Timer",
    type: "Web Application",
    imgName: "pomodoro-timer.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Pomodoro Timer is Ad-free,simple, and easy to use Pomodoro Timer. ",
    descriptionLong:
      "Pomodoro Timer is Ad-free,simple, and easy to use Pomodoro Timer. The main functionality of this site is the ability to resume the started timer even if you accidentally close the tab or browser. Pomodoro Timer is a productivity app that improves your focus",
    button: {
      viewCodeUrl: "https://github.com/fenil29/pomodoro-timer",
      viewProjectUrl: "https://pomodoro-timer-fk.netlify.com/",
    },
    technologyUsed: [
      { name: "JavaScript", img: javaScriptSvg },

      { name: "React", img: reactSvg },
    ],
  },
  {
    title: "Volume Limiter",
    type: "Windows Application",
    imgName: "volume-limiter.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Windows application for setting the limit of system volume",
    descriptionLong:
      "windows application for setting the limit of system volume",
    button: {
      viewCodeUrl: "",
      viewProjectUrl: "https://github.com/fenil29/volume-limiter",
    },
    technologyUsed: [
      { name: "JavaScript", img: javaScriptSvg },
      { name: "Electron", img: electronSvg },
    ],
  },
]

function Projects() {
  return (
    <div className="projects main-container" >
      {/* <h1 className="title">Projects I've Built</h1> */}
      <h1 className="title" id="projects">Projects</h1>
      <div className="projects-container">
        {projects.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects

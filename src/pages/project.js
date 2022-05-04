import React, { useState, useEffect } from "react"

// import "./Projects.css"

import ProjectCardDynamic from "../components/ProjectCardDynamic"

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
import githubActionsSvg from "../asserts/github-actions.svg"
import elasticsearchSvg from "../asserts/elasticsearch.svg"

import NavBarForProject from "../components/NavBarForProject"
import Footer from "../components/Footer"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
let projects = [
  {
    title: "Swift Search",
    type: "Web Application",
    path: "swift-search",
    imgName: "swift-search.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      "Swift search is the search engine designed to search across big data efficiently and quickly.",
    descriptionLong:
      "Swift search is the search engine designed to search across big data efficiently and quickly. The dataset contains 20 million records(20GB). The features of swift search include real-time auto-suggestion, filters that are updated in real-time according to the search term, and raking the search results based on relevance. Each record in the database is stored and indexed according to how it is accessed to improve efficiency.",
    button: {
      viewCodeUrl: "https://github.com/fenil29/swift-search-elasticsearch-search-engine",
      viewProjectUrl: "",
    },
    technologyUsed: [
      { name: "ReactJs", img: reactSvg },
      { name: "ElasticSearch", img: elasticsearchSvg },
      { name: "Docker", img: dockerSvg },
      { name: "Azure", img: azureSvg },
    ],
  },
  {
    title: "Habbit Space",
    type: "Web Application",
    path: "habbit-space",
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
    path: "appoint-meet",
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
    path: "park-spot",
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
    path: "employee-management-system",
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
    path: "missing-person-report",
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
    path: "vehicle-speed-detection",
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
    path: "smart-home",
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
    path: "pomodoro-timer",
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
    path: "volume-limiter",
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
let colorList = [
  "--primary-color",
  "--primary-background-color",
  "--secondary-background-color",
  "--primary-font-color",
  "--secondary-font-color",
]
function Project({ name }) {
  const [darkMode, setDarkMode] = useState(false)
  let handleDarkModeClick = () => {
    for (let i of colorList) {
      document.documentElement.style.setProperty(
        i,
        darkMode
          ? `var(--dark-mode${i.slice(1)})`
          : `var(--light-mode${i.slice(1)})`
      )
    }
    setDarkMode(!darkMode)
  }
  const [currentProject, setCurrentProject] = useState(projects.filter(x => x.path == name))
  useEffect(() => {
    setCurrentProject(projects.filter(x => x.path == name))

    return () => {}
  }, [])

  return (
    <>
      <div className="dark-mode-icon" onClick={handleDarkModeClick}>
        {!darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3v-6zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm-4.184-.599l-3.593-3.594-1.415 1.414 3.595 3.595c.401-.537.876-1.013 1.413-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.595-3.595-1.414-1.414-3.595 3.595c.537.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.593c-.403.536-.879 1.012-1.415 1.414zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 202.748 202.748">
            <path
              d="M199.876,119.867c-2.405-1.886-5.715-2.124-8.366-0.6c-12.57,7.225-25.856,10.889-39.489,10.889
	c-43.804,0-79.44-35.638-79.44-79.443c0-13.693,3.669-26.961,10.906-39.434c1.537-2.648,1.309-5.965-0.576-8.379
	c-1.884-2.414-5.047-3.441-7.989-2.591c-21.161,6.1-40.207,19.042-53.629,36.441C7.363,54.809,0,76.437,0,99.297
	c0,57.035,46.4,103.438,103.434,103.438c22.86,0,44.493-7.36,62.561-21.286c17.411-13.419,30.359-32.454,36.459-53.6
	C203.302,124.911,202.282,121.754,199.876,119.867z M103.434,187.734C54.671,187.734,15,148.061,15,99.297
	c0-32.898,18.825-62.836,47.436-77.882c-3.228,9.485-4.855,19.284-4.855,29.298c0,52.076,42.366,94.443,94.44,94.443
	c10,0,19.816-1.634,29.347-4.873C166.324,168.9,136.36,187.734,103.434,187.734z"
            />
          </svg>
        )}
      </div>
      <NavBarForProject />
      <div className="projects-container">
        {currentProject.length !== 0 ? (
          currentProject.map((item, index) => (
            <ProjectCardDynamic {...item} key={index} />
          ))
        ) : (
          <div className="dynamic-project-not-found">
            <div className="not-found">
              <h1>404</h1>
              <h2>NOT FOUND</h2>
              <div className="text">
                You just hit a route that doesn&#39;t exist...
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
    // <div className="projects main-container">
    //   {/* <h1 className="title">Projects I've Built</h1> */}
    //   {/* <h1 className="title" id="projects">
    //     Projects
    //   </h1> */}

    // </div>
  )
}

export default Project

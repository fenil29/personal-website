import SwiftSearchImg from '../public/project-image/swift-search.png'
import HabbitSpaceImg from '../public/project-image/habbit-space.png'
import AppointMeetImg from '../public/project-image/appoint-meet.png'
import ParkSpotImg from '../public/project-image/park-spot.png'
import EmployeeManagementSystemImg from '../public/project-image/employee-management-system.png'
import MissingPersonReportImg from '../public/project-image/missing-person-report.png'
import VehicleSpeedDetectionImg from '../public/project-image/vehicle-speed-detection.png'
import SmartHomeImg from '../public/project-image/home-automation.png'
import PomodoroTimerImg from '../public/project-image/pomodoro-timer.png'
import VolumeLimiterImg from '../public/project-image/volume-limiter.png'
import VacFaceImg from '../public/project-image/vacface.png'

import javaSvg from '../public/technology-icon/java.svg'
import javaScriptSvg from '../public/technology-icon/javascript.svg'
import typeScriptSvg from '../public/technology-icon/typescript.svg'
import pythonSvg from '../public/technology-icon/python.svg'
import cSharpSvg from '../public/technology-icon/c-sharp.svg'
import opencvSvg from '../public/technology-icon/opencv.svg'
import arduinoSvg from '../public/technology-icon/arduino.svg'
import androidSvg from '../public/technology-icon/android.svg'
import nodejsSvg from '../public/technology-icon/nodejs.svg'
import djangoSvg from '../public/technology-icon/django.svg'
import reactSvg from '../public/technology-icon/react.svg'
import EjsSvg from '../public/technology-icon/ejs.svg'
import postgresqlSvg from '../public/technology-icon/postgresql.svg'
import expressSvg from '../public/technology-icon/express.svg'
import dotNetSvg from '../public/technology-icon/dotnet.svg'
import jwtSvg from '../public/technology-icon/jwt.svg'
import mongodbSvg from '../public/technology-icon/mongodb.svg'
import electronSvg from '../public/technology-icon/electron.svg'
import redisSvg from '../public/technology-icon/redis.svg'
import azureSvg from '../public/technology-icon/azure.svg'
import dockerSvg from '../public/technology-icon/docker.svg'
import githubActionsSvg from '../public/technology-icon/github-actions.svg'
import elasticsearchSvg from '../public/technology-icon/elasticsearch.svg'
import expoSvg from '../public/technology-icon/expo.svg'
import chakraUiSvg from '../public/technology-icon/chakra-ui.svg'
import kibanaSvg from '../public/technology-icon/kibana.svg'
import digitalOceanSvg from '../public/technology-icon/digital-ocean.svg'
import pwaSvg from '../public/technology-icon/pwa.svg'
import uiKittenSvg from '../public/technology-icon/ui-kitten.svg'
import antDesignSvg from '../public/technology-icon/ant-design.svg'
import herokuSvg from '../public/technology-icon/heroku.svg'

import jestSvg from '../public/technology-icon/jest.svg'
import playwrightSvg from '../public/technology-icon/playwright.svg'
import htmlSvg from '../public/technology-icon/html-5.svg'
import cssSvg from '../public/technology-icon/css-3.svg'
import sassSvg from '../public/technology-icon/sass.svg'
import nextjsSvg from '../public/technology-icon/nextjs.svg'
import gatsbySvg from '../public/technology-icon/gatsby.svg'
import nginxSvg from '../public/technology-icon/nginx.svg'
import gitSvg from '../public/technology-icon/git-icon.svg'
import elkSvg from '../public/technology-icon/elk.svg'
import datadogSvg from '../public/technology-icon/datadog.svg'

export let projects = [
  {
    title: 'Swift Search',
    type: 'Web Application',
    projectURL: 'swift-search',
    projectImg: SwiftSearchImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Swift search is the search engine designed to search across big data efficiently and quickly.',
    descriptionLong:
      'Swift search is the search engine designed to search across big data efficiently and quickly. The dataset contains 20 million records(20GB). The features of swift search include real-time auto-suggestion, filters that are updated in real-time according to the search term, and raking the search results based on relevance. Each record in the database is stored and indexed according to how it is accessed to improve efficiency.',
    button: {
      viewCodeUrl:
        'https://github.com/fenil29/swift-search-elasticsearch-search-engine',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'ReactJs', img: reactSvg },
      { name: 'ElasticSearch', img: elasticsearchSvg },
      { name: 'Kibana', img: kibanaSvg },
      { name: 'Docker', img: dockerSvg },
      { name: 'Digital Ocean', img: digitalOceanSvg },
    ],
  },
  {
    title: 'Habbit Space',
    type: 'Web Application',
    projectURL: 'habbit-space',
    projectImg: HabbitSpaceImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A Minimal Habit Tracker- Completely Free and Open Source tracker to track your habit easily',
    descriptionLong:
      'A Minimal Habit Tracker- Completely Free and Open Source tracker to track your habit easily',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: 'https://habbit.space/',
    },
    technologyUsed: [
      { name: 'ReactJs', img: reactSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'Chakra Ui', img: chakraUiSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'PWA', img: pwaSvg },
      { name: 'PostgreSQL', img: postgresqlSvg },
      { name: 'Redis', img: redisSvg },
      { name: 'Github Actions', img: githubActionsSvg },
      { name: 'Docker', img: dockerSvg },
      { name: 'Azure', img: azureSvg },
    ],
  },
  {
    title: 'VacFace',
    type: 'Mobile Application',
    projectURL: 'vacface',
    projectImg: VacFaceImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'cross-platform mobile application to detect vaccine information using facial recognition to simplify the process of verifying vaccination status',
    descriptionLong:
      'cross-platform mobile application to detect vaccine information using facial recognition to simplify the process of verifying vaccination status',
    button: {
      viewCodeUrl: 'https://github.com/fenil29/Vacface_React_Native',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'React Native', img: reactSvg },
      { name: 'Expo', img: expoSvg },
      { name: 'Ui Kitten', img: uiKittenSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'MongoDB', img: mongodbSvg },
    ],
  },
  {
    title: 'Appoint Meet',
    projectURL: 'appoint-meet',
    type: 'Web Application',
    projectImg: AppointMeetImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Appoint-Meet is an Online Booking System to manage all appointment scheduling process for businesses and individuals.',
    descriptionLong:
      'Appoint-Meet is an Online Booking System to manage all appointment scheduling process for businesses and individuals.',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: 'https://appoint-meet.herokuapp.com/',
    },
    technologyUsed: [
      { name: 'ReactJs', img: reactSvg },
      { name: 'Ant Design', img: antDesignSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'PostgreSQL', img: postgresqlSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'Heroku', img: herokuSvg },
    ],
  },
  {
    title: 'Park Spot',
    projectURL: 'park-spot',
    type: 'Mobile Application (cross platform)',
    projectImg: ParkSpotImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Park Spot is a mobile application to find the empty parking lot and automate the entry,exit, parking spot allocation and payment calculation process.',
    //   'Park Spot is a mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. This application collects data on each entry and exit of the vehicle and analyses it for the best business decisions.',
    descriptionLong:
      'Park Spot is a cross-platform mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. The drivers can easily scan the QR code to get the parking spot. The app is user friendly. The app takes the time of entry when a spot is provided and the time of exit when the spot is left. This application also collects all the entry and exit data of each vehicle and analyzes it for the best business decisions. In this project, there is also an automated billing system that produces the bill with respect to the time the vehicle spends in the parking lot.',
    button: {
      viewCodeUrl:
        'https://github.com/fenil29/park-spot-mobile-app-react-native',
      viewProjectUrl: 'https://expo.io/@fenil29/park-spot',
    },
    technologyUsed: [
      { name: 'React Native', img: reactSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'Expo', img: expoSvg },
      { name: 'Ui Kitten', img: uiKittenSvg },

      { name: 'ExpressJs', img: expressSvg },
      { name: 'PostgreSQL', img: postgresqlSvg },
      { name: 'JWT', img: jwtSvg },
    ],
  },
  {
    title: 'Employee Management System',
    projectURL: 'employee-management-system',
    type: 'Web Application',
    projectImg: EmployeeManagementSystemImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Employee Management system is a web application that enables users to create,store and manage Employee Records',
    descriptionLong:
      'Employee Management system is a web application that enables users to create,store and manage Employee Records. The application also provides facilities of a payroll system and leave application. It is a management system that helps to manage employees and also the company’s different task and project.Employee management system can manage and store details like employees personal info and also details of different department of the company and different branches of the organization',
    button: {
      viewCodeUrl:
        'https://github.com/fenil29/employee-management-system-frontend-react',
      viewProjectUrl: 'https://employee-management-fk.netlify.com/',
    },
    technologyUsed: [
      { name: 'React', img: reactSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'MongoDB', img: mongodbSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'Heroku', img: herokuSvg },
    ],
  },
  {
    title: 'Missing Person Report',
    projectURL: 'missing-person-report',
    type: 'Web Application',
    projectImg: MissingPersonReportImg,
    // DetailsImage:AppointMeetDetailsImage,
    // descriptionShort: 'Web Application that shows all the missing persons. You can create an account and upload the missing person details with photos and so other people can help you.',
    descriptionShort:
      'Web Application that help to find missing person by providing platform to register and view missing persons',
    descriptionLong:
      'Web Application that help to find missing person by providing platform to register and view missing persons. You can create an account and upload the missing person details with photos and so other people can help you.',
    button: {
      viewCodeUrl: 'https://github.com/fenil29/Missing-Person-Report',
      viewProjectUrl: 'https://missing-person-report.herokuapp.com/',
    },
    technologyUsed: [
      { name: 'EJS', img: EjsSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'MongoDB', img: mongodbSvg },
      { name: 'Heroku', img: herokuSvg },
    ],
  },
  {
    title: 'Vehicle Speed Detection',
    projectURL: 'vehicle-speed-detection',
    type: 'Python Script',
    projectImg: VehicleSpeedDetectionImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Vehicle Speed Detection is a Python Script to track and detect the speed of a moving vehicle.',
    descriptionLong:
      'Vehicle Speed Detection is a Python Script to track and detect the speed of a moving vehicle. This script can automatically detect the lane in the highway and split the output based on each lane and automatically capture the image of an over-speeding vehicle.',
    button: {
      viewCodeUrl: 'https://github.com/fenil29/vehicle-speed-detection',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'OpenCV', img: opencvSvg },
      { name: 'Python', img: pythonSvg },
    ],
  },
  {
    title: 'Smart Home',
    projectURL: 'smart-home',
    type: 'Android Application and IoT',
    projectImg: SmartHomeImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'The main aim of this project is to control the Electric Equipment present in our Homes or Offices using a smartphone',
    descriptionLong:
      'The main aim of this project is to control the Electric Equipment present in our Homes or Offices using a smartphone.Equipment like lights, fans, ACs, etc. can be controlled by this application.You can access your Equipment from anywhere in the Range of the Wi-Fi module or when your mobile is connected to the Internet.',
    button: {
      viewCodeUrl: '',
      viewProjectUrl:
        'https://github.com/fenil29/home-automation-system-android-application',
    },
    technologyUsed: [
      { name: 'Arduino', img: arduinoSvg },
      { name: 'Android', img: androidSvg },
    ],
  },
  {
    title: 'Pomodoro Timer',
    projectURL: 'pomodoro-timer',
    type: 'Web Application',
    projectImg: PomodoroTimerImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Pomodoro Timer is Ad-free,simple, and easy to use Pomodoro Timer. ',
    descriptionLong:
      'Pomodoro Timer is Ad-free,simple, and easy to use Pomodoro Timer. The main functionality of this site is the ability to resume the started timer even if you accidentally close the tab or browser. Pomodoro Timer is a productivity app that improves your focus',
    button: {
      viewCodeUrl: 'https://github.com/fenil29/pomodoro-timer',
      viewProjectUrl: 'https://pomodoro-timer-fk.netlify.com/',
    },
    technologyUsed: [
      { name: 'JavaScript', img: javaScriptSvg },

      { name: 'React', img: reactSvg },
    ],
  },
  {
    title: 'Volume Limiter',
    projectURL: 'volume-limiter',
    type: 'Windows Application',
    projectImg: VolumeLimiterImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Windows application for setting the limit of system volume',
    descriptionLong:
      'windows application for setting the limit of system volume',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: 'https://github.com/fenil29/volume-limiter',
    },
    technologyUsed: [
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'Electron', img: electronSvg },
    ],
  },
]
// export default project

export let technologyList = [
  { name: 'HTML', icon: htmlSvg },
  { name: 'CSS', icon: cssSvg },
  { name: 'SASS', icon: sassSvg },
  { name: 'Java', icon: javaSvg },
  { name: 'JavaScript', icon: javaScriptSvg },
  { name: 'TypeScript', icon: typeScriptSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'C#', icon: cSharpSvg },
  { name: 'React', icon: reactSvg },
  { name: 'Gatsby', icon: gatsbySvg },
  { name: 'NextJs', icon: nextjsSvg },
  { name: 'Jest', icon: jestSvg },
  { name: 'Playwright', icon: playwrightSvg },
  { name: 'Git', icon: gitSvg },
  { name: 'ElectronJs', icon: electronSvg },
  { name: 'React Native', icon: reactSvg },
  { name: 'Node Js', icon: nodejsSvg },
  { name: 'ExpressJs', icon: expressSvg },
  { name: '.NET', icon: dotNetSvg },
  { name: 'Django', icon: djangoSvg },
  { name: 'MongoDB', icon: mongodbSvg },
  { name: 'PostgreSql', icon: postgresqlSvg },
  { name: 'ElasticSearch', icon: elasticsearchSvg },
  { name: 'The Elastic Stack', icon: elkSvg },
  { name: 'DataDog', icon: datadogSvg },
  { name: 'Redis', icon: redisSvg },
  { name: 'Docker', icon: dockerSvg },
  { name: 'Github Actions', icon: githubActionsSvg },
  { name: 'NginX', icon: nginxSvg },
  { name: 'Heroku', icon: herokuSvg },
  { name: 'Digital Ocean', icon: digitalOceanSvg },
  { name: 'Azure', icon: azureSvg },
]

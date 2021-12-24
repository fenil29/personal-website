import React, { useState } from "react"
import "./Home.css"

import { Button } from "antd"

import Particles from "react-tsparticles"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

let colorList = [
  "--primary-color",
  "--primary-background-color",
  "--secondary-background-color",
  "--primary-font-color",
  "--secondary-font-color",
]
function Home() {
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
  return (
    <div className="App-header">

      <Particles
        id="tsparticles"
        className="particle-background"
        // init={particlesInit}
        // loaded={particlesLoaded}
        options={
          //   {
          //   background: {
          //     color: {
          //       // value: !darkMode ? "#15202b" : "#ffffff",
          //     },
          //   },
          //   fpsLimit: 60,
          //   particles: {
          //     color: darkMode ? "#15202b" : "#ffffff",
          //   },
          //   fullScreen:false
          // }
          {
            autoPlay: true,
            background: {
              color: {
                // value: !darkMode ? "#15202b" : "#ffffff",
              },
            },
            fpsLimit: 60,

            fullScreen: {
              enable: false,
              zIndex: -20,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 60,

            particles: {
              color: darkMode ? "#15202b" : "#ffffff",

              groups: {
                z5000: {
                  number: {
                    value: 70,
                  },
                  zIndex: {
                    value: 50,
                  },
                },
                z7500: {
                  number: {
                    value: 30,
                  },
                  zIndex: {
                    value: 75,
                  },
                },
                z2500: {
                  number: {
                    value: 50,
                  },
                  zIndex: {
                    value: 25,
                  },
                },
                z1000: {
                  number: {
                    value: 40,
                  },
                  zIndex: {
                    value: 10,
                  },
                },
              },

      
              move: {
                angle: {
                  offset: 0,
                  value: 10,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                decay: 0,
                distance: {},
                direction: "right",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: false,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 100000,
                  factor: 10000,
                },
                limit: 0,
                value: 200,
              },
              opacity: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 3,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
                },
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 45,
                },
                width: 1,
              },
              reduceDuplicates: false,
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: "circle",
              },
              size: {
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 1.5,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                },
              },
              stroke: {
                width: 0,
              },
              tilt: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: 50,
              },
            },
          }
        }
      />
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
      <div className="particle-background-content">
        <div className="home-text-content">
          <h1>Hello, I'm Fenil Kaneria</h1>
          <h2>Software Engineer</h2>
          {/* <h2>UNDER CONSTRUCTION</h2>
          <h3>WEBSITE IS COMING SOON</h3> */}
       
            <div className="icon-container">
              <a
                href="https://github.com/fenil29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://twitter.com/FenilKaneria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon" />
              </a>
              <a
                href="mailto:fenilkaneria@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="icon" style={{ fontSize: "38px" }} />
              </a>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            {/* <Button>My Resume</Button> */}
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

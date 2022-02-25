import React, { useState } from "react"
import "./Contact.css"
import ReCAPTCHA from "react-google-recaptcha"

import { Button, message, Input } from "antd"


import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";

const { Search } = Input;

function Contact() {
  const [captchaVisible, setCaptchaVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const [disableButton, setDisableButton] = useState(false)


  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  let handleChange = e => {
    setCaptchaVisible(true)
    if (formData["g-recaptcha-response"] === undefined) {
      setDisableButton(true)
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData, e.target.value)
  }

  let handleRecaptcha = value => {
    setDisableButton(false)
    console.log("onVerify", formData, value)
    setFormData({ ...formData, "g-recaptcha-response": value })
  }
  let handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    console.log(formData)
    if (formData["g-recaptcha-response"] === undefined) {
      message.error("Please solve Captcha correctly!")
      setLoading(false)
      return
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then(() => {
        document.getElementById("contact-form").reset()
        setLoading(false)
        setCaptchaVisible(false)
        setFormData({})
        message.success("Your submission has been received")
      })
      .catch(error => {
        setLoading(false)
        setCaptchaVisible(false)
        setFormData({})
        message.error("Sorry, something went wrong there. Try again.")
      })
  }
  return (
    <div className="contact-container">
      <h1 className="title" id="contact-me">Contact me</h1>
      <form
        id="contact-form"
        name="contact"
        method="POST"
        className="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-element">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onInput={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onInput={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onInput={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <textarea
            name="message"
            placeholder="Your Message"
            onInput={handleChange}
            required
          ></textarea>
        </div>
        {/* <div data-netlify-recaptcha="true"></div> */}
        {captchaVisible && (
          <ReCAPTCHA
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
            sitekey="6LeFjbUZAAAAAJEgzCJpUJN8_Fpmh3QFlqwCmgI0"
            onChange={handleRecaptcha}
          />
        )}
        <div className="form-element button">
          <Button
            htmlType="submit"
            className="send-button"
            loading={loading}
            disabled={disableButton}
          >
            Send
          </Button>
        </div>
        <div style={{textAlign:"center",margin:"15px"}}>

          OR
      </div>
        <div className="">

          <div className="email-container">
            fenilkaneria@gmail.com

      <CopyToClipboard
              text="fenilkaneria@gmail.com"
              onCopy={() => message.success("Copied")}
            >
              <CopyOutlined style={{ fontSize: "21px", float: "right" }} />
            </CopyToClipboard>
          </div>
          <div className="form-element button">

            <a href="mailto:fenilkaneria@gmail.com">
              <Button
              >Send Email
          </Button>
            </a>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Contact

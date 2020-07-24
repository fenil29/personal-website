import React, { useState } from "react"
import "./Contact.css"
import Recaptcha from "react-google-recaptcha"

function Contact() {
  const [captchaVisible, setCaptchaVisible] = useState(false)
  const [formData, setFormData] = useState({})

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


  let handleChange = e => {
    setCaptchaVisible(true)
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  let handleRecaptcha = value => {
    setFormData({...formData,"g-recaptcha-response": value})

  }
  let handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData
      })
    })
      .then(() => alert("success"))
      .catch(error => alert(error));
  };
  return (
    <div className="contact-container">
      <h1 className="title">Contact me</h1>
      <form
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
          <input type="text" name="name" placeholder="Name"  onChange={handleChange} required/>
        </div>
        <div className="form-element">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
        </div>
        <div className="form-element">
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required/>
        </div>
        <div className="form-element">
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        </div>
        {/* <div data-netlify-recaptcha="true"></div> */}
          {captchaVisible && (
          <Recaptcha
          style={{display:"flex",justifyContent: "center",marginTop:"5px"}}
            sitekey="6LeFjbUZAAAAAJEgzCJpUJN8_Fpmh3QFlqwCmgI0"
            onChange={handleRecaptcha}
          />
        )}
   
        <div className="form-element button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact

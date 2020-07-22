import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <h1 className="title">Contact me</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
        data-netlify-recaptcha="true"
      >
        <div className="form-element">
          <input type="text" name="name"  placeholder="Name"/>
        </div>
        <div className="form-element">
          <input type="email" name="email"  placeholder="Email"/>
        </div>
        <div className="form-element">
          <input type="text" name="subject"  placeholder="Subject"/>
        </div>
        <div className="form-element">
          <textarea name="message" placeholder="Your Message"></textarea>
        </div>
        <div className="form-element button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

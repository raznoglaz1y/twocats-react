import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>alex@twocats.by</h5>
            <a href="mailto:alex@twocats.by">Send an email</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>raznoglaz1y</h5>
            <a href="https://m.me/raznoglaz1y" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>@raznoglaz1y</h5>
            <a href="https://telegram.me/raznoglaz1y" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/** END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Type Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Type Your Email"
            required
          />
          <textarea
            name="message"
            rows="15"
            placeholder="Type Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

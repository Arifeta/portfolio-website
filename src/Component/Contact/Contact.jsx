import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aujzkr9", "template_fyx4cfq", form.current, 
        "V_mThNUfFBijoVLsS",
        
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>arifetamulugeta@gmail.com</h5>
            <a
                href="https://mail.google.com/mail/?view=cm&to=arifetamulugeta@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                 Send a message
          </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Arifeta mulugeta</h5>
            <a
              href="https://m.me/profile.php?id=100080538771083"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>telegram</h4>
            <h5>Arifa116</h5>
            <a href="https://t.me/Arifa116" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Type Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

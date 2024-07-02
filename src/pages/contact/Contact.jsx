import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import contactstyle from "./Contact.module.css";
import Button from '../../components/Button/Button';

function Contact() {
  return (
    <div className={contactstyle["container"]}>
      <h3 className={contactstyle["heading"]}>Contact</h3>
      <p className={contactstyle["contact-text"]}>
        I'm currently looking to join a cross-functional team that values improving people's lives through accessible development. or have a project in mind? Let's connect.
      </p>
        <hr />
      <div className={contactstyle["contact-info"]}>
        <div>
          <p className={contactstyle["icon-title"]}>Email: </p>
          <a href="mailto:abdulrahmanbinumar178@gmail.com" style={{ color: "#7127BA"}}>
            <FontAwesomeIcon icon={faEnvelope} /> abdulrahmanbinumar178@gmail.com
          </a>
        </div>
        <div>
          <p className={contactstyle["icon-title"]}>Phone: </p>
          <a href="tel:+2348108005192"  className={contactstyle["icon-title"]}>
            <FontAwesomeIcon icon={faPhone} className={contactstyle["icon-title"]} /> +234 8108005192
          </a>
        </div>
        <div>
          <p className={contactstyle["icon-title"]}>WhatsApp: </p>
          <a href="https://wa.me/2348108005192" className={contactstyle["icon-title"]}>
            <FontAwesomeIcon icon={faWhatsapp} className={contactstyle["icon-title"]} /> Chat on WhatsApp
          </a>
        </div>
        <div>
          <p className={contactstyle["icon-title"]}>LinkedIn: </p>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" className={contactstyle["icon-title"]}>
            <FontAwesomeIcon icon={faLinkedin} className={contactstyle["icon-title"]} /> Connect on LinkedIn
          </a>
        </div>
      </div>
      <Button btnText={"Let's Connect"} />
    </div>
  );
}

export default Contact;

import React from "react";
import "./contact.css";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get in Touch</h5>
      <h2 className="heading_cnt">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>nisanth.bs@gmail.com</h5>
            <a href="mailto:nisanth.bs@gmail.com">Send a messange</a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>__nichanth__</h5>
            <a
              href="https://www.instagram.com/__nichanth__/?hl=en"
              target={"_blank"}
            >
              Send a messange
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Nisanth Bayamariyan</h5>
            <a
              href="https://www.facebook.com/nisanth.bayamariyan"
              target={"_blank"}
            >
              Send a messange
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whats app</h4>
            <h5>+919600641395</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9600641395"
              target={"_blank"}
            >
              Send a messange
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

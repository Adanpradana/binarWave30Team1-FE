import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3w2ya8a",
        "template_xmvb0i5",
        form.current,
        "knjkHbTTSQpe6lfh5"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <h3>CONTACT US</h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        ></input>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        ></input>
        <input
          type="text"
          name="phone"
          id="Phone"
          placeholder="Phone no."
          required
        ></input>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="How can we help you?"
        ></textarea>
        <button type="submit" value="Send">
          send
        </button>
      </form>
    </div>
  );
}

"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mjkparej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" }); // clears inputs
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Error occurred. Try again ❗");
    }
  };

  return (
    <div className={styles.contact_page}>
      <div className={styles.contact_header}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for inquiries, collaborations, or luxury car insights.</p>
      </div>

      <div className={styles.contact_container}>
        {/* Contact Info */}
         <form className={styles.contact_form} onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>

          {status && <p className={styles.status_message}>{status}</p>}
        </form>
        <div className={styles.contact_info}>
          <h2>Our Details</h2>
          <div>
            <p>
              <FaPhoneAlt /> +92 309 7072082
            </p>
            <p>
              <FaEnvelope /> contact@luxuryrides.com
            </p>
            <p>
              <FaMapMarkerAlt /> Beverly Hills, Los Angeles, CA
            </p>
          </div>

          <div className={styles.contact_socials}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Contact Form */}
       
      </div>
    </div>
  );
}

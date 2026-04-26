"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./ContactSection.scss";

const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/RomaParonyan008",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/roma-paronyan/",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.section
      className="contact-section"
      id="Contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact-glow-orb contact-glow-1"></div>
      <div className="contact-glow-orb contact-glow-2"></div>

      <motion.div className="contact-header" variants={fadeInUp(0)}>
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div className="contact-info" variants={fadeInUp(0.2)}>
          <div className="info-card">
            <h3>Let&apos;s talk about your project</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="item-icon">
                  <FaEnvelope />
                </div>
                <div className="item-content">
                  <span className="item-label">Email</span>
                  <span className="item-value">paronyan00@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="item-content">
                  <span className="item-label">Location</span>
                  <span className="item-value">Yerevan, Armenia</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <span className="social-label">Connect with me</span>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="contact-form-wrapper" variants={fadeInUp(0.4)}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <span className="sending">Sending...</span>
              ) : status === "success" ? (
                <span className="success">Message Sent!</span>
              ) : status === "error" ? (
                <span className="error">Failed. Try again.</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

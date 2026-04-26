"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
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

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-glow"></div>

      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-text">RP</span>
          <p>Building digital experiences with passion and precision.</p>
        </div>

        <div className="footer-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Roma Paronyan. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> in Armenia
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

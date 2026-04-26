// components/Header.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/Images/logo.png";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  const handleNavClick = (item) => {
    setMenuOpen(false);
    const sectionIds = {
      Home: "hero",
      About: "About",
      Projects: "Projects",
      Contact: "Contact",
    };
    document
      .getElementById(sectionIds[item])
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo" onClick={() => handleNavClick("Home")}>
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul className="header-menu">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-item"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

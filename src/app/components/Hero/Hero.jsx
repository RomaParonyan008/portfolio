"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Me from "../../assets/Images/Me.png";
import "./Hero.css";

const Typewriter = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-hero" id="hero">
      <div className="hero-container">
        <div className="hero-glow-orb hero-glow-orb-1"></div>
        <div className="hero-glow-orb hero-glow-orb-2"></div>

        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="image-ring"></div>
            <div className="image-ring image-ring-2"></div>
            <div className="image-wrapper">
              <Image
                src={Me}
                alt="Roma - Front End Developer"
                width={280}
                height={280}
                className="profile-image"
                priority
              />
            </div>
          </div>

          <div className="hero-text-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for Work
            </div>

            <h1 className="hero-title">
              Hello, I&apos;m <span className="highlight">Roma Paronyan</span>
            </h1>

            <div className="hero-role">
              <Typewriter text="Front-End Developer" delay={100} />
            </div>

            <p className="hero-description">
              Building modern and responsive web interfaces with passion.
              Turning ideas into beautiful and interactive user experiences.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => handleScrollToSection("Projects")}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={() => handleScrollToSection("Contact")}>
                Contact Me
              </button>
            </div>

            <div className="hero-tech-stack">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

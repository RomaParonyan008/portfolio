"use client";

import { motion } from "framer-motion";
import { skils } from "../../helpers";
import { FaCode, FaPalette, FaLayerGroup } from "react-icons/fa";
import "./AboutSection.scss";

const AboutSection = () => {
  const fadeInUp = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const categories = [
    {
      icon: <FaCode />,
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      icon: <FaPalette />,
      title: "Styling",
      items: ["CSS", "SASS", "Tailwind", "Bootstrap"],
    },
    {
      icon: <FaLayerGroup />,
      title: "Tools",
      items: ["Git", "GitHub", "Redux", "jQuery"],
    },
  ];

  return (
    <motion.section
      className="about-section"
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="about-header" variants={fadeInUp(0)}>
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div className="about-info" variants={fadeInUp(0.2)}>
          <div className="about-card">
            <h3>
              Get to know <span>me!</span>
            </h3>
            <p>
              I&apos;m a <strong>Frontend Focused Web Developer</strong>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community.
            </p>
            <p>
              If you have a good opportunity that matches my skills and
              experience then don&apos;t hesitate to contact me.
            </p>
            <motion.button variants={fadeInUp(0.3)} className="contact-btn">
              Let&apos;s Talk
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="about-skills" variants={fadeInUp(0.4)}>
          <h3>
            My <span>Skills</span>
          </h3>

          <div className="skills-categories">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={fadeInUp(catIndex * 0.1 + 0.3)}
              >
                <div className="category-header">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
                <div className="category-items">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className="skill-tag"
                      variants={fadeInUp(
                        catIndex * 0.1 + itemIndex * 0.05 + 0.4,
                      )}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="about-stats" variants={fadeInUp(0.6)}>
        <div className="stat-item">
          <span className="stat-number">2+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;

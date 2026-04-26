"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectsSection.scss";

import ECommerce from "../../assets/Images/online shop.png";
import adminDashboard from "../../assets/Images/admin.png";
import Saas from "../../assets/Images/SASS project.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing e-commerce data with product handling and analytics interface. Built using Next.js and TypeScript with a responsive and clean UI.",
    image: ECommerce,
    tech: ["Next.js", "TypeScript"],
    live: "https://e-commerce-roma.netlify.app/",
    github: "https://github.com/RomaParonyan008/E-Commerce",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Admin dashboard interface with dynamic UI components and data visualization. Built with React and Vite, focused on fast performance and responsive design.",
    image: adminDashboard,
    tech: ["React.js", "Vite"],
    live: "https://admin-dashboard-roma.netlify.app/",
    github: "https://github.com/RomaParonyan008/admin-dashboard",
  },
  {
    id: 3,
    title: "Saas Project",
    description:
      "A modern SaaS admin dashboard featuring real-time data handling, advanced state management with Redux, and interactive UI components. Built with React, Vite, and TypeScript, optimized for performance, scalability, and fully responsive across devices.",
    image: Saas,
    tech: ["React.js", "Vite", "Redux", "TypeScript"],
    live: "https://saas-project-by-roma.netlify.app/",
    github: "https://github.com/RomaParonyan008/SaaS-project",
  },
];
const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProjectsSection = () => {
  return (
    <motion.section
      className="projects-section"
      id="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="projects-header" variants={fadeInUp(0)}>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Here you will find some of my personal and client projects that I
          created with great passion
        </p>
      </motion.div>

      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={fadeInUp(index * 0.1 + 0.2)}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="projects-cta" variants={fadeInUp(0.6)}>
        <a
          href="https://github.com/RomaParonyan008"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View All Projects on GitHub
        </a>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;

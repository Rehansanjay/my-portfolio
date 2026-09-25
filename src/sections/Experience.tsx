import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      name: "Open Source",
      role: "Contributor - LiveKit Agents, Pipecat, jambonz, drachtio, Cosmo",
      url: "https://github.com/Rehansanjay",
      start: "July 2026",
      end: "Present",
      achievements: [
        "Seventeen fixes merged upstream: ten into livekit/agents, two each into Pipecat, jambonz and Cosmo, one into drachtio.",
        "Fixed ConnectionPool.invalidate() in LiveKit's core: it closed sockets that were still streaming, and pooled handshakes that raced a settings change. Eleven plugins call it from update_options, so one change repaired all of them. Reviewed line by line by a maintainer before merging.",
        "Found the same stale-handshake bug in three more provider plugins and fixed each; got ruff's RUF006 enabled in their CI so the dangling-task class cannot return.",
        "In the SIP stack: stopped jambonz re-sending call statuses after a transfer, and fixed drachtio-srf stripping the wrong headers from proxied responses.",
        "Every fix verified by mutation - revert the change and confirm the new test fails.",
      ],
      tech: ["Python", "asyncio", "pytest", "WebSockets", "LiveKit", "Pipecat", "SIP"],
    },
    {
      name: "Codtech IT Solutions",
      role: "Backend Web Development Intern",
      url: "https://www.codtech.in",
      start: "February 2025",
      end: "March 2025",
      achievements: [
        "Built Java backend modules against MySQL - CRUD, authentication and error handling.",
        "Designed, documented and tested REST APIs.",
        "Built secure login for the Student Management System.",
      ],
      tech: ["Java", "MySQL", "REST APIs"],
    },
    {
      name: "Makos Infotech",
      role: "Front End Development Intern",
      url: "https://www.makosinfotech.com",
      start: "June 2024",
      end: "July 2024",
      achievements: [
        "Built responsive, cross-browser UI components in React, HTML5 and CSS3.",
        "Worked to Agile practice alongside senior developers.",
      ],
      tech: ["React", "HTML5", "CSS3"],
    },
    {
      name: "",
      role: "Lead Developer - Coral Reef Inspector",
      url: "#",
      start: "May 2023",
      end: "May 2026",
      achievements: [
        "Built a CNN model to classify coral reef health from images.",
        "Developed a full-stack web app to showcase the AI model predictions.",
        "Handled the backend integration using Python and Node.js.",
      ],
      tech: ["Python", "TensorFlow", "CNN", "React", "Node.js", "Flask"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      aria-label="Work experience"
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2 className="section-header__title">
          <span className="section-header__number">02.</span>
          Experience
        </h2>
        <div className="section-header__line" />
      </motion.div>

      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.name}
            className={`experience__card ${expandedIndex === index ? "experience__card--expanded" : ""}`}
            variants={itemVariants}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            role="button"
            tabIndex={0}
            aria-expanded={expandedIndex === index}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpandedIndex(expandedIndex === index ? null : index);
              }
            }}
          >
            {/* Timeline node */}
            <div className="experience__node">
              <div className={`experience__dot ${expandedIndex === index ? "experience__dot--active" : ""}`} />
              {index < experiences.length - 1 && <div className="experience__line" />}
            </div>

            {/* Card content */}
            <div className="experience__content">
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">
                    {exp.role}
                    {exp.name && (
                      <span className="experience__company">
                        {" @ "}
                        <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__company-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.name}
                      </a>
                      </span>
                    )}
                  </h3>
                  <p className="experience__date">{exp.start} — {exp.end}</p>
                </div>
                <motion.span
                  className="experience__chevron"
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▾
                </motion.span>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    className="experience__details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ul className="experience__achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="experience__achievement">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="experience__tech">
                      {exp.tech.map((t) => (
                        <span key={t} className="experience__tech-badge">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
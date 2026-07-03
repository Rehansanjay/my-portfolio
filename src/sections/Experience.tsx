import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      name: "Codtech IT Solutions",
      role: "Backend Development Intern",
      url: "https://www.codtech.in",
      start: "March 2025",
      end: "May 2025",
      achievements: [
        "Developed user interfaces for the main company dashboard.",
        "Worked with APIs to fetch and display real-time data.",
        "Participated in daily stand-up meetings and code reviews.",
      ],
      tech: ["Node.js", "Express", "MongoDB", "WebSockets", "REST APIs"],
    },
    {
      name: "Makos Infotech",
      role: "Frontend Development Intern",
      url: "https://www.makosinfotech.com",
      start: "May 2024",
      end: "June 2024",
      achievements: [
        "Built responsive web pages using React and Next.js.",
        "Fixed bugs and improved website performance by 20%.",
        "Collaborated with senior developers to learn best coding practices.",
      ],
      tech: ["React", "Next.js", "CSS Modules", "Figma"],
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
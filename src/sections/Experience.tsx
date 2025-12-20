import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector(".underline");
      if (underline) {
        underline.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "Makos Infotech", // 👈 REPLACE with Company Name (e.g., "Google")
      role: "FrontEnd Development Intern", // 👈 REPLACE with your Role
      url: "https://www.example.com", // 👈 REPLACE with company website
      start: "May 2024",
      end: "June 2024",
      shortDescription: [
        "Built responsive web pages using React and Next.js.",
        "Fixed bugs and improved website performance by 20%.",
        "Collaborated with senior developers to learn best coding practices.",
      ],
    },
    {
      name: "Codtech IT Solutions", // 👈 REPLACE with Company Name
      role: "BackEnd Development Intern",
      url: "https://www.example.com",
      start: "March 2025",
      end: "May 2025",
      shortDescription: [
        "Developed user interfaces for the main company dashboard.",
        "Worked with APIs to fetch and display real-time data.",
        "Participated in daily stand-up meetings and code reviews.",
      ],
    },
    {
      name: "Coral Reef Project", // 👈 SUGGESTION: Your College Project
      role: "Lead Developer",
      url: "#",
      start: "May 2023",
      end: "August 2023",
      shortDescription: [
        "Built a CNN model to classify coral reef health from images.",
        "Developed a full-stack web app to showcase the AI model predictions.",
        "Handled the backend integration using Python and Node.js.",
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
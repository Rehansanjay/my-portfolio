import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/ai.png",
      projectName: "AI Image Automation",
      // 👇 OPTIONAL: Use your real Vercel link here if you want the title to be clickable too
      projectLink: "https://rehan-ai-portfolio.vercel.app", 
      projectDescription:
        "An AI-powered application for generating and processing images and videos. Leverages advanced generative models to create unique visual content automatically.",
      projectTech: [
        "React",
        "Node.js",
        "OpenAI API",
        "Vercel",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        // 👇 UPDATE THIS: Replace 'YOUR_GITHUB_USERNAME' with your actual ID
        github: "https://github.com/Rehansanjay/aether-labs",
        // 👇 UPDATE THIS: Paste your real Vercel link here
        externalLink: "https://rehan-ai-portfolio.vercel.app",
      },
    },
    {
      image: "/coral.png",
      projectName: "Coral Reef Inspector",
      projectLink: "#",
      projectDescription:
        "A machine learning application built to classify coral health from images using a Convolutional Neural Network (CNN). This project helps in monitoring marine ecosystems by automating the detection of damaged reefs.",
      projectTech: [
        "Python",
        "TensorFlow",
        "React",
        "Deep Learning",
        "CNN",
      ],
      projectExternalLinks: {
        // 👇 UPDATE THIS: Replace 'YOUR_GITHUB_USERNAME' with your actual ID
        github: "https://github.com/Rehansanjay/coral-reef-inspector",
        // 👇 LEAVE EMPTY: This keeps the external link button hidden
        externalLink: "",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                {/* --- IMAGE SECTION START --- */}
                <a
                  href={projectExternalLinks.externalLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                >
                  <div className="project-image">
                    <div className="project-image-overlay"></div>
                    <div className="project-image-container">
                      <Image
                        src={image}
                        fill
                        alt={projectName}
                        quality={100}
                      />
                    </div>
                  </div>
                </a>
                {/* --- IMAGE SECTION END --- */}

                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    {/* Only show the external link button if a link actually exists */}
                    {projectExternalLinks.externalLink && (
                      <li className="project-info-links-item">
                        <a
                          href={projectExternalLinks.externalLink}
                          className="project-info-links-item-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectData {
  image: string;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  problem: string;
  solution: string;
  features: string[];
  projectTech: string[];
  metrics: string[];
  lessonsLearned: string;
  projectExternalLinks: {
    github: string;
    externalLink: string;
  };
}

function ProjectModal({ project, onClose }: { project: ProjectData; onClose: () => void }) {
  // Close on Escape
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.projectName} details`}
      >
        <button className="project-modal__close" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="project-modal__header">
          <span className="project-modal__label">Case Study</span>
          <h2 className="project-modal__title">{project.projectName}</h2>
        </div>

        <div className="project-modal__body">
          <div className="project-modal__section">
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="project-modal__section">
            <h3>The Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="project-modal__section">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          {project.metrics.length > 0 && (
            <div className="project-modal__metrics">
              {project.metrics.map((m, i) => (
                <div key={i} className="project-modal__metric">{m}</div>
              ))}
            </div>
          )}

          <div className="project-modal__section">
            <h3>Tech Stack</h3>
            <div className="project-modal__tech">
              {project.projectTech.map((t) => (
                <span key={t} className="project-modal__tech-badge">{t}</span>
              ))}
            </div>
          </div>

          <div className="project-modal__section">
            <h3>Lessons Learned</h3>
            <p>{project.lessonsLearned}</p>
          </div>
        </div>

        <div className="project-modal__actions">
          {project.projectExternalLinks.github && (
            <a href={project.projectExternalLinks.github} target="_blank" rel="noopener noreferrer" className="project-modal__action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Source Code
            </a>
          )}
          {project.projectExternalLinks.externalLink && (
            <a href={project.projectExternalLinks.externalLink} target="_blank" rel="noopener noreferrer" className="project-modal__action project-modal__action--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectsData: ProjectData[] = [
    {
      image: "/invoicecheck.png",
      projectName: "InvoiceCheck.in",
      projectLink: "https://invoicecheck.in",
      projectDescription:
        "A comprehensive B2B SaaS platform for validating GST invoices. It performs an 11-point compliance check to catch errors before marketplaces reject them, saving businesses time and protecting cash flow. Features an AI-powered OCR for auto-filling and integration with Razorpay for a seamless pay-per-check model.",
      problem: "Sellers and CA firms struggle with high rejection rates from marketplaces due to subtle errors in GST invoices. Manual verification is time-consuming and prone to human error.",
      solution: "Developed a Next.js application that automates the validation process. Users can upload an invoice image or PDF, and the system extracts data using AI OCR, then runs it through 11 compliance checks, delivering results in under 15 seconds.",
      features: [
        "AI-powered OCR for instant invoice data extraction",
        "11-point GST compliance validation engine",
        "Pay-per-check monetization via Razorpay integration",
        "Responsive, modern SaaS interface with drag-and-drop support",
      ],
      projectTech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "OCR", "Razorpay"],
      metrics: ["15-second validation time", "11 compliance checks"],
      lessonsLearned: "Gained significant experience in integrating payment gateways for micro-transactions and optimizing OCR data extraction pipelines for accuracy.",
      projectExternalLinks: {
        github: "",
        externalLink: "https://invoicecheck.in",
      },
    },
    {
      image: "/ai.png",
      projectName: "AI Image Automation",
      projectLink: "https://rehan-ai-portfolio.vercel.app",
      projectDescription:
        "A robust AI image and video generation platform built to democratize visual content creation. It integrates state-of-the-art generative models via OpenAI's API into a seamless, responsive dashboard, allowing users to orchestrate complex generation pipelines in seconds.",
      problem: "Generating high-quality custom visuals typically requires either expensive design talent or steep learning curves with complex AI tooling, creating a bottleneck for content creators and marketers.",
      solution: "Engineered a full-stack React application with a clean, intuitive interface that abstracts away the complexity of prompt engineering and model parameters, delivering production-ready assets with real-time feedback.",
      features: [
        "Real-time generative AI pipeline with parallel processing",
        "Customizable parameter controls for precise output tuning",
        "Responsive, glassmorphic UI optimized for asset management",
        "Seamless CI/CD deployment pipeline on Vercel"
      ],
      projectTech: ["React", "Node.js", "OpenAI API", "Vercel", "Tailwind CSS"],
      metrics: ["Sub-2s latency on API calls", "99.9% uptime architecture"],
      lessonsLearned: "Mastered managing asynchronous state across complex AI workflows, implementing optimistic UI updates, and building resilient error handling for third-party API rate limits.",
      projectExternalLinks: {
        github: "https://github.com/Rehansanjay/aether-labs",
        externalLink: "https://rehan-ai-portfolio.vercel.app",
      },
    },
    {
      image: "/coral.png",
      projectName: "Coral Reef Inspector",
      projectLink: "#",
      projectDescription:
        "A computer vision application designed to accelerate marine conservation efforts. It utilizes a custom-trained Convolutional Neural Network (CNN) to analyze underwater imagery and accurately classify the health status of coral reefs.",
      problem: "Marine biologists spend thousands of hours manually annotating underwater survey images, significantly delaying time-critical conservation interventions in fragile reef ecosystems.",
      solution: "Developed an end-to-end machine learning pipeline that automates image classification with 92% accuracy, wrapped in an accessible web dashboard for field researchers to upload and analyze datasets in bulk.",
      features: [
        "Custom CNN architecture optimized for underwater imagery",
        "Automated batch processing of large survey datasets",
        "Interactive dashboard with visual confidence metrics",
        "RESTful Flask backend serving TensorFlow model inferences"
      ],
      projectTech: ["Python", "TensorFlow", "CNN", "React", "Node.js", "Flask"],
      metrics: ["92% classification accuracy", "5x faster than manual review"],
      lessonsLearned: "Gained hands-on experience in computer vision, tackling data augmentation for small, noisy datasets, and bridging the gap between Python ML models and interactive React interfaces.",
      projectExternalLinks: {
        github: "https://github.com/Rehansanjay/coral-reef-inspector",
        externalLink: "",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleOpenModal = useCallback((project: ProjectData) => {
    setSelectedProject(project);
  }, []);

  return (
    <motion.section
      className="projects"
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      aria-label="Featured projects"
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2 className="section-header__title">
          <span className="section-header__number">03.</span>
          Things I&apos;ve Built
        </h2>
        <div className="section-header__line" />
      </motion.div>

      <div className="projects__grid">
        {projectsData.map((project) => (
          <motion.article
            key={project.projectName}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {/* Image */}
            <div className="project-card__image-wrap">
              <div className="project-card__image">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="project-card__image-overlay" />
            </div>

            {/* Content */}
            <div className="project-card__content">
              <span className="project-card__label">Featured Project</span>
              <h3 className="project-card__title">{project.projectName}</h3>
              <p className="project-card__description">{project.projectDescription}</p>

              <div className="project-card__tech">
                {project.projectTech.map((tech) => (
                  <span key={tech} className="project-card__tech-item">{tech}</span>
                ))}
              </div>

              <div className="project-card__actions">
                <button
                  className="project-card__details-btn"
                  onClick={() => handleOpenModal(project)}
                  aria-label={`View ${project.projectName} case study`}
                >
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="project-card__links">
                  <a
                    href={project.projectExternalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`${project.projectName} GitHub`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  {project.projectExternalLinks.externalLink && (
                    <a
                      href={project.projectExternalLinks.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`${project.projectName} live demo`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Projects;
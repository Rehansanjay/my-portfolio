import Button from "@/components/Button";
import ParticleBackground from "@/components/ParticleBackground";
import TerminalBox from "@/components/TerminalBox";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-label="Introduction">
      <ParticleBackground />

      <div className="hero__content">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Hi I&apos;m,
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          Rehan Sanjay.
        </motion.h1>

        <motion.h2
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          I craft things for the web.
        </motion.h2>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
        >
          I&apos;m a software engineer with expertise in creating top-notch digital experiences. My current focus is on developing products that are accessible and centered around user needs. I am also actively looking for work.
        </motion.p>



        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
        >
          <a href="#work" className="hero__cta-primary" onClick={scrollToWork}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <Button text="Download Resume" link="/resume.pdf" />
        </motion.div>
      </div>

      <TerminalBox />
    </section>
  );
}

export default Hero;
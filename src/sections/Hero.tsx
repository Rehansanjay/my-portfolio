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
          I build voice agents, and fix the frameworks they run on.
        </motion.h2>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
        >
          I&apos;m a software engineer working on real-time voice AI. Ten of my fixes are merged into the open-source frameworks the industry builds voice agents on &mdash; eight into LiveKit Agents, plus Pipecat and jambonz &mdash; including one in LiveKit&apos;s core connection pool that repaired a latent bug across eleven of its plugins. I also built and run Atlas, an outbound voice agent on Twilio and Deepgram. I&apos;m looking for my first full-time engineering role.
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
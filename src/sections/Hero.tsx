import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi I&apos;m,
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Rehan Sanjay.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I craft things for the web.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs. I am also actively looking for work.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        {/* ADDED: The Say Hello Button */}
        {/* Make sure to replace your.email@gmail.com with your actual email */}
        <a 
  href="mailto:rehan.sanjay@gmail.com" 
  className="btn" 
  style={{
    display: "inline-block",
    padding: "1rem 2rem",
    border: "1px solid #64ffda", // Your likely theme color
    borderRadius: "4px",
    color: "#64ffda",
    textDecoration: "none",
    marginTop: "2rem"
  }}
>
  Say Hello
</a>
      </motion.div>
    </div>
  );
}

export default Hero;
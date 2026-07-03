import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiDownload, FiCopy, FiCheck } from "react-icons/fi";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rehansanjay28@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, link: "https://github.com/Rehansanjay" },
    { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/rehansanjayvenkatesan/" },
    { name: "X (Twitter)", icon: <FiTwitter />, link: "https://x.com/RehanSanjay_" },
    { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com/rehansanjay_" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      aria-label="Contact"
    >
      <motion.div className="section-header" variants={itemVariants} style={{ justifyContent: "center" }}>
        <h2 className="section-header__title">
          <span className="section-header__number">04.</span>
          Get In Touch
        </h2>
      </motion.div>



      <motion.p className="contact__text" variants={itemVariants}>
        I build scalable full-stack applications and AI-driven solutions.
        Whether you have a role to discuss, a project to collaborate on,
        or just want to say hi — my inbox is always open.
      </motion.p>

      <motion.div className="contact__actions" variants={itemVariants}>
        <a href={`mailto:${email}`} className="contact__cta-primary">
          <FiMail />
          Say Hello
        </a>
        <button onClick={handleCopy} className="contact__cta-secondary">
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? "Copied!" : "Copy Email"}
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact__cta-secondary">
          <FiDownload />
          Resume
        </a>
      </motion.div>

      <motion.div className="contact__socials" variants={itemVariants}>
        {socialLinks.map(({ name, icon, link }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            className="contact__social"
            aria-label={name}
            title={name}
          >
            {icon}
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
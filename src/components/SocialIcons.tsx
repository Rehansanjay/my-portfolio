import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, link: "https://github.com/Rehansanjay" },
    { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/rehansanjayvenkatesan/" },
    { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com/rehansanjay_" },
    { name: "X", icon: <FiTwitter />, link: "https://x.com/RehanSanjay_" },
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1.5 }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              aria-label={`Visit ${name} profile`}
              title={name}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;

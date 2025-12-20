import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I&apos;m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        {/* 👇 THIS IS THE BUTTON THAT WAS BROKEN */}
        <Button text="Say Hello" link="mailto:rehan.sanjay@gmail.com" />
      </div>
    </motion.div>
  );
}

export default Contact;
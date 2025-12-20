import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import CodeWindow from "@/components/CodeWindow"; // Import the new component

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            This is Rehansanjay, as a full-stack developer, I bring together
            creativity and technical expertise to build meaningful digital
            experiences for the web. My journey into full-stack development grew
            from a deep curiosity about how the front and back ends work
            together to create seamless applications.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in crafting robust, scalable,
            and user-centric applications with modern technologies across the
            entire development stack. I have hands-on experience in building
            responsive interfaces using React and Next.js, designing efficient
            server-side logic with Node.js and Express.js, and managing
            databases such as MongoDB and MySQL.{" "}
          </p>

          <p className="about-grid-info-text">
            Additionally, I work with tools like Git, GitHub, Docker, and cloud
            platforms to deliver production-ready applications with smooth
            deployment workflows.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        
        {/* 👇 Replaced the Image div with the CodeWindow */}
        <div className="about-grid-photo">
            <div className="about-grid-photo-container" style={{background: "transparent"}}>
                 <CodeWindow />
            </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default About;
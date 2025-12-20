import React from "react";
import { motion } from "framer-motion";

function CodeWindow() {
  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
  background: "#0a0a0a", // Very Dark Gray (almost black)
  borderRadius: "4px",   // Sharper corners for a "terminal" look
  fontFamily: "'Fira Code', 'Courier New', monospace", // Code font
  padding: "20px",
  boxShadow: "0 0 20px rgba(0, 255, 65, 0.1)", // Slight green glow
  border: "1px solid #00ff41", // Neon Green Border
  maxWidth: "400px",
  width: "100%",
  margin: "0 auto",
}}
    >
      {/* Window Controls (Red/Yellow/Green dots) */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }}></div>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }}></div>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }}></div>
      </div>

      {/* The Code Content */}
      <div style={{ color: "#a8b2d1", fontSize: "14px", lineHeight: "1.6" }}>
        <span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#ffcb6b" }}>developer</span> = {"{"}
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>name</span>: <span style={{ color: "#c3e88d" }}>"Rehan Sanjay"</span>,
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>role</span>: <span style={{ color: "#c3e88d" }}>"Full Stack Dev"</span>,
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>skills</span>: [
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c3e88d" }}>"React"</span>, <span style={{ color: "#c3e88d" }}>"Next.js"</span>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c3e88d" }}>"Node.js"</span>, <span style={{ color: "#c3e88d" }}>"Python"</span>
        <br />
        &nbsp;&nbsp;],
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>hardWorker</span>: <span style={{ color: "#f78c6c" }}>true</span>,
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>quickLearner</span>: <span style={{ color: "#f78c6c" }}>true</span>,
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>hireable</span>: <span style={{ color: "#82aaff" }}>function</span>() {"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c792ea" }}>return</span> <span style={{ color: "#f78c6c" }}>true</span>;
        <br />
        &nbsp;&nbsp;{"}"}
        <br />
        {"};"}
      </div>
    </motion.div>
  );
}

export default CodeWindow;
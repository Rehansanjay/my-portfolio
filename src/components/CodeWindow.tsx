/* eslint-disable react/no-unescaped-entities */
import React from "react";

function CodeWindow() {
  return (
    <div
      className="code-window"
      style={{
        background: "#0a0a0a",
        borderRadius: "4px",
        fontFamily: "'Fira Code', 'Courier New', monospace",
        padding: "20px",
        boxShadow: "0 0 20px rgba(0, 255, 65, 0.1)",
        border: "1px solid #00ff41",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
        color: "#00ff41",
      }}
    >
      <div style={{ marginBottom: "10px", opacity: 0.7 }}>
        <span style={{ color: "#ff5f5f" }}>●</span>{" "}
        <span style={{ color: "#fdbc4b" }}>●</span>{" "}
        <span style={{ color: "#00cd4e" }}>●</span>
      </div>

      <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
        <p>
          <span style={{ color: "#a8b2d1" }}>const</span>{" "}
          <span style={{ color: "#fff" }}>developer</span>{" "}
          <span style={{ color: "#a8b2d1" }}>=</span>{" "}
          <span style={{ color: "#e6f1ff" }}>{"{"}</span>
        </p>
        {/* We use specific HTML codes here to prevent errors */}
        <p style={{ paddingLeft: "20px" }}>
          name: <span style={{ color: "#f1fa8c" }}>&quot;Rehan Sanjay&quot;</span>,
        </p>
        <p style={{ paddingLeft: "20px" }}>
          skills: <span style={{ color: "#f1fa8c" }}>[&quot;React&quot;, &quot;NextJS&quot;]</span>,
        </p>
        <p style={{ paddingLeft: "20px" }}>
          hardWorker: <span style={{ color: "#ff79c6" }}>true</span>,
        </p>
        <p style={{ paddingLeft: "20px" }}>
          problemSolver: <span style={{ color: "#ff79c6" }}>true</span>,
        </p>
        <p style={{ paddingLeft: "20px" }}>
          hireable: <span style={{ color: "#ff79c6" }}>function()</span> <span style={{ color: "#e6f1ff" }}>{"{"}</span>
        </p>
        <p style={{ paddingLeft: "40px" }}>
          <span style={{ color: "#ff79c6" }}>return</span> <span style={{ color: "#f1fa8c" }}>&quot;100%&quot;</span>;
        </p>
        <p style={{ paddingLeft: "20px" }}>
          <span style={{ color: "#e6f1ff" }}>{"}"}</span>
        </p>
        <p>
          <span style={{ color: "#e6f1ff" }}>{"}"}</span>;
        </p>
      </div>
    </div>
  );
}

export default CodeWindow;
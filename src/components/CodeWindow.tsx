/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

const codeText = `const rehan = {
  role: "Full Stack & AI Engineer",
  stack: ["React", "Next.js", "Node.js",
         "Python", "TensorFlow"],
  focus: "AI-powered products",
  shipping: true,
  available: () => "Let's build together"
};`;

function CodeWindow() {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeText.length) {
        setDisplayed(codeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-window" role="img" aria-label="Developer profile represented as code">
      <div className="code-window__header">
        <div className="code-window__dots">
          <span className="code-window__dot code-window__dot--red" />
          <span className="code-window__dot code-window__dot--yellow" />
          <span className="code-window__dot code-window__dot--green" />
        </div>
        <span className="code-window__filename">rehan.config.ts</span>
        <div className="code-window__dots" style={{ visibility: "hidden" }}>
          <span /><span /><span />
        </div>
      </div>
      <div className="code-window__body">
        <pre className="code-window__code">
          <code>{displayed}</code>
          <span
            className="code-window__cursor"
            style={{ opacity: cursorVisible ? 1 : 0 }}
          >
            |
          </span>
        </pre>
      </div>
    </div>
  );
}

export default CodeWindow;
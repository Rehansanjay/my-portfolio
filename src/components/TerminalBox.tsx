import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commandsData = {
  "whoami": "Full-Stack Software Engineer",
  "cat stack.json": '[\n  "Next.js",\n  "TypeScript",\n  "Node.js",\n  "Express",\n  "MongoDB",\n  "Supabase"\n]',
  "ls ./projects": "EtsyBoost   InvoiceCheck.in   Coral-Reef-Inspector",
  "status": "Actively looking for work.",
  "clear": ""
};

export default function TerminalBox() {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [typedCmd, setTypedCmd] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const runCommand = (cmd: string) => {
    if (isTyping) return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    setCurrentCmd(cmd);
    setTypedCmd("");
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping || !currentCmd) return;

    if (typedCmd.length < currentCmd.length) {
      const timeout = setTimeout(() => {
        setTypedCmd(currentCmd.substring(0, typedCmd.length + 1));
      }, 40 + Math.random() * 30); // Fast typing simulation
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, wait a tiny bit then show output
      const timeout = setTimeout(() => {
        setHistory((prev) => [
          ...prev, 
          { cmd: currentCmd, output: commandsData[currentCmd as keyof typeof commandsData] }
        ]);
        setCurrentCmd("");
        setTypedCmd("");
        setIsTyping(false);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [typedCmd, currentCmd, isTyping]);

  return (
    <div className="terminal-wrapper">
      <motion.div 
        className="terminal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="terminal__header">
          <div className="terminal__dots">
            <span className="terminal__dot terminal__dot--red"></span>
            <span className="terminal__dot terminal__dot--yellow"></span>
            <span className="terminal__dot terminal__dot--green"></span>
          </div>
          <div className="terminal__title">bash</div>
        </div>
        <div className="terminal__body">
          {history.map((item, i) => (
            <div key={i} className="terminal__history-item">
              <div className="terminal__line">
                <span className="terminal__prompt">rehan@portfolio ~$ </span>
                <span className="terminal__command">{item.cmd}</span>
              </div>
              {item.output && <div className="terminal__output">{item.output}</div>}
            </div>
          ))}
          
          <div className="terminal__line">
            <span className="terminal__prompt">rehan@portfolio ~$ </span>
            <span className="terminal__command">{typedCmd}</span>
            <span className="terminal__cursor">_</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="terminal-hints"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="terminal-hints__label">Try running:</span>
        {Object.keys(commandsData).map((cmd) => (
          <button 
            key={cmd} 
            className="terminal-hints__btn"
            onClick={() => runCommand(cmd)}
            disabled={isTyping}
            aria-label={`Run command: ${cmd}`}
          >
            {cmd}
          </button>
        ))}
      </motion.div>
    </div>
  );
}

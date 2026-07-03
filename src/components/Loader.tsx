import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading();
    }, 1500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="loader__content">
        <motion.div
          className="loader__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 96" width="60" height="70">
            <g transform="translate(-8, -2)">
              <g transform="translate(11, 5)">
                <motion.polygon
                  points="39 0 0 22 0 67 39 90 78 67 78 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.text
                  x="39"
                  y="58"
                  fill="currentColor"
                  fontSize="50px"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  R
                </motion.text>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.p
          className="loader__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;
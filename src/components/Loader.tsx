import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Loader({ setIsLoading }) {
  useEffect(() => {
    // This timer waits 2 seconds, then turns off the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       {/* This motion.div handles the animation of the image */}
       <motion.div
         initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
         animate={{ opacity: 1, scale: 1 }}   // Animate to full size and visible
         transition={{
            duration: 1.0,
            ease: "easeInOut",
            repeat: 1,       // Pulse once
            repeatType: "reverse" // Fade back out
         }}
       >
         {/* IMPORTANT: Make sure the src matches your file name in the public folder */}
         <Image
           src="/r-logo.png"
           alt="Loading Logo"
           width={150} /* You can change this size */
           height={150}
           priority={true} /* Loads the image instantly */
         />
       </motion.div>
    </div>
  );
}

export default Loader;
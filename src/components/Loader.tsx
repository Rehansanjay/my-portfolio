import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 👇 The fix is here: we added ": { setIsLoading: any }"
function Loader({ setIsLoading }: { setIsLoading: any }) {
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
         initial={{ opacity: 0, scale: 0.5 }} 
         animate={{ opacity: 1, scale: 1 }}   
         transition={{
            duration: 1.0,
            ease: "easeInOut",
            repeat: 1,       
            repeatType: "reverse" 
         }}
       >
         <Image
           src="/icon.png" // Make sure this matches your file name in public!
           alt="Loading Logo"
           width={150} 
           height={150}
           priority={true} 
         />
       </motion.div>
    </div>
  );
}

export default Loader;
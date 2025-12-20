import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 👇 This tells TypeScript exactly what "setIsLoading" is
interface LoaderProps {
  setIsLoading: any;
}

function Loader({ setIsLoading }: LoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
           src="/icon.png" 
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
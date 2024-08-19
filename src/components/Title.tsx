import React from "react";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <motion.div
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="flex items-center justify-center h-[200px] w-[200px] border-8 border-cyan-600 rounded-full opacity-50"
      >
        <div className="flex justify-center items-center h-max w-max">
          <p className="text-white">Welcome to basata.ai</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Title;

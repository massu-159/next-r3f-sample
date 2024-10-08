"use client";

import { motion } from "framer-motion";

const Title = () => {
  return (
    <h1 className='text-8xl font-bold pl-20'>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, delay: 0.2 }}
      >
        Hello
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, delay: 0.4 }}
      >
        World
      </motion.div>
    </h1>
  );
};

export default Title;

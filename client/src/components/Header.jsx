import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="bg-[#ff6b6b] text-white p-4 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🍕
          </motion.span>
          <motion.span 
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Weird Pizza Toppings
          </motion.span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
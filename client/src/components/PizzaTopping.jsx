import React from 'react';
import { motion } from 'framer-motion';

const PizzaTopping = ({ name, description, image, likes, creator }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-orange-500">👍</span>
            <span>{likes}</span>
          </motion.div>
          <div className="text-gray-500">
            <span>by {creator}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PizzaTopping;

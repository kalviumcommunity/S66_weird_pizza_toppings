import React from "react";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  // Add this console.log to debug the user object
  console.log('User data:', user);

  // Default toppings if none are provided
  const defaultToppings = ['Cheese', 'Tomato'];
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="bg-[#4ecdc4] text-white p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold">{user.title || 'Pizza Lover'}</h3>
      </motion.div>
      <div className="p-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg font-bold">{user.username}</div>
          <div className="text-sm text-gray-600">
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm font-medium">Favorite Toppings:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {/* Use optional chaining and fallback to default toppings */}
            {(user?.favoriteToppings?.length > 0 ? user.favoriteToppings : defaultToppings).map((topping, index) => (
              <motion.span
                key={index}
                className="bg-[#ffd166] text-[#292f36] px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {topping}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-between mt-6 pt-4 border-t border-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['Recipes', 'Likes', 'Rating'].map((stat, index) => (
            <motion.div 
              key={stat}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xl font-bold text-[#4ecdc4]">
                {user[stat.toLowerCase()] || 0}
              </div>
              <div className="text-sm text-gray-500">{stat}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserCard;
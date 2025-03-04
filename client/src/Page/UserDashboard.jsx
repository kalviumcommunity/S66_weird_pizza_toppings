import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import UserCard from "../components/UserCard";


const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user && user.username ? user.username.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  if (loading) return (
    <motion.div 
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        🍕
      </motion.div>
    </motion.div>
  );

  if (error) return (
    <motion.div 
      className="min-h-screen flex items-center justify-center text-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {error}
    </motion.div>
  );

  return (
    <motion.div 
      className="bg-[#f7fff7] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <motion.main 
        className="max-w-6xl mx-auto p-8"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-[#292f36]"
            whileHover={{ scale: 1.02 }}
          >
            Pizza Enthusiasts
          </motion.h1>
          <motion.div 
            className="flex items-center bg-white rounded-full shadow-md p-2"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              placeholder="Search users..."
              className="outline-none px-4 w-72"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.span 
              className="text-[#292f36] cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🔍
            </motion.span>
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {filteredUsers.length === 0 ? (
            <motion.div 
              className="text-center text-gray-500 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              No users found matching your search.
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {filteredUsers.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
            «
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff6b6b] text-white shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
            »
          </button>
        </motion.div>
      </motion.main>
    </motion.div>
  );
};

export default UserDashboard;
import React from 'react';
import { ChefHat, Pizza, Star, Users, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import PizzaTopping from '../components/PizzaTopping'; 

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const LandingPage = () => {
  const dummyData = {
    name: "The Banana Split Supreme",
    description: "Banana slices, chocolate sauce, and whipped cream on a pizza. Yes, really!",
    likes: 1234,
    creator: "PizzaExplorer92",
    image: "https://imgs.search.brave.com/4Q02Dr8p7z6zbqd2GsFeQQF-MbfdeKoLP8qQ4B-MgmM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cGl6emEtZGUtYmFu/YW5hLXNwbGl0LXYw/LXU1a284Mjc5eGJo/ZDEuanBlZz93aWR0/aD02NDAmY3JvcD1z/bWFydCZhdXRvPXdl/YnAmcz03ZjY1Y2Q4/MmZmZjk4OWJmOTkx/YmM2MzA2MWRiMjJj/OTJkYThiNjcx"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header/Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Pizza className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">Weird Pizza</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Toppings', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-orange-500"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button 
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" id="home">
        <motion.div 
          className="container mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            variants={fadeIn}
          >
            Adventure in Every Slice
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Discover the most unique and unexpected pizza toppings that will challenge everything you know about pizza.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={fadeIn}
          >
            <motion.button 
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Menu</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="toppings">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Weird Pizza?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: ChefHat, title: "Master Chefs", desc: "Our expert chefs craft the perfect balance of weird and wonderful." },
              { icon: Star, title: "Premium Quality", desc: "Only the finest and most unusual ingredients make it onto our pizzas." },
              { icon: Users, title: "Community Loved", desc: "Join thousands of adventurous pizza lovers in our community." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-orange-500 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            Ready to Try Something Different?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            Join us on a culinary adventure that will change your pizza experience forever.
          </motion.p>
          <motion.button 
            className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Your Weird Pizza Now
          </motion.button>
        </div>
      </motion.section>

      {/* Render the PizzaTopping component with dummy data */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Topping</h2>
          <PizzaTopping {...dummyData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Pizza className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">Weird Pizza</span>
              </motion.div>
              <p className="text-gray-400">Redefining pizza one topping at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'Toppings', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href={`#${item.toLowerCase()}`} className="hover:text-orange-500">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Pizza Street</li>
                <li>Weird City, WP 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: hello@weirdpizza.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <motion.div 
                className="flex space-x-4"
                initial="initial"
                animate="animate"
                variants={staggerChildren}
              >
                {[Instagram, Twitter, Facebook].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    variants={fadeIn}
                  >
                    <Icon className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Weird Pizza. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default LandingPage;
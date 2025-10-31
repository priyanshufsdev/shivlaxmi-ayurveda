'use client'

import { motion } from 'framer-motion'
import { Leaf, Sparkles, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative lg:min-h-screen flex items-center justify-center pt-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ayurveda-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ayurveda-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-ayurveda-light/50 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-ayurveda-primary" />
              <span className="text-sm font-medium text-ayurveda-primary">
                Ancient Wisdom, Modern Wellness
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-ayurveda-primary mb-4 sm:mb-6 leading-tight"
            >
              Embrace Natural
              <span className="block text-ayurveda-secondary">Healing Power</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0"
            >
              Discover the timeless wisdom of Ayurveda with Shivlaxmi Ayurveda.
              Pure, authentic, and meticulously crafted products for your
              holistic well-being.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#products"
                className="bg-ayurveda-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-ayurveda-secondary text-sm sm:text-base whitespace-nowrap text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.a>
              <motion.a
                href="#about"
                className="border-2 border-ayurveda-primary text-ayurveda-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-ayurveda-primary hover:text-white transition-all duration-300 text-sm sm:text-base whitespace-nowrap text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-8 lg:mt-12 max-w-md mx-auto md:mx-0"
            >
              <div className="text-center">
                <Leaf className="w-8 h-8 text-ayurveda-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-ayurveda-primary">100% Natural</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-ayurveda-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-ayurveda-primary">Authentic</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-ayurveda-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-ayurveda-primary">Pure</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              {/* Placeholder for hero image - using gradient and decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-ayurveda-light to-ayurveda-accent/50 rounded-3xl"></div>
              
              {/* Decorative Leaves */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 right-20"
              >
                <Leaf className="w-32 h-32 text-ayurveda-primary/30" strokeWidth={1} />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 left-20"
              >
                <Leaf className="w-24 h-24 text-ayurveda-secondary/30" strokeWidth={1} />
              </motion.div>

              {/* Central Circle with Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <Leaf className="w-20 h-20 text-ayurveda-primary mx-auto mb-4" />
                    <p className="text-2xl font-serif font-bold text-ayurveda-primary">Shivlaxmi</p>
                    <p className="text-sm text-ayurveda-secondary">Ayurveda</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


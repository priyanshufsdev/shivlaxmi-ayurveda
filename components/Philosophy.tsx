'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Leaf, Sun, Moon } from 'lucide-react'

const Philosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'We believe in treating the whole person - mind, body, and spirit - not just symptoms. True health comes from balance and harmony within.',
    },
    {
      icon: Leaf,
      title: 'Nature\'s Wisdom',
      description: 'Mother Nature holds all the remedies we need. We harness the power of herbs, roots, and natural ingredients that have healed for millennia.',
    },
    {
      icon: Sun,
      title: 'Ancient Knowledge',
      description: 'Drawing from 5000+ years of Ayurvedic wisdom, we honor traditional formulations that have stood the test of time.',
    },
    {
      icon: Moon,
      title: 'Inner Balance',
      description: 'Understanding your unique constitution (Dosha) is key to wellness. We help you find products that harmonize with your natural state.',
    },
  ]

  return (
    <section id="philosophy" className="py-8 md:py-20 bg-gradient-to-br from-ayurveda-primary to-ayurveda-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-ayurveda-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm">
            Our Philosophy
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white mb-3 sm:mb-4">
            The Shivlaxmi Way
            <span className="block text-ayurveda-light">Living in Harmony</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto">
            At the heart of Shivlaxmi Ayurveda lies a deep reverence for the ancient science
            of life. Our philosophy is simple yet profound: wellness is not just the absence
            of disease, but a state of complete harmony.
          </p>
        </motion.div>

        <div className="mb-16 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 min-w-max md:min-w-0">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 w-[300px] md:w-auto flex-shrink-0"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4"
              >
                <principle.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-base text-white/80 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <svg
              className="w-16 h-16 text-ayurveda-accent mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <blockquote className="text-lg sm:text-2xl md:text-3xl font-serif text-white mb-4 sm:mb-6 italic">
              "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
            </blockquote>
            <p className="text-ayurveda-light text-sm sm:text-lg">
              - Ancient Ayurvedic Wisdom
            </p>
          </div>
        </motion.div>

        {/* Three Doshas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {['Vata', 'Pitta', 'Kapha'].map((dosha, index) => (
            <motion.div
              key={dosha}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="w-12 h-12 bg-ayurveda-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{dosha}</h4>
              <p className="text-white/70 text-sm">
                {dosha === 'Vata' && 'Air & Space - Movement & Creativity'}
                {dosha === 'Pitta' && 'Fire & Water - Transformation & Energy'}
                {dosha === 'Kapha' && 'Earth & Water - Structure & Stability'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy


'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Target, Users, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Leaf,
      title: 'Pure Ingredients',
      description: 'Sourced from the finest organic farms, ensuring authenticity and purity in every product.',
    },
    {
      icon: Target,
      title: 'Traditional Methods',
      description: 'Following ancient Ayurvedic practices passed down through generations of healers.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our team of certified Ayurvedic practitioners guides you on your wellness journey.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorously tested and certified to meet the highest quality standards.',
    },
  ]

  return (
    <section id="about" className="py-8 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-ayurveda-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm">
            About Us
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
            Rooted in Tradition,
            <span className="block text-ayurveda-secondary">Crafted with Care</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
            At Shivlaxmi Ayurveda, we believe in the power of nature to heal and restore balance.
            Our journey began with a simple mission: to bring the ancient wisdom of Ayurveda to
            modern lives, making holistic wellness accessible to all.
          </p>
        </motion.div>

        <div className="mb-16 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-w-max md:min-w-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="text-center bg-gradient-to-br from-ayurveda-cream to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-ayurveda-light/30 w-[280px] md:w-auto flex-shrink-0"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-ayurveda-primary rounded-full mb-4"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-base sm:text-xl font-semibold text-ayurveda-primary mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-ayurveda-primary to-ayurveda-secondary rounded-3xl p-6 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4">
                Our Commitment to You
              </h3>
              <p className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We are committed to delivering products that honor the sacred traditions of
                Ayurveda while meeting contemporary quality standards. Every formula is
                crafted with reverence for nature and respect for your well-being.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayurveda-accent rounded-full flex-shrink-0"></div>
                  <span>100% Natural & Organic Ingredients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayurveda-accent rounded-full flex-shrink-0"></div>
                  <span>No Harmful Chemicals or Additives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayurveda-accent rounded-full flex-shrink-0"></div>
                  <span>Ethically Sourced & Sustainable</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ayurveda-accent rounded-full flex-shrink-0"></div>
                  <span>Certified by Ayurvedic Experts</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20">
                <div className="text-center mb-4 md:mb-6">
                  <div className="text-4xl md:text-6xl font-bold">5000+</div>
                  <div className="text-sm md:text-lg">Happy Customers</div>
                </div>
                <div className="flex md:grid md:grid-cols-2 gap-3 md:gap-4 text-center justify-center">
                  <div className="bg-white/10 rounded-xl p-3 md:p-4 flex-1 md:flex-none">
                    <div className="text-2xl md:text-3xl font-bold">100%</div>
                    <div className="text-xs md:text-sm">Natural</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 md:p-4 flex-1 md:flex-none">
                    <div className="text-2xl md:text-3xl font-bold">15+</div>
                    <div className="text-xs md:text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


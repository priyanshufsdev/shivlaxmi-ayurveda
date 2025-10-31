'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      image: 'PS',
      rating: 5,
      text: 'Shivlaxmi Ayurveda has transformed my wellness routine. The Ashwagandha Power has helped me manage stress beautifully. I recommend it to all my students!',
      color: 'bg-gradient-to-br from-pink-400 to-rose-500',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Professional',
      image: 'RK',
      rating: 5,
      text: 'As someone with a hectic schedule, Triphala Supreme has been a game-changer for my digestive health. Completely natural and incredibly effective!',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Homemaker',
      image: 'AD',
      rating: 5,
      text: 'I\'ve tried many products, but nothing compares to the purity and authenticity of Shivlaxmi. The Turmeric Gold has done wonders for my joint pain!',
      color: 'bg-gradient-to-br from-amber-400 to-orange-500',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Fitness Coach',
      image: 'VS',
      rating: 5,
      text: 'Quality you can trust! I use their products daily and have noticed significant improvements in energy and recovery. My clients love them too!',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      id: 5,
      name: 'Meera Iyer',
      role: 'Teacher',
      image: 'MI',
      rating: 5,
      text: 'The holistic approach of Shivlaxmi Ayurveda resonates with me. Their products are genuine and the results speak for themselves. Highly recommended!',
      color: 'bg-gradient-to-br from-purple-400 to-violet-500',
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      role: 'Software Engineer',
      image: 'AM',
      rating: 5,
      text: 'Working long hours used to leave me exhausted. Since using Shivlaxmi products, my energy levels are stable and I feel much more balanced. Thank you!',
      color: 'bg-gradient-to-br from-cyan-400 to-teal-500',
    },
  ]

  return (
    <section id="testimonials" className="py-8 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-ayurveda-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
            What Our Customers
            <span className="block text-ayurveda-secondary">Say About Us</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have experienced the transformative
            power of authentic Ayurveda.
          </p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 mb-8">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-w-max md:min-w-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-ayurveda-cream to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-ayurveda-light/30 relative w-[300px] md:w-auto flex-shrink-0"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-ayurveda-primary" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ayurveda-accent text-ayurveda-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xs sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-ayurveda-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5000+', label: 'Happy Customers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '100%', label: 'Natural Products' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-ayurveda-primary to-ayurveda-secondary rounded-xl text-white"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm text-ayurveda-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials


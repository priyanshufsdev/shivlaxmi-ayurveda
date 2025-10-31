'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+919996869677',
      subdetails: 'Mon-Sat, 9AM-7PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'shivlaxmiayurvedara@gmail.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Shiv Laxmi Ayurveda, Pokhawas, Bhiwani, Haryana – 127030',
      subdetails: 'India',
    },
  ]

  return (
    <section id="contact" className="py-8 md:py-20 bg-gradient-to-b from-white to-ayurveda-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-ayurveda-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
            Start Your Wellness
            <span className="block text-ayurveda-secondary">Journey Today</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions? We're here to help you find the perfect Ayurvedic solution
            for your unique needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-ayurveda-primary mb-4 sm:mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ayurveda-primary focus:ring-2 focus:ring-ayurveda-primary/20 outline-none transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ayurveda-primary focus:ring-2 focus:ring-ayurveda-primary/20 outline-none transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ayurveda-primary focus:ring-2 focus:ring-ayurveda-primary/20 outline-none transition-all duration-200"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-ayurveda-primary focus:ring-2 focus:ring-ayurveda-primary/20 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-ayurveda-primary to-ayurveda-secondary text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-ayurveda-primary to-ayurveda-secondary rounded-xl flex items-center justify-center shadow-md">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ayurveda-primary mb-1">
                      {info.title}
                    </h4>
                    <p className={`text-gray-800 font-medium ${info.title === 'Email' ? 'break-all md:break-normal' : 'break-normal'}`}>{info.details}</p>
                    <p className="text-sm text-gray-600 mt-1">{info.subdetails}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-ayurveda-primary to-ayurveda-secondary rounded-2xl p-4 md:p-8 text-white shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <Clock className="w-6 h-6 md:w-8 md:h-8" />
                <h4 className="text-lg md:text-2xl font-serif font-bold">Business Hours</h4>
              </div>
              <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                
                {/* Merged CTA Section */}
                <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-white/30">
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-xs md:text-sm text-white/90 mb-3 md:mb-4">
                    Our Ayurvedic experts are available for consultations. Book your session today!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-white text-ayurveda-primary px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


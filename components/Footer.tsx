'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const footerLinks = {
    company: [
      { name: 'About Us', href: isHomePage ? '#about' : '/#about' },
      { name: 'Our Philosophy', href: isHomePage ? '#philosophy' : '/#philosophy' },
      { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
      { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    ],
    support: [
      { name: 'FAQ', href: isHomePage ? '#contact' : '/#contact' },
      { name: 'Shipping Policy', href: isHomePage ? '#contact' : '/#contact' },
      { name: 'Return Policy', href: isHomePage ? '#contact' : '/#contact' },
      { name: 'Privacy Policy', href: isHomePage ? '#contact' : '/#contact' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gradient-to-b from-ayurveda-primary to-[#1a3009] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Link href="/">
              <div className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/Shivlaxmi ayurveda.PNG"
                  alt="Shivlaxmi Ayurveda"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold">Shivlaxmi Ayurveda</h3>
                  <p className="text-ayurveda-light text-sm">Pure & Natural</p>
                </div>
              </div>
            </Link>
              <p className="text-white/80 leading-relaxed mb-6">
                Bringing the ancient wisdom of Ayurveda to modern lives. Experience holistic
                wellness with our authentic, pure, and natural products.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company & Support Grid - Side by side on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 md:col-span-2">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-ayurveda-light">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-ayurveda-accent rounded-full flex-shrink-0"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-ayurveda-light">Support</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-ayurveda-accent rounded-full flex-shrink-0"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-ayurveda-accent" />
              <div>
                <p className="text-sm text-white/60">Call Us</p>
                <p className="font-medium">+919996869677</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-ayurveda-accent" />
              <div>
                <p className="text-sm text-white/60">Email Us</p>
                <p className="font-medium">shivlaxmiayurvedara@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-ayurveda-accent" />
              <div>
                <p className="text-sm text-white/60">Visit Us</p>
                <p className="font-medium">Shiv Laxmi Ayurveda, Pokhawas, Bhiwani, Haryana – 127030</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ayurveda-accent/20 to-transparent rounded-2xl p-4 sm:p-6 md:p-8 mb-8 border border-ayurveda-accent/30"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-2">Stay Connected</h4>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">
                Subscribe to receive wellness tips, special offers, and Ayurvedic wisdom.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-ayurveda-accent text-[11px] sm:text-xs md:text-base min-w-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ayurveda-accent text-ayurveda-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-ayurveda-light transition-all duration-300 whitespace-nowrap text-[11px] sm:text-xs md:text-base flex-shrink-0"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Shivlaxmi Ayurveda. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> for your wellness.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-[10px] sm:text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


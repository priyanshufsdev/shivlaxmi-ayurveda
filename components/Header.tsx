'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on homepage or not
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/#home' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Products', href: isHomePage ? '#products' : '/#products' },
    { name: 'Philosophy', href: isHomePage ? '#philosophy' : '/#philosophy' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/Shivlaxmi ayurveda.PNG"
                alt="Shivlaxmi Ayurveda Logo"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-14 sm:h-14"
              />
              <div>
                <h1 className="text-sm sm:text-xl font-serif font-bold text-ayurveda-primary leading-tight">
                  Shivlaxmi Ayurveda
                </h1>
                <p className="text-[10px] sm:text-xs text-ayurveda-secondary">Pure & Natural</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className="text-sm lg:text-base text-ayurveda-primary hover:text-ayurveda-accent transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href={isHomePage ? '#contact' : '/#contact'}>
            <motion.div
              className="hidden md:block bg-ayurveda-primary text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-ayurveda-secondary transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer text-sm lg:text-base whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ayurveda-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  className="block py-3 text-ayurveda-primary hover:text-ayurveda-accent transition-colors duration-200 font-medium border-b border-ayurveda-light/30 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <Link href={isHomePage ? '#contact' : '/#contact'}>
              <div
                className="block mt-4 bg-ayurveda-primary text-white px-6 py-3 rounded-full text-center hover:bg-ayurveda-secondary transition-all duration-300 font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </div>
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header


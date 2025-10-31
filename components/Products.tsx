'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Droplet, Leaf, ShoppingCart, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return Sparkles
      case 'sparkle':
        return Droplet
      case 'leaf':
        return Leaf
      default:
        return Sparkles
    }
  }

  const getColor = (index: number) => {
    const colors = [
      'from-amber-400 to-orange-600',
      'from-pink-400 to-rose-600',
      'from-emerald-400 to-green-600',
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="products" className="py-8 md:py-20 bg-gradient-to-b from-ayurveda-cream to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-ayurveda-accent font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
            Nature's Finest
            <span className="block text-ayurveda-secondary">Healing Treasures</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium Ayurvedic products,
            each formulated to bring balance and vitality to your life.
          </p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 mb-8">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-w-max md:min-w-0">
          {products.map((product, index) => {
            const IconComponent = getIcon(product.icon)
            const colorGradient = getColor(index)
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden w-[320px] md:w-auto flex-shrink-0"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-ayurveda-cream to-ayurveda-light/30 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-ayurveda-primary text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                    ₹{product.price}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-serif font-bold text-ayurveda-primary mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ayurveda-accent font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Quick Benefits */}
                  <div className="mb-4">
                    <div className="space-y-1.5">
                      {product.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorGradient} mt-1.5 flex-shrink-0`}></div>
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weight/Quantity */}
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    📦 {product.weight}
                  </p>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link href={`/products/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full border-2 border-ayurveda-primary text-ayurveda-primary py-2.5 rounded-xl font-medium hover:bg-ayurveda-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${colorGradient} text-white py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Buy</span>
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-ayurveda-light/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            )
          })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            All products are made with 100% natural ingredients and certified by Ayurvedic experts
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-ayurveda-primary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-ayurveda-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Products


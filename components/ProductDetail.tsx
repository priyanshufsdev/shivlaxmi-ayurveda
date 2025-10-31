'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Check, Package, Shield, Leaf, Clock, Phone } from 'lucide-react'
import Link from 'next/link'
import { Product } from '@/data/products'
import Header from './Header'
import Footer from './Footer'
import ProductImageGallery from './ProductImageGallery'

interface ProductDetailProps {
  product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ayurveda-cream to-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#products">
          <motion.div
            whileHover={{ x: -5 }}
            className="inline-flex items-center space-x-2 text-ayurveda-primary hover:text-ayurveda-secondary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Products</span>
          </motion.div>
        </Link>
      </div>

      {/* Product Detail Section */}
      <section className="pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left - Product Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <ProductImageGallery images={product.images} productName={product.name} />
                
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="text-center bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-ayurveda-accent mx-auto mb-1 sm:mb-2" />
                  <p className="text-[10px] sm:text-xs font-medium text-gray-700">100% Authentic</p>
                </div>
                <div className="text-center bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-ayurveda-accent mx-auto mb-1 sm:mb-2" />
                  <p className="text-[10px] sm:text-xs font-medium text-gray-700">Pure Natural</p>
                </div>
                <div className="text-center bg-white rounded-xl p-3 sm:p-4 shadow-md">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-ayurveda-accent mx-auto mb-1 sm:mb-2" />
                  <p className="text-[10px] sm:text-xs font-medium text-gray-700">Safe Packaging</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <span className="inline-block bg-ayurveda-light/50 text-ayurveda-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-xl text-gray-700 mb-4 sm:mb-6">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="bg-gradient-to-r from-ayurveda-primary to-ayurveda-secondary text-white rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Price (Incl. of all taxes)</p>
                    <p className="text-4xl font-bold">₹{product.price}</p>
                    <p className="text-sm opacity-90 mt-1">{product.weight}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-ayurveda-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Buy Now</span>
                  </motion.button>
                </div>
              </div>

              {/* Full Description */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4">
                  About This Product
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Ingredients */}
              {product.keyIngredients && (
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-2xl font-serif font-bold text-ayurveda-primary mb-4 sm:mb-6">
                    💎 Key Ingredients & Benefits
                  </h2>
                  <div className="space-y-4">
                    {product.keyIngredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 bg-ayurveda-cream/30 rounded-xl hover:bg-ayurveda-cream/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-ayurveda-accent rounded-full mt-1.5 sm:mt-2"></div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-bold text-ayurveda-primary">
                            {ingredient.name} <span className="text-ayurveda-accent text-xs sm:text-sm">({ingredient.quantity})</span>
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm mt-1">{ingredient.benefit}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Major Benefits */}
              <div className="bg-gradient-to-br from-ayurveda-light/30 to-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8 border border-ayurveda-light/50">
                <h2 className="text-lg sm:text-2xl font-serif font-bold text-ayurveda-primary mb-4 sm:mb-6">
                  ⚡ Major Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-ayurveda-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-base text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-serif font-bold text-ayurveda-primary mb-3 sm:mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-ayurveda-accent" />
                  <span>💡 How to Use</span>
                </h2>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed bg-ayurveda-cream/30 p-3 sm:p-4 rounded-xl">
                  {product.howToUse}
                </p>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-serif font-bold text-ayurveda-primary mb-4 sm:mb-6">
                  📦 Product Details
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Brand</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Net Weight</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.netWeight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Manufactured By</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary text-right">{product.details.mfgBy}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Marketed By</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-ayurveda-primary text-right">{product.details.marketedBy}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Mfg. Date</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.mfgDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Exp. Date</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.expDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-xs sm:text-base text-gray-600">Batch No.</span>
                    <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.batchNo}</span>
                  </div>
                  {product.details.licenseNo && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-xs sm:text-base text-gray-600">License No.</span>
                      <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.licenseNo}</span>
                    </div>
                  )}
                  {product.details.gstNo && (
                    <div className="flex justify-between py-2">
                      <span className="text-xs sm:text-base text-gray-600">GST No.</span>
                      <span className="text-xs sm:text-base font-semibold text-ayurveda-primary">{product.details.gstNo}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-ayurveda-primary to-ayurveda-secondary text-white rounded-2xl p-4 sm:p-6 shadow-xl mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-serif font-bold mb-3 sm:mb-4">
                  🌱 Why Choose Shivlaxmi Ayurveda?
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-ayurveda-accent flex-shrink-0" />
                    <span className="text-xs sm:text-base">100% Pure & Authentic Ayurvedic Formulation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-ayurveda-accent flex-shrink-0" />
                    <span className="text-xs sm:text-base">Premium Quality Ingredients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-ayurveda-accent flex-shrink-0" />
                    <span className="text-xs sm:text-base">Made in India | GMP Certified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-ayurveda-accent flex-shrink-0" />
                    <span className="text-xs sm:text-base">Trust of Traditional Ayurveda</span>
                  </li>
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-ayurveda-light/50 rounded-2xl p-4 sm:p-6 border-2 border-ayurveda-accent/30">
                <h3 className="text-base sm:text-xl font-semibold text-ayurveda-primary mb-2 sm:mb-3 flex items-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Need Help?</span>
                </h3>
                <p className="text-xs sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Have questions about this product? Our Ayurvedic experts are here to help!
                </p>
                <Link href="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-ayurveda-primary text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductDetail


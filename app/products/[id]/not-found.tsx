import Link from 'next/link'
import { ArrowLeft, PackageX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ayurveda-cream to-white flex items-center justify-center px-4">
      <div className="text-center">
        <PackageX className="w-24 h-24 text-ayurveda-primary/30 mx-auto mb-6" />
        <h1 className="text-4xl font-serif font-bold text-ayurveda-primary mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be incorrect.
        </p>
        <Link href="/#products">
          <button className="inline-flex items-center space-x-2 bg-ayurveda-primary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-ayurveda-secondary transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>
        </Link>
      </div>
    </div>
  )
}


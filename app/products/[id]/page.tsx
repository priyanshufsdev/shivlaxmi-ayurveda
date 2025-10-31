import { notFound } from 'next/navigation'
import { getProductById, products } from '@/data/products'
import ProductDetail from '@/components/ProductDetail'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Shivlaxmi Ayurveda`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}


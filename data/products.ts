export interface Product {
  id: string
  name: string
  shortName: string
  price: number
  originalPrice?: number
  weight: string
  image: string
  images: string[] // Multiple images for gallery
  shortDescription: string
  fullDescription: string
  keyIngredients?: { name: string; quantity: string; benefit: string }[]
  benefits: string[]
  howToUse: string
  details: {
    brand: string
    netWeight: string
    mfgBy: string
    marketedBy: string
    mfgDate: string
    expDate: string
    batchNo: string
    licenseNo?: string
    gstNo?: string
  }
  category: string
  icon: string
}

export const products: Product[] = [
  {
    id: 'chandi-bhasma',
    name: 'Shivlaxmi Ayurveda Chandi Bhasma',
    shortName: 'Chandi Bhasma',
    price: 5100,
    weight: '150gm',
    image: '/products/product1-1.jpg',
    images: [
      '/products/product1-1.jpg',
      '/products/product1-2.jpg',
      '/products/product1-3.jpg',
    ],
    shortDescription: 'Premium Ayurvedic Vitalizer for Strength, Stamina & Immunity',
    fullDescription: 'Shivlaxmi Ayurveda Chandi Bhasma is a premium Ayurvedic formulation enriched with time-tested bhasmas and herbs that work together to rejuvenate your body, boost stamina, enhance immunity, and promote overall vitality. Crafted with authentic Ayurvedic principles, this sugar-free and side-effect-free product is designed for those who seek natural strength and wellness.',
    keyIngredients: [
      { name: 'Loh Bhasma', quantity: '500 mg', benefit: 'Improves blood health and boosts energy' },
      { name: 'Abhrak Bhasma', quantity: '500 mg', benefit: 'Enhances physical strength and vitality' },
      { name: 'Swarna Bhasma', quantity: '500 mg', benefit: 'Promotes anti-aging and rejuvenation' },
      { name: 'Vang Bhasma', quantity: '250 mg', benefit: 'Supports digestion and hormonal balance' },
      { name: 'Swarna Makshik Bhasma', quantity: '400 mg', benefit: 'Increases stamina and muscle strength' },
      { name: 'Siddha Makardhwaj (Gold)', quantity: '100 mg', benefit: 'Revitalizes energy and endurance' },
      { name: 'Vasant Kusumakar Ras', quantity: '1 gm', benefit: 'Improves immunity and boosts overall wellness' },
    ],
    benefits: [
      'Enhances Stamina & Energy Levels',
      'Builds Muscle Strength & Endurance',
      'Boosts Immunity & Natural Defense',
      'Promotes Anti-Aging & Rejuvenation',
      'Sugar-Free & No Side Effects',
      '100% Ayurvedic Proprietary Medicine',
    ],
    howToUse: 'Take 5–10 grams daily with milk, honey, or lukewarm water, or as directed by your physician.',
    details: {
      brand: 'Shivlaxmi Ayurveda',
      netWeight: '150 gm',
      mfgBy: 'Bhagat Ayurvedic Pharmacy',
      marketedBy: 'Shivlaxmi Ayurveda, Pokhawas, Bhiwani (Haryana) – 127030',
      mfgDate: 'September 2025',
      expDate: 'August 2027',
      batchNo: 'TWB-001',
    },
    category: 'Vitality & Wellness',
    icon: 'sparkles',
  },
  {
    id: 'aloe-vera-face-pack',
    name: 'Gold Aloe Vera Face Pack',
    shortName: 'Aloe Vera Face Pack',
    price: 600,
    weight: '100gm',
    image: '/products/product2-1.jpg',
    images: [
      '/products/product2-1.jpg',
      '/products/product2-2.jpg',
      '/products/product2-3.jpg',
    ],
    shortDescription: 'Natural Face Pack for Glowing & Clear Skin',
    fullDescription: 'Experience the ultimate glow with our Gold Aloe Vera Face Pack. This paraben-free, farm-fresh formula combines the power of Aloe Vera, Rose Water, Turmeric, and natural ingredients to deeply cleanse, brighten, and rejuvenate your skin. Perfect for all skin types, it effectively treats acne, removes tan, and gives you radiant, youthful skin.',
    keyIngredients: [
      { name: 'Aloe Vera', quantity: '20%', benefit: 'Deep hydration and healing' },
      { name: 'Rose Water', quantity: '10%', benefit: 'Tones and refreshes skin' },
      { name: 'Lemon Extract', quantity: '10%', benefit: 'Brightens and lightens' },
      { name: 'Coffee Solution', quantity: '10%', benefit: 'Reduces puffiness and firms skin' },
      { name: 'Turmeric', quantity: '10%', benefit: 'Anti-inflammatory and glow-boosting' },
      { name: 'Gram', quantity: '10%', benefit: 'Exfoliates and cleanses' },
      { name: 'Tomato Extract', quantity: '10%', benefit: 'Brightens complexion' },
      { name: 'Honey Solution', quantity: '10%', benefit: 'Moisturizes and soothes' },
    ],
    benefits: [
      'Deep pore cleansing & tan removal',
      'Soothes acne, pimples, eczema & psoriasis',
      'Skin tightening & anti-aging',
      'Brightens complexion & reduces discoloration',
      'Balances oil & cools skin for a clear glow',
      'Paraben-Free with Natural Fragrance',
    ],
    howToUse: 'Mix 5–10 g with rose water or milk. Apply on face & neck, avoid eyes. Leave for 10–15 mins. Rinse off or wipe gently.',
    details: {
      brand: 'Shiv Laxmi Ayurveda',
      netWeight: '100 gm',
      mfgBy: 'Shiv Laxmi Ayurveda',
      marketedBy: 'Shiv Laxmi Ayurveda, Pokhawas, Bhiwani (Haryana)',
      mfgDate: 'June 2025',
      expDate: 'June 2027',
      batchNo: 'FP-001',
      gstNo: '06JXXPS3088D1ZM',
    },
    category: 'Skin Care',
    icon: 'sparkle',
  },
  {
    id: 'hair-care-capsules',
    name: 'Hair Care Capsules',
    shortName: 'Hair Care Capsules',
    price: 495,
    weight: '60 Capsules',
    image: '/products/product3-1.jpg',
    images: [
      '/products/product3-1.jpg',
      '/products/product3-2.jpg',
      '/products/product3-3.jpg',
    ],
    shortDescription: 'Plant-Based Ayurvedic Formula for Strong, Healthy & Beautiful Hair',
    fullDescription: 'Bring your hair back to life with the healing touch of Ayurveda. Shiv Laxmi Ayurveda Hair Care Capsules are specially formulated using potent herbal extracts that work from within to strengthen your hair roots, improve scalp circulation, and prevent common hair problems like hair fall, dandruff, and premature greying. Each capsule delivers the goodness of nature to help you achieve thicker, shinier, and healthier hair — naturally and safely.',
    benefits: [
      'Reduces Hair Fall - Strengthens hair follicles from the root',
      'Prevents Dandruff - Nourishes and keeps scalp healthy',
      'Promotes Hair Growth - Improves blood flow to scalp',
      'Prevents Premature Greying - Retains natural hair pigment',
      '100% Ayurvedic Formula - Free from harmful chemicals',
      'Improves Hair Texture & Shine',
    ],
    howToUse: 'Take 1 capsule twice a day after meals with water or as directed by your physician. For best results, use consistently for at least 3 months along with a healthy diet and regular oiling.',
    details: {
      brand: 'Shiv Laxmi Ayurveda',
      netWeight: '60 Capsules',
      mfgBy: 'Bhagat Ayurvedic Pharmacy',
      marketedBy: 'Shiv Laxmi Ayurveda, Pokhawas, Bhiwani, Haryana – 127030',
      mfgDate: 'SEP 2025',
      expDate: 'AUG 2027',
      batchNo: 'HC-02',
      licenseNo: '919-ISM (HR)',
    },
    category: 'Hair Care',
    icon: 'leaf',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}


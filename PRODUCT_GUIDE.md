# Product Management Guide

This guide explains how to add, update, or remove products from your Shivlaxmi Ayurveda website.

## 📦 Current Products

1. **Chandi Bhasma** - ₹5,100 (Vitality & Wellness)
2. **Gold Aloe Vera Face Pack** - ₹600 (Skin Care)
3. **Hair Care Capsules** - ₹495 (Hair Care)

---

## 🆕 Adding a New Product

### Step 1: Update Product Data

Edit `data/products.ts` and add a new product to the `products` array:

```typescript
{
  id: 'product-slug',              // URL-friendly name (lowercase, hyphens)
  name: 'Full Product Name',       // Display name
  shortName: 'Short Name',         // For buttons/cards
  price: 999,                      // Price in rupees
  weight: '100gm',                 // Weight or quantity
  image: '/products/product-slug.jpg',  // Image path
  shortDescription: 'Brief tagline',    // For homepage cards
  fullDescription: 'Detailed description...', // For product page
  
  // Optional: Key ingredients with details
  keyIngredients: [
    { 
      name: 'Ingredient Name', 
      quantity: '500mg', 
      benefit: 'What it does' 
    },
  ],
  
  benefits: [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
  ],
  
  howToUse: 'Usage instructions...',
  
  details: {
    brand: 'Shivlaxmi Ayurveda',
    netWeight: '100 gm',
    mfgBy: 'Manufacturer name',
    marketedBy: 'Shivlaxmi Ayurveda, Address',
    mfgDate: 'Month Year',
    expDate: 'Month Year',
    batchNo: 'BATCH-001',
    licenseNo: 'Optional',    // Optional field
    gstNo: 'Optional',         // Optional field
  },
  
  category: 'Category Name',
  icon: 'sparkles',  // sparkles, sparkle, or leaf
}
```

### Step 2: Add Product Image

1. Add a high-quality product image to `public/products/`
2. Name it: `product-slug.jpg` (matching the `id` field)
3. Recommended: 800x800px, square aspect ratio, white background

### Step 3: Test

```bash
npm run dev
```

Visit:
- Homepage: http://localhost:3000/#products
- Product page: http://localhost:3000/products/product-slug

---

## ✏️ Updating an Existing Product

1. Open `data/products.ts`
2. Find the product by its `id`
3. Update any field (price, description, benefits, etc.)
4. Save the file
5. Changes will appear automatically on the website

**Example: Update Price**
```typescript
price: 5500,  // Changed from 5100
```

---

## 🖼️ Updating Product Images

### Replace an Existing Image

1. Go to `public/products/`
2. Replace the existing image file
3. Keep the same filename
4. Refresh your browser

### Add Missing Images

If you see placeholder icons instead of product photos:

1. Take or source product photos
2. Edit to 800x800px (or similar square size)
3. Save as: `chandi-bhasma.jpg`, `face-pack.jpg`, or `hair-capsules.jpg`
4. Place in `public/products/` folder

---

## 🗑️ Removing a Product

1. Open `data/products.ts`
2. Remove the entire product object from the array
3. Delete the product image from `public/products/`
4. Save and restart the dev server

---

## 📝 Product Display Locations

Each product appears in:

1. **Homepage** (`/#products`)
   - Product card with image, price, top 3 benefits
   - "Details" and "Buy" buttons

2. **Product Detail Page** (`/products/[id]`)
   - Full product information
   - Complete ingredient list
   - All benefits and usage instructions
   - Manufacturing details
   - "Why Choose Us" section

---

## 🎨 Customization Tips

### Change Product Card Colors

Colors rotate automatically based on product position. To customize, edit `components/Products.tsx`:

```typescript
const colors = [
  'from-amber-400 to-orange-600',    // Product 1
  'from-pink-400 to-rose-600',       // Product 2
  'from-emerald-400 to-green-600',   // Product 3
]
```

### Change Product Icons

Available icons: `sparkles`, `sparkle`, `leaf`

To add more icons, edit the `getIcon()` function in `components/Products.tsx`

---

## 🚀 Going Live

Before deploying:

1. ✅ Add all product images
2. ✅ Verify all prices and details
3. ✅ Test all product links
4. ✅ Check mobile responsiveness
5. ✅ Update contact information if needed

---

## 🆘 Common Issues

### Product page shows 404
- Check the product `id` matches the URL
- Ensure product exists in `products` array
- Restart the dev server

### Image not showing
- Check filename matches product `id`
- Image should be in `public/products/`
- Use supported formats: JPG, PNG

### Product not appearing on homepage
- Check product is in the `products` array
- Verify no syntax errors in `products.ts`
- Check browser console for errors

---

## 📞 Need Help?

For technical support or questions about product management, refer to the main README.md or check the Next.js documentation at https://nextjs.org/docs


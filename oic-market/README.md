# OIC Markeït - Islamic Ecommerce Platform

A comprehensive, responsive ecommerce frontend built with Next.js 14, featuring Islamic branding and tailored for the Muslim community worldwide.

![OIC Markeït Banner](https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&h=400&fit=crop)

## 🌟 Features

### 🏠 Homepage
- **Hero Carousel**: Full-width image carousel with promotional banners
- **Category Grid**: Interactive category navigation with hover effects
- **Flash Deals**: Limited-time offers with countdown timers
- **Featured Products**: Handpicked product showcases
- **Islamic Collections**: Special sections for halal and Islamic products
- **Trust Signals**: Free shipping, halal certification, easy returns

### 🛍️ Product Features
- **Product Cards**: Beautiful cards with discount badges, ratings, and quick actions
- **Product Details**: Comprehensive product pages with image galleries, specifications, and reviews
- **Category Filtering**: Advanced filtering by price, brand, rating, and Islamic certifications
- **Search Functionality**: Live search suggestions with mock data
- **Wishlist Support**: Heart icon for saving favorite products

### 🛒 Shopping Experience
- **Shopping Cart**: Full cart management with quantity updates and item removal
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Islamic Branding**: Emerald green color scheme with Islamic design elements
- **Halal Badges**: Clear halal certification and Eid special tags

### 👤 User Interface
- **Clean Navigation**: Sticky header with mega menu dropdown
- **User Actions**: Cart, wishlist, and account access
- **Language/Currency**: Selector for international users
- **Islamic Typography**: Optional Arabic font integration

### 📊 Admin Dashboard
- **Statistics Overview**: Users, products, orders, and revenue metrics
- **Order Management**: Recent orders with status tracking
- **Product Management**: Top products with quick action buttons
- **Islamic Features**: Special sections for halal certifications

## 🎨 Design System

### Colors
- **Primary**: Emerald Green (#059669) - Represents growth and Islamic tradition
- **Secondary**: Gold (#f59e0b) - For special offers and Eid collections
- **Success**: Green variants for halal certifications
- **Modern**: Clean whites and grays for contemporary feel

### Components
- Built with **shadcn/ui** for consistent, accessible components
- **Lucide React** icons for crisp, scalable iconography
- **Tailwind CSS** for responsive, utility-first styling

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom Islamic design tokens
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations and transitions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── cart/              # Shopping cart page
│   ├── category/[slug]/   # Category listing pages
│   ├── product/[slug]/    # Product detail pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui base components
│   ├── layout/            # Header and footer components
│   ├── home/              # Homepage-specific components
│   └── product/           # Product-related components
├── lib/
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   └── mock-data.ts       # Mock data for products, categories, etc.
└── styles/                # Additional styling
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oic-market
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero carousel with promotional banners
- Category grid navigation
- Flash deals section
- Featured and trending products
- Islamic collection highlights

### Product Detail (`/product/[slug]`)
- Image gallery with zoom functionality
- Comprehensive product information
- Customer reviews and ratings
- Related products carousel
- Add to cart and wishlist functionality

### Category Listing (`/category/[slug]`)
- Product grid with filtering options
- Sort by price, rating, popularity
- Brand and feature filters
- Islamic certification filters
- Responsive grid/list view toggle

### Shopping Cart (`/cart`)
- Item management (add, remove, update quantities)
- Order summary with taxes and shipping
- Shipping calculator
- Secure checkout flow

### Admin Dashboard (`/admin`)
- Overview statistics and metrics
- Recent orders management
- Top products display
- Quick action buttons
- Islamic marketplace features

## 🌍 Islamic Features

### Halal Certification
- Clear halal badges on products
- Dedicated halal product filtering
- Islamic product categories

### Cultural Sensitivity
- Ramadan and Eid special collections
- Modest fashion categories
- Islamic books and religious items
- Prayer accessories and home decor

### Design Elements
- Islamic green and gold color palette
- Arabic typography options
- Crescent moon and Islamic patterns
- Faith-based messaging and values

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Adapted layouts for tablet screens
- **Desktop Enhanced**: Rich experience on larger screens
- **Touch Optimized**: Proper touch targets and gestures

## 🔧 Customization

### Adding New Products
1. Update `src/lib/mock-data.ts` with new product data
2. Ensure proper image URLs and product information
3. Add appropriate tags and Islamic certifications

### Styling Customization
1. Modify `tailwind.config.ts` for color and spacing changes
2. Update `src/app/globals.css` for custom CSS variables
3. Adjust Islamic design elements in component files

### Adding New Pages
1. Create new pages in the `src/app` directory
2. Follow the existing component structure
3. Import and use existing UI components

## 🚀 Deployment

This project can be deployed on various platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

### Vercel Deployment
```bash
npm i -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Islamic design inspiration from traditional Islamic art
- shadcn/ui for the excellent component library
- Unsplash for placeholder images
- The Muslim developer community for inspiration

## 🔮 Future Enhancements

- Real-time inventory management
- Payment gateway integration (Stripe, PayPal)
- User authentication and profiles
- Order tracking system
- Multi-language support (Arabic, Urdu, etc.)
- Islamic calendar integration
- Prayer time notifications
- Zakat calculator
- Real-time chat support

---

Built with ❤️ for the global Muslim community | **Bismillah** - In the name of Allah

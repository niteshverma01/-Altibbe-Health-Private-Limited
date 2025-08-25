## 🌐 Live Demo

Visit the live demo: [Hedamo Product Showcase](https://polite-sable-e94099.netlify.app/)
# Hedamo Product Showcase

A modern product showcase application built with Next.js 13+ and Tailwind CSS, featuring a card-based modular design inspired by Samsung Weather's interface.


## 🌟 Features

- **Card-Based Product Details**
  - Modular design with distinct cards for each product aspect
  - Smooth transitions and animations
  - Glass morphism and neo-brutalism design elements

- **Interactive Elements**
  - Hover effects and micro-interactions
  - Animated gradients and shimmer effects
  - Responsive card layouts

- **Product Information Categories**
  - Nutrition facts
  - Traceability information
  - Sustainability metrics
  - Shipping details
  - Customer reviews

- **UI/UX Enhancements**
  - Light/Dark mode support
  - Smooth transitions between views
  - Modern glass-effect design
  - Responsive layout for all devices

## 🛠️ Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/niteshverma01/-Altibbe-Health-Private-Limited.git
cd hedamo-showcase
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main product listing page
├── components/
│   ├── ProductCard.tsx    # Product summary card
│   ├── ProductDetails.tsx # Detailed product view
│   └── ui/               # UI components
└── public/
    └── images/           # Product images and assets
```

## 🎨 Design Features

### Animations
- Floating elements
- Glow effects
- Shimmer animations
- Gradient shifts
- Pulse effects

### Visual Effects
- Glass morphism
- Neo-brutalism
- Text gradients
- Holographic effects
- Dynamic shadows

### Interactive Elements
- Hover states
- Click animations
- Smooth transitions
- Loading states

## 🔧 Component Usage

### ProductCard Component
```tsx
<ProductCard 
  product={productData}
  onClick={() => handleProductClick(productData.id)}
/>
```

### ProductDetails Component
```tsx
<ProductDetails 
  product={selectedProduct}
  onBack={() => setSelectedProduct(null)}
/>
```

## 📱 Responsive Design

The application is fully responsive across:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎯 Implementation Highlights

- **Modular Card System**: Each product aspect has its own dedicated card with unique styling and animations
- **Smooth Transitions**: Carefully crafted animations for state changes and user interactions
- **Accessibility**: Semantic HTML and ARIA attributes for better screen reader support
- **Performance**: Optimized animations and transitions for smooth performance

## 🌐 Live Demo

Visit the live demo: [Hedamo Product Showcase](https://polite-sable-e94099.netlify.app/)

## 📝 License

MIT License - feel free to use this code for your own projects.

## 👏 Acknowledgments

- Design inspiration from Samsung Weather App
- UI components from shadcn/ui
- Icons from Lucide Icons

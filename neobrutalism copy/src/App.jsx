import React, { useState } from "react"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { MenuSection } from "@/components/sections/menu_section"
import { RoastProcessSection } from "@/components/sections/roast_process_section"
import { SubscriptionSection } from "@/components/sections/subscription_section"
import { TestimonialsSection } from "@/components/sections/testimonials_section"
import { FAQSection } from "@/components/sections/faq_section"
import { NewsletterSection } from "@/components/sections/newsletter_section"
import { Footer } from "@/components/sections/footer"

import { CartModal } from "@/components/modals/cart_modal"
import { CustomizeModal } from "@/components/modals/customize_modal"
import { OrderModal } from "@/components/modals/order_modal"
import { SmoothScroll } from "@/components/motion/smooth_scroll"

export default function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const [customizeItem, setCustomizeItem] = useState(null)
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false)
  
  const [isOrderOpen, setIsOrderOpen] = useState(false)

  // Scroll smooth helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Cart operations
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id && !i.selectedOption)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      } else {
        return [...prev, { ...item, quantity: 1, cartId: `${item.id}-${Date.now()}` }]
      }
    })
    setIsCartOpen(true)
  }

  const handleAddToCartWithOptions = (customizedItem) => {
    setCart((prev) => [
      ...prev,
      { ...customizedItem, cartId: `${customizedItem.id}-${customizedItem.selectedOption}-${Date.now()}` }
    ])
    setIsCartOpen(true)
  }

  const handleUpdateQuantity = (cartId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId)
    } else {
      setCart((prev) => prev.map((item) => item.cartId === cartId ? { ...item, quantity: newQty } : item))
    }
  }

  const handleRemoveItem = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const handleOpenCustomizeModal = (item) => {
    setCustomizeItem(item)
    setIsCustomizeOpen(true)
  }

  const handleSelectPlan = (plan) => {
    setCart((prev) => [
      ...prev,
      {
        id: plan.id,
        name: `${plan.name} Subscription`,
        price: parseFloat(plan.price.replace("$", "")),
        quantity: 1,
        selectedOption: "Monthly Subscription",
        image: "/images/coffee_bag.png",
        cartId: `plan-${plan.id}-${Date.now()}`
      }
    ])
    setIsCartOpen(true)
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground relative isolate flex flex-col font-base selection:bg-main selection:text-main-foreground">
        {/* Navigation */}
        <Navbar 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenOrderModal={() => setIsOrderOpen(true)}
        />

        {/* Main Landing Sections */}
        <main className="flex-1">
          <Hero 
            onExploreMenu={() => scrollToSection("menu")} 
            onJoinClub={() => scrollToSection("subscription")}
          />
          <Ticker />
          <MenuSection 
            onAddToCart={handleAddToCart}
            onOpenCustomizeModal={handleOpenCustomizeModal}
          />
          <RoastProcessSection />
          <SubscriptionSection 
            onSelectPlan={handleSelectPlan}
          />
          <TestimonialsSection />
          <FAQSection />
          <NewsletterSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        <CustomizeModal
          isOpen={isCustomizeOpen}
          onClose={() => setIsCustomizeOpen(false)}
          item={customizeItem}
          onAddToCartWithOptions={handleAddToCartWithOptions}
        />

        <OrderModal
          isOpen={isOrderOpen}
          onClose={() => setIsOrderOpen(false)}
          onExploreMenu={() => scrollToSection("menu")}
        />
      </div>
    </SmoothScroll>
  )
}

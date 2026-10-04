import React, { useState } from "react"
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CartModal({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  if (!isOpen) return null

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const freeShippingThreshold = 35.00
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      setOrderComplete(true)
      onClearCart()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-overlay backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full sm:h-auto sm:max-h-[90vh] bg-secondary-background border-2 border-border rounded-none sm:rounded-base shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b-2 border-border bg-main text-main-foreground">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 stroke-[2.5]" />
            <h3 className="font-heading font-extrabold text-lg">Your Coffee Bag ({cart.length})</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="flex size-8 items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Order Complete View */}
        {orderComplete ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="mx-auto size-16 rounded-base border-2 border-border bg-main flex items-center justify-center text-main-foreground shadow-shadow">
              <CheckCircle2 className="size-10 stroke-[2.5]" />
            </div>
            <h4 className="text-2xl font-heading font-extrabold">ORDER RECEIVED! ☕</h4>
            <p className="text-sm font-base text-foreground/80">
              Your brew is being prepared by our barista team. Your roast order confirmation email has been sent!
            </p>
            <Button variant="default" size="lg" onClick={() => { setOrderComplete(false); onClose(); }} className="w-full">
              Back to Roastery
            </Button>
          </div>
        ) : (
          <>
            {/* Free shipping banner */}
            <div className="p-3 bg-background border-b-2 border-border text-xs font-heading">
              {remainingForFreeShipping > 0 ? (
                <div>
                  Add <span className="font-extrabold text-main-foreground bg-main px-1 rounded-sm">${remainingForFreeShipping.toFixed(2)}</span> more for FREE Express Delivery!
                  <div className="w-full bg-secondary-background h-2 rounded-full border border-border mt-1 overflow-hidden">
                    <div className="bg-main h-full transition-all duration-300" style={{ width: `${freeShippingPercent}%` }} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between text-green-700 font-extrabold">
                  <span>🎉 YOU UNLOCKED FREE EXPRESS SHIPPING!</span>
                  <Badge variant="default" className="text-[10px]">FREE</Badge>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="p-4 overflow-y-auto flex-1 space-y-4 divide-y divide-border/40">
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <ShoppingBag className="size-12 mx-auto text-foreground/40 stroke-[1.5]" />
                  <p className="font-heading font-bold text-base text-foreground/70">Your cart is currently empty.</p>
                  <p className="text-xs text-foreground/50">Add some delicious brews or coffee bags from our menu!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId || item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="size-14 rounded-base border-2 border-border object-cover bg-amber-50"
                      />
                      <div>
                        <h4 className="font-heading font-extrabold text-sm line-clamp-1">{item.name}</h4>
                        {item.selectedOption && (
                          <span className="text-[11px] font-base text-foreground/70 block">
                            Option: {item.selectedOption}
                          </span>
                        )}
                        <span className="text-xs font-bold font-heading text-main-foreground bg-main/80 px-1.5 py-0.5 rounded-sm inline-block mt-0.5">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onUpdateQuantity(item.cartId || item.id, item.quantity - 1)}
                        className="size-7 flex items-center justify-center rounded-base border-2 border-border bg-secondary-background hover:bg-main text-xs font-bold"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center font-heading font-extrabold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartId || item.id, item.quantity + 1)}
                        className="size-7 flex items-center justify-center rounded-base border-2 border-border bg-secondary-background hover:bg-main text-xs font-bold"
                      >
                        <Plus className="size-3" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.cartId || item.id)}
                        className="size-7 ml-1 flex items-center justify-center rounded-base border-2 border-border bg-red-100 hover:bg-red-500 hover:text-white text-xs"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-4 border-t-2 border-border bg-secondary-background space-y-3">
                <div className="flex items-center justify-between font-heading font-extrabold text-base">
                  <span>Subtotal:</span>
                  <span className="text-xl">${subtotal.toFixed(2)}</span>
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  disabled={isCheckingOut}
                  onClick={handleCheckout} 
                  className="w-full font-bold text-base"
                >
                  {isCheckingOut ? "Brewing Order..." : "Proceed to Checkout"} <ArrowRight className="size-5" />
                </Button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  )
}

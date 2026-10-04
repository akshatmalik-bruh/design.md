import React, { useState } from "react"
import { X, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CustomizeModal({ item, isOpen, onClose, onAddToCartWithOptions }) {
  if (!isOpen || !item) return null

  const defaultOption = item.options && item.options.length > 0 ? item.options[0] : "Standard"
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [quantity, setQuantity] = useState(1)

  const handleConfirm = () => {
    onAddToCartWithOptions({
      ...item,
      selectedOption,
      quantity
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-secondary-background border-2 border-border rounded-base shadow-[8px_8px_0px_0px_#000] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-border bg-main text-main-foreground">
          <div className="flex items-center gap-2">
            <Badge variant="neutral" className="text-[10px]">CUSTOMIZE</Badge>
            <h3 className="font-heading font-extrabold text-lg">{item.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-8 items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4 p-3 border-2 border-border rounded-base bg-background">
            <img 
              src={item.image} 
              alt={item.name} 
              className="size-16 object-cover border-2 border-border rounded-base bg-amber-50"
            />
            <div>
              <span className="text-xs font-bold uppercase text-foreground/60">{item.category}</span>
              <h4 className="font-heading font-extrabold text-base">{item.name}</h4>
              <p className="text-xs font-base text-foreground/80">{item.description}</p>
            </div>
          </div>

          {/* Options Selection */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-3">
              <label className="text-sm font-heading font-extrabold uppercase tracking-wider block">
                Select Option / Grind / Milk:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`flex items-center justify-between p-3 rounded-base border-2 border-border text-xs font-heading font-bold transition-all cursor-pointer ${
                      selectedOption === opt
                        ? "bg-main text-main-foreground shadow-shadow"
                        : "bg-secondary-background text-foreground hover:bg-main/20"
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedOption === opt && <Check className="size-4 stroke-[3]" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center justify-between p-3 border-2 border-border rounded-base bg-secondary-background">
            <span className="text-sm font-heading font-extrabold">Quantity:</span>
            <div className="flex items-center gap-3">
              <Button 
                variant="neutral" 
                size="icon-sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="font-heading font-extrabold text-base w-6 text-center">{quantity}</span>
              <Button 
                variant="neutral" 
                size="icon-sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 border-t-2 border-border bg-secondary-background flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-foreground/60 block">Total Price:</span>
            <span className="text-2xl font-extrabold font-heading text-foreground">
              ${(item.price * quantity).toFixed(2)}
            </span>
          </div>

          <Button variant="default" size="lg" onClick={handleConfirm} className="font-bold">
            Add to Order <Plus className="size-5 stroke-[2.5]" />
          </Button>
        </div>

      </div>
    </div>
  )
}

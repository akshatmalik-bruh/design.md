import React, { useState } from "react"
import { X, Clock, MapPin, Coffee, ArrowRight, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export function OrderModal({ isOpen, onClose, onExploreMenu }) {
  const [orderType, setOrderType] = useState("pickup")
  const [submitted, setSubmitted] = useState(false)
  const [pickupTime, setPickupTime] = useState("In 15 mins (7:30 AM)")

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-secondary-background border-2 border-border rounded-base shadow-[8px_8px_0px_0px_#000] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-border bg-main text-main-foreground">
          <div className="flex items-center gap-2">
            <Coffee className="size-5 stroke-[2.5]" />
            <h3 className="font-heading font-extrabold text-lg">QUICK ORDER ONLINE</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-8 items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto size-14 rounded-base border-2 border-border bg-main flex items-center justify-center text-main-foreground shadow-shadow">
              <CheckCircle2 className="size-8 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-heading font-extrabold">PICKUP RESERVED!</h4>
            <p className="text-xs font-base text-foreground/80">
              Your pickup slot has been reserved at our flagship roastery: <strong>{siteConfig.contact.address}</strong>
            </p>
            <Button variant="default" size="lg" onClick={() => { setSubmitted(false); onClose(); onExploreMenu(); }} className="w-full">
              Browse Menu & Add Drinks
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Toggle Order Mode */}
            <div className="grid grid-cols-2 gap-2 bg-background p-1.5 border-2 border-border rounded-base">
              <button
                type="button"
                onClick={() => setOrderType("pickup")}
                className={`py-2 text-xs font-heading font-bold rounded-base border-2 transition-all cursor-pointer ${
                  orderType === "pickup"
                    ? "bg-main text-main-foreground border-border shadow-shadow"
                    : "bg-transparent border-transparent text-foreground"
                }`}
              >
                In-Store Pickup
              </button>
              <button
                type="button"
                onClick={() => setOrderType("delivery")}
                className={`py-2 text-xs font-heading font-bold rounded-base border-2 transition-all cursor-pointer ${
                  orderType === "delivery"
                    ? "bg-main text-main-foreground border-border shadow-shadow"
                    : "bg-transparent border-transparent text-foreground"
                }`}
              >
                Beans Delivery
              </button>
            </div>

            {orderType === "pickup" ? (
              <div className="space-y-4">
                <div className="p-3 border-2 border-border rounded-base bg-amber-50 text-xs font-base flex items-start gap-2">
                  <MapPin className="size-4 text-main shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <span className="font-extrabold font-heading block">Flagship Roastery:</span>
                    {siteConfig.contact.address}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold uppercase">Choose Pickup Slot:</label>
                  <select 
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full h-10 px-3 border-2 border-border rounded-base bg-secondary-background text-xs font-heading font-bold focus:ring-2 focus:ring-black"
                  >
                    <option>ASAP (In 15 Minutes)</option>
                    <option>In 30 Minutes</option>
                    <option>In 45 Minutes</option>
                    <option>Tomorrow Morning 7:00 AM</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold uppercase">Delivery Zipcode:</label>
                  <Input type="text" placeholder="e.g. 94103" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold uppercase">Street Address:</label>
                  <Input type="text" placeholder="123 Coffee Ave, Apt 4B" required />
                </div>
              </div>
            )}

            <Button variant="default" size="lg" type="submit" className="w-full font-bold">
              Reserve Order Slot <ArrowRight className="size-5" />
            </Button>
          </form>
        )}

      </div>
    </div>
  )
}

import React, { useState } from "react"
import { Mail, Gift, CheckCircle2, ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setSubscribed(true)
  }

  return (
    <Section variant="main" bordered className="py-16 md:py-20 text-main-foreground">
      <Container>
        <div className="max-w-4xl mx-auto bg-secondary-background text-foreground border-2 border-border rounded-base p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
          
          {subscribed ? (
            <div className="text-center space-y-4 py-6 animate-in zoom-in-95 duration-200">
              <div className="mx-auto size-14 rounded-base border-2 border-border bg-main flex items-center justify-center text-main-foreground shadow-shadow">
                <CheckCircle2 className="size-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                YOU'RE ON THE VIP ROAST LIST! 🎉
              </h3>
              <p className="text-sm md:text-base font-base text-foreground/80 max-w-lg mx-auto">
                Check your inbox! We've sent your 15% discount code along with our free <strong>"Mastering Pour-Over Coffee"</strong> PDF guide.
              </p>
              <Button variant="default" onClick={() => setSubscribed(false)} className="mt-4">
                Subscribe another email
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <Badge variant="default" className="gap-1.5 px-3 py-1">
                  <Gift className="size-4" /> SPECIAL OFFER
                </Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  GET 15% OFF YOUR FIRST ROAST BAG
                </h3>
                <p className="text-sm md:text-base font-base text-foreground/80 leading-relaxed">
                  Join our weekly newsletter for secret micro-lot drops, brewing tips from our master roaster, and 15% off your first order.
                </p>
              </div>

              <div className="md:col-span-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 size-4 text-foreground/60 stroke-[2.5]" />
                    <Input
                      type="email"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      className="pl-9 h-11 border-2"
                      required
                    />
                  </div>

                  {error && (
                    <span className="text-xs text-red-600 font-heading font-bold">{error}</span>
                  )}

                  <Button variant="default" size="lg" type="submit" className="w-full font-bold">
                    Claim 15% Discount <ArrowRight className="size-5" />
                  </Button>

                  <p className="text-[11px] text-foreground/60 text-center font-base">
                    No spam ever. Unsubscribe with one click anytime.
                  </p>
                </form>
              </div>

            </div>
          )}

        </div>
      </Container>
    </Section>
  )
}

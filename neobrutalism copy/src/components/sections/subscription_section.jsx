import React from "react"
import { Check, Package, ArrowRight, Coffee } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StaggerCards } from "@/components/motion/stagger_cards"

export function SubscriptionSection({ onSelectPlan }) {
  return (
    <Section id="subscription" variant="surface" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="gap-1.5 px-3 py-1">
            <Package className="size-4" /> JOIN THE CLUB
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            NEVER RUN OUT OF FRESH ROAST AGAIN
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-base max-w-2xl">
            Flexible coffee bean subscriptions roasted weekly and delivered to your doorstep. Free shipping, zero commitment, pause anytime.
          </p>
        </div>

        {/* Pricing Cards Staggered Grid */}
        <StaggerCards stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.plans.map((plan) => {
            const isHighlight = plan.highlight

            return (
              <Card
                key={plan.id}
                variant={isHighlight ? "highlight" : "default"}
                className={`relative flex flex-col justify-between p-2 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all ${
                  isHighlight ? "scale-105 z-10 shadow-[6px_6px_0px_0px_#000]" : ""
                }`}
              >
                {/* Top Badge for Highlight Plan */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="dark" className="border-2 border-border shadow-shadow py-1 px-3 text-xs">
                      ★ {plan.badge} ★
                    </Badge>
                  </div>
                )}

                <div>
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold tracking-wider uppercase opacity-80">
                        {plan.badge}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-extrabold">{plan.name}</CardTitle>
                    <CardDescription className={isHighlight ? "text-main-foreground/90" : "text-foreground/80"}>
                      {plan.description}
                    </CardDescription>

                    {/* Price Display */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tight font-heading">
                        {plan.price}
                      </span>
                      <span className="text-sm font-bold opacity-80">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 border-b-2 border-current pb-2 opacity-80">
                      What's Included:
                    </div>
                    <ul className="space-y-3 text-sm font-base">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`mt-0.5 rounded-base border-2 border-border p-0.5 shrink-0 ${
                            isHighlight ? "bg-white text-black" : "bg-main text-black"
                          }`}>
                            <Check className="size-3.5 stroke-[3]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4">
                  <Button
                    variant={isHighlight ? "neutral" : "default"}
                    size="lg"
                    className="w-full font-bold text-base"
                    onClick={() => onSelectPlan(plan)}
                  >
                    {plan.buttonText} <ArrowRight className="size-5" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </StaggerCards>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center bg-background border-2 border-border rounded-base p-6 shadow-shadow max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 bg-main border-2 border-border rounded-base shrink-0">
              <Coffee className="size-6 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base">100% Freshness Guarantee</h4>
              <p className="text-xs text-foreground/80">Don't love your first roast? We'll send a replacement bag for free.</p>
            </div>
          </div>
          <Badge variant="default" className="shrink-0 text-xs py-1 px-3">
            GUARANTEED
          </Badge>
        </div>

      </Container>
    </Section>
  )
}

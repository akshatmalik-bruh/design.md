import React, { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StaggerReveal } from "@/components/motion/stagger_reveal"

export function PricingSection({ onSelectPlan }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  return (
    <Section id="pricing" variant="subtle" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start space-y-3 mb-12 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <span>TRANSPARENT PRICING</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            Predictable Costs for Scale
          </h2>
          <p className="text-sm md:text-base text-fg2 font-normal max-w-prose">
            Pay only for the tokens you stream. No hidden seat licenses, no unexpected overage charges.
          </p>

          {/* Billing Switch */}
          <div className="pt-2 flex items-center gap-3 text-xs font-mono">
            <span className={!annualBilling ? "text-fg1 font-medium" : "text-fg3"}>Monthly</span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-9 h-5 rounded-full border border-line-strong bg-surface-2 p-0.5 transition-colors cursor-pointer"
            >
              <div className={`size-3.5 rounded-full bg-fg1 transition-transform ${annualBilling ? "translate-x-4" : "translate-x-0"}`} />
            </button>
            <span className={annualBilling ? "text-fg1 font-medium" : "text-fg3"}>
              Annual <span className="text-success font-medium">(20% Discount)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Staggered Grid */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.plans.map((plan) => {
            const isHighlight = plan.highlight

            return (
              <Card
                key={plan.id}
                className={`flex flex-col justify-between relative transition-colors ${
                  isHighlight ? "border-fg1 bg-bg" : "border-line-subtle bg-bg"
                }`}
              >
                <div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-medium uppercase text-fg3">
                        {plan.badge}
                      </span>
                      {isHighlight && (
                        <Badge variant="dark" className="text-[10px]">
                          MOST POPULAR
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-medium">{plan.name}</CardTitle>
                    <CardDescription className="text-xs text-fg2">
                      {plan.description}
                    </CardDescription>

                    {/* Price display */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-medium tracking-tight font-mono text-fg1 tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-fg3">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardBody className="py-4 border-t border-line-subtle">
                    <div className="text-xs font-mono font-medium text-fg2 uppercase tracking-wider mb-3">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-2.5 text-xs text-fg2 font-normal">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="size-3.5 text-fg1 shrink-0 mt-0.5" />
                          <span className="leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </div>

                <CardFooter className="pt-4">
                  <Button
                    variant={isHighlight ? "inverted" : "default"}
                    size="default"
                    className="w-full justify-center font-mono text-xs"
                    onClick={() => onSelectPlan(plan)}
                  >
                    {plan.buttonText} <ArrowRight className="size-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </StaggerReveal>

      </Container>
    </Section>
  )
}

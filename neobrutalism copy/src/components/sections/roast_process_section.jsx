import React from "react"
import { Sprout, Flame, ShieldCheck, Truck, Sparkles } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const iconMap = {
  Sprout: Sprout,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
  Truck: Truck
}

export function RoastProcessSection() {
  return (
    <Section id="process" variant="default" className="py-16 md:py-24">
      <Container>
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="gap-1.5 px-3 py-1">
            <Flame className="size-4" /> OUR CRAFT PROCESS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            FROM FARM TO MUG: WHY IT HITS DIFFERENT
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-base max-w-2xl">
            We take no shortcuts. Four uncompromised steps ensure every sip is peak flavor intensity.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.processSteps.map((stepItem, idx) => {
            const IconComponent = iconMap[stepItem.icon] || Sparkles

            return (
              <Card 
                key={idx} 
                className="relative flex flex-col justify-between p-6 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading bg-main text-main-foreground px-3 py-1 border-2 border-border rounded-base shadow-shadow">
                      {stepItem.step}
                    </span>
                    <div className="size-10 rounded-base border-2 border-border bg-secondary-background flex items-center justify-center shadow-shadow">
                      <IconComponent className="size-5 stroke-[2.5]" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-extrabold mb-3">
                    {stepItem.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-foreground/80 leading-relaxed font-base">
                    {stepItem.description}
                  </CardDescription>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-border/40 flex items-center text-xs font-bold uppercase tracking-wider text-foreground/70">
                  Step {idx + 1} of 4 &rarr;
                </div>
              </Card>
            )
          })}
        </div>

      </Container>
    </Section>
  )
}

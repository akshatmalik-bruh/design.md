import React from "react"
import { Star, MessageSquareQuote, ThumbsUp } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  return (
    <Section id="reviews" variant="surface" bordered className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="gap-1.5 px-3 py-1">
            <MessageSquareQuote className="size-4" /> VERIFIED REVIEWS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            SIPPER APPROVED & LOVED
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-base max-w-2xl">
            See why coffee connoisseurs, home baristas, and daily commuters are hooked on our roasts.
          </p>
        </div>

        {/* Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-6 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-main text-black stroke-[2]" />
                    ))}
                  </div>
                  <Badge variant="neutral" className="text-[10px]">
                    {item.tag}
                  </Badge>
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base font-base text-foreground leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t-2 border-border flex items-center justify-between">
                <div>
                  <div className="font-heading font-extrabold text-sm">{item.author}</div>
                  <div className="text-xs text-foreground/70 font-base">{item.role}</div>
                </div>
                <div className="size-8 rounded-base border-2 border-border bg-main flex items-center justify-center font-bold text-xs text-main-foreground shadow-shadow">
                  <ThumbsUp className="size-4 stroke-[2.5]" />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </Section>
  )
}

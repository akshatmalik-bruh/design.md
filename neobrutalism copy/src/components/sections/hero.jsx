import React from "react"
import { ArrowRight, Star, ShieldCheck, Award, Flame } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DirectionalReveal } from "@/components/motion/directional_reveal"
import { OversizedText } from "@/components/motion/oversized_text"

export function Hero({ onExploreMenu, onJoinClub }) {
  return (
    <Section variant="default" className="pt-8 md:pt-16 pb-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <DirectionalReveal direction="bottom" distance={40} delay={0.1}>
              <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs md:text-sm">
                <Flame className="size-4 fill-black" />
                <span>ROASTED FRESH EVERY MORNING</span>
              </Badge>
            </DirectionalReveal>

            {/* Oversized Typography Motion */}
            <DirectionalReveal direction="bottom" distance={50} delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground">
                WAKE UP TO <span className="bg-main px-2 py-0.5 border-2 border-border shadow-shadow inline-block transform -rotate-1">REAL COFFEE</span> THAT HITS DIFFERENT.
              </h1>
            </DirectionalReveal>

            <DirectionalReveal direction="bottom" distance={40} delay={0.35}>
              <p className="text-lg md:text-xl font-base text-foreground/90 max-w-xl leading-relaxed">
                Ethically sourced single-origin Arabica beans, micro-roasted in 5kg batches and delivered to your doorstep within 24 hours of roasting.
              </p>
            </DirectionalReveal>

            {/* CTAs */}
            <DirectionalReveal direction="bottom" distance={40} delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={onExploreMenu}
                  className="text-lg font-bold"
                >
                  Explore Menu <ArrowRight className="size-5 stroke-[2.5]" />
                </Button>
                <Button 
                  variant="neutral" 
                  size="lg"
                  onClick={onJoinClub}
                  className="text-lg font-bold"
                >
                  Join Coffee Club
                </Button>
              </div>
            </DirectionalReveal>

            {/* Micro Rating Bar */}
            <DirectionalReveal direction="bottom" distance={30} delay={0.65} className="w-full">
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-border/40 w-full">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-main text-black stroke-[2]" />
                  ))}
                </div>
                <div className="text-sm font-heading">
                  <span className="font-extrabold">4.9/5</span> from 12,000+ Coffee Lovers
                </div>
              </div>
            </DirectionalReveal>

          </div>

          {/* Right Visual Card with Hard Directional Shift & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <DirectionalReveal direction="right" distance={80} rotate={3} delay={0.3} className="w-full max-w-md">
              <div className="relative w-full">
                {/* Decorative Back Accent Box */}
                <div className="absolute -inset-3 rounded-base bg-main border-2 border-border" />
                
                {/* Main Image Container Card */}
                <div className="relative rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-base border-2 border-border bg-amber-50">
                    <img 
                      src="/images/hero_coffee.png" 
                      alt="Artisan Creamy Iced Caramel Cold Brew Coffee" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="default" className="text-xs shadow-shadow">
                        ★ TOP SELLER
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="neutral" className="text-xs shadow-shadow bg-white font-bold">
                        $6.50
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between p-2 rounded-base bg-background border-2 border-border">
                    <div>
                      <h3 className="font-heading font-extrabold text-base">Caramel Cloud Cold Brew</h3>
                      <p className="text-xs font-base text-foreground/70">Steeped 20 Hours • Sea Salt Foam</p>
                    </div>
                    <Button variant="default" size="xs" onClick={onExploreMenu}>
                      Order
                    </Button>
                  </div>
                </div>

                {/* Floating Neobrutalist Badge 1 */}
                <div className="absolute -bottom-6 -left-6 hidden sm:block bg-secondary-background border-2 border-border rounded-base p-3 shadow-shadow animate-bounce duration-1000">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-main border-2 border-border rounded-base">
                      <ShieldCheck className="size-5 stroke-[2.5]" />
                    </div>
                    <div className="text-xs font-heading">
                      <div className="font-extrabold">100% Direct Trade</div>
                      <div className="text-[10px] text-foreground/70">Fair Pay Guaranteed</div>
                    </div>
                  </div>
                </div>

                {/* Floating Neobrutalist Badge 2 */}
                <div className="absolute -top-6 -right-6 hidden sm:block bg-main border-2 border-border rounded-base p-3 shadow-shadow">
                  <div className="flex items-center gap-2">
                    <Award className="size-5 stroke-[2.5]" />
                    <div className="text-xs font-heading">
                      <div className="font-extrabold">Award Winner</div>
                      <div className="text-[10px]">Best Micro-Roaster 2024</div>
                    </div>
                  </div>
                </div>

              </div>
            </DirectionalReveal>
          </div>

        </div>

        {/* Stats Strip below Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <DirectionalReveal key={idx} direction="bottom" distance={40} delay={0.1 * idx}>
              <div className="bg-secondary-background border-2 border-border rounded-base p-5 shadow-shadow flex flex-col justify-between hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">{stat.value}</span>
                  <Badge variant="default" className="text-[10px] px-1.5 py-0.5">
                    {stat.badge}
                  </Badge>
                </div>
                <span className="text-xs md:text-sm font-heading uppercase tracking-wider text-foreground/80">{stat.label}</span>
              </div>
            </DirectionalReveal>
          ))}
        </div>

      </Container>
    </Section>
  )
}

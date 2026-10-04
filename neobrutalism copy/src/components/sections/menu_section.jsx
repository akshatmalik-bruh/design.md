import React, { useState } from "react"
import { Search, Plus, Sparkles } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { StaggerCards } from "@/components/motion/stagger_cards"

export function MenuSection({ onAddToCart, onOpenCustomizeModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Items")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = siteConfig.menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All Items" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Section id="menu" variant="default" className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="gap-1 px-3 py-1">
            <Sparkles className="size-4" /> CRAFT MENU
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            ROASTED FRESH, BREWED TO PERFECTION
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-base max-w-2xl">
            From velvet caramel cold brews to single-origin espresso shots and morning French pastries.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-secondary-background p-4 border-2 border-border rounded-base shadow-shadow">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {siteConfig.menuCategories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-base border-2 border-border px-3.5 py-1.5 text-xs md:text-sm font-heading transition-all cursor-pointer ${
                    isActive 
                      ? "bg-main text-main-foreground shadow-shadow font-bold" 
                      : "bg-secondary-background text-foreground hover:bg-main/20"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 size-4 text-foreground/60 stroke-[2.5]" />
            <Input
              type="text"
              placeholder="Search coffee or pastry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10"
            />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-secondary-background border-2 border-border rounded-base p-8 shadow-shadow">
            <h3 className="text-xl font-heading font-extrabold mb-2">No coffee found!</h3>
            <p className="text-sm font-base text-foreground/70 mb-4">Try adjusting your search terms or filter category.</p>
            <Button variant="default" onClick={() => { setSelectedCategory("All Items"); setSearchQuery(""); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <StaggerCards stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="flex flex-col justify-between overflow-hidden group hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                
                {/* Image header */}
                <div className="relative aspect-[4/3] w-full border-b-2 border-border overflow-hidden bg-amber-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <Badge variant="default" className="text-[10px] shadow-shadow">
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className="bg-secondary-background text-foreground font-extrabold font-heading text-sm px-2 py-0.5 border-2 border-border rounded-base shadow-shadow">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="p-4 pb-2">
                  <span className="text-[11px] font-heading uppercase text-foreground/60 tracking-wider">
                    {item.category}
                  </span>
                  <CardTitle className="text-lg font-extrabold line-clamp-1">{item.name}</CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <CardDescription className="text-xs text-foreground/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>

                {/* Action Footer */}
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button
                    variant="neutral"
                    size="sm"
                    className="w-full text-xs font-bold"
                    onClick={() => onOpenCustomizeModal(item)}
                  >
                    Customize
                  </Button>
                  <Button
                    variant="default"
                    size="icon-sm"
                    aria-label={`Add ${item.name} to cart`}
                    onClick={() => onAddToCart(item)}
                  >
                    <Plus className="size-4 stroke-[3]" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </StaggerCards>
        )}

      </Container>
    </Section>
  )
}

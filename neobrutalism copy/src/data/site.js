export const siteConfig = {
  name: "ROAST & RITUAL",
  tagline: "BOLD BREWS. ZERO COMPROMISE.",
  description: "Ethically sourced single-origin coffee beans roasted fresh daily in micro-batches and delivered straight to your mug.",
  contact: {
    address: "742 Brewmasters Way, Coffee District, CA 94103",
    hours: "Mon-Fri: 6:30 AM - 7:00 PM | Sat-Sun: 7:30 AM - 8:00 PM",
    phone: "(555) 892-ROAST",
    email: "hello@roastandritual.com",
  },
  navLinks: [
    { label: "Menu", href: "#menu" },
    { label: "Subscription", href: "#subscription" },
    { label: "Our Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],
  stats: [
    { value: "4.9/5", label: "Average Rating", badge: "12,000+ Reviews" },
    { value: "100%", label: "Direct Trade", badge: "Fair Pay Guaranteed" },
    { value: "24h", label: "Roast to Delivery", badge: "Peak Freshness" },
    { value: "15+", label: "Single Origins", badge: "Seasonal Rotations" },
  ],
  tickerItems: [
    "★ FRESHLY ROASTED DAILY IN MICRO-BATCHES",
    "★ 100% ETHICALLY SOURCED ARABICA BEANS",
    "★ FREE SHIPPING ON ORDERS OVER $35",
    "★ ARTISAN NITRO COLD BREW ON TAP",
    "★ CUSTOM GRIND SIZE FOR EVERY BREWER",
    "★ AWARD-WINNING HOUSE BLENDS & SINGLE ORIGINS",
  ],
  menuCategories: [
    "All Items",
    "Espresso & Brews",
    "Specialty Cold Drinks",
    "Pastry & Eats",
    "Bean Bags & Merch"
  ],
  menuItems: [
    {
      id: "m1",
      name: "Caramel Cloud Cold Brew",
      category: "Specialty Cold Drinks",
      price: 6.50,
      description: "Steeped for 20 hours, topped with whipped caramel cold foam and sea salt flakes.",
      badge: "TOP SELLER",
      image: "/images/hero_coffee.png",
      popular: true,
      options: ["Standard Ice", "Extra Foam", "Oat Milk", "Almond Milk"]
    },
    {
      id: "m2",
      name: "Single Origin Espresso (Double Shot)",
      category: "Espresso & Brews",
      price: 4.20,
      description: "Ethiopian Yirgacheffe with bright jasmine aromas and citrus peach tasting notes.",
      badge: "ROASTER CHOICE",
      image: "/images/espresso.png",
      popular: true,
      options: ["Double Shot", "Ristretto", "Extra Hot"]
    },
    {
      id: "m3",
      name: "Smoked Vanilla Oat Latte",
      category: "Espresso & Brews",
      price: 6.00,
      description: "Double espresso infused with organic Madagascar vanilla and creamy barista oat milk.",
      badge: "FAVORITE",
      image: "/images/hero_coffee.png",
      popular: false,
      options: ["Hot", "Iced", "Sugar-Free Vanilla"]
    },
    {
      id: "m4",
      name: "Nitro Honey Velvet Draft",
      category: "Specialty Cold Drinks",
      price: 6.80,
      description: "Nitrogen-infused cold brew cascading with natural wild wildflower honey.",
      badge: "NEW",
      image: "/images/hero_coffee.png",
      popular: false,
      options: ["16oz Draft", "20oz Draft"]
    },
    {
      id: "m5",
      name: "Artisan Butter Croissant",
      category: "Pastry & Eats",
      price: 4.50,
      description: "Flaky 81-layer French butter croissant baked fresh every morning at 5:00 AM.",
      badge: "BAKED DAILY",
      image: "/images/espresso.png",
      popular: true,
      options: ["Warmed Up", "Side of Fig Jam", "Side of Butter"]
    },
    {
      id: "m6",
      name: "Signature Dark Roast Bag (350g)",
      category: "Bean Bags & Merch",
      price: 18.00,
      description: "Notes of dark chocolate, toasted macadamia, and smoky maple syrup sweetness.",
      badge: "100% ARABICA",
      image: "/images/coffee_bag.png",
      popular: true,
      options: ["Whole Bean", "Coarse (French Press)", "Medium (Drip)", "Fine (Espresso)"]
    },
    {
      id: "m7",
      name: "Cardamom Cinnamon Knot",
      category: "Pastry & Eats",
      price: 5.20,
      description: "Swedish-style twisted cardamom pastry filled with spiced brown sugar butter.",
      badge: "HOUSE SPECIAL",
      image: "/images/espresso.png",
      popular: false,
      options: ["Warmed Up", "Room Temp"]
    },
    {
      id: "m8",
      name: "Ceremonial Uji Matcha Latte",
      category: "Specialty Cold Drinks",
      price: 6.40,
      description: "First-harvest ceremonial grade matcha whisked to order with oat milk.",
      badge: "ORGANIC",
      image: "/images/hero_coffee.png",
      popular: false,
      options: ["Iced", "Hot", "Add Espresso Shot"]
    }
  ],
  plans: [
    {
      id: "plan-starter",
      name: "Casual Sipper",
      price: "$16",
      period: "/ month",
      description: "Perfect for weekend coffee enthusiasts and light drinkers.",
      highlight: false,
      badge: "LIGHT",
      features: [
        "1 Bag (350g) roasted fresh monthly",
        "Choice of Single Origin or Blend",
        "Whole bean or custom grind",
        "Free standard shipping",
        "Pause or cancel anytime"
      ],
      buttonText: "Start Starter Plan"
    },
    {
      id: "plan-pro",
      name: "Roast Connoisseur",
      price: "$28",
      period: "/ month",
      description: "Our most popular club plan for daily coffee purists.",
      highlight: true,
      badge: "MOST POPULAR",
      features: [
        "2 Bags (350g x 2) roasted fresh bi-weekly",
        "Access to Micro-Lot seasonal drops",
        "Free 1 Complimentary Cafe Drink monthly",
        "15% Discount on all bakery items",
        "Priority 24-hour dispatch",
        "Free canvas tote bag on signup"
      ],
      buttonText: "Join Connoisseur Club"
    },
    {
      id: "plan-office",
      name: "Coffee Lab Reserve",
      price: "$48",
      period: "/ month",
      description: "For heavy coffee lovers, remote teams, and espresso nerds.",
      highlight: false,
      badge: "VIP EXTRA",
      features: [
        "4 Bags (350g x 4) shipped weekly",
        "Exclusive Experimental Ferments & Geishas",
        "Free Cupping spoon & Enamel Mug",
        "1-on-1 virtual cupping session with Master Roaster",
        "Unlimited free in-store drip coffee"
      ],
      buttonText: "Claim Reserve Tier"
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "Direct-Trade Sourcing",
      description: "We work directly with smallholder farmers in Ethiopia, Colombia, & Guatemala, paying 35% above fair-trade minimums.",
      icon: "Sprout"
    },
    {
      step: "02",
      title: "Precision Micro-Roasting",
      description: "Roasting in tiny 5kg batches with strict thermodynamic profiles to highlight delicate floral and fruit tasting notes.",
      icon: "Flame"
    },
    {
      step: "03",
      title: "Nitro Sealed Freshness",
      description: "Packaged within 2 hours of roasting into one-way valve eco-pouches to prevent oxidation and lock in volatile oils.",
      icon: "ShieldCheck"
    },
    {
      step: "04",
      title: "Same-Day Dispatch",
      description: "Shipped directly to your doorstep so you brew your first cup right at peak flavor development (Day 3 to 14).",
      icon: "Truck"
    }
  ],
  testimonials: [
    {
      quote: " hands down the smoothest cold brew in the bay area. The Neobrutalist shop vibe matches the bold taste!",
      author: "Marcus Vance",
      role: "Verified Coffee Addict",
      rating: 5,
      tag: "Caramel Cloud Fan"
    },
    {
      quote: "The Roast Connoisseur subscription saved my workdays. Freshly roasted beans showing up every 2 weeks is bliss.",
      author: "Elena Rostova",
      role: "UX Designer & Home Barista",
      rating: 5,
      tag: "Club Member"
    },
    {
      quote: "Finally a roast that doesn't taste burnt or watery. You can actually taste the jasmine and honey notes in the Yirgacheffe!",
      author: "David K.",
      role: "Espresso Purist",
      rating: 5,
      tag: "Single Origin Enthusiast"
    }
  ],
  faqs: [
    {
      question: "How fresh will my coffee be when delivered?",
      answer: "We roast every weekday morning. Subscriptions and online orders are packaged with nitrogen flush within 2 hours of roasting and dispatched that afternoon. Most customers receive their beans within 48 hours of roasting."
    },
    {
      question: "Can I choose my custom grind size?",
      answer: "Yes! When selecting your bag or subscription, choose between Whole Bean, Coarse (French Press / Cold Brew), Medium (Drip / Pour Over), or Fine (Espresso / Moka Pot)."
    },
    {
      question: "What makes your Direct Trade ethical?",
      answer: "We bypass broker middlemen and buy directly from partner cooperatives in East Africa and South America. We pay an average of 35-50% above Fair Trade prices to ensure farm sustainability and community reinvestment."
    },
    {
      question: "Can I pause, modify, or cancel my subscription?",
      answer: "Absolutely. Log into your member portal anytime to skip a delivery, change your roast selection, adjust delivery frequency, or pause/cancel with a single click."
    },
    {
      question: "Do you offer milk alternatives at the café?",
      answer: "Yes! We offer organic barista Oat milk, Almond milk, and Coconut milk at zero extra charge. We believe plant-based milk should be accessible to everyone."
    }
  ]
};

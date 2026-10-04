import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PinnedStory({ children, className = "" }) {
  const triggerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Desktop matchMedia only
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      const childrenElements = contentRef.current.children

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=1200",
        },
      })

      // Animate children progression inside pinned container
      Array.from(childrenElements).forEach((child, index) => {
        if (index > 0) {
          tl.fromTo(
            child,
            { opacity: 0, y: 60, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
          )
        }
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={triggerRef} className={`w-full ${className}`}>
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  )
}

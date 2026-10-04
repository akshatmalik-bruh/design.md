import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollReveal({
  children,
  className = "",
  distance = 24,
  mode = "reversible", // "reversible" (scrubbed) or "entrance" (plays once)
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (mode === "reversible") {
        gsap.fromTo(
          containerRef.current,
          {
            opacity: 0.2,
            y: distance,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.6,
            },
          }
        )
      } else {
        gsap.fromTo(
          containerRef.current,
          {
            opacity: 0,
            y: distance,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse", // Reversible on exit
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [distance, mode])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

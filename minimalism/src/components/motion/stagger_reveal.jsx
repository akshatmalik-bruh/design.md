import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function StaggerReveal({ children, className = "", stagger = 0.08, distance = 24 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const items = containerRef.current.children

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: distance,
        },
        {
          opacity: 1,
          y: 0,
          stagger: stagger,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [stagger, distance])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

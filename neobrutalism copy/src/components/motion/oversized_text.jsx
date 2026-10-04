import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function OversizedText({ children, className = "", direction = "left", speed = 50 }) {
  const elRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const xTarget = direction === "left" ? -speed : speed

      gsap.to(elRef.current, {
        x: xTarget,
        ease: "none",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }, elRef)

    return () => ctx.revert()
  }, [direction, speed])

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}

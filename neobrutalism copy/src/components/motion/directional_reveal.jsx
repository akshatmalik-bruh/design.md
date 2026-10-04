import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function DirectionalReveal({
  children,
  className = "",
  direction = "bottom", // "left", "right", "bottom", "top"
  distance = 80,
  rotate = -2,
  delay = 0,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      let xFrom = 0
      let yFrom = 0

      if (direction === "left") xFrom = -distance
      if (direction === "right") xFrom = distance
      if (direction === "bottom") yFrom = distance
      if (direction === "top") yFrom = -distance

      gsap.fromTo(
        elRef.current,
        {
          opacity: 0,
          x: xFrom,
          y: yFrom,
          rotation: rotate,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      )
    }, elRef)

    return () => ctx.revert()
  }, [direction, distance, rotate, delay])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}

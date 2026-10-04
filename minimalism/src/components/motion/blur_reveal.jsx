import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function BlurReveal({
  children,
  className = "",
  amount = 8,
  distance = 20,
  delay = 0,
  mode = "scroll", // "scroll" (reversible scrub) or "entrance" (load timeline)
}) {
  const elRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (mode === "scroll") {
        gsap.fromTo(
          elRef.current,
          {
            opacity: 0.1,
            filter: `blur(${amount}px)`,
            y: distance,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: elRef.current,
              start: "top 92%",
              end: "top 60%",
              scrub: 0.6,
            },
          }
        )
      } else {
        gsap.fromTo(
          elRef.current,
          {
            opacity: 0,
            filter: `blur(${amount}px)`,
            y: distance,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.9,
            delay: delay,
            ease: "power2.out",
          }
        )
      }
    }, elRef)

    return () => ctx.revert()
  }, [amount, distance, delay, mode])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}

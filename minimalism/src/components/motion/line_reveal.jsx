import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function LineReveal({ children, className = "", delay = 0 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const lineElements = containerRef.current.querySelectorAll(".line-reveal-inner")

      gsap.fromTo(
        lineElements,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay: delay,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [delay])

  // Split lines if children is a string containing <br /> or newlines
  const lines = typeof children === "string" ? children.split("\n") : [children]

  return (
    <div ref={containerRef} className={`space-y-1 ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden py-0.5">
          <div className="line-reveal-inner transform-gpu">
            {line}
          </div>
        </div>
      ))}
    </div>
  )
}

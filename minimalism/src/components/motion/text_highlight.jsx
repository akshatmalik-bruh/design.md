import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TextHighlight({ children, className = "" }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".word-span")

      gsap.fromTo(
        words,
        {
          color: "var(--fg3)",
          opacity: 0.35,
        },
        {
          color: "var(--fg1)",
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            end: "bottom 48%",
            scrub: 0.5,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const words = typeof children === "string" ? children.split(" ") : []

  return (
    <div ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="word-span inline-block transition-colors duration-120 mr-[0.25em]"
        >
          {word}
        </span>
      ))}
    </div>
  )
}

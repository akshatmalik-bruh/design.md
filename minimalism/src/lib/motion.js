// Motion tokens from animation.md
export const motionTokens = {
  fast: 0.18,
  normal: 0.42,
  slow: 0.70,
  reveal: 0.90,

  distanceSm: 16,
  distanceMd: 32,
  distanceLg: 56,

  staggerSm: 0.04,
  staggerMd: 0.08,
  staggerLg: 0.12,

  eases: {
    power2Out: "power2.out",
    power3Out: "power3.out",
    power2InOut: "power2.inOut",
  }
}

// Helper for Lenis smooth-scroll anchor navigation
export function scrollToTarget(targetId, lenisInstance) {
  const targetEl = document.getElementById(targetId) || document.querySelector(targetId)
  if (!targetEl) return

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReducedMotion) {
    targetEl.scrollIntoView()
    return
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(targetEl, {
      offset: -64, // Account for fixed 64px navbar
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else {
    targetEl.scrollIntoView({ behavior: "smooth" })
  }
}

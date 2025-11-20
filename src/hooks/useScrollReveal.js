import { useEffect } from 'react'

const OBSERVER_OPTIONS = {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.15,
}

export default function useScrollReveal(dependencies = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target
        const revealOnce = target.dataset.revealOnce === 'true'

        if (entry.isIntersecting) {
          target.classList.add('reveal-visible')
        } else if (!revealOnce) {
          target.classList.remove('reveal-visible')
        }
      })
    }, OBSERVER_OPTIONS)

    elements.forEach((element) => {
      if (element.dataset.revealDelay) {
        element.style.transitionDelay = `${element.dataset.revealDelay}ms`
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, dependencies)
}


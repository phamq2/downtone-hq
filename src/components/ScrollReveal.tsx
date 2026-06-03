'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    const reveals = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[]
    let remaining = [...reveals]

    const checkReveals = () => {
      const vh = window.innerHeight
      remaining = remaining.filter(el => {
        if (el.getBoundingClientRect().top < vh * 0.92) {
          el.classList.add('in')
          return false
        }
        return true
      })
    }

    window.addEventListener('scroll', checkReveals, { passive: true })
    window.addEventListener('resize', checkReveals)

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('in')
              io.unobserve(e.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      )
      reveals.forEach(el => io.observe(el))
    }

    checkReveals()
    requestAnimationFrame(checkReveals)
    setTimeout(checkReveals, 400)
    // Safety: reveal everything after 2.5s
    const safety = setTimeout(() => {
      remaining.forEach(el => el.classList.add('in'))
      remaining = []
    }, 2500)

    return () => {
      window.removeEventListener('scroll', checkReveals)
      window.removeEventListener('resize', checkReveals)
      clearTimeout(safety)
    }
  }, [])

  return null
}

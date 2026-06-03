'use client'

import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (fillRef.current) fillRef.current.style.width = (p * 100).toFixed(2) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="progress">
      <div ref={fillRef} className="progress-fill" />
    </div>
  )
}

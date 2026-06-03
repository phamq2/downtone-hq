'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'bet',       n: '00', t: 'The Bet' },
  { id: 'what',      n: '01', t: 'What Is Downtone' },
  { id: 'rhythm',    n: '02', t: 'Daily Rhythm' },
  { id: 'thesis',    n: '03', t: 'Founding Thesis' },
  { id: 'principles',n: '04', t: 'Principles' },
  { id: 'programs',  n: '05', t: 'Hospitality' },
  { id: 'room',      n: '06', t: 'The Room' },
  { id: 'lineage',   n: '07', t: 'Lineage' },
]

export default function SideNav() {
  const [active, setActive] = useState('')
  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    obsRef.current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean)
    els.forEach(el => obsRef.current!.observe(el!))
    return () => obsRef.current?.disconnect()
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sidenav" aria-label="Sections">
      <button onClick={scrollTop} className="sidenav-mark-link" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/Downtone-logo-white.svg" alt="Downtone" className="sidenav-mark" />
      </button>
      <ol>
        {SECTIONS.map(s => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? 'active' : undefined}
            >
              <span className="n">{s.n}</span>
              <span className="t">{s.t}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

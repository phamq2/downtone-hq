'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Slide {
  type: 'image' | 'video'
  src: string
  alt?: string
  poster?: string
}

interface CarouselProps {
  eyebrow: string
  title: string
  slides: Slide[]
}

export default function Carousel({ eyebrow, title, slides }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rootRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const reduce = useRef(false)

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const playActive = useCallback((idx: number) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === idx && !reduce.current) {
        v.currentTime = 0
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [])

  const go = useCallback((idx: number) => {
    const n = slides.length
    const next = ((idx % n) + n) % n
    setCurrent(next)
    playActive(next)
  }, [slides.length, playActive])

  const schedule = useCallback((idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (slides.length < 2 || reduce.current) return
    const dwell = slides[idx]?.type === 'video' ? 6500 : 3400
    timerRef.current = setTimeout(() => {
      const next = (idx + 1) % slides.length
      go(next)
      schedule(next)
    }, dwell)
  }, [slides, go])

  useEffect(() => {
    schedule(current)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // IntersectionObserver: start/stop when visible
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playActive(current)
          schedule(current)
        } else {
          if (timerRef.current) clearTimeout(timerRef.current)
          videoRefs.current.forEach(v => v?.pause())
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [current, playActive, schedule])

  const handleMouseEnter = () => { if (timerRef.current) clearTimeout(timerRef.current) }
  const handleMouseLeave = () => { schedule(current) }

  return (
    <figure
      ref={rootRef}
      className="archive-figure carousel reveal"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="af-eyebrow">{eyebrow}</p>
      <p className="af-title">{title}</p>
      <div className="cstage">
        {slides.map((slide, i) =>
          slide.type === 'video' ? (
            <video
              key={i}
              ref={el => { videoRefs.current[i] = el }}
              className={`cslide${i === current ? ' on' : ''}`}
              src={slide.src}
              poster={slide.poster}
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              className={`cslide${i === current ? ' on' : ''}`}
              src={slide.src}
              alt={slide.alt || ''}
            />
          )
        )}
      </div>
      <figcaption className="carousel-figcap">
        <div className="cnav">
          <button
            className="carrow cprev"
            type="button"
            aria-label="Previous photo"
            onClick={() => { go(current - 1); schedule(current - 1) }}
          >
            ‹
          </button>
          <div className="cdots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`cdot${i === current ? ' on' : ''}`}
                type="button"
                aria-label={`Image ${i + 1}`}
                onClick={() => { go(i); schedule(i) }}
              />
            ))}
          </div>
          <button
            className="carrow cnext"
            type="button"
            aria-label="Next photo"
            onClick={() => { go(current + 1); schedule(current + 1) }}
          >
            ›
          </button>
        </div>
      </figcaption>
    </figure>
  )
}

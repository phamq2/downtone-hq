'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const PAIRS: [string, string][] = [
  ['#201900', '#FFC0B9'], // Olive / Peach
  ['#002100', '#FFA0F1'], // Green / Pink
  ['#21132D', '#005CFF'], // Plum / Blue
  ['#330000', '#A19AFF'], // Wine / Lilac
  ['#1E0039', '#FF5D00'], // Purple / Orange
  ['#141414', '#FF9B00'], // Black / Amber
  ['#362734', '#00EB72'], // Mauve / Green
]

const PAIR_NAMES = ['Olive / Peach', 'Green / Pink', 'Plum / Blue', 'Wine / Lilac', 'Purple / Orange', 'Black / Amber', 'Mauve / Green']

function isLight(hex: string): boolean {
  const h = hex.replace('#', '').padEnd(6, '0')
  const n = parseInt(h, 16)
  if (isNaN(n)) return true
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return r * 299 + g * 587 + b * 114 > 148000
}

export default function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const [pairIdx, setPairIdx] = useState(0)
  const [imagery, setImagery] = useState<'balanced' | 'minimal'>('balanced')
  const panelRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ right: 16, bottom: 16 })

  const applyTheme = useCallback((idx: number) => {
    const [bg, accent] = PAIRS[idx]
    document.documentElement.style.setProperty('--rd-bg', bg)
    document.documentElement.style.setProperty('--rd-accent', accent)
  }, [])

  useEffect(() => { applyTheme(pairIdx) }, [pairIdx, applyTheme])

  useEffect(() => {
    document.documentElement.classList.remove('img-minimal', 'img-balanced')
    document.documentElement.classList.add(`img-${imagery}`)
  }, [imagery])

  const clamp = useCallback(() => {
    const p = panelRef.current
    if (!p) return
    const w = p.offsetWidth, h = p.offsetHeight
    const PAD = 16
    posRef.current = {
      right: Math.min(window.innerWidth - w - PAD, Math.max(PAD, posRef.current.right)),
      bottom: Math.min(window.innerHeight - h - PAD, Math.max(PAD, posRef.current.bottom)),
    }
    p.style.right = posRef.current.right + 'px'
    p.style.bottom = posRef.current.bottom + 'px'
  }, [])

  useEffect(() => {
    if (!open) return
    clamp()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(clamp) : null
    if (ro) ro.observe(document.documentElement)
    else window.addEventListener('resize', clamp)
    return () => { ro ? ro.disconnect() : window.removeEventListener('resize', clamp) }
  }, [open, clamp])

  const onDragStart = (e: React.MouseEvent) => {
    const p = panelRef.current
    if (!p) return
    const r = p.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const startRight = window.innerWidth - r.right
    const startBottom = window.innerHeight - r.bottom
    const move = (ev: MouseEvent) => {
      posRef.current = {
        right: startRight - (ev.clientX - sx),
        bottom: startBottom - (ev.clientY - sy),
      }
      clamp()
    }
    const up = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', right: 16, bottom: 16, zIndex: 2147483646,
          background: 'rgba(250,249,247,.78)', border: '.5px solid rgba(255,255,255,.6)',
          borderRadius: 10, padding: '8px 14px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          font: '11.5px/1.4 ui-sans-serif,system-ui,sans-serif',
          color: '#29261b', cursor: 'pointer',
          boxShadow: '0 12px 40px rgba(0,0,0,.18)',
        }}
        aria-label="Open theme tweaks"
      >
        Tweaks
      </button>
    )
  }

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed', right: posRef.current.right, bottom: posRef.current.bottom,
        zIndex: 2147483646, width: 280,
        background: 'rgba(250,249,247,.78)', color: '#29261b',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '.5px solid rgba(255,255,255,.6)', borderRadius: 14,
        boxShadow: '0 1px 0 rgba(255,255,255,.5) inset, 0 12px 40px rgba(0,0,0,.18)',
        font: '11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 8px 10px 14px', cursor: 'move', userSelect: 'none' }}
        onMouseDown={onDragStart}
      >
        <b style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.01em' }}>Tweaks</b>
        <button
          style={{ appearance: 'none', border: 0, background: 'transparent', color: 'rgba(41,38,27,.55)', width: 22, height: 22, borderRadius: 6, cursor: 'pointer', fontSize: 13, lineHeight: 1 }}
          aria-label="Close tweaks"
          onMouseDown={e => e.stopPropagation()}
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
      {/* Body */}
      <div style={{ padding: '2px 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Color section */}
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(41,38,27,.45)', paddingTop: 0 }}>
          Color pairing
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ fontSize: '11.5px', color: 'rgba(41,38,27,.72)', fontWeight: 500 }}>Field / accent</div>
          <div style={{ display: 'flex', gap: 6 }} role="radiogroup">
            {PAIRS.map(([bg, accent], i) => (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={i === pairIdx}
                aria-label={PAIR_NAMES[i]}
                title={PAIR_NAMES[i]}
                onClick={() => setPairIdx(i)}
                style={{
                  position: 'relative', flex: 1, minWidth: 0, height: 46, padding: 0, border: 0,
                  borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                  background: bg,
                  boxShadow: i === pairIdx
                    ? '0 0 0 1.5px rgba(0,0,0,.85), 0 2px 6px rgba(0,0,0,.15)'
                    : '0 0 0 .5px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06)',
                }}
              >
                <span style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '34%', display: 'flex', flexDirection: 'column', boxShadow: '-1px 0 0 rgba(0,0,0,.1)', background: accent }} />
                {i === pairIdx && (
                  <svg viewBox="0 0 14 14" aria-hidden="true" style={{ position: 'absolute', top: 6, left: 6, width: 13, height: 13, filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.3))' }}>
                    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" stroke={isLight(bg) ? 'rgba(0,0,0,.78)' : '#fff'} />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Imagery section */}
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(41,38,27,.45)', paddingTop: 10 }}>
          Imagery
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ fontSize: '11.5px', color: 'rgba(41,38,27,.72)', fontWeight: 500 }}>Photographs</div>
          <div style={{ position: 'relative', display: 'flex', padding: 2, borderRadius: 8, background: 'rgba(0,0,0,.06)', userSelect: 'none' }}>
            <div style={{
              position: 'absolute', top: 2, bottom: 2, borderRadius: 6,
              background: 'rgba(255,255,255,.9)', boxShadow: '0 1px 2px rgba(0,0,0,.12)',
              transition: 'left .15s cubic-bezier(.3,.7,.4,1), width .15s',
              left: `calc(2px + ${imagery === 'minimal' ? 0 : 1} * (100% - 4px) / 2)`,
              width: 'calc((100% - 4px) / 2)',
            }} />
            {(['minimal', 'balanced'] as const).map(v => (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={imagery === v}
                onClick={() => setImagery(v)}
                style={{ flex: 1, border: 0, background: 'transparent', fontWeight: 500, minHeight: 22, borderRadius: 6, cursor: 'pointer', padding: '4px 6px', fontSize: '11.5px', position: 'relative', zIndex: 1 }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

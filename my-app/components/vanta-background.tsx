'use client'

import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { useTheme } from 'next-themes'

interface VantaEffect {
  destroy: () => void
}

interface VantaWindow {
  VANTA?: {
    DOTS: (config: Record<string, unknown>) => VantaEffect
  }
  THREE?: unknown
}

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
  const vantaRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  const getConfig = (isDark: boolean) => ({
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: isDark ? 0x206eff : 0x2563eb,
    color2: isDark ? 0x202dff : 0x4f46e5,
    backgroundColor: isDark ? 0x131120 : 0xffffff,
    size: 3,
    spacing: 35,
    showLines: false,
  })

  const initVanta = (isDark: boolean) => {
    const w = window as unknown as VantaWindow
    if (w.VANTA && w.THREE && vantaRef.current) {
      return w.VANTA.DOTS({ el: vantaRef.current, ...getConfig(isDark) })
    }
    return null
  }

  // Re-init when theme changes
  useEffect(() => {
    const isDark = resolvedTheme === 'dark'
    const w = window as unknown as VantaWindow

    if (!w.VANTA || !w.THREE) return

    if (vantaEffect) vantaEffect.destroy()
    const newEffect = initVanta(isDark)
    if (newEffect) setVantaEffect(newEffect)

    return () => {
      newEffect?.destroy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme])

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          const isDark = resolvedTheme === 'dark'
          const effect = initVanta(isDark)
          if (effect) setVantaEffect(effect)
        }}
      />
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
      />
    </>
  )
}
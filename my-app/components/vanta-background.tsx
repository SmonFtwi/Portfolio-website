'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'
import { useTheme } from 'next-themes'

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<VantaEffect | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.THREE && vantaRef.current) {
        // Destroy existing effect if it exists
        if (vantaEffect.current) {
          vantaEffect.current.destroy()
        }

        const isDark = resolvedTheme === 'dark'
        
        vantaEffect.current = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: isDark ? 0x206eff : 0x2563eb,
          color2: isDark ? 0x202dff : 0x4f46e5,
          backgroundColor: isDark ? 0x131120 : 0xffffff,
          size: 2.00,
          spacing: 35.00,
          showLines: false
        })
      }
    }

    // Only init if scripts are available
    if (window.VANTA && window.THREE) {
      initVanta()
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
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
          if (window.VANTA && window.THREE && vantaRef.current && !vantaEffect.current) {
            const isDark = resolvedTheme === 'dark'
            vantaEffect.current = window.VANTA.DOTS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: isDark ? 0x206eff : 0x2563eb,
              color2: isDark ? 0x202dff : 0x4f46e5,
              backgroundColor: isDark ? 0x131120 : 0xffffff,
              size: 3.00,
              spacing: 35.00,
              showLines: false
            })
          }
        }}
      />
      <div 
        ref={vantaRef} 
        className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
      />
    </>
  )
}

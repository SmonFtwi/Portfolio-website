'use client'
//@typescript-eslint/no-explicit-any
import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { useTheme } from 'next-themes'

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const initVanta = () => {
      const windowAny = window as any
      if (windowAny.VANTA && windowAny.THREE && vantaRef.current) {
        // Destroy existing effect if it exists before creating a new one
        if (vantaEffect) {
          vantaEffect.destroy()
        }

        const isDark = resolvedTheme === 'dark'
        
        const newEffect = windowAny.VANTA.DOTS({
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
        
        setVantaEffect(newEffect)
      }
    }

    // Only init if scripts are available
    const windowAny = window as any
    if (windowAny.VANTA && windowAny.THREE) {
      initVanta()
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
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
          // Trigger a re-render or initial init
          const windowAny = window as any
          if (windowAny.VANTA && windowAny.THREE && vantaRef.current && !vantaEffect) {
            const isDark = resolvedTheme === 'dark'
            setVantaEffect(windowAny.VANTA.DOTS({
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
            }))
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

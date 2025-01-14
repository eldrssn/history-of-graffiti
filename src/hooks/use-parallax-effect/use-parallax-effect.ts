import { useEffect, useRef, useState } from 'react'

export const useParallaxEffect = (speed: number = 0.3) => {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const elementTop = rect.top

      const isVisible = elementTop < window.innerHeight && elementTop + rect.height > 0

      if (isVisible) {
        setOffsetY(window.scrollY * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return { offsetY, elementRef }
}

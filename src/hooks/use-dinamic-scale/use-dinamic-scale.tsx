import { useEffect, useState } from 'react'

export const useDynamicScale = (baseWidth: number, minWidth: number, maxWidth: number) => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const clampedWidth = Math.min(maxWidth, Math.max(minWidth, screenWidth))
      const newScale = clampedWidth / baseWidth
      setScale(newScale)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [baseWidth, minWidth, maxWidth])

  return scale
}

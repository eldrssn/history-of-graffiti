import { RefObject, useEffect, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  once?: boolean
}

export const useInView = (
  ref: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = '0px', once = false }: UseInViewOptions = {}
) => {
  const [isInView, setIsInView] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            if (once) {
              setHasIntersected(true)
            }
          } else if (!once) {
            setIsInView(false)
          }
        })
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold, root, rootMargin, once])

  return once ? hasIntersected : isInView
}

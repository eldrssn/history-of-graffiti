import { ReactNode } from 'react'

export interface ImageContainerProps {
  src: string
  alt: string
  caption?: string
  children: ReactNode
  offset?: string
  rotate?: number
  side?: string
}

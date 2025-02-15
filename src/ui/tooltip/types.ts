import { ReactNode } from 'react'

export interface TooltipProps {
  content: ReactNode
  children: ReactNode
  href?: string
  isRight?: boolean
  isFull?: boolean
}

export type TooltipStyleType = {
  $visible?: boolean
  $isLink?: boolean
  $exiting?: boolean
  $isRight?: boolean
  $isFull?: boolean
}

import { FC, PropsWithChildren } from 'react'

import { FullPeriodPaint } from '@components'

import { YearTitleProps } from './types.ts'
import { Year } from './year-title.styled.ts'

export const YearTitle: FC<PropsWithChildren<YearTitleProps>> = ({ children }) => {
  return (
    <Year>
      <FullPeriodPaint />
      {children}
    </Year>
  )
}

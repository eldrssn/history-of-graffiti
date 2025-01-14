import { FC, PropsWithChildren } from 'react'

import { PeriodPaint } from '@components'

import { YearTitleProps } from './types.ts'
import { Year } from './year-title.styled.ts'

export const YearTitle: FC<PropsWithChildren<YearTitleProps>> = ({ children }) => {
  return (
    <Year>
      <PeriodPaint />
      {children}
    </Year>
  )
}

import { FC, PropsWithChildren } from 'react'

import { YearTitle } from './components'
import { YearInfoPropsNamespace } from './types'
import { ArtWrapper, Info, InfoWrapper, YearInfoStyled } from './year-info.styled'

export const YearInfo: FC<PropsWithChildren> & YearInfoPropsNamespace = ({ children }) => {
  return <YearInfoStyled>{children}</YearInfoStyled>
}

YearInfo.InfoWrapper = InfoWrapper
YearInfo.YearTitle = YearTitle
YearInfo.Info = Info
YearInfo.ArtWrapper = ArtWrapper

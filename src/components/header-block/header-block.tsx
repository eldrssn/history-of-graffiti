import { FC, PropsWithChildren } from 'react'

import { YearTitle } from './components'
import {
  ArtWrapper,
  HeaderBlockStyled,
  Info,
  InfoTitle,
  InfoWrapper,
  TagsItem,
  TagsItemText,
  TagsItemTitle,
  TagsList,
} from './header-block.styled'
import { HeaderBlockPropsNamespace } from './types'

export const HeaderBlock: FC<PropsWithChildren> & HeaderBlockPropsNamespace = ({ children }) => {
  return <HeaderBlockStyled>{children}</HeaderBlockStyled>
}

HeaderBlock.InfoWrapper = InfoWrapper
HeaderBlock.YearTitle = YearTitle
HeaderBlock.Info = Info
HeaderBlock.ArtWrapper = ArtWrapper
HeaderBlock.InfoTitle = InfoTitle
HeaderBlock.TagsList = TagsList
HeaderBlock.TagsItem = TagsItem
HeaderBlock.TagsItemTitle = TagsItemTitle
HeaderBlock.TagsItemText = TagsItemText

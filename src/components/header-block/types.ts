import { YearTitle } from './components'
import {
  ArtWrapper,
  Info,
  InfoTitle,
  InfoWrapper,
  TagsItem,
  TagsItemText,
  TagsItemTitle,
  TagsList,
} from './header-block.styled'

export interface HeaderBlockPropsNamespace {
  InfoWrapper: typeof InfoWrapper
  YearTitle: typeof YearTitle
  Info: typeof Info
  ArtWrapper: typeof ArtWrapper
  InfoTitle: typeof InfoTitle
  TagsList: typeof TagsList
  TagsItem: typeof TagsItem
  TagsItemTitle: typeof TagsItemTitle
  TagsItemText: typeof TagsItemText
}

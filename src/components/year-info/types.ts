import { YearTitle } from './components'
import { ArtWrapper, Info, InfoWrapper } from './year-info.styled.ts'

export interface YearInfoPropsNamespace {
  InfoWrapper: typeof InfoWrapper
  YearTitle: typeof YearTitle
  Info: typeof Info
  ArtWrapper: typeof ArtWrapper
}

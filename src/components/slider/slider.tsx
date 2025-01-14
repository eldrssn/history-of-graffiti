import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import { getSliderList } from './constants'
import * as S from './slider.styled'
import { getRandomAnimationType } from './utils'

export const Slider: FC = () => {
  const { isMobile } = useCheckDevice()
  const list = getSliderList(isMobile)

  return (
    <S.Wrapper>
      {list.map(({ img, translate, scale, rotate }, i) => (
        <S.Item key={i}>
          <S.Image
            src={img}
            style={{ translate, scale, rotate }}
            animationType={getRandomAnimationType()}
            delay={i * 0.3}
          />
        </S.Item>
      ))}
    </S.Wrapper>
  )
}

export default Slider

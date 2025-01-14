import { FC, useEffect, useState } from 'react'

import { useCheckDevice } from '@hooks'
import promoBackground from '@images/promo-bg.png'
import sprayCan from '@images/spray-can.png'

import { PromoPaint, PromoSmallPaint } from '../paints'
import { SpraySequence } from '../sequences'
import * as S from './promo.styled'
import { PromoProps } from './types'

const IMG_CAN_OFFSET = -0.03

export const Promo: FC<PromoProps> = ({ active }) => {
  const { isMobile } = useCheckDevice()
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const moveX = (e.clientX - centerX) * IMG_CAN_OFFSET
      const moveY = (e.clientY - centerY) * IMG_CAN_OFFSET

      setOffsetX(moveX)
      setOffsetY(moveY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <S.Wrapper>
      <SpraySequence width={960} height={460} />
      <S.Header>Искусство на стенах</S.Header>
      <S.Subheader>Краткая история граффити</S.Subheader>
      <S.ImagesWrapper>
        <S.PromoBackground src={promoBackground} />
        <S.PromoSprayCan
          src={sprayCan}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
        />
        <S.PromoBurger />
      </S.ImagesWrapper>
      <S.Description>
        От Корнбреда и Баскии до Покраса Лампаса и Бэнкси. Рассказываем, как развивалась культура граффити и как
        выиграть поездку в Сеул от{' '}
        <S.Link href="https://vkusnoitochka.ru/superbox" target="_black">
          «Вкусно — и точка»
        </S.Link>
        .
      </S.Description>

      {isMobile ? <PromoSmallPaint active={active} /> : <PromoPaint active={active} />}
    </S.Wrapper>
  )
}

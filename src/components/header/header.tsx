import { FC } from 'react'

import logoLifehacker from '@images/logo-lifehacker.svg'
import logoMac from '@images/logo-mac.svg'

import { SOCIAL_LIST } from './constants'
import * as S from './header.styled'

export const Header: FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Link href="https://lifehacker.ru/" target="_blank">
          <S.LogoLifehacker src={logoLifehacker} />
        </S.Link>
        <S.SocialList>
          {SOCIAL_LIST.map(({ url, icon }) => (
            <S.SocialLink href={url} target="_blank" key={url}>
              <S.SocialItem src={icon} />
            </S.SocialLink>
          ))}
        </S.SocialList>
        <S.Link href="https://vkusnoitochka.ru/superbox" target="_blank">
          <S.LogoMac src={logoMac} />
        </S.Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header

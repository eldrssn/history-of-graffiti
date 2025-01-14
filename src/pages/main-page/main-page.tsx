import { FC, useEffect, useState } from 'react'

import {
  EightiesBlock,
  Footer,
  Header,
  Integration,
  PageFooter,
  Promo,
  SixtiesBlock,
  Slider,
  ZerosBlock,
} from '@components'

import * as S from './main-page.styled'

export const MainPage: FC = () => {
  const [active, setActive] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true)
    }, 700)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Header />
      <S.MainPage>
        <Promo active={active} />
        <SixtiesBlock />
        <Integration />
        <EightiesBlock />
        <Slider />
        <ZerosBlock />
        <Footer />
        <PageFooter />
        <S.ButtonUp type="button" onClick={scrollToTop} $visible={showButton} />
      </S.MainPage>
    </>
  )
}

export default MainPage

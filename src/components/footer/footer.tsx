import { FC } from 'react'

import { ButtonBig } from '@app/ui'
import { useCheckDevice } from '@hooks'
import krid1Img from '@images/main/krid1.png'

import * as S from './footer.styled'

export const Footer: FC = () => {
  const { isMobile } = useCheckDevice()

  return (
    <S.Container>
      <S.Wrapper>
        <S.TextBlock>
          {isMobile ? (
            <S.SVGShake
              style={{ position: 'absolute', top: '-10rem', left: '0rem' }}
              width="30rem"
              height="25rem"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.75 7.45787C21.5994 7.45787 15.5601 7.01638 9.36777 8.34052C6.00014 9.06064 6.20445 9.33787 6.83494 12.6387C7.48649 16.0497 7.45197 19.5472 7.71759 23.0003"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M14.7046 2.61262C14.471 2.40409 14.2475 2.39078 13.9397 2.40932C11.2157 2.57342 8.31426 2.84636 5.64927 3.4484C4.40822 3.72877 2.75027 4.38177 2.12837 5.60563C1.39918 7.04062 1.94838 9.37586 1.94838 10.9479"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          ) : (
            <S.SVGShake
              style={{ position: 'absolute', top: '-20rem', left: '-20rem' }}
              width="39rem"
              height="52rem"
              viewBox="0 0 39 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.13577 50C7.13577 37.8645 6.28746 25.9488 8.83176 13.7312C10.2155 7.08673 10.7481 7.48985 17.0905 8.73382C23.6448 10.0194 30.365 9.95125 37 10.4753"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2.41642 27C2.00154 26.5491 1.97505 26.1178 2.01194 25.5238C2.33843 20.2671 2.88146 14.6678 4.07927 9.52486C4.63708 7.12986 5.93627 3.93033 8.37123 2.73017C11.2262 1.32298 15.8724 2.38284 19 2.38284"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          )}
          <S.Text>
            Запуск новой коллекции{' '}
            <S.Link href="https://vkusnoitochka.ru/superbox" target="_black">
              <S.Bold>«</S.Bold>Вкусно — и точка<S.Bold>»</S.Bold>
            </S.Link>{' '}
            поддержит креативной коллаборацией с Московским музеем современного искусства. Вместе они проведут open-call
            для уличных художников.
            <br /> Райтер-победитель получит приз и распишет арку в Ермолаевском переулке.
          </S.Text>
          {!isMobile && (
            <S.SVGShake
              style={{ position: 'absolute', bottom: '30rem', right: '-40rem' }}
              width="162rem"
              height="68rem"
              viewBox="0 0 111 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M109.465 45.3132C105.922 41.2977 99.4305 38.6844 94.8432 36.4046C81.4044 29.7257 67.4553 23.8849 53.4956 18.3937C39.9295 13.0573 26.2714 7.83892 11.567 7.83892C8.53617 7.83892 5.49455 7.90938 2.46474 7.83892C-2.47688 7.724 13.6516 2.96373 14.9562 2.80362C22.3957 1.89058 29.9361 1.7908 37.4214 1.73846C39.0046 1.72739 43.0748 1.73846 38.6802 1.73846C30.0325 1.73846 21.3761 1.62161 12.729 1.73846C1.05316 1.89624 18.345 12.8213 21.2503 14.5204C28.7511 18.907 37.8644 21.4003 44.9743 26.1403"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          )}
          <ButtonBig href="https://vkusnoitochka.ru/superbox">Узнать больше</ButtonBig>
        </S.TextBlock>
        <S.ImageBlock>
          <S.Logo />
          {isMobile ? (
            <S.SVGShake
              style={{
                position: 'absolute',
                top: '-10rem',
                right: '-30rem',
                maxWidth: 'unset',
                zIndex: 1,
                pointerEvents: 'none',
              }}
              width="293rem"
              height="318rem"
              viewBox="0 0 293 318"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.8042 33.5267C3.46037 30.5083 3.44978 27.3079 3.50228 24.2368C3.60742 18.0863 3.52913 11.9293 3.52913 5.77798C3.52913 5.28942 3.47206 3.69009 3.63653 3.05278C3.96857 1.76611 6.35321 2.12373 7.18063 2.11305C19.5717 1.95317 31.9746 2.11305 44.3669 2.11305"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M9.81185 29.9019C9.81185 26.604 9.82661 23.3058 9.79842 20.008C9.77504 17.2722 9.72358 14.5375 9.57021 11.8055C9.5201 10.913 9.26381 9.74324 9.38226 8.82523C9.63024 6.90341 18.1681 7.67326 18.6721 7.67072C27.7198 7.62508 36.7688 7.67072 45.8167 7.67072"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M276.096 5.90872C277.214 5.90872 279.38 4.22865 284.652 5.14616C286.583 5.48231 287.971 7.16069 288.11 9.11634C288.603 16.0501 286.803 15.1852 287.779 18.6012"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M279.291 1.53125C281.988 1.69985 284.76 1.4683 287.439 1.76225C288.408 1.86865 289.421 1.9907 290.179 2.57076C291.345 3.46208 291.009 4.4213 291.009 5.88877C291.009 9.66529 291.009 13.4418 291.009 17.2183"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M289.931 290.861C290.032 295.491 290.072 300.113 290.072 304.744C290.072 305.44 290.21 306.563 289.541 307.065C288.45 307.882 286.358 307.822 285.119 307.924C281.589 308.214 278.124 307.988 274.603 307.737"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M291.197 309.003C291.197 310.351 291.215 311.702 291.165 313.05C291.116 314.393 291.156 315.426 289.634 315.722C285.924 316.443 281.788 316.039 278.048 316.026C272.962 316.009 267.876 315.958 262.79 315.894"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M7.93376 289.104C7.93376 293.233 7.92765 297.362 7.93376 301.491C7.93812 304.432 7.66772 307.636 8.08613 310.565C8.17281 311.172 15.075 310.696 15.2018 310.694C22.2412 310.587 29.2799 310.496 36.3202 310.496"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M5.19099 286.771C4.92388 287.573 4.81549 288.379 4.69579 289.217C4.3167 291.871 3.86751 294.503 3.43112 297.148C2.74334 301.316 2.66576 305.519 2.59309 309.734C2.58568 310.163 2.25764 313.193 2.70736 313.406C3.39545 313.732 4.18148 313.795 4.93196 313.924C7.69575 314.396 10.7247 314.772 13.4799 315.036C21.2316 315.779 28.9588 315.896 36.7315 316.118"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M45.8167 24.5973C49.4838 24.604 53.7628 26.7609 57.0094 28.0894C66.5204 31.9812 75.8311 36.5144 84.9668 41.2111C93.845 45.7753 102.704 50.4403 109.352 58.0027C110.723 59.5615 112.062 61.1576 113.468 62.684C115.761 65.1735 110.917 54.7264 110.41 53.9831C107.516 49.7441 104.158 45.821 100.8 41.9477C100.09 41.1284 98.2441 39.0401 100.231 41.3003C104.141 45.7478 108.115 50.1469 111.964 54.6469C117.162 60.7231 103.725 56.7695 101.538 56.0435C95.8906 54.1692 90.4879 50.6096 84.8355 49.096"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          ) : (
            <S.SVGShake
              style={{
                position: 'absolute',
                top: '-50rem',
                right: '-120rem',
                maxWidth: 'unset',
                pointerEvents: 'none',
              }}
              width="634rem"
              height="619rem"
              viewBox="0 0 634 619"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.19983 64.5916C10.4835 58.6869 10.4627 52.4262 10.5654 46.4184C10.7711 34.3865 10.618 22.342 10.618 10.3085C10.618 9.35275 10.5063 6.22407 10.8281 4.97734C11.4776 2.4603 16.1425 3.1599 17.7612 3.13901C42.0011 2.82624 66.2641 3.13901 90.5063 3.13901"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M22.9085 57.5011C22.9085 51.0497 22.9374 44.5975 22.8822 38.1462C22.8365 32.7944 22.7358 27.4446 22.4358 22.1002C22.3377 20.3543 21.8364 18.066 22.0681 16.2701C22.5532 12.5106 39.2552 14.0166 40.2413 14.0116C57.9408 13.9223 75.6428 14.0116 93.3426 14.0116"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M603 10.5631C605.388 10.5631 610.222 6.64284 622.746 9.70352C624.651 10.169 626.029 11.8215 626.231 13.7717C627.985 30.6786 623.813 28.2445 625.856 35.3926"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M609.25 2C614.527 2.32982 619.95 1.87686 625.189 2.45189C627.086 2.66003 629.067 2.8988 630.55 4.03352C632.831 5.77717 632.173 7.65363 632.173 10.5244C632.173 17.9121 632.173 25.2999 632.173 32.6877"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M629.576 568C629.773 577.057 629.851 586.098 629.851 595.158C629.851 596.519 630.121 598.716 628.812 599.698C626.679 601.297 622.585 601.18 620.162 601.379C613.257 601.945 606.478 601.504 599.59 601.012"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M632.052 603.488C632.052 606.126 632.088 608.769 631.991 611.405C631.893 614.033 631.972 616.053 628.995 616.632C621.738 618.043 613.646 617.253 606.33 617.228C596.38 617.194 586.431 617.094 576.482 616.968"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M13.121 564.561C13.121 572.638 13.109 580.716 13.121 588.794C13.1295 594.547 12.6005 600.814 13.419 606.544C13.5886 607.731 27.0908 606.801 27.339 606.797C41.1097 606.587 54.8792 606.41 68.6517 606.41"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M7.75567 560C7.23315 561.568 7.0211 563.145 6.78694 564.784C6.04535 569.975 5.16662 575.125 4.31295 580.299C2.96749 588.452 2.81571 596.674 2.67355 604.919C2.65907 605.759 2.01735 611.686 2.89711 612.103C4.24316 612.741 5.78083 612.865 7.24895 613.116C12.6556 614.041 18.581 614.776 23.9708 615.292C39.135 616.746 54.2512 616.974 69.4565 617.409"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          )}
          <S.ImageWrapper>
            <S.LineLast />
            <S.Image src={krid1Img} alt="Запуск новой коллекции" />
          </S.ImageWrapper>

          <S.StickerBoot />
          <S.StickerIceCream />
          <S.StickerSkate />
        </S.ImageBlock>
      </S.Wrapper>
    </S.Container>
  )
}

export default Footer

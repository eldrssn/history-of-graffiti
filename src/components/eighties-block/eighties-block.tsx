import { FC, useRef } from 'react'

import { ImageContainer, Tooltip } from '@app/ui'
import { useCheckDevice, useInView } from '@hooks'
import canTag from '@images/can-tag.png'
import headerLineSVG from '@images/header1Line.svg'
import img15 from '@images/img15.png'
import berlinImg from '@images/main/berlin.webp'
import cartoonImg from '@images/main/cartoon.webp'
import manImg from '@images/main/man.webp'
import pipeImg from '@images/main/pipe.webp'
import wallImg from '@images/main/wall.webp'
import wall2Img from '@images/main/wall2.webp'
import windowImg from '@images/main/window.webp'
import push2SVG from '@images/push2.svg'
import push5SVG from '@images/push5.svg'
import sparkle1 from '@images/sparkle1.png'
import sparkle2 from '@images/sparkle2.png'
import sparkle3 from '@images/sparkle3.png'
import tagArrow from '@images/tag-arrow.png'
import verticalTag from '@images/vertical-tag.png'

import { HeaderBlock } from '../header-block'
import { YearInfo } from '../year-info'
import * as S from './eighties-block.styled'
import { EightiesBlockProps } from './types'

export const EightiesBlock: FC<EightiesBlockProps> = () => {
  const { isMobile } = useCheckDevice()

  const svgRef = useRef<SVGSVGElement | null>(null)
  const rootMargin = `0px 0px ${isMobile ? '-25%' : '-10%'} 0px`

  const isInView = useInView(svgRef, { threshold: 0.3, rootMargin, once: true })

  return (
    <S.Wrapper>
      <HeaderBlock>
        <HeaderBlock.InfoWrapper>
          <HeaderBlock.YearTitle>1980-1990-е</HeaderBlock.YearTitle>
          <HeaderBlock.InfoTitle>Берлинская стена и вандализм</HeaderBlock.InfoTitle>

          <HeaderBlock.Info>
            Граффити распространяется по всему миру и постепенно проникает в художественные галереи. Но отношения
            райтеров с властями всё ещё напряжённые.
          </HeaderBlock.Info>

          <HeaderBlock.TagsList>
            <HeaderBlock.TagsItem>
              <HeaderBlock.TagsItemTitle>Стили</HeaderBlock.TagsItemTitle>
              <HeaderBlock.TagsItemText>
                <Tooltip content="Бразильские граффити. Их отличают загадочный стиль написания и труднодоступные «холсты» — мосты, крыши, верхние этажи зданий.">
                  <span>Pixacao,</span>
                </Tooltip>{' '}
                <br />
                <Tooltip content="Граффити по заготовленному трафарету. Можно рисовать быстро и везде.">
                  <span>трафареты,</span>
                </Tooltip>{' '}
                <br />
                <Tooltip content="Граффити на стыке изобразительного искусства и поп-культуры. Характерны яркие цвета и заимствование образов из рекламы, комиксов и кино.">
                  <span>поп-арт</span>
                </Tooltip>{' '}
              </HeaderBlock.TagsItemText>
            </HeaderBlock.TagsItem>
            <S.ImageHeaderLine src={headerLineSVG} />
            <HeaderBlock.TagsItem>
              <HeaderBlock.TagsItemTitle>Художники</HeaderBlock.TagsItemTitle>
              <HeaderBlock.TagsItemText>
                Тьери Нуар,
                <br /> Блек ле Рат, <br /> KAWS, <br /> Кит Харинг
              </HeaderBlock.TagsItemText>
            </HeaderBlock.TagsItem>
          </HeaderBlock.TagsList>
        </HeaderBlock.InfoWrapper>

        <HeaderBlock.ArtWrapper>
          <ImageContainer
            src={berlinImg}
            alt="Берлинская стена"
            rotate={-2}
            caption="By Indrajit Das - Own work, CC BY-SA 4.0"
          >
            <S.Image8 src={berlinImg} alt="Берлинская стена" />
          </ImageContainer>
        </HeaderBlock.ArtWrapper>
      </HeaderBlock>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <HeaderBlock.ArtWrapper>
            <ImageContainer src={wall2Img} alt="Берлинская стена" rotate={2} caption={`Enric, CC BY-SA 4.0`}>
              <S.Image9 src={wall2Img} alt="Берлинская стена" />
            </ImageContainer>
          </HeaderBlock.ArtWrapper>
        </YearInfo.ArtWrapper>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1980-е</YearInfo.YearTitle>
          <YearInfo.Info>
            <Tooltip
              content={
                <p>
                  В 1989 году — после падения стены — райтеры активизировались. Восточная сторона в итоге{' '}
                  <Tooltip
                    href="https://www.visitberlin.de/en/east-side-gallery"
                    content="East Side Gallery / Visit Berlin"
                  >
                    <strong>превратилась</strong>
                  </Tooltip>{' '}
                  в галерею под открытым небом — там есть работы 181 художника из 21 страны.{' '}
                </p>
              }
            >
              <span>Берлинская стена</span>
            </Tooltip>{' '}
            — новый холст для райтеров. Например, 5 километров{' '}
            <Tooltip
              href="https://www.eyemagazine.com/blog/post/the-freedom-principle"
              content="East Side Gallery / Visit Berlin"
              isRight
            >
              <strong>закрасил</strong>
            </Tooltip>{' '}
            француз Тьери Нуар.
          </YearInfo.Info>
          {isMobile && (
            <S.SparklesContainer>
              <S.ImageSparkle src={sparkle1} />
              <S.ImageSparkle src={sparkle2} />
              <S.ImageSparkle src={sparkle3} />
            </S.SparklesContainer>
          )}
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1980-е</YearInfo.YearTitle>
          <YearInfo.Info>
            Райтеры Бразилии{' '}
            <Tooltip
              href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-1980s-1990s"
              content="History of graffiti and street art: the 1980s and the 1990s / STRAAT"
              isRight
            >
              <strong>придумывают</strong>
            </Tooltip>{' '}
            свой стиль —{' '}
            <Tooltip
              isFull
              content="Бразильские граффити. Их отличают загадочный стиль написания и труднодоступные «холсты» — мосты, крыши, верхние этажи зданий."
            >
              <span>pixacao</span>
            </Tooltip>
            <S.ImageVerticalTag src={verticalTag} />
          </YearInfo.Info>
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          {!isMobile && (
            <S.SparklesContainer>
              <S.ImageSparkle src={sparkle1} />
              <S.ImageSparkle src={sparkle2} />
              <S.ImageSparkle src={sparkle3} />
            </S.SparklesContainer>
          )}
          <ImageContainer src={wallImg} alt="pixacao" rotate={2} side="left">
            <S.Image10 src={wallImg} alt="pixacao" />
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer
            src={manImg}
            alt="В Париже рисунки трафаретных крыс"
            rotate={-3}
            caption={`Eric Lin from San Francisco, USA, CC BY-SA 2.0`}
          >
            <S.Image11 src={manImg} alt="В Париже рисунки трафаретных крыс" />
          </ImageContainer>
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1981 год</YearInfo.YearTitle>
          <YearInfo.Info>
            Нашествие паразитов! В Париже рисунки трафаретных крыс{' '}
            <Tooltip
              href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-1980s-1990s"
              content="History of graffiti and street art: the 1980s and the 1990s / STRAAT"
            >
              <strong>оставляет</strong>
            </Tooltip>{' '}
            <Tooltip
              content=" Он же Ксавье Проу — отец трафаретного граффити, повлиявший на Бэнкси.
"
            >
              <span>Блек ле Рат</span>
            </Tooltip>
            .
          </YearInfo.Info>
          {isMobile && <S.ImageArrowTag src={tagArrow} />}
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1982 год</YearInfo.YearTitle>
          <YearInfo.Info>
            В США{' '}
            <Tooltip
              href="https://www.letsroam.com/explorer/history-of-street-art/"
              content="The History of Street Art / Let’s Roam"
            >
              <strong>выдвигают</strong>
            </Tooltip>{' '}
            <Tooltip content="Согласно теории, мелкие правонарушения приводят к росту преступности в целом. Поэтому для спокойствия в обществе серьёзно наказывать нужно даже за небольшое хулиганство. Например, за рисунки на зданиях.   ">
              <span>теорию разбитых окон</span>
            </Tooltip>
            . Граффити называют{' '}
            <Tooltip content="Из-за давления властей райтеры стремятся к анонимности. Граффити становится контркультурным и протестным явлением.">
              <span>вандализмом</span>
            </Tooltip>
            .
          </YearInfo.Info>
          <S.ImagePartsTagsPush src={isMobile ? push5SVG : push2SVG} />
          {!isMobile && <S.ImageArrowTag src={tagArrow} />}
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          <ImageContainer src={windowImg} alt="теория разбитых окон" rotate={4}>
            <S.Image12 src={windowImg} alt="теория разбитых окон" />
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer src={pipeImg} alt="мурал" rotate={-3} caption={`By Claude Gardères - Own work, CC BY-SA 4.0`}>
            <S.Image13 src={pipeImg} alt="мурал" />
          </ImageContainer>
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1982 год</YearInfo.YearTitle>
          <YearInfo.Info>
            Кит Харинг{' '}
            <Tooltip
              href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-1980s-1990s"
              content="History of graffiti and street art: the 1980s and the 1990s / STRAAT"
            >
              <strong>рисует</strong>
            </Tooltip>{' '}
            свой первый{' '}
            <Tooltip content="Вид монументальной живописи на стенах зданий (от исп. muro — «стена»).">
              <span>мурал</span>
            </Tooltip>{' '}
            в стиле поп-арт на{' '}
            <Tooltip
              content="Стена на Бауэри-стрит — ныне культовая для уличных художников локация и местная достопримечательность.
"
            >
              <span>стене в Манхэттене</span>
            </Tooltip>
            .
          </YearInfo.Info>
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1990-е</YearInfo.YearTitle>
          <YearInfo.Info>
            Первые граффити в Нью-Йорке от{' '}
            <Tooltip
              content={
                <p>
                  Он же Брайан Доннелли, в будущем — модный дизайнер и{' '}
                  <Tooltip
                    href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-1980s-1990s"
                    content="History of graffiti and street art: the 1980s and the 1990s / STRAAT"
                  >
                    <strong>создатель</strong>
                  </Tooltip>{' '}
                  серии оригинальных игрушек c X на руках и глазах.
                </p>
              }
            >
              <span>KAWS</span>
            </Tooltip>
          </YearInfo.Info>
          <S.Svg
            ref={svgRef}
            $active={isInView}
            style={{ marginTop: '-20rem' }}
            width="544rem"
            height="38rem"
            viewBox="0 0 544 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 35.4082C144.271 34.8564 285.542 34.4025 426.814 34.3416C463.001 34.326 499.188 34.3416 535.375 34.3416C537.311 34.3416 539.247 34.3416 541.183 34.3416C544.936 34.3416 533.676 34.3878 529.924 34.3416C440.191 33.236 350.485 27.1882 260.892 22.4899C238.014 21.2903 214.789 20.8346 191.974 18.4011C183.749 17.5237 185.033 17.1777 193.693 16.8012C208.161 16.1721 241.153 15.8678 252.595 15.7345C264.289 15.5983 275.983 15.5035 287.676 15.379C296.526 15.2847 305.827 17.7037 314.224 14.9049C315.614 14.4416 311.302 14.6717 309.839 14.6086C301.584 14.2528 289.248 14.1049 281.987 13.9568C218.189 12.6548 154.264 10.9884 90.5836 6.72726C86.5507 6.4574 82.5176 6.17296 78.4949 5.77913C76.4436 5.57831 70.6542 5.48593 72.4506 4.47545C77.0254 1.90212 96.9304 3.47951 98.939 3.46806C195.663 2.91693 292.401 3.40881 389.126 3.40881"
              stroke="#FB471F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </S.Svg>
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          <ImageContainer src={cartoonImg} alt="KAWS" rotate={3}>
            <S.Image14 src={cartoonImg} alt="KAWS" />
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>
      <YearInfo>
        <YearInfo.ArtWrapper>
          <S.Image15 src={img15} alt=" MTV Russia" />
          <S.ImageCanTag src={canTag} />

          {isMobile ? (
            <S.SVGShake
              style={{ position: 'absolute', top: '10rem', left: '-15rem' }}
              width="258rem"
              height="201rem"
              viewBox="0 0 258 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2491 30.7408C18.7984 25.2681 26.1907 19.494 33.6558 13.8685C34.4854 13.2433 44.0079 6.08077 45.9906 4.63252C47.3791 3.61826 50.8151 0.802168 47.1886 5.0195C37.0405 16.8207 26.2086 27.8386 15.8857 39.435C13.3092 42.3294 5.95846 49.5223 9.54083 49.5223C12.8271 49.5223 15.9691 47.9162 19.1469 46.9424C28.0039 44.2284 43.5919 38.2143 53.0454 37.3969C68.5351 36.0576 56.238 49.5853 54.0659 56.5396C53.9426 56.9344 54.1329 57.7811 54.4874 57.7005C55.75 57.4136 56.8196 56.4258 57.926 55.6624C67.1832 49.2748 76.003 42.1347 85.4575 36.107C91.602 32.1895 95.9244 29.6418 102.34 27.0516C104.042 26.3644 108.362 24.6243 107.731 26.5872C106.38 30.7952 102.617 33.3276 99.8998 36.5197C91.9537 45.8536 83.8945 55.0586 75.9845 64.434C72.3205 68.7767 61.5072 81.3605 66.2232 78.7265C69.2803 77.019 78.1255 70.0836 79.6672 68.8713C90.9965 59.9628 102.067 50.6212 113.299 41.5505C115.358 39.8879 117.364 38.1265 119.511 36.6229C120.167 36.164 121.089 35.1055 121.663 35.6942C122.219 36.2648 121.371 37.4114 121.02 38.1709C119.949 40.4844 118.661 42.6532 117.426 44.8527C112.711 53.2474 109.889 57.7408 104.847 66.1883C102.777 69.6568 100.672 73.0987 98.6575 76.611C96.6303 80.1444 93.9225 83.4596 93.1113 87.6012C92.818 89.0982 95.8409 87.5277 97.0158 86.8273C98.6245 85.8681 112.124 76.9258 112.368 76.7658C118.052 73.0319 123.753 69.2898 129.494 65.6723C130.986 64.7322 132.486 63.8087 133.998 62.9118C134.696 62.4974 136.393 61.2649 136.261 62.1637C136.082 63.374 134.258 66.4037 134.065 66.7301C131.806 70.5416 130.042 73.1454 127.187 76.5336C122.88 81.6453 118.287 85.5643 112.678 88.3236"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M74.9756 188.563C126.72 192.223 178.34 194.562 230.212 194.911"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path d="M117.114 198.14H174.823" stroke="white" stroke-width="5" strokeLinecap="round" />
              <path
                d="M213.581 9.21533C224.953 10.4848 236.305 11.7634 247.725 12.5175C251.259 12.7509 256.147 11.5297 255.291 16.2045C253.487 26.0582 250.323 35.7571 248.206 45.5717"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M34.8827 143.917C32.8152 147.208 29.5168 149.864 26.598 152.683"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M45.037 149.04C42.2012 152.379 39.2409 155.648 36.4352 159.003"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M8.79846 134.033C8.85488 137.515 8.85464 140.041 9.25073 143.813C10.3 153.806 10.9071 167.695 19.017 175.062C27.5353 182.799 41.9463 177.333 51.4927 174.964"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </S.SVGShake>
          ) : (
            <S.SVGShake
              style={{ position: 'absolute', left: '30rem', bottom: '30rem' }}
              width="435rem"
              height="312rem"
              viewBox="0 0 435 312"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.188 46.8106C61.0122 38.239 72.5904 29.1952 84.2827 20.3842C85.582 19.405 100.497 8.18664 103.602 5.9183C105.777 4.32972 111.159 -0.0810142 105.478 6.52442C89.584 25.0081 72.6184 42.2651 56.4501 60.4279C52.4146 64.9613 40.9015 76.2272 46.5124 76.2272C51.6596 76.2272 56.5807 73.7117 61.558 72.1865C75.4303 67.9356 99.8451 58.5159 114.652 57.2357C138.913 55.1381 119.652 76.3259 116.25 87.2181C116.057 87.8364 116.355 89.1626 116.91 89.0364C118.888 88.587 120.563 87.0399 122.296 85.8442C136.795 75.8395 150.609 64.6563 165.417 55.2154C175.041 49.0796 181.811 45.0893 191.86 41.0324C194.526 39.956 201.291 37.2305 200.304 40.305C198.187 46.8957 192.294 50.8622 188.038 55.8619C175.592 70.4811 162.969 84.8986 150.58 99.5827C144.842 106.385 127.905 126.094 135.292 121.968C140.08 119.294 153.934 108.432 156.348 106.533C174.093 92.5798 191.433 77.9485 209.025 63.7413C212.25 61.1373 215.391 58.3784 218.754 56.0235C219.781 55.3047 221.226 53.6468 222.125 54.5689C222.996 55.4625 221.668 57.2585 221.117 58.448C219.441 62.0715 217.423 65.4685 215.488 68.9135C208.104 82.0618 203.684 89.0995 195.786 102.33C192.544 107.763 189.248 113.154 186.092 118.655C182.917 124.189 178.676 129.382 177.405 135.869C176.946 138.213 181.681 135.754 183.521 134.656C186.04 133.154 207.184 119.148 207.566 118.897C216.469 113.049 225.398 107.188 234.391 101.522C236.727 100.05 239.077 98.6034 241.444 97.1987C242.538 96.5496 245.196 94.6191 244.989 96.0269C244.709 97.9225 241.852 102.668 241.549 103.179C238.011 109.149 235.248 113.227 230.777 118.534C224.031 126.54 216.836 132.678 208.052 137"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M149 294C230.045 299.733 310.895 303.397 392.139 303.943"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path d="M215 309H305.386" stroke="white" strokeWidth="5" strokeLinecap="round" />
              <path
                d="M366.091 13.0962C383.904 15.0845 401.683 17.0871 419.57 18.2683C425.105 18.6338 432.761 16.7211 431.421 24.043C428.595 39.4765 423.639 54.6674 420.323 70.0396"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M46.1863 192C45.6169 198.06 42.8784 204.102 40.7856 210.103"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M64 192C62.3901 198.67 60.5565 205.329 59 212"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M2.73798 196.581C5.27382 201.411 7.05502 204.942 10.2702 209.938C18.7873 223.171 29.435 242.165 45.9728 246.745C63.3432 251.555 79.6389 233.745 91.3167 223.696"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </S.SVGShake>
          )}
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>1998 год</YearInfo.YearTitle>
          <YearInfo.Info>
            MTV Russia{' '}
            <Tooltip
              href="https://artguide.com/posts/2737"
              content=" Российские граффити и их региональные особенности / «Артгид»"
            >
              <strong>начинает</strong>
            </Tooltip>{' '}
            вещание. Граффити в России набирает популярность — спасибо клипам Wu-Tang Clan и Nas. Появляется{' '}
            <Tooltip content="«Злой баллончик» стал символом первой отечественной граффити-волны. Его автор — Олег Баскет, уличный художник из Питера.">
              <span>«Злой баллончик»</span>
            </Tooltip>{' '}
            — первый местный граффити-мем.
          </YearInfo.Info>
        </YearInfo.InfoWrapper>
      </YearInfo>
    </S.Wrapper>
  )
}

export default EightiesBlock

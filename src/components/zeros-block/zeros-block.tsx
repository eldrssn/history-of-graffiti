import { FC } from 'react'

import { ImageContainer, Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'
import flash1 from '@images/flash1.png'
import flash2 from '@images/flash2.png'
import flash3 from '@images/flash3.png'
import gangstaImg from '@images/main/gangsta.webp'
import krid2Img from '@images/main/krid2.webp'
import ladyImg from '@images/main/lady.webp'
import muralImg from '@images/main/mural.webp'
import obeyImg from '@images/main/obey.webp'
import octoberImg from '@images/main/october.webp'
import roadImg from '@images/main/road.webp'
import spbImg from '@images/main/spb.webp'

import { HeaderBlock } from '../header-block'
import { EyesSequence } from '../sequences'
import { YearInfo } from '../year-info'
import { ZerosBlockProps } from './types'
import * as S from './zeros-block.styled'

export const ZerosBlock: FC<ZerosBlockProps> = () => {
  const { isMobile } = useCheckDevice()

  return (
    <S.Wrapper>
      <HeaderBlock>
        <HeaderBlock.InfoWrapper>
          <HeaderBlock.YearTitle>2000-2020-е</HeaderBlock.YearTitle>
          <HeaderBlock.InfoTitle>джентрификация и стритстайл</HeaderBlock.InfoTitle>

          <HeaderBlock.Info>
            Отношение к граффити меняется. Рисунки на стенах становятся достопримечательностями, а элементы стиля
            используют в индустрии моды.
          </HeaderBlock.Info>

          <HeaderBlock.TagsList>
            <HeaderBlock.TagsItem>
              <HeaderBlock.TagsItemTitle>Стили</HeaderBlock.TagsItemTitle>
              <HeaderBlock.TagsItemText>
                <Tooltip content="Направление, в котором граффити смешивается с каллиграфией.">
                  <span>Каллиграффити,</span>
                </Tooltip>{' '}
                <br />
                <Tooltip content="Смесь граффити и рекламы в общественных местах.">
                  <span>clean advertising,</span>
                </Tooltip>{' '}
                <br />
                <Tooltip content="Граффити по заготовленному трафарету. Можно рисовать быстро и везде.">
                  <span>трафареты</span>
                </Tooltip>
              </HeaderBlock.TagsItemText>
            </HeaderBlock.TagsItem>

            <HeaderBlock.TagsItem>
              <HeaderBlock.TagsItemTitle>Художники</HeaderBlock.TagsItemTitle>
              <HeaderBlock.TagsItemText>
                Бэнкси, <br /> Шепард Фейри, <br />
                Покрас Лампас
              </HeaderBlock.TagsItemText>
            </HeaderBlock.TagsItem>
          </HeaderBlock.TagsList>
        </HeaderBlock.InfoWrapper>

        <HeaderBlock.ArtWrapper>
          <ImageContainer src={muralImg} alt="2000-2020-е" rotate={0}>
            <S.Image18 src={muralImg} alt="2000-2020-е" />
          </ImageContainer>
        </HeaderBlock.ArtWrapper>
      </HeaderBlock>
      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer
            src={roadImg}
            alt="Берлинская стена для райтеров"
            rotate={-2}
            caption={`Jasdeep-SH, CC-BY-SA-4.0`}
          >
            <S.Img17 src={roadImg} alt="Берлинская стена для райтеров" />
          </ImageContainer>

          <S.SvgPeace
            style={{ marginRight: '90rem', marginTop: '40rem' }}
            width="95rem"
            height="84rem"
            viewBox="0 0 95 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.83902 23.5537C4.84631 33.6697 0.977583 45.9736 4.29603 56.2886C6.19089 62.1786 11.9686 65.7648 17.1472 68.276C33.0797 76.0021 56.7011 73.2297 72.5934 67.2617C80.5722 64.2655 86.8342 59.6082 88.3962 50.6637C90.4323 39.0043 87.275 24.1855 79.5866 15.0703C72.0559 6.14214 58.913 5.4759 48.2988 4.65045C41.2768 4.10437 32.9269 2.97866 26.1385 6.12583C9.5991 13.7936 11.7315 32.725 5.20424 46.7909"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M47 4C47 21.952 51.4113 38.9119 52.4222 56.6897C52.7681 62.7723 51.9135 70.6784 55 76"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M50 37C40.8101 51.1738 34.038 69.0894 22 81"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M53 43C64.7078 52.1788 76.8443 60.5782 89 69"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M9.83902 22.5537C7.84631 32.6697 3.97758 44.9736 7.29603 55.2886C9.19089 61.1786 14.9686 64.7648 20.1472 67.276C36.0797 75.0021 59.7011 72.2297 75.5934 66.2617C83.5722 63.2655 89.8342 58.6082 91.3962 49.6637C93.4323 38.0043 90.275 23.1855 82.5866 14.0703C75.0559 5.14214 61.913 4.4759 51.2988 3.65045C44.2768 3.10437 35.9269 1.97866 29.1385 5.12583C12.5991 12.7936 14.7315 31.725 8.20424 45.7909"
              stroke="#FB471F"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M50 3C50 20.952 54.4113 37.9119 55.4222 55.6897C55.7681 61.7723 54.9135 69.6784 58 75"
              stroke="#FB471F"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M53 36C43.8101 50.1738 37.038 68.0894 25 80"
              stroke="#FB471F"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M56 42C67.7078 51.1788 79.8443 59.5782 92 68"
              stroke="#FB471F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </S.SvgPeace>
        </YearInfo.ArtWrapper>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2000-е</YearInfo.YearTitle>
          <YearInfo.Info>
            «Делай хумус, а не стены». Израильский разделительный барьер —{' '}
            <Tooltip
              href="https://www.letsroam.com/explorer/history-of-street-art/"
              content="History of graffiti and street art: the 2000s and the 2010s / STRAAT"
            >
              <strong>новая</strong>
            </Tooltip>{' '}
            Берлинская стена для райтеров.
          </YearInfo.Info>
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2000 год</YearInfo.YearTitle>
          <YearInfo.Info>
            <Tooltip
              content={
                <p>
                  Бэнкси — человек-загадка. И действует согласно статусу. Так, в 2018 году{' '}
                  <Tooltip
                    href="https://www.sothebys.com/en/articles/sothebys-gets-banksyed-at-contemporary-art-auction-in-london?locale=en"
                    content="Sotheby's Gets Banksy'ed at Contemporary Art Auction in London / Sotheby's"
                  >
                    <strong>уничтожил</strong>
                  </Tooltip>{' '}
                  шредером «Девочку с воздушным шаром» сразу после продажи за миллион фунтов на аукционе Sotheby's.
                </p>
              }
            >
              <span>Бэнкси</span>
            </Tooltip>{' '}
            <Tooltip
              href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-2000s-2010s"
              content="History of graffiti and street art: the 2000s and the 2010s / STRAAT"
            >
              <strong>покрывает</strong>
            </Tooltip>{' '}
            своими первыми трафаретами улицы Лондона и Бристоля.
          </YearInfo.Info>
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          <ImageContainer src={ladyImg} alt="Бэнкси" rotate={-2} caption="Szater, Public domain">
            <S.Image19 src={ladyImg} alt="Бэнкси" />
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer src={obeyImg} alt="OBEY" rotate={-2} caption={`By Daniel Capilla, CC BY-SA 4.0`}>
            <S.Image20 src={obeyImg} alt="OBEY" />
          </ImageContainer>
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2001 год</YearInfo.YearTitle>
          <YearInfo.Info>
            Художник и дизайнер Шепард Фейри{' '}
            <Tooltip
              href="https://www.thoughtco.com/shepard-fairey-quick-facts-183349"
              content="Shepard Fairey / ThoughtCo"
              isRight
            >
              <strong>основывает</strong>
            </Tooltip>{' '}
            бренд уличной одежды{' '}
            <Tooltip content="Лозунг OBEY (от англ. «повинуйся») — пародия на пропаганду и отсылка к культовому фильму «Чужие среди нас».">
              <span>OBEY</span>.
            </Tooltip>
          </YearInfo.Info>
          <EyesSequence width={300} height={180} />
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2010-е</YearInfo.YearTitle>
          <YearInfo.Info>
            Райтеры{' '}
            <Tooltip
              href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-2000s-2010s"
              content="History of graffiti and street art: the 2000s and the 2010s / STRAAT"
            >
              {' '}
              <Tooltip
                href="https://straatmuseum.com/en/blog/history-of-graffiti-and-street-art-2000s-2010s"
                content="«Автограф» райтера, который он оставляет в общественных местах"
              >
                <strong>украшают</strong>
              </Tooltip>
            </Tooltip>{' '}
            <Tooltip content="Облагораживание таких территорий называется джентрификацией. Бывшие промзоны становятся привлекательными жилыми кварталами.">
              <span>индустриальные районы</span>
            </Tooltip>{' '}
            Майами и Нью-Йорка. Туристы мечтают о фото с рисунками.
          </YearInfo.Info>
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          <ImageContainer src={gangstaImg} alt="индустриальные районы" rotate={4}>
            <S.Image21 src={gangstaImg} alt="индустриальные районы" />
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer src={spbImg} alt="Музей стрит-арта" rotate={-4}>
            <S.Image22 src={spbImg} alt="Музей стрит-арта" />
          </ImageContainer>
          {isMobile && (
            <svg
              style={{ position: 'absolute', bottom: 0, right: 0 }}
              width="112rem"
              height="99rem"
              viewBox="0 0 112 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.62842 46.7331C18.7634 35.1882 34.9148 23.6911 51.2904 12.4895C54.1585 10.5275 57.033 8.57484 59.9086 6.62381C61.3476 5.64747 62.7709 4.64694 64.2341 3.70737C64.8475 3.31354 65.5176 2.23809 66.1347 2.62599C67.4222 3.43526 27.1096 55.9442 24.1249 59.9717C22.073 62.7405 20.0497 65.5327 18.1282 68.3934C17.0631 69.979 14.4316 74.079 16.3259 73.833C17.7826 73.6438 19.1223 72.9113 20.4547 72.2929C23.5061 70.8767 39.7574 62.3499 41.1648 61.6102C52.4288 55.6893 63.6645 49.7133 74.8185 43.5872C74.9385 43.5213 83.4406 38.0775 78.3248 42.7352C72.0615 48.4377 65.3686 53.6927 58.6634 58.8576C55.1847 61.5371 44.5769 67.5812 48.9638 67.7708C57.2184 68.1274 68.591 63.3948 76.1293 61.3153C80.6897 60.0572 85.2266 58.7142 89.7939 57.4813C90.6846 57.2409 104.426 53.3935 107.489 53.549C111.948 53.7754 105.356 62.4032 102.902 66.1323C97.4932 74.3488 92.028 82.5456 86.2549 90.5124C84.8342 92.4729 80.8179 98.2681 81.4051 95.9193C81.7956 94.3572 83.1442 93.3863 84.0266 92.1509"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2012 год</YearInfo.YearTitle>
          <YearInfo.Info>
            Граффити — искусство? Да! В Санкт-Петербурге открывают{' '}
            <Tooltip
              content="STRAAT в Амстердаме, StolenSpace Gallery в Лондоне, Galerie F в Чикаго —
галереи и музеи с граффити есть по всему миру. "
            >
              <span>Музей стрит-арта</span>.
            </Tooltip>
          </YearInfo.Info>
        </YearInfo.InfoWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2015 год</YearInfo.YearTitle>
          <YearInfo.Info>
            В России создаётся самое большое{' '}
            <Tooltip isFull content="Направление, в котором граффити смешивается с каллиграфией.">
              <span>каллиграффити</span>
            </Tooltip>{' '}
            на крыше. Покрас Лампас{' '}
            <Tooltip
              href="https://www.sobaka.ru/lifestyle/design/46985"
              content="Покрас Лампас: «Я бросаю вызов академической каллиграфии!» / «Собака»"
              isRight
            >
              <strong>покрывает</strong>
            </Tooltip>{' '}
            краской 1 625 м² бывшей фабрики{' '}
            <Tooltip content="Потрачено 730 л краски. И не зря: это единственное граффити в России, которое видно из космоса!">
              <span>«Красный Октябрь»</span>
            </Tooltip>
            .
          </YearInfo.Info>
        </YearInfo.InfoWrapper>

        <YearInfo.ArtWrapper>
          <ImageContainer src={octoberImg} alt="Покрас Лампас" rotate={3} caption={`Vagant1221, CC BY-SA 4.0`}>
            <S.Image23Wrap>
              <S.Image23 src={octoberImg} alt="Покрас Лампас" />
            </S.Image23Wrap>
          </ImageContainer>
        </YearInfo.ArtWrapper>
      </YearInfo>

      <YearInfo>
        <YearInfo.ArtWrapper>
          <ImageContainer src={krid2Img} alt="«Супер Бокс»" rotate={3}>
            <S.Img24 src={krid2Img} alt="«Супер Бокс»" />
          </ImageContainer>
          <S.FlashesContainer>
            <S.ImageFlash src={flash1} />
            <S.ImageFlash src={flash2} />
            <S.ImageFlash src={flash3} />
          </S.FlashesContainer>
        </YearInfo.ArtWrapper>

        <YearInfo.InfoWrapper>
          <YearInfo.YearTitle>2024 год</YearInfo.YearTitle>
          <YearInfo.Info>
            «Вкусно — и точка» выпускает обновлённый Супер Бокс с Егором Кридом. На упаковке — граффити!
          </YearInfo.Info>
        </YearInfo.InfoWrapper>
      </YearInfo>
    </S.Wrapper>
  )
}

export default ZerosBlock

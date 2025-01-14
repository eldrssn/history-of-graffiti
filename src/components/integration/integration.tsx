import { ButtonBig } from '@app/ui'
import { useCheckDevice } from '@hooks'
import integrationMain from '@images/integration-main.png'

import * as S from './integration.styled'

export const Integration = () => {
  const { isMobile } = useCheckDevice()

  return (
    <S.Container>
      <S.Logo />
      <S.Wrapper>
        <S.TextBlock>
          {isMobile ? (
            <S.SVGShake
              style={{ position: 'absolute', top: '30rem', left: '-0' }}
              width="30rem"
              height="25rem"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.75 7.46006C21.5994 7.46006 15.5601 7.01858 9.36777 8.34272C6.00014 9.06284 6.20445 9.34007 6.83494 12.6409C7.48649 16.0519 7.45197 19.5494 7.71759 23.0024"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M14.7046 2.61506C14.471 2.40653 14.2475 2.39322 13.9397 2.41176C11.2157 2.57586 8.31426 2.8488 5.64927 3.45085C4.40822 3.73121 2.75027 4.38421 2.12837 5.60807C1.39918 7.04306 1.94838 9.37831 1.94838 10.9503"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          ) : (
            <S.SVGShake
              style={{ position: 'absolute', top: '-30rem', left: '-50rem' }}
              width="94rem"
              height="69rem"
              viewBox="0 0 94 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.8969 10.9396C69.5821 10.9396 47.6714 9.33784 25.2054 14.1419C12.9875 16.7545 13.7287 17.7603 16.0162 29.7357C18.38 42.1113 18.2548 54.8001 19.2185 67.328"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M49.1031 2.43135C48.2554 1.6748 47.4446 1.6265 46.3279 1.69377C36.4452 2.28914 25.9185 3.27936 16.2498 5.46361C11.7472 6.48079 5.73211 8.8499 3.47582 13.2901C0.830282 18.4963 2.82283 26.9687 2.82283 32.672"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </S.SVGShake>
          )}
          <S.Text>
            Популярной едой среди первых райтеров были бургеры. Подкрепиться как настоящий стрит-арт-художник можно во{' '}
            <S.Link href="https://vkusnoitochka.ru/superbox" target="_black">
              <S.Bold>«</S.Bold>Вкусно — и точка<S.Bold>»</S.Bold>
            </S.Link>
            . В сентябре там появился обновлённый Супер Бокс в коллаборации с Егором Кридом. Упаковка набора украшена в
            стиле граффити.
          </S.Text>
          <S.Text>
            Внутри уже знакомое комбо продуктов. В Супер Боксе на одного — бургер на выбор (гамбургер, чикенбургер или
            чизбургер), маленький картофель фри или гранд-фри, маленький прохладительный напиток на выбор и вишнёвый
            пирожок. В Супер Боксе для компании — два маленьких снэк-бокса с двумя картошками фри и два прохладительных
            напитка на выбор. Если захочется больше — можно сделать наборы сытнее! А ещё в каждом Супер Боксе есть пак
            из трёх стикеров с кодом на обороте. Регистрируйте его, чтобы получить гарантированный приз и участвовать в
            розыгрыше подарков, среди которых PlayStation 5 и поездка в Сеул.
          </S.Text>
          <ButtonBig href="https://vkusnoitochka.ru/superbox">Выиграть поездку</ButtonBig>
        </S.TextBlock>
        <S.ImageBlock>
          <S.ImageWrapper>
            <S.Image src={integrationMain} />
            {isMobile ? (
              <>
                <S.SVGShake
                  style={{ position: 'absolute', top: '0', bottom: 0, left: '40rem', scale: '1.5', zIndex: '1' }}
                  width="320rem"
                  height="362rem"
                  viewBox="0 0 795 610"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.395 8.09874C181.318 -2.98642 174.223 16.9757 170.728 26.1575C165.867 38.9272 159.094 23.8718 155.232 18.0344C146.139 4.28999 135.664 -5.3186 120.751 8.90434C100.305 28.4054 83.3568 63.8539 83.6548 92.4846C83.7451 101.158 87.6495 99.6283 92.3084 94.6329C92.8054 94.1 102.786 82.7802 102.84 84.6301C103.065 92.2707 96.2408 105.013 93.9184 111.349C80.0886 149.082 67.2799 187.175 53.5349 224.938C44.8918 248.683 34.7752 271.795 25.897 295.427C25.2248 297.216 22.6758 303.743 23.0795 306.571C23.608 310.273 25.3069 306.847 26.9703 308.988"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ zIndex: -1 }}
                  />

                  <path
                    d="M10.9689 434C40.6294 449.807 71.58 463.38 102.027 477.682C105.077 479.115 179.809 512.477 179.095 514.204C178.532 515.564 176.155 514.246 174.708 514.025C170.689 513.409 166.696 512.607 162.733 511.698C135.292 505.402 108.392 497.063 81.5153 488.722C64.2473 483.364 41.5565 475.826 23.6554 471.417C13.9113 469.017 -9.99411 463.146 8.5976 479.711C17.1648 487.345 42.8179 505.515 51.044 511.22C68.6283 523.415 87.6853 538.534 107.481 547.204C108.532 547.665 111.296 548.354 110.92 547.264C109.916 544.355 107.153 542.399 105.051 540.163C94.2161 528.638 81.9779 518.541 70.1331 508.117C69.5592 507.612 57.9565 497.651 56.6166 495.227C52.7732 488.274 72.5266 493.655 80.3297 494.929C114.665 500.533 148.948 507.108 183.659 509.967C189.042 510.41 194.447 510.967 199.844 510.743C202.185 510.646 205.175 510.836 206.661 509.012C207.642 507.808 205.928 505.729 204.705 504.775C198.302 499.785 174.525 488.997 169.847 486.873C136.2 471.594 101.919 457.715 67.2282 445.04C65.4277 444.382 60.0525 442.357 61.8928 442.892C72.7871 446.06 83.4785 450.448 94.0833 454.409C105.092 458.521 121.491 464.757 132.617 468.731C140.152 471.423 160.988 481.059 155.797 474.937C151.593 469.981 145.264 467.35 139.85 463.778C126.606 455.042 113.165 446.501 100.367 437.103C97.448 434.959 87.0067 427.126 84.3609 423.378C77.87 414.182 93.5637 412.121 98.0552 411.443C136.386 405.655 175.412 410.982 213.716 413.591"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </S.SVGShake>
                <S.SVGShake
                  style={{ position: 'absolute', top: '-20rem', bottom: 0, right: '-470rem', scale: '2.4', zIndex: 2 }}
                  width="800rem"
                  height="610rem"
                  viewBox="0 0 795 610"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M113.929 1.76615C112.683 2.31742 112.116 3.22346 111.12 4.2497C98.1511 17.6057 84.8496 30.3758 71.0564 42.4918C61.3101 51.0531 52.019 60.1006 42.6353 69.1893C40.9616 70.8104 36.5005 73.3598 40.2575 69.3821C42.2459 67.277 44.1133 64.9133 45.6962 62.2996C46.1155 61.6072 51.6419 50.9953 47.4703 51.6842C45.0433 52.085 42.8517 54.6464 41.4412 56.6895C39.3953 59.6529 34.8315 67.9023 37.5087 73.4136C40.3631 79.2895 52.1045 74.0352 53.6138 73.5911C63.8362 70.5833 73.5997 66.4129 83.4506 62.4927"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M58.4923 221.695C57.9184 221.508 55.9516 220.48 57.1752 221.406C59.3743 223.071 59.7638 223.306 63.071 224.315C70.5932 226.61 81.2645 229.661 88.321 231.597C93.5584 233.034 98.8007 234.456 104.068 235.78C108.345 236.855 112.916 236.853 117.025 238.454C118.806 239.148 113.254 239.186 111.478 239.887C101.663 243.762 92.5131 249.162 83.8071 255.071C80.461 257.342 43.7093 282.095 52.1483 288.544C54.3026 290.19 59.7507 289.562 62 289.924C67.6393 290.831 53.4502 297.577 48.5834 300.559C37.2962 307.475 30.5118 311.676 19.9534 319.658C12.5336 325.268 8.01725 330.706 1.83232 337.039"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </S.SVGShake>
              </>
            ) : (
              <>
                <S.SVGShake
                  style={{ position: 'absolute', top: '50rem', bottom: 0, left: '60rem', scale: '1.5', zIndex: '1' }}
                  width="800rem"
                  height="610rem"
                  viewBox="0 0 795 610"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.395 8.09874C181.318 -2.98642 174.223 16.9757 170.728 26.1575C165.867 38.9272 159.094 23.8718 155.232 18.0344C146.139 4.28999 135.664 -5.3186 120.751 8.90434C100.305 28.4054 83.3568 63.8539 83.6548 92.4846C83.7451 101.158 87.6495 99.6283 92.3084 94.6329C92.8054 94.1 102.786 82.7802 102.84 84.6301C103.065 92.2707 96.2408 105.013 93.9184 111.349C80.0886 149.082 67.2799 187.175 53.5349 224.938C44.8918 248.683 34.7752 271.795 25.897 295.427C25.2248 297.216 22.6758 303.743 23.0795 306.571C23.608 310.273 25.3069 306.847 26.9703 308.988"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ zIndex: -1 }}
                  />

                  <path
                    d="M10.9689 434C40.6294 449.807 71.58 463.38 102.027 477.682C105.077 479.115 179.809 512.477 179.095 514.204C178.532 515.564 176.155 514.246 174.708 514.025C170.689 513.409 166.696 512.607 162.733 511.698C135.292 505.402 108.392 497.063 81.5153 488.722C64.2473 483.364 41.5565 475.826 23.6554 471.417C13.9113 469.017 -9.99411 463.146 8.5976 479.711C17.1648 487.345 42.8179 505.515 51.044 511.22C68.6283 523.415 87.6853 538.534 107.481 547.204C108.532 547.665 111.296 548.354 110.92 547.264C109.916 544.355 107.153 542.399 105.051 540.163C94.2161 528.638 81.9779 518.541 70.1331 508.117C69.5592 507.612 57.9565 497.651 56.6166 495.227C52.7732 488.274 72.5266 493.655 80.3297 494.929C114.665 500.533 148.948 507.108 183.659 509.967C189.042 510.41 194.447 510.967 199.844 510.743C202.185 510.646 205.175 510.836 206.661 509.012C207.642 507.808 205.928 505.729 204.705 504.775C198.302 499.785 174.525 488.997 169.847 486.873C136.2 471.594 101.919 457.715 67.2282 445.04C65.4277 444.382 60.0525 442.357 61.8928 442.892C72.7871 446.06 83.4785 450.448 94.0833 454.409C105.092 458.521 121.491 464.757 132.617 468.731C140.152 471.423 160.988 481.059 155.797 474.937C151.593 469.981 145.264 467.35 139.85 463.778C126.606 455.042 113.165 446.501 100.367 437.103C97.448 434.959 87.0067 427.126 84.3609 423.378C77.87 414.182 93.5637 412.121 98.0552 411.443C136.386 405.655 175.412 410.982 213.716 413.591"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </S.SVGShake>
                <S.SVGShake
                  style={{ position: 'absolute', top: '70rem', bottom: 0, left: '60rem', scale: '1.45', zIndex: 2 }}
                  width="800rem"
                  height="610rem"
                  viewBox="0 0 795 610"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M793.014 3.22683C790.281 3.25123 788.517 4.4691 785.866 5.56672C751.365 19.8518 716.718 32.7935 681.686 44.1396C656.932 52.1569 632.629 61.4317 608.124 70.7086C603.753 72.3633 593.511 73.5114 603.592 69.1733C608.927 66.8775 614.245 64.0093 619.238 60.4546C620.56 59.5129 639.174 44.3644 630.944 42.3166C626.156 41.1252 620.083 44.0997 615.862 46.7407C609.738 50.5715 594.776 62.1347 595.325 74.4121C595.91 87.5018 621.709 87.1603 624.841 87.5424C646.057 90.1304 667.352 90.2126 688.609 90.8249"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ zIndex: 2 }}
                  />

                  <path
                    d="M597.034 328.76C595.882 328.384 591.938 326.323 594.392 328.181C598.803 331.521 599.584 331.992 606.218 334.016C621.306 338.618 642.71 344.738 656.864 348.621C667.369 351.503 677.884 354.356 688.449 357.011C697.028 359.168 706.197 359.163 714.439 362.376C718.009 363.768 706.874 363.843 703.312 365.25C683.625 373.022 665.272 383.853 647.81 395.705C641.098 400.26 567.382 449.91 584.309 462.846C588.63 466.148 599.558 464.888 604.069 465.614C615.381 467.433 586.92 480.964 577.159 486.945C554.519 500.817 540.911 509.242 519.733 525.254C504.85 536.506 495.791 547.413 483.386 560.117"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </S.SVGShake>
              </>
            )}
          </S.ImageWrapper>
          <S.StickerDrink />
          <S.StickerCamera />
          <S.StickerIceCream />
        </S.ImageBlock>
      </S.Wrapper>
    </S.Container>
  )
}

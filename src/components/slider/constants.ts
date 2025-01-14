import stickerBoot from '@images/sticker-boot.png'
import stickerCamera from '@images/sticker-camera.png'
import stickerDrink from '@images/sticker-drink.png'
import stickerIceCream from '@images/sticker-ice-cream.png'
import stickerPaint from '@images/sticker-paint.png'
import stickerSkate from '@images/sticker-skate.png'

import { ImageType } from './types'

export const getSliderList = (isMobile: boolean): ImageType[] =>
  isMobile
    ? [
        { img: stickerSkate, translate: '-10rem 0', scale: '2', rotate: '15deg' },
        { img: stickerPaint, translate: '15rem -40rem', scale: '1.7', rotate: '20deg' },
      ]
    : [
        { img: stickerSkate, translate: '-40rem 0' },
        { img: stickerCamera, translate: '40rem -60rem', scale: '1.6' },
        { img: stickerPaint, translate: '70rem 0', scale: '1.3' },
        { img: stickerIceCream, translate: '50rem 60rem', scale: '1.2' },
        { img: stickerDrink, translate: '20rem -120rem', rotate: '35deg' },
        { img: stickerBoot, translate: '50rem 0' },
      ]

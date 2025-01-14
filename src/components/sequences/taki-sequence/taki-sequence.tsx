import { FC, memo, useRef } from 'react'

import { useCheckDevice, useDynamicScale, useInView, useSequence } from '@hooks'

import { TakiSequenceStyled, TakiSequenceWrapper } from './taki-sequence.styled'
import { TakiSequenceProps } from './types'

const frames = Array(16)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return `/Taki_380x230_12fps/Taki_380x230_${index}.png`
  })

export const TakiSequence: FC<TakiSequenceProps> = memo(({ width, height }) => {
  const { isMobile } = useCheckDevice()

  const baseWidth = 532
  const minWidth = 320
  const maxWidth = 1920

  const scale = useDynamicScale(baseWidth, minWidth, maxWidth)

  const currentWidth = width * (isMobile ? scale : 1)
  const currentHeight = height * (isMobile ? scale : 1)

  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, {
    threshold: 0.3,
    rootMargin: `0px 0px ${isMobile ? '-25%' : '-10%'} 0px`,
    once: true,
  })

  const { canvasRef } = useSequence({
    width: currentWidth,
    height: currentHeight,
    frames,
    frameInterval: 45,
    isStarted: isInView,
    isMobile,
  })

  return (
    <TakiSequenceWrapper ref={ref}>
      <TakiSequenceStyled ref={canvasRef} width={currentWidth} height={currentHeight} $aspectRatio={width / height} />
    </TakiSequenceWrapper>
  )
})

export default TakiSequence

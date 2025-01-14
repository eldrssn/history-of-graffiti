import { FC, memo } from 'react'

import { useSequence } from '@hooks'

import { EyesSequenceStyled } from './eyes-sequence.styled'
import { EyesSequenceProps } from './types'

const frames = Array(6)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return `/Eyes_300x180_6fps/Eyes_300x180_6fps_${index}.png`
  })

export const EyesSequence: FC<EyesSequenceProps> = memo(({ width, height }) => {
  const { canvasRef } = useSequence({
    width,
    height,
    frames,
    frameInterval: 45,
    isStarted: true,
    isLooping: true,
    delay: 1200,
  })

  return <EyesSequenceStyled ref={canvasRef} width={width} height={height} $aspectRatio={width / height} />
})

export default EyesSequence

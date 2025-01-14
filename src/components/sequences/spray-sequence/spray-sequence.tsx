import { FC, memo } from 'react'

import { useSequence } from '@hooks'

import { SpraySequenceStyled } from './spray-sequence.styled'
import { SpraySequenceProps } from './types'

const frames = Array(6)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return `/Spray_960x460_12fps/Spray_960x460_${index}.png`
  })

export const SpraySequence: FC<SpraySequenceProps> = memo(({ width, height }) => {
  const { canvasRef } = useSequence({
    width,
    height,
    frames,
    frameInterval: 70,
    isStarted: true,
  })

  return <SpraySequenceStyled ref={canvasRef} width={width} height={height} $aspectRatio={width / height} />
})

export default SpraySequence

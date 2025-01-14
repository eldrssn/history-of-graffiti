import { FC, memo } from 'react'

import { useSequence } from '@hooks'

import { BillSequenceStyled } from './bill-sequence.styled'
import { BillSequenceProps } from './types'

const frames = Array(10)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return `/Masson_240x280_12fps/Masson_240x280_${index}.png`
  })

export const BillSequence: FC<BillSequenceProps> = memo(({ width, height }) => {
  const { canvasRef } = useSequence({
    width,
    height,
    frames,
    frameInterval: 40,
    isStarted: true,
    isLooping: true,
    delay: 1000,
  })

  return <BillSequenceStyled ref={canvasRef} width={width} height={height} $aspectRatio={width / height} />
})

export default BillSequence

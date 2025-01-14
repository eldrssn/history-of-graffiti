import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const EyesSequenceStyled = styled.canvas<{ $aspectRatio: number }>`
  position: absolute;
  bottom: 10%;
  right: 0;
  aspect-ratio: ${(props) => props.$aspectRatio};
  pointer-events: none;
  max-width: 300rem;
  max-height: 180rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    bottom: -80%;
    z-index: 1;
    rotate: -5deg;
    right: unset;
    left: 0;
    max-width: 148rem;
    max-height: 74rem;
  }
`

import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const SpraySequenceStyled = styled.canvas<{ $aspectRatio: number }>`
  position: absolute;
  top: -40rem;
  left: 50%;
  translate: -47% 0;
  overflow: visible;
  max-width: 960rem;
  max-height: 460rem;

  aspect-ratio: ${(props) => props.$aspectRatio};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    top: 15rem;
    max-width: 320rem;
    max-height: 200rem;
  }
`

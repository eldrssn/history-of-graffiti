import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const BillSequenceStyled = styled.canvas<{ $aspectRatio: number }>`
  position: absolute;
  top: 0;
  left: 30rem;
  aspect-ratio: ${(props) => props.$aspectRatio};
  pointer-events: none;
  width: 300rem;
  max-width: 240rem;
  max-height: 280rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    top: -40rem;
    left: unset;
    right: 20rem;
    max-width: 120rem;
    max-height: 180rem;
  }
`

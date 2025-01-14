import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Year = styled.div`
  position: relative;
  z-index: 0;
  font-family: 'Sprite Graffiti', sans-serif;
  font-weight: 400;
  font-size: 84rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${Colors.WHITE};
  text-shadow: 2rem 4rem 0 ${Colors.ORANGE_DARK};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 45rem;
  }

  svg {
    position: absolute;
    z-index: -1;
    top: 10rem;
    left: 0;
  }
`

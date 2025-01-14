import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Button = styled.a`
  border-radius: 80rem;
  padding: 20rem 85rem;
  background: ${Colors.ORANGE_DARK};
  width: auto;
  font-family: var(--font-family);
  font-weight: 900;
  line-height: 100%;
  font-size: 24rem;
  color: ${Colors.WHITE};
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    color: ${Colors.ORANGE_DARK};
    background: ${Colors.WHITE};
  }

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    padding: 17.5rem 81rem;
    font-size: 14rem;
    width: 100%;
    text-align: center;
  }
`

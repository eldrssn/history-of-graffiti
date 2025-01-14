import styled, { css } from 'styled-components'

import { Breakpoints } from '@app/tokens'
import texture from '@images/texture.png'
import textureDesktop from '@images/texture-desktop.png'
import up from '@images/up.svg'

export const MainPage = styled.main`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${`url("${texture}")`};
    background-size: contain;
    background-repeat: repeat;
    opacity: 0.6;
    pointer-events: none;
    z-index: 9999;

    @media (min-width: ${Breakpoints.DESKTOP}px) {
      background-image: ${`url("${textureDesktop}")`};
      background-size: contain;
      background-repeat: repeat;
    }
  }
`

export const ButtonUp = styled.button<{ $visible: boolean }>`
  all: unset;
  width: 40rem;
  height: 40rem;
  position: fixed;
  right: 14rem;
  bottom: 14rem;
  background: ${`url("${up}") no-repeat center`};
  background-size: contain;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 999;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  @media (min-width: ${Breakpoints.DESKTOP}px) {
    width: 60rem;
    height: 60rem;
    right: 40rem;
    bottom: 40rem;
  }
`

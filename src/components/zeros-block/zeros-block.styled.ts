import styled, { keyframes } from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 30rem;
  }
`

const lightningStrike = keyframes`
  0% {
    transform: scale(1) translateY(0);
  }
  5%, 30% {
    transform: scale(1.2) translateY(-10px);
  }
  10% {
    transform: scale(0.8) translateY(10px);
  }
  15%, 60% {
    transform: scale(1.1) translateY(-10px);
  }
  20%, 100% {
    transform: scale(1) translateY(0);
  }
`

export const Image18 = styled.img`
  width: 600rem;
  height: 314rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 292rem;
    height: 153rem;
  }
`

export const Img24 = styled.img`
  width: 254rem;
  height: 285rem;
  object-fit: cover;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 212rem;
    height: 237rem;
  }
`
export const ImageFlashes = styled.img`
  width: 215rem;
  height: 326rem;
  margin-right: 60rem;
`

export const FlashesContainer = styled.div`
  min-width: 215rem;
  height: 326rem;
  margin-right: 60rem;
  display: flex;
  rotate: 8deg;
  z-index: 1;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    translate: 20rem -50rem;
    flex-direction: column-reverse;
    height: 226rem;
    margin-right: 0;
    margin-left: auto;
    position: absolute;
    right: -140rem;
  }

  & img:nth-child(1) {
    width: 60rem;
    height: 118rem;
    scale: 1.5;
    margin-top: 40rem;
    margin-left: 20rem;
    animation: ${lightningStrike} 4s ease-out infinite;
  }

  & img:nth-child(2) {
    width: 75rem;
    height: 146rem;
    scale: 1.6;
    margin: auto;
    margin-left: 0rem;
    animation: ${lightningStrike} 4s ease-out infinite;
    animation-delay: 2.5s;
  }

  & img:nth-child(3) {
    width: 54rem;
    height: 107rem;
    scale: 1.3;
    margin-top: auto;
    translate: -160rem;
    animation: ${lightningStrike} 4s ease-out infinite;
    animation-delay: 2s;
    @media (max-width: ${Breakpoints.DESKTOP}px) {
      margin-top: 0;
      translate: -70rem 90rem;
    }
  }
`

export const ImageFlash = styled.img``

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(4rem, -4rem); }
  40% { transform: translate(-4rem, 4rem); }
  60% { transform: translate(4rem, 4rem); }
  80% { transform: translate(-4rem, -4rem); }
`
export const SVGShake = styled.svg`
  overflow: visible;
  pointer-events: none;

  & path:nth-child(1) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 0.1s;
  }
  & path:nth-child(2) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 0.3s;
  }
  & path:nth-child(3) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 0.5s;
  }
  & path:nth-child(4) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 0.7s;
  }
  & path:nth-child(5) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 0.9s;
  }
  & path:nth-child(6) {
    animation: ${shakeAnimation} 2s infinite ease-in-out;
    animation-delay: 1.1s;
  }

  & path:nth-child(6) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 1.4s;
  }
`

export const SvgPeace = styled(SVGShake)`
  margin-right: 90rem;
  margin-top: 40rem;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    position: absolute;
    top: -60rem;
    left: 50%;
    width: 70rem;
    height: 63rem;
    rotate: 9deg;
  }
`
export const Img17 = styled.img`
  width: 411rem;
  height: 272rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 284rem;
    height: 188rem;
  }
`

export const Image19 = styled.img`
  width: 407rem;
  height: 275rem;
  object-fit: cover;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 286rem;
    height: 190rem;
  }
`

export const Image20 = styled.img`
  width: 449rem;
  height: 301rem;
  object-fit: cover;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 285rem;
    height: 191rem;
  }
`
export const Image21 = styled.img`
  width: 428rem;
  height: 286rem;
  object-fit: cover;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 281rem;
    height: 188rem;
  }
`

export const Image22 = styled.img`
  width: 446rem;
  height: 283rem;
  object-fit: cover;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 281rem;
    height: 178rem;
  }
`

export const Image23Wrap = styled.div`
  width: 428rem;
  height: 286rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 280rem;
    height: 188rem;
  }
`

export const Image23 = styled.img`
  position: absolute;
  top: -40rem;
  scale: 2.1;
  transform-origin: top;
`

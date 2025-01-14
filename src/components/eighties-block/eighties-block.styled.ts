import styled, { css, keyframes } from 'styled-components'

import { Breakpoints } from '@app/tokens'
import graffiti from '@images/graffiti.png'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40rem;
  background: ${`url("${graffiti}") no-repeat bottom`};
  background-size: contain;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 30rem;
    background: unset;
  }
`

export const ImageHeaderLine = styled.img`
  position: absolute;
  left: 46%;
  width: 30rem;
  height: 149rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 18rem;
    height: 95rem;
  }
`

export const ImageVerticalTag = styled.img`
  width: 319rem;
  height: 213rem;
  margin-left: auto;
  margin-top: -15rem;
  pointer-events: none;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    position: absolute;
    bottom: -75%;
    right: 0;
    z-index: 1;
    margin: auto;
    width: 170rem;
    height: 113rem;
  }
`
export const Image8 = styled.img`
  width: 543rem;
  height: 375rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 284rem;
    height: 196rem;
  }
`

export const Image9 = styled.img`
  width: 435rem;
  height: 272rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 292rem;
    height: 183rem;
  }
`

export const Image10 = styled.img`
  width: 370rem;
  height: 248rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 286rem;
    height: 192rem;
  }
`

export const Image11 = styled.img`
  width: 435rem;
  height: 272rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 283rem;
    height: 177rem;
  }
`

export const ImageSparkles = styled.img`
  position: absolute;
  width: 112rem;
  height: 167rem;
  top: 20rem;
  right: 80rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 90rem;
    height: 134rem;
    top: -85rem;
    right: -35rem;
  }
`

const twinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(0.8); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40rem); }
`

export const SparklesContainer = styled.div`
  position: absolute;
  max-width: 112rem;
  height: 167rem;
  top: -30rem;
  right: 65rem;
  display: flex;
  scale: 1.7;

  & img:nth-child(1) {
    width: 46rem;
    height: 67rem;
    margin-top: auto;
    margin-right: -30rem;
    animation:
      ${twinkle} 3s ease-in-out infinite,
      ${float} 9s ease-in-out infinite;
  }

  & img:nth-child(2) {
    width: 78rem;
    height: 115rem;
    animation:
      ${twinkle} 4s ease-in-out infinite,
      ${float} 8s ease-in-out infinite;
    animation-delay: 1s;
  }

  & img:nth-child(3) {
    width: 38rem;
    height: 55rem;
    margin-top: auto;
    margin-bottom: 20rem;
    margin-left: -20rem;
    animation:
      ${twinkle} 5s ease-in-out infinite,
      ${float} 10s ease-in-out infinite;
    animation-delay: 2s;
  }

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 90rem;
    height: 134rem;
    top: -85rem;
    right: -35rem;
  }
`
export const ImageSparkle = styled.img``

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0); 
  }
  25% {
    transform: translateY(-7rem); 
  }
  50% {
    transform: translateY(0); 
  }
  75% {
    transform: translateY(-2rem); 
  }
`

export const ImagePartsTagsPush = styled.img`
  position: absolute;
  top: 120rem;
  left: 200rem;
  rotate: 7deg;
  width: 239rem;
  height: 129rem;
  animation: ${bounceAnimation} 1s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 126rem;
    height: 72rem;
    z-index: 1;
    rotate: -3deg;
    top: 90rem;
    left: 180rem;
  }
`
export const ImageArrowTag = styled.img`
  position: absolute;
  bottom: 10rem;
  right: -50rem;
  width: 228rem;
  height: 152rem;
  transform-origin: 0%;

  animation: squeeze 4s ease-in-out infinite;

  @keyframes squeeze {
    0%,
    20%,
    40%,
    100% {
      transform: scaleX(0.9);
    }

    10%,
    30% {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 174rem;
    height: 116rem;
    bottom: -100%;
    z-index: 1;
    right: unset;
    left: -20rem;
  }
`

export const Image12 = styled.img`
  width: 396rem;
  height: 285rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 286rem;
    height: 205rem;
    margin: auto;
  }
`

export const Image13 = styled.img`
  width: 428rem;
  height: 282rem;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 282rem;
    height: 186rem;
  }
`

export const Image14 = styled.img`
  width: 373rem;
  height: 292rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 280rem;
    height: 219rem;
  }
`

export const Image15 = styled.img`
  width: 490rem;
  height: 324rem;
  margin-bottom: 40rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 312rem;
    height: 206rem;
    margin: auto;
  }
`

export const ImageCanTag = styled.img`
  position: absolute;
  bottom: 0rem;
  right: 100rem;
  width: 186rem;
  height: 186rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 118rem;
    height: 118rem;
    bottom: -15rem;
    right: -20rem;
  }
`

export const Svg = styled.svg<{ $active: boolean }>`
  path {
    transition: stroke-dashoffset 0.5s ease-in-out;

    ${({ $active }) =>
      $active &&
      css`
        stroke-dashoffset: 0 !important;
      `}
  }

  path:nth-child(1) {
    stroke-dasharray: 1860px;
    stroke-dashoffset: 1860px;
  }

  path:nth-child(2) {
    stroke-dasharray: 140px;
    stroke-dashoffset: 140px;
  }

  path:nth-child(3) {
    stroke-dasharray: 730px;
    stroke-dashoffset: 730px;
  }

  path:nth-child(4) {
    stroke-dasharray: 200px;
    stroke-dashoffset: 200px;
  }
`

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(4rem, -4rem); }
  40% { transform: translate(-4rem, 4rem); }
  60% { transform: translate(4rem, 4rem); }
  80% { transform: translate(-4rem, -4rem); }
`
export const SVGShake = styled.svg`
  overflow: visible;

  & path:nth-child(1) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.1s;
  }
  & path:nth-child(2) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.3s;
  }
  & path:nth-child(3) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.5s;
  }
  & path:nth-child(4) {
    animation: ${shakeAnimation} 4s infinite ease-in-out;
    animation-delay: 0.7s;
  }
  & path:nth-child(5) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.9s;
  }
  & path:nth-child(6) {
    animation: ${shakeAnimation} 4s infinite ease-in-out;
    animation-delay: 1.1s;
  }

  & path:nth-child(6) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 1.4s;
  }
`

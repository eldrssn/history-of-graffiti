import styled, { css, keyframes } from 'styled-components'

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
export const ImageHeaderBorder = styled.img`
  position: absolute;
  width: 620rem;
  height: 400rem;
  top: 60rem;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 299rem;
    height: 211rem;
    top: 20rem;
  }
`
export const ImageHeaderSpray = styled.img`
  position: absolute;
  top: 20rem;

  width: 317rem;
  height: 211rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    top: 0rem;

    width: 160rem;
    height: 106rem;
  }
`

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

export const ImageTagsPush = styled.img`
  position: absolute;
  bottom: 0rem;
  left: 15rem;
  width: 250rem;
  height: 98rem;
  pointer-events: none;
  rotate: -44deg;
  animation: ${bounceAnimation} 1s ease-in-out infinite;
  scale: 1.2;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 126rem;
    height: 80rem;
    bottom: -20rem;
    left: 15rem;
    scale: 0.8;
  }
`

export const Image = styled.img`
  width: 620rem;
  height: 347rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    margin-top: 40rem;
    width: 313rem;
    height: 175rem;
  }
`

export const Image3 = styled.img`
  width: 409rem;
  height: 260rem;
  margin: auto;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 276rem;
    height: 176rem;
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

export const ImageCornbread = styled.img`
  width: 460rem;
  height: 305rem;
  margin-left: auto;
  padding-right: 10rem;
  z-index: 1;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 284rem;
    height: 189rem;
  }
`

export const ImageCornbreadBlotch = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 0.3;
  left: 50rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 192rem;
    height: 192rem;
    left: -60rem;
    opacity: 0.5;
    top: 0;
  }
`
export const ImageCornbreadSmile = styled.img`
  position: absolute;
  bottom: -10rem;
  right: -30rem;
  width: 120rem;
  height: 120rem;
  z-index: 1;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 86rem;
    height: 86rem;
    right: -10rem;
  }
`
export const ImageSuperSmile = styled.img`
  position: absolute;
  right: 20rem;
  top: 25%;
  width: 136rem;
  height: 130rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 71rem;
    height: 67rem;
    right: unset;
    top: -20rem;
  }
`

export const ImageSadTag = styled.img`
  width: 252rem;
  height: 168rem;
  margin-left: auto;
  margin-right: 20%;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    position: absolute;
    bottom: -60%;
    left: 30%;
    z-index: 1;
    width: 160rem;
    height: 106rem;
  }
`

export const Image4 = styled.img`
  width: 403rem;
  height: 266rem;
  margin: auto;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 288rem;
    height: 190rem;
  }
`

export const ImagePartsTagsPush = styled.img`
  position: absolute;

  bottom: 10rem;
  left: 180rem;
  transform: rotate(-8deg);
  width: 221rem;
  height: 121rem;
  z-index: -3;
  pointer-events: none;
  animation: ${bounceAnimation} 1s ease-in-out infinite;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 126rem;
    height: 70rem;
    bottom: -65rem;
    left: 40rem;
    transform: rotate(2deg);
  }
`

export const Image6 = styled.img`
  width: 75%;
  margin-left: auto;
  width: 403rem;
  height: 266rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 284rem;
    height: 188rem;
  }
`

export const Image7 = styled.img`
  width: 360rem;
  height: 242rem;
  margin: auto;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 274rem;
    height: 184rem;
  }
`

const shakeAnimationWithPause = keyframes`
    0%, 90%, 100% { transform: translate(0, 0); } 
  10%, 20%, 30%, 40%, 50% { transform: translate(-2px, 0); } 
  15%, 25%, 35%, 45%, 55% { transform: translate(2px, 0); }  
  `

export const ImageCrown = styled.img`
  position: absolute;
  right: 210rem;
  top: -70rem;
  width: 98rem;
  height: 90rem;
  animation: ${shakeAnimationWithPause} 3s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 62rem;
    height: 57rem;
    right: unset;
    bottom: unsets;
    top: -40rem;
    left: 145rem;
  }
`

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(4rem, -4prem); }
  40% { transform: translate(-4rem, 4rem); }
  60% { transform: translate(4rem, 4rem); }
  80% { transform: translate(-4rem, -4rem); }
`
export const SvgImage4 = styled.svg`
  position: absolute;
  z-index: -1;
  left: 30rem;
  top: 20rem;
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

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    left: -15rem;
    top: -15rem;
    width: 370rem;
    height: 220rem;
    scale: 1.2;
  }
`

export const Image5Wrap = styled.div`
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    padding-top: 35rem;
  }
`

export const Image5 = styled.img`
  width: 448rem;
  height: 258rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 278rem;
    height: 160rem;
  }
`

export const Svg = styled.svg<{ $active: boolean }>`
  pointer-events: none;
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

export const NoWrap = styled.p`
  white-space: nowrap;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    white-space: break-spaces;
  }
`

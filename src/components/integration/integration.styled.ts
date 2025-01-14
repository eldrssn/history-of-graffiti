import styled, { keyframes } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'
import boxShadow from '@images/box-shadow.png'
import integrationBottom from '@images/integration-bottom.svg'
import integrationTop from '@images/integration-top.svg'
import stickerCamera from '@images/sticker-camera.png'
import stickerDrink from '@images/sticker-drink.png'
import stickerIceCream from '@images/sticker-ice-cream.png'
import vkusnoLogo from '@images/vkusno-logo-graf.png'

export const Container = styled.section`
  width: 100%;
  background: ${Colors.GREEN};
  margin-top: 260rem;
  margin-bottom: 110rem;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    margin-top: 60rem;
    margin-bottom: 40rem;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    width: 100%;
  }

  &::before {
    top: -250rem;
    display: block;
    height: 265rem;
    background: ${`url("${integrationTop}") no-repeat top`};
    background-size: cover;
    scale: 1.01;
    z-index: -1;

    @media (max-width: ${Breakpoints.DESKTOP}px) {
      top: -39rem;
      height: 38rem;
      scale: 1.1;
    }
  }

  &::after {
    bottom: -108rem;
    height: 110rem;
    background: ${`url("${integrationBottom}") no-repeat center`};
    background-size: contain;

    @media (max-width: ${Breakpoints.DESKTOP}px) {
      bottom: -26rem;
      height: 28rem;
      width: 493.92rem;
      background-position: 5% 20%;
      translate: -5% 0;
      display: block;
    }
  }
`

export const Logo = styled.div`
  position: absolute;
  width: 910rem;
  height: 910rem;
  right: -220rem;
  top: -100rem;
  background: ${`url("${vkusnoLogo}") no-repeat center`};
  background-size: contain;
  z-index: 1;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 526rem;
    height: 526rem;
    background-position: bottom;
    right: -180rem;
    bottom: -57rem;
    top: unset;
  }
`

export const Wrapper = styled.div`
  width: 1260rem;
  margin: 0 auto;
  display: flex;
  gap: 55rem;
  position: relative;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    flex-direction: column;
    gap: 46rem;
    width: 100%;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32rem;
  flex-basis: 60%;
  margin-top: -12rem;
  z-index: 1;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 20rem;
    padding: 0 14rem;
    padding-top: 42rem;
    flex-basis: unset;
  }
`
export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24rem;
  color: ${Colors.WHITE};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
  }
`
export const Bold = styled.span`
  font-weight: 600;
`
export const Link = styled.a`
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`

export const ImageBlock = styled.div`
  z-index: 1;
  position: relative;
  margin-top: -60rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    flex-basis: unset;
    height: 380rem;
    margin: 0 auto;
  }
`

export const ImageWrapper = styled.div`
  translate: 100rem 10rem;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    translate: unset;
    scale: 0.9;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: ${`url("${boxShadow}") no-repeat right 73%`};
    background-size: 95%;
    scale: 1.1;
  }
`

export const Image = styled.img`
  width: 622rem;
  height: 622rem;
  object-fit: contain;
  position: relative;
  scale: 1.1;
  z-index: 2;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 300rem;
    height: 327rem;
  }
`

export const StickerDrink = styled.span`
  width: 427rem;
  height: 427rem;
  position: absolute;
  background: ${`url("${stickerDrink}") no-repeat center`};
  bottom: -50rem;
  right: -320rem;
  background-size: contain;
  pointer-events: none;
  rotate: 30deg;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 211rem;
    height: 211rem;
    bottom: -30rem;
    right: -75rem;
  }
`

export const StickerCamera = styled.span`
  display: block;
  width: 308rem;
  height: 308rem;
  position: absolute;
  background: ${`url("${stickerCamera}") no-repeat center`};
  top: -110rem;
  right: 150rem;
  z-index: 1;
  background-size: contain;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 152rem;
    height: 152rem;
    top: -50rem;
    right: 170rem;
  }
`

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(4rem, -4prem); }
  40% { transform: translate(-4rem, 4rem); }
  60% { transform: translate(4rem, 4rem); }
  80% { transform: translate(-4rem, -4rem); }
`
export const SVGShake = styled.svg`
  pointer-events: none;
  overflow: visible;
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

  & path:nth-child(7) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 1.4s;
  }
  & path:nth-child(8) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.5s;
  }
  & path:nth-child(9) {
    animation: ${shakeAnimation} 3s infinite ease-in-out;
    animation-delay: 0.3s;
  }
`

export const StickerIceCream = styled.span`
  display: block;
  width: 357rem;
  height: 357rem;
  position: absolute;
  background: ${`url("${stickerIceCream}") no-repeat center`};
  bottom: 110rem;
  left: -105rem;
  z-index: 1;
  background-size: contain;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 172rem;
    height: 172rem;
    bottom: -20rem;
    left: -33rem;
    rotate: -3deg;
    scale: 1.35;
  }
`

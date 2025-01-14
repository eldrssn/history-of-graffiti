import styled, { keyframes } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'
import boxShadow from '@images/box-shadow.png'
import footerBg from '@images/footer-bg.svg'
import lineLast from '@images/line-last.png'
import stickerBoot from '@images/sticker-boot.png'
import stickerIceCream from '@images/sticker-ice-cream.png'
import stickerSkate from '@images/sticker-skate.png'
import vkusnoLogo from '@images/vkusno-logo-graf.png'

export const Container = styled.ul`
  padding: 0;
  width: 100%;
  height: 617rem;
  background: ${`url("${footerBg}") no-repeat top`};
  background-size: contain;
  display: grid;
  margin-bottom: 60rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    height: auto;
    padding-top: 75rem;
    padding-bottom: 75rem;
    margin: 40rem 0 130rem 0;
    background-size: 200%;
    background-position: -60rem 0;
  }
`

export const Wrapper = styled.div`
  width: 1260rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55rem;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    flex-direction: column;
    gap: 31rem;
    width: 100%;
    background-color: ${Colors.GREEN};

    &::before {
      position: absolute;
      content: '';
      bottom: -75rem;
      left: 0;
      right: 0;
      height: 75rem;
      background: ${`url("${footerBg}") no-repeat bottom`};
      background-size: 200%;
      background-position: -60rem -140rem;
    }
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32rem;
  flex-basis: 60%;
  z-index: 1;
  position: relative;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 20rem;
    padding: 0 14rem;
    flex-basis: unset;
  }
`

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: normal;
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

export const Logo = styled.div`
  position: absolute;
  width: 490rem;
  height: 490rem;
  left: 0;
  top: 40rem;
  scale: 1.4;
  background: ${`url("${vkusnoLogo}") no-repeat center`};
  background-size: contain;
  z-index: -1;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 306rem;
    height: 306rem;
    background-position: bottom;
    top: unset;
    left: unset;
    bottom: -70rem;
    left: -30rem;
    scale: 1.1;
  }
`

export const ImageBlock = styled.div`
  z-index: 1;
  position: relative;
  margin-top: -60rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    flex-basis: unset;
    margin: 0 auto;
    height: 260rem;
  }
`

export const ImageWrapper = styled.div`
  rotate: 6deg;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 30rem;
    bottom: 0;
    left: 40rem;
    right: 0;
    background: ${`url("${boxShadow}") no-repeat right bottom`};
    background-size: 100%;
    scale: 1.1;
    rotate: -8deg;

    @media (max-width: ${Breakpoints.DESKTOP}px) {
      top: -5rem;
      left: 10rem;
      scale: 1;
    }
  }
`

export const Image = styled.img`
  width: 441rem;
  height: 441rem;
  margin-top: 70rem;
  position: relative;
  translate: 40rem -10rem;
  scale: 1.45;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 220rem;
    height: 220rem;
    translate: 15rem -30rem;
    scale: 1.3;
  }
`

export const StickerBoot = styled.span`
  width: 210rem;
  height: 210rem;
  position: absolute;
  background: ${`url("${stickerBoot}") no-repeat center`};
  top: -30rem;
  left: -80rem;
  background-size: contain;
  rotate: 5deg;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 107rem;
    height: 107rem;
    top: 0rem;
    left: -50rem;
  }
`

export const StickerIceCream = styled.span`
  display: block;
  width: 337rem;
  height: 337rem;
  position: absolute;
  background: ${`url("${stickerIceCream}") no-repeat center`};
  bottom: -115rem;
  right: -215rem;
  z-index: 1;
  background-size: contain;
  rotate: 55deg;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 172rem;
    height: 172rem;
    bottom: -55rem;
    right: -103rem;
    rotate: 50deg;
    scale: 1.35;
  }
`

export const LineLast = styled.span`
  width: 423rem;
  height: 282rem;
  position: absolute;
  background: ${`url("${lineLast}") no-repeat center`};
  top: -10rem;
  scale: 1.7;
  right: -250rem;
  background-size: contain;
  rotate: -3deg;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 210rem;
    height: 140rem;
    top: -30rem;
    right: -105rem;
  }
`

export const StickerSkate = styled.span`
  width: 241rem;
  height: 116rem;
  position: absolute;
  background: ${`url("${stickerSkate}") no-repeat center`};
  top: 30rem;
  right: -200rem;
  scale: 2.8;
  background-size: contain;
  rotate: 30deg;
  pointer-events: none;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 107rem;
    height: 107rem;
    top: -30rem;
    right: -50rem;
    scale: 1.5;
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

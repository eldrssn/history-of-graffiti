import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'
import bigMac from '@images/big-mac.png'
import bigMacBackground from '@images/big-mac-bg.png'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 46.8rem;
  width: 1145rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    overflow: hidden;
    width: 100%;
  }
`

export const Header = styled.h1`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 84rem;
  text-align: center;
  color: #fff;
  transform: rotate(-3deg);
  padding-bottom: 11.73rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 32rem;
  }
`

export const Subheader = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 48rem;
  text-align: center;
  color: ${Colors.WHITE};
  transform: rotate(2deg);
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 18rem;
    margin-top: -15rem;
  }
`

export const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 900;
  font-size: 26rem;
  text-align: center;
  color: ${Colors.WHITE};
  transform: rotate(-1deg);
  width: 800rem;
  margin: 0 auto;
  margin-bottom: 12rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 16rem;
    width: 100%;
    padding: 0 20rem;
  }
`

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: inherit;
`

export const ImagesWrapper = styled.div`
  width: 988rem;
  height: 416rem;
  margin: 0 auto;
  position: relative;
  margin-bottom: 40rem;
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 100%;
    height: auto;
  }
`
export const PromoBackground = styled.img`
  margin: 0 auto;
  scale: 1.2;
  width: 988rem;
  height: 416rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 367rem;
    height: 154rem;
  }
`
export const PromoSprayCan = styled.img`
  width: 754rem;
  height: 754rem;
  position: absolute;
  top: -40%;
  left: 46%;
  translate: -50% 0;
  transition: transform 0.2s ease-out;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 281rem;
    height: 281rem;
  }
`
export const PromoBurger = styled.div`
  position: absolute;
  width: 158rem;
  height: 158rem;
  bottom: -10rem;
  right: -110rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 70rem;
    height: 70rem;
    bottom: 0rem;
    right: 0rem;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${`url("${bigMacBackground}") no-repeat center`};
    background-size: contain;
    animation: rotateAnimation 10s infinite linear;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${`url("${bigMac}") no-repeat center`};
    background-size: contain;
  }
`

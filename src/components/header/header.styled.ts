import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Container = styled.header`
  height: 57rem;
  width: 100%;
  background-color: ${Colors.BLACK};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    height: 39rem;
  }
`
export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 1260rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 14rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 100%;
  }
`
export const LogoLifehacker = styled.img`
  width: 97rem;
  height: 20rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 72rem;
    height: 15rem;
  }
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  position: absolute;
  right: 50%;
  translate: 50% 0;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 4rem;
    position: static;
    translate: 0;
    order: 1;
  }
`
export const Link = styled.a``

export const SocialLink = styled.a`
  width: 40rem;
  height: 40rem;
  border: 1px solid ${Colors.WHITE};
  background-color: ${Colors.BLACK};
  border-radius: 100px;
  display: grid;
  place-content: center;
  transition: background 0.2s ease-in-out;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 21rem;
    height: 21rem;
  }

  &:hover {
    background-color: ${Colors.WHITE};

    & img {
      filter: invert(1);
    }
  }
`

export const SocialItem = styled.img`
  width: 20rem;
  height: 20rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: auto;
    height: 9rem;
  }
`

export const LogoMac = styled.img`
  width: 188rem;
  height: 22rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 140rem;
    height: 16rem;
  }
`

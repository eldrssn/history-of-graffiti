import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Footer = styled.footer`
  font-size: 22rem;
  font-family: var(--font-family);
  display: flex;
  justify-content: space-between;
  width: 1260rem;
  margin: 30rem auto;
  padding-top: 50rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
    width: 200rem;
    gap: 8rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    flex-direction: column;
  }
`

export const Text = styled.p``

export const Link = styled.a`
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
export const Button = styled.button`
  background-color: unset;
  border: unset;
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

export const TeamWrapper = styled.div`
  position: relative;
`

export const List = styled.ul<{ $visible: boolean }>`
  position: absolute;
  bottom: 50rem;
  right: -30rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: ${Colors.GREEN};
  width: 400rem;
  border-radius: 62rem;
  margin: 0;
  list-style-type: none;
  padding: 30rem;
  list-style: none;
  border: 1px solid ${Colors.ORANGE_LIGHT};
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    right: 50%;
    translate: 50% 0;
    width: 300rem;
    bottom: 30rem;
  }

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`
export const Row = styled.li`
  display: flex;
  gap: 16rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 8rem;
  }
`
export const Block = styled.div`
  font-size: 16rem;
  color: inherit;
  width: 170rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 12rem;
    width: 100rem;
  }
  &:first-child {
    text-align: end;
  }
  &:last-child {
    text-align: start;
  }
`

import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'
import tooltipArrow from '@images/tooltip-arrow.svg'

import { TooltipStyleType } from './types'

export const Wrapper = styled.p<TooltipStyleType>`
  position: relative;
  display: inline;

  &::after {
    content: '';
    position: absolute;
    width: 35rem;
    height: 20rem;
    top: 100%;
    right: 50%;
    translate: 50% 0;
    background: ${`url("${tooltipArrow}") no-repeat center`};
    background-size: contain;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s ease-in-out;

    @media (max-width: ${Breakpoints.DESKTOP}px) {
      top: 140%;
      width: 25rem;
      height: 10rem;
    }

    ${(props) =>
      props.$visible &&
      css`
        opacity: 1;
        z-index: 1;
        display: block;
      `}

    ${(props) =>
      props.$isLink &&
      css`
        display: none;
      `}
  }
`
export const WrapperContent = styled.div<TooltipStyleType>`
  margin-top: -20rem;
  padding-top: 20rem;
  position: absolute;
  top: 50rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  scale: 1.1;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    top: 35rem;
  }

  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
      z-index: 3;
    `}

  ${(props) =>
    props.$isRight &&
    css`
      right: 0;

      @media (max-width: ${Breakpoints.DESKTOP}px) {
        right: unset;
      }
    `}

  ${(props) =>
    props.$isFull &&
    css`
      width: 620rem;

      @media (max-width: ${Breakpoints.DESKTOP}px) {
        width: 270rem;
      }
    `}
`

export const Content = styled.div<TooltipStyleType>`
  font-weight: 400;
  font-size: 16rem;
  text-align: center;
  color: ${Colors.WHITE};
  background: ${Colors.GREEN};
  border-radius: 62rem;
  padding: 20rem;
  min-width: 450rem;
  font-family: var(--font-family);
  line-height: 130%;
  max-width: 450rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 10rem;
    min-width: 270rem;
    padding: 12rem;
    top: 35rem;
    border-radius: 15rem;
  }

  ${(props) =>
    props.$isLink &&
    css`
      padding: 20rem 14rem;
      min-width: 308rem;
      min-height: 50rem;
      box-shadow: 0 2rem 0 0 ${Colors.ORANGE_LIGHT};
      background: ${Colors.WHITE};
      rotate: 4deg;
      display: grid;
      place-content: center;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14rem;
      text-align: center;
      color: ${Colors.GREEN};
      border-radius: 0 !important;

      @media (max-width: ${Breakpoints.DESKTOP}px) {
        min-width: 200rem;
        min-height: unset;
      }
    `}

  ${(props) =>
    props.$isFull &&
    css`
      min-width: 620rem;

      @media (max-width: ${Breakpoints.DESKTOP}px) {
        min-width: unset;
      }
    `}
`

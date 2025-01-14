import styled, { keyframes } from 'styled-components'

import { Breakpoints } from '@app/tokens'
import sliderBg from '@images/slider-bg.svg'
import sliderBgMobile from '@images/slider-bg-mobile.svg'

const moveLeftRight = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); } 
  100% { transform: translateX(0); }   
`

const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(20px); } 
  100% { transform: translateY(0); }  
`

export const Wrapper = styled.ul`
  width: 100%;
  height: 542rem;
  background: ${`url("${sliderBg}") no-repeat center`};
  background-size: contain;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    background: ${`url("${sliderBgMobile}") no-repeat center`};
    scale: 1.05;
    background-size: contain;
    height: 288rem;
    margin-top: 60rem;
  }
`

export const Item = styled.li``

export const Image = styled.img<{ animationType: 'leftRight' | 'upDown' | 'rotate'; delay: number }>`
  animation: ${({ animationType }) => (animationType === 'leftRight' ? moveLeftRight : moveUpDown)} 3s ease-in-out
    infinite;

  animation-delay: ${({ delay }) => `${delay}s`};
`

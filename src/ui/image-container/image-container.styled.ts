import styled, { css, keyframes } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'
import closeButton from '@images/close.svg'

const moveUpDown = keyframes`
  0% { transform: translate(0); }
  50% { transform: translate(13px, -10px); } 
  100% { transform: translate(0); }  
`

const moveDownUp = keyframes`
  0% { transform: translate(0); }  
  50% { transform: translate(10px, 13px); } 
  100%  { transform: translate(0); }
`

export const Wrapper = styled.figure<{ $isRight?: boolean; $rotate?: number; $side?: string }>`
  position: relative;
  rotate: ${(props) => props.$rotate}deg;
  margin: auto;

  ${(props) =>
    props.$side === 'right' &&
    css`
      margin: 0;
      margin-left: auto;
    `};

  ${(props) =>
    props.$side === 'left' &&
    css`
      margin: 0;
      margin-right: auto;
    `};

  margin-bottom: 40rem;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    background-color: ${Colors.ORANGE_DARK};
    position: absolute;

    top: 13rem;
    bottom: 0;
    left: ${(props) => (props.$isRight ? '-13rem' : '13rem')};
    right: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  &:hover::before {
    animation: ${moveUpDown} 2s ease-in-out infinite;
  }
`

export const Image = styled.div`
  margin: auto;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    animation: ${moveDownUp} 2s ease-in-out infinite;
  }
`

export const Figcaption = styled.figcaption<{ $isRight?: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12rem;
  line-height: 100%;
  color: rgba(255, 255, 255, 0.5);
  word-break: break-all;
  white-space: pre-line;
  padding-top: 20rem;
  margin-left: ${(props) => (props.$isRight ? '-13rem' : '13rem')};
  position: absolute;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 9rem;
    padding-top: 16rem;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(2px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 70vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: zoomIn 0.3s ease;
  background: rgba(0, 0, 0, 0.2);

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    max-width: 85vw;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`
export const ImageFull = styled.img`
  max-height: 90vh;
  height: auto;
  object-fit: contain;
  box-shadow:
    6px 8px 7px 0 rgba(255, 255, 255, 0.25),
    inset 0 0 14px 4px rgba(255, 255, 255, 0.5);
`

export const CloseButton = styled.button`
  position: absolute;
  top: -50rem;
  right: -50rem;
  border: none;
  cursor: pointer;
  background: ${`url("${closeButton}") no-repeat center`};
  background-size: contain;
  width: 98rem;
  height: 89rem;
  z-index: 2;
  transition: scale 0.3s ease-in-out;

  &:hover {
    scale: 1.2;
  }

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    width: 30rem;
    height: 40rem;
    top: -20rem;
    right: -20rem;

    &:hover {
      scale: 1;
    }
  }
`

import styled, { css } from 'styled-components'

export const Svg = styled.svg<{ $active: boolean }>`
  width: 500rem;

  path {
    transition: stroke-dashoffset 0.5s ease-in-out;

    ${({ $active }) =>
      $active &&
      css`
        stroke-dashoffset: 0 !important;
      `}
  }

  path:nth-child(1) {
    stroke-dasharray: 4830px;
    stroke-dashoffset: 4830px;
  }

  path:nth-child(2) {
    stroke-dasharray: 2350px;
    stroke-dashoffset: 2350px;
  }

  path:nth-child(3) {
    stroke-dasharray: 650px;
    stroke-dashoffset: 650px;
  }
`

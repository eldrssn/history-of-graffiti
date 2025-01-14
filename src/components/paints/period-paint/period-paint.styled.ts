import styled, { css } from 'styled-components'

export const Svg = styled.svg<{ $active: boolean }>`
  width: 181rem;

  path {
    transition: stroke-dashoffset 0.5s ease-in-out;

    ${({ $active }) =>
      $active &&
      css`
        stroke-dashoffset: 0 !important;
      `}
  }

  path:nth-child(1) {
    stroke-dasharray: 860px;
    stroke-dashoffset: 860px;
  }

  path:nth-child(2) {
    stroke-dasharray: 1440px;
    stroke-dashoffset: 1440px;
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

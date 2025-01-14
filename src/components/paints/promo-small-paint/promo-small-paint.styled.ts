import styled, { css } from 'styled-components'

export const Svg = styled.svg<{ $active: boolean }>`
  width: 292rem;
  margin: 0 auto;

  path {
    stroke-dasharray: 700px;
    stroke-dashoffset: 700px;
    transition: stroke-dashoffset 0.5s ease-in-out;

    ${({ $active }) =>
      $active &&
      css`
        stroke-dashoffset: 0;
      `}
  }
`

import styled, { css } from 'styled-components'

export const Svg = styled.svg<{ $active: boolean }>`
  width: 1145rem;

  path {
    stroke-dasharray: 2660px;
    stroke-dashoffset: 2660px;
    transition: stroke-dashoffset 0.5s ease-in-out;

    ${({ $active }) =>
      $active &&
      css`
        stroke-dashoffset: 0;
      `}
  }
`

import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const YearInfoStyled = styled.div`
  display: grid;
  grid-template-columns: 620rem 620rem;
  gap: 60rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    display: flex;
    flex-direction: column;
    gap: 20rem;
    padding: 0 14rem;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40rem;
  position: relative;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 20rem;
    order: -1;
  }
`

export const Info = styled.p`
  font-size: 24rem;
  line-height: 32rem;
  color: ${Colors.WHITE};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
    line-height: 140%;
  }

  a,
  strong {
    font-weight: normal;
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    font-weight: 600;
    text-decoration: underline;
    color: ${Colors.ORANGE_LIGHT};
    cursor: pointer;
  }
`

export const ArtWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

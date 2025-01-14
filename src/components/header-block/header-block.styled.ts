import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const HeaderBlockStyled = styled.div`
  display: grid;
  grid-template-columns: 620rem 620rem;
  gap: 20rem;
  margin-bottom: 80rem;
  margin-top: 40rem;
  z-index: 10;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    display: flex;
    flex-direction: column;
    gap: 20rem;
    padding: 0 14rem;
    margin: 27rem 0;
  }

  span {
    font-weight: 600;
    text-decoration: underline;
    color: ${Colors.ORANGE_LIGHT};
    cursor: pointer;
    position: relative;

    &:hover {
      color: ${Colors.WHITE};
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    gap: 20rem;
  }
`

export const Info = styled.p`
  font-size: 24rem;
  line-height: 32rem;
  color: ${Colors.WHITE};
  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
    line-height: 130%;
  }

  a,
  strong {
    font-weight: normal;
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ArtWrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
`

export const InfoTitle = styled.p`
  font-family: var(--font-family);
  font-weight: 900;
  font-size: 30rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2rem 4rem 0 ${Colors.ORANGE_DARK};

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 20rem;
  }
`
export const TagsList = styled.div`
  display: flex;
  gap: 40rem;
  position: relative;
`
export const TagsItem = styled.div`
  flex-basis: 50%;
`
export const TagsItemTitle = styled.div`
  padding: 13rem 20rem;
  background: ${Colors.ORANGE_LIGHT};
  font-family: var(--font-family);
  font-weight: 900;
  font-size: 20rem;
  color: #fff;
  width: min-content;
  margin-bottom: 24rem;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
    line-height: 130%;
  }
`
export const TagsItemText = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24rem;
  color: #fff;

  @media (max-width: ${Breakpoints.DESKTOP}px) {
    font-size: 14rem;
    line-height: 130%;
  }
`

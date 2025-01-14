import styled from 'styled-components'

export const TakiSequenceStyled = styled.canvas<{ $aspectRatio: number }>`
  aspect-ratio: ${(props) => props.$aspectRatio};
  margin: 0 auto;
  pointer-events: none;
`

export const TakiSequenceWrapper = styled.div`
  z-index: 1;
  margin: 0 auto;
`

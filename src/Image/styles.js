import styled from 'styled-components'
import { isSize, isCircular } from 'styled-utils'

export const Image = styled.img`
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  & img {
    width: 3.5em;
    height: 3.5em;
  }

  ${isSize}
  ${isCircular}
`

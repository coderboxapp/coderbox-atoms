import styled from 'styled-components'
import { withSize, isCircular } from 'styled-utils'

export const Image = styled.img`
  overflow: hidden;
  display: inline-flex;
  box-sizing: border-box;

  & img {
    width: 3.5em;
    height: 3.5em;
  }

  ${withSize}
  ${isCircular}
`

import styled from 'styled'
import { withColor, withSize } from 'styled-utils'

export const StyledComponent = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;

  ${withColor}
  ${withSize}
`
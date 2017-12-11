import styled from 'styled'
import { withColor, withSize, isMarginless, isPaddingless, isCircular  } from 'styled-utils'

export const StyledIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;

  ${withColor}
  ${withSize}
  ${isMarginless}
  ${isPaddingless}
  ${isCircular}
`
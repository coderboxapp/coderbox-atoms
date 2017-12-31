import styled from 'styled'
import { withSize, isMarginless, isPaddingless, isCircular  } from 'styled-utils'
import * as color from 'styled-utils/color'
import is from 'styled-is'

export const StyledIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;

  ${is('color')`
    color: ${color.bg};
  `}

  ${is('isInverted')`
    background-color: ${color.text};
  `}

  ${withSize}
  ${isMarginless}
  ${isPaddingless}
  ${isCircular}
`
import styled from 'styled-components'
import { colors, hover, withSize } from 'styled-utils'

export const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  color: ${p => colors(p).bgColor};

  &:hover {
    color: ${p => hover(colors(p).bgColor)};
  }

  ${withSize}
`

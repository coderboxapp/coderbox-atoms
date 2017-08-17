import styled from 'styled-components'
import { bgColor } from 'styled-utils'
import { darken } from 'polished'

export const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  color: ${bgColor};

  &:hover {
    color: ${p => darken(0.1, bgColor(p))};
  }
`

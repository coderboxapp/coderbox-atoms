import styled from 'styled-components'
import { withSize } from 'styled-utils'
import * as color from 'styled-utils/color'
import { LinkProps } from './types'

export const StyledComponent = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: ${p => p.theme.components.link.textDecoration};
  flex-direction: ${(p: LinkProps): string => p.column ? 'column' : 'row'};
  color: ${p => color.bg(p)};

  &:hover {
    color: ${p => color.hover(color.bg(p))};
  }

  & .icon {
    margin-right:  ${(p: LinkProps): string => p.column ? '0' : '2px'};
  }

  ${withSize}
`

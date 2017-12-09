import styledComponent, { withProps } from 'styled'
import { withColor, withSize } from 'styled-utils'
import { withSpace } from 'utils'
import { BoxProps } from './types'

const styled = withProps<BoxProps>(styledComponent.div)

export const StyledComponent = styled`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.components.box.radius};
  box-shadow: ${p => p.theme.components.box.boxShadow};
  position: relative;
  padding: ${(p): string => p.padding || '0px'};

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${withColor}
  ${withSize}
  ${withSpace}
`
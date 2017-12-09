import styledComponent, { withProps } from 'styled'
import { withSize, withDisplay } from 'styled-utils'
import * as color from 'styled-utils/color'
import { TextProps } from './types';

const styled = withProps<TextProps>(styledComponent.p)

export const StyledComponent = styled`
  font-family: ${p => p.theme.fonts.primary};
  color: ${p => color.bg(p)};
  margin: 0;
  display: block;
  text-align: ${(p): string => p.align || ''};

  ${withSize}
  ${withDisplay}
`

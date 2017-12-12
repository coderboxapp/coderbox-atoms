import styledComponent, { withProps } from 'styled'
import { withSize, withDisplay, isMarginless } from 'styled-utils'
import * as color from 'styled-utils/color'
import { TitleProps } from './types';

const styled = withProps<TitleProps>(styledComponent.h1)
export const StyledTitle = styled`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  color: ${p => color.bg(p)};
  margin: 0;
  line-height: 1.12;
  box-sizing: border-box;
  display: block;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  & + .title,
  & + .subtitle {
    margin-top: -1.1rem;
  }

  & b,
  & strong {
    font-weight: 800;
  }

  ${withSize}
  ${withDisplay}
  ${isMarginless}
`

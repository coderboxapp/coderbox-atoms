import styled from 'styled-components'
import { withSize, withColor, isMarginless } from 'styled-utils'

export const Subtitle = styled.h2`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 300;
  margin: 0;
  line-height: 1.120;
  box-sizing: border-box;
  display: block;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  & + .subtitle {
    margin-top: -1.1rem;
  }

  ${withSize}
  ${withColor}
  ${isMarginless}
`

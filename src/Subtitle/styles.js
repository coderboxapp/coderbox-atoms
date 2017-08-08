import styled from 'styled-components'
import { isSize, isColor, isOutlined } from 'styled-utils'

export const Subtitle = styled.h2`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  margin: 0;
  line-height: 1.125;
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  ${isSize}
  ${isColor}
  ${isOutlined}
`

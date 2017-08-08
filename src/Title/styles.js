import styled from 'styled-components'
import { isSize, isColor, isOutlined } from 'styled-utils'

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 600;
  margin: 0;
  line-height: 1.125;
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }
  & + .subtitle {
    margin-top: -1.1rem;
  }

  ${isSize}
  ${isColor}
  ${isOutlined}
`

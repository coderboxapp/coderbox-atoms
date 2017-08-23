import styled from 'styled-components'
import { withSize, withDisplay, bgColor } from 'styled-utils'

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  color: ${bgColor};
  margin: 0;
  display: block;
  text-align: ${p => p.align};

  ${withSize}
  ${withDisplay}
`

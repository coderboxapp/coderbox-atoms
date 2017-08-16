import styled from 'styled-components'
import { withSize, bgColor } from 'styled-utils'

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  color: ${bgColor};
  margin: 0;
  display: flex;
  align-items: center;

  ${withSize}
`

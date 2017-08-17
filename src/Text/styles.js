import styled from 'styled-components'
import { withSize, bgColor } from 'styled-utils'

const map = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
}

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  color: ${bgColor};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: ${p => map[p.align]};

  ${withSize}
`

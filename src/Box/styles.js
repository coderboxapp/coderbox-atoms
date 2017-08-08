import styled, { css } from 'styled-components'
import { isColor } from 'styled-utils'

const withSpace = ({ withSpace }) => {
  if (!withSpace) return
  return css`
    > * {
      margin-bottom: ${withSpace} !important;
    }
  `
}

export const Box = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: ${p => p.theme.shadows.normal};
  padding: 1.25rem;

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  ${withSpace}
  ${isColor}
`

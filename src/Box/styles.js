import styled, { css } from 'styled-components'
import { withColor } from 'styled-utils'

const addSpace = ({ hSpace, vSpace }) => {
  if (!hSpace && !vSpace) return

  return css`
    > *:not(:last-child) {
      ${hSpace && `margin-right: ${hSpace} !important;`}
      ${vSpace && `margin-bottom: ${vSpace} !important;`}
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

  ${addSpace}
  ${withColor}
`

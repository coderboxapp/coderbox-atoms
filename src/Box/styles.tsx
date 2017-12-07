import styled, { StyledFunction } from 'styled-components'
// import { withColor, withSize } from 'styled-utils'

// const addSpace = ({ hSpace, vSpace }) => {
//   if (!hSpace && !vSpace) return

//   return css`
//     > *:not(:last-child) {
//       ${hSpace && `margin-right: ${hSpace} !important;`}
//       ${vSpace && `margin-bottom: ${vSpace} !important;`}
//     }
//   `
// }

interface Props {
  className?: string
}

export const Box = styled('div')`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`
  // padding: ${p => p.padding};
  // position: relative;

  // &:not(:last-child) {
  //   margin-bottom: 0.6rem;
  // }

  // ${addSpace}
  // ${withColor}
  // ${withSize}

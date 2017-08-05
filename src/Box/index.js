import React from 'react'
import cx from 'classnames'
import styled, { css } from 'styled-components'
import { withModifiers, helperModifiers, isColor } from 'styled-utils'

const BoxElement = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  padding: 1.25rem;
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: ${p => p.theme.shadows.normal};
  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  ${p => {
    if (p.withSpace) {
      return css`
        > * {
          margin-right: ${p.withSpace};
        }
      `
    }
  }}
`

const Box = ({ as = 'div', ...props }) => {
  const className = cx(`box`, props.className)

  const Element = withModifiers(BoxElement.withComponent(as), [
    ...helperModifiers,
    isColor
  ])

  return (
    <Element {...props} className={className} />
  )
}

Box.defaultProps = {
}

export default Box

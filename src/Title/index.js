import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { withModifiers, helperModifiers, isColor } from 'styled-utils'

const TitleElement = styled.h1`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 600;
  margin: 0;
  line-height: 1.125;
  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  & + .subtitle {
    margin-top: -1.1rem;
  }
`

const Title = ({ as = 'h1', name, isInverted, ...props }) => {
  const className = cx(`title`, props.className)

  const Element = withModifiers(TitleElement.withComponent(as), [
    ...helperModifiers,
    isColor
  ])

  return (
    <Element {...props} className={className} />
  )
}

Title.defaultProps = {
}

export default Title

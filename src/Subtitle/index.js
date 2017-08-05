import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { withModifiers, helperModifiers, isColor } from 'styled-utils'

const SubtitleElement = styled.h2`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  margin: 0;
  line-height: 1.125;
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }
`

const Subtitle = ({ as = 'h2', name, isInverted, ...props }) => {
  const className = cx(`subtitle`, props.className)

  const Element = withModifiers(SubtitleElement.withComponent(as), [
    ...helperModifiers,
    isColor
  ])

  return (
    <Element {...props} className={className} />
  )
}

Subtitle.defaultProps = {
}

export default Subtitle

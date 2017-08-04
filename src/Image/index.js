import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { withModifiers, isSize, isCircular } from 'styled-utils'

const ImageElement = styled.img`
  overflow: hidden;
  display: flex;
  & img {
    width: 3.5em;
    height: 3.5em;
  }
`

const Icon = ({ as = 'div', src, ...props }) => {
  const className = cx(`image`, props.className)

  const Element = withModifiers(ImageElement.withComponent(as), [
    isSize,
    isCircular
  ])

  return (
    <Element {...props} className={className}>
      <img src={src} />
    </Element>
  )
}

Icon.defaultProps = {
  isSize: 'medium'
}

export default Icon

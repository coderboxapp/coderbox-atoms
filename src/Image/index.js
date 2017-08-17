import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'div', src, ...props }) => {
  const className = cx(`image`, props.className)
  const Element = s.Image.withComponent(as)

  return (
    <Element {...props} className={className}>
      <img src={src} />
    </Element>
  )
}

Component.displayName = 'Image'
Component.defaultProps = {
  size: 'normal'
}

export default Component

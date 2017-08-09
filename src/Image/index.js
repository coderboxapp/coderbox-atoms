import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Icon = ({ as = 'div', src, ...props }) => {
  const className = cx(`image`, props.className)
  const Element = s.Image.withComponent(as)

  return (
    <Element {...props} className={className}>
      <img src={src} />
    </Element>
  )
}

Icon.defaultProps = {
  withSize: 'normal'
}

export default Icon

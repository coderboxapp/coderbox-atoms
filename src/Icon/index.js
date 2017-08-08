import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Icon = ({ as = 'i', name, isInverted, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)
  const Element = s.Icon.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  )
}

Icon.defaultProps = {
  isSize: 'normal'
}

export default Icon

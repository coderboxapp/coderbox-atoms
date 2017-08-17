import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'i', name, isInverted, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)
  const Element = s.Icon.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  )
}

Component.displayName = 'Icon'
Component.defaultProps = {
  size: 'normal'
}

export default Component

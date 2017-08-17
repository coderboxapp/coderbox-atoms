import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'h2', isInverted, ...props }) => {
  const className = cx(`subtitle`, props.className)
  const Element = s.Subtitle.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  )
}

Component.displayName = 'Subtitle'
Component.defaultProps = {
  as: 'h2'
}

export default Component

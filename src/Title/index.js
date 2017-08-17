import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'h1', isInverted, ...props }) => {
  const className = cx(`title`, props.className)
  const Element = s.Title.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} className={className} />
  )
}

Component.displayName = 'Title'
Component.defaultProps = {
  as: 'h1'
}

export default Component

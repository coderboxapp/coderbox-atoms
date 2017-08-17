import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'div', children, isVertical, ...props }) => {
  let className = cx('group', props.className)
  const Element = isVertical ? s.VGroup.withComponent(as) : s.HGroup.withComponent(as)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Group'
export default Component

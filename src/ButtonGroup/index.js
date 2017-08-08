import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Group = ({ as = 'div', children, isVertical, ...props }) => {
  let className = cx('buttons', props.className)
  const Element = isVertical ? s.VGroup.withComponent(as) : s.HGroup.withComponent(as)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

export default Group

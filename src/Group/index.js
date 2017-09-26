import React from 'react'
import cx from 'classnames'
import { compact } from 'lodash'
import * as s from './styles'

const Component = ({ as = 'div', children = [], isVertical, ...props }) => {
  let className = cx('group', props.className)

  const Element = isVertical ? s.VGroup.withComponent(as) : s.HGroup.withComponent(as)
  const items = React.Children.map(
    compact(children),
    (item, i) => (
      React.cloneElement(item, {...props})
    )
  )

  return (
    <Element {...props} className={className}>
      {items}
    </Element>
  )
}

Component.displayName = 'Group'
export default Component

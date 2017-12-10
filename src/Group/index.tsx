import * as React from 'react'
import * as cx from 'classnames'
import { compact } from 'lodash'
import { GroupProps } from './types'
import { HGroup, VGroup } from './styles'

const Component: React.SFC<GroupProps> = ({ children, isVertical, ...props }) => {
  const className = cx('group', props.className)
  const Group = isVertical ? VGroup : HGroup

  const items = React.Children.map(
    compact(children),
    (c: any) => (
      React.cloneElement(c, {...props})
    )
  )

  return (
    <Group {...props} className={className}>
      {items}
    </Group>
  )
}

Component.displayName = 'Group'
Component.defaultProps = {
  children: []
}

export default Component

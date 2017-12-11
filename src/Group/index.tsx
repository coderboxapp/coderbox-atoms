import * as React from 'react'
import * as cx from 'classnames'
import { compact } from 'lodash'
import { GroupProps } from './types'
import { HGroup, VGroup } from './styles'

const Group: React.SFC<GroupProps> = ({ children, isVertical, ...props }) => {
  const className = cx('group', props.className)
  const StyledGroup = isVertical ? VGroup : HGroup

  const items = React.Children.map(
    compact(children),
    (c: any) => (
      React.cloneElement(c, {...props})
    )
  )

  return (
    <StyledGroup {...props} className={className}>
      {items}
    </StyledGroup>
  )
}

Group.displayName = 'Group'
Group.defaultProps = {
  children: []
}

export default Group

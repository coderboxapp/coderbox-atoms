import * as React from 'react'
import { compact } from 'lodash'
import cx from 'classnames'
import { Stack, StackItem } from './styles'

const Component = ({ index, children, ...props }) => {
  const className = cx('stack', props.className)
  const items = React.Children.map(
    compact(children),
    (item, i) => (
      <StackItem isVisible={index === i}>
        {React.cloneElement(item, {})}
      </StackItem>
    )
  )

  return (
    <Stack {...props} className={className}>
      {items}
    </Stack>
  )
}

Component.displayName = 'Stack'
Component.defaultProps = {
  index: 0
}

export default Component

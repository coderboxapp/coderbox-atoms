import * as React from 'react'
import { compact } from 'lodash'
import { Stack, StackItem } from './styles'

const Component = ({ index, children, ...props }) => {
  const items = React.Children.map(
    compact(children),
    (item, i) => (
      <StackItem isVisible={index === i}>
        {React.cloneElement(item, {})}
      </StackItem>
    )
  )

  return (
    <Stack>
      {items}
    </Stack>
  )
}

Component.displayName = 'Stack'
Component.defaultProps = {
  index: 0
}

export default Component

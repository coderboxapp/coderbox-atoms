import * as React from 'react'
import * as cx from 'classnames'
import { compact } from 'lodash'
import { StyledComponent } from './styles'
import { StackProps } from './types';

const Component: React.SFC<StackProps> = ({ index, children, ...props }) => {
  const className = cx('stack', props.className)
  const items = React.Children.map(
    compact(children),
    (item: any, i) => (
      <div className={cx('stack-item', {visible: index === i})}>
        {React.cloneElement(item, {})}
      </div>
    )
  )

  return (
    <StyledComponent {...props} className={className}>
      {items}
    </StyledComponent>
  )
}

Component.displayName = 'Stack'
Component.defaultProps = {
  index: 0
}

export default Component

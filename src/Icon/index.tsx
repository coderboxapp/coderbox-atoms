import * as React from 'react'
import * as cx from 'classnames'
import { mapProps } from 'recompose'
import { IconProps } from './types';
import { StyledComponent } from './styles';

const Component: React.SFC<IconProps> = ({ name, type, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)

  return (
    <StyledComponent {...props} className={className} />
  )
}

Component.displayName = 'Icon'
Component.defaultProps = {
  type: 'r'
}

export default mapProps<IconProps, IconProps>(props => {
  return {
    ...props,
    isInverted: !props.isInverted
  }
})(Component)

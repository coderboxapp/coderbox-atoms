import * as React from 'react'
import * as cx from 'classnames'
import { mapProps } from 'recompose'
import { IconProps } from './types';
import { StyledIcon } from './styles';

const Icon: React.SFC<IconProps> = ({ name, type, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)

  return (
    <StyledIcon {...props} className={className} />
  )
}

Icon.displayName = 'Icon'
Icon.defaultProps = {
  type: 'r'
}

export default mapProps<IconProps, IconProps>(props => {
  return {
    ...props,
    isInverted: !props.isInverted
  }
})(Icon)

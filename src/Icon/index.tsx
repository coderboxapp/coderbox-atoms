import * as React from 'react'
import * as cx from 'classnames'
import { IconProps } from './types';
import { StyledIcon } from './styles';

const Icon: React.SFC<IconProps> = ({ name, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)

  return (
    <StyledIcon {...props} className={className} />
  )
}

Icon.displayName = 'Icon'
Icon.defaultProps = {
}

export default Icon

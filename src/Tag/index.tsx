import * as React from 'react'
import * as cx from 'classnames'
import { TagProps } from './types';
import { StyledComponent } from './styles';

const Component: React.SFC<TagProps> = ({ isDelete, ...props }) => {
  const className = cx(`tag`, props.className)
  return (
    <StyledComponent {...props} isDelete={isDelete} className={className} />
  )
}

Component.displayName = 'Tag'
Component.defaultProps = {
  size: 'small'
}

export default Component

import * as React from 'react'
import * as cx from 'classnames'
import { StyledComponent } from './styles';
import { TitleProps } from './types';

const Component: React.SFC<TitleProps> = ({ children, ...props }) => {
  const className = cx(`title`, props.className)
  return (
    <StyledComponent {...props} className={className}>{children}</StyledComponent>
  )
}

Component.displayName = 'Title'
Component.defaultProps = {
}

export default Component

import * as React from 'react'
import * as cx from 'classnames'
import { StyledComponent } from './styles';
import { SubtitleProps } from './types';

const Component: React.SFC<SubtitleProps> = ({ children, ...props }) => {
  const className = cx(`title`, props.className)
  return (
    <StyledComponent {...props} className={className}>{children}</StyledComponent>
  )
}

Component.displayName = 'Subtitle'
Component.defaultProps = {
}

export default Component

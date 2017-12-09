import * as React from 'react'
import * as cx from 'classnames'
import { TextProps } from './types';
import { StyledComponent } from './styles';

const Component: React.SFC<TextProps> = ({children, ...props}) => {
  const className = cx(`text`, props.className)
  return (
    <StyledComponent {...props} className={className}>{children}</StyledComponent>
  )
}

Component.displayName = 'Text'
Component.defaultProps = {
}

export default Component

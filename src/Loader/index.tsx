import * as React from 'react'
import * as cx from 'classnames'
import { mapProps } from 'recompose'
import { StyledComponent } from './styles';
import { LoaderProps } from './types'

const Component: React.SFC<LoaderProps> = (props) => {
  const className = cx(`loader`, props.className)
  return (
    <StyledComponent {...props} className={className} />
  )
}

Component.displayName = 'Loader'
Component.defaultProps = {
}

export default mapProps<LoaderProps, LoaderProps>(props => {
  return {
    ...props,
    isInverted: !props.isInverted
  }
})(Component)

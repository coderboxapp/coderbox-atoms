import * as React from 'react'
import * as cx from 'classnames'
import { BoxProps } from './types'
import { StyledComponent } from './styles'

const Component: React.SFC<BoxProps> = (props) => {
  const className = cx(`box`, props.className)
  return (
    <StyledComponent {...props} />
  )
}

Component.displayName = 'Box'
Component.defaultProps = {
  padding: '0.6em',
  size: 'normal'
}

export default Component
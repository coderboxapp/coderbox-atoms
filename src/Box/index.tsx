import * as React from 'react'
import * as cx from 'classnames'
import { BoxProps } from './types'
import { StyledBox } from './styles'

const Box: React.SFC<BoxProps> = (props) => {
  const className = cx(`box`, props.className)
  return (
    <StyledBox {...props} />
  )
}

Box.displayName = 'Box'
Box.defaultProps = {
  padding: '0.6em',
  color: 'white'
}

export default Box
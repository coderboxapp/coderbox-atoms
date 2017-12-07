import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled-components'

export interface Props {
  className?: string,
  padding: string,
  color: string
}

const Component: React.SFC<Props> = (props) => {
  const className = cx(`box`, props.className)
  return (
    <div {...props} className={className} />
  )
}

Component.displayName = 'Box'
Component.defaultProps = {
  padding: '0.6em',
  color: 'white'
}

export default styled(Component)`

`

import * as React from 'react'
import * as cx from 'classnames'
import { Color, Tone } from 'coderbox-atoms'
import styled, { keyframes } from 'styled'

interface Props {
  className?: string,
  color?: Color
  tone?: Tone
}

const Component = (props: Props) => {
  const className = cx(`loader`, props.className)
  return (
    <div {...props} className={className} />
  )
}

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

const StyledComponent = styled(Component)`
  animation: ${rotate360} 500ms infinite linear;
  border: 2px solid;
  border-radius: 999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  position: relative;
  width: 0.98em;
  height: 0.98em;
`

StyledComponent.displayName = 'Loader'
StyledComponent.defaultProps = {
}

export default Component

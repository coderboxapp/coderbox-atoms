import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled'
import { Color, Size, Tone } from 'coderbox-atoms';
import Loader from 'Loader'

interface Props {
  className?: string,
  color?: Color,
  size?: Size,
  tone?: Tone,
  isLoading?: boolean,
  children?: any 
}

const Component = ({ children, ...props }: Props) => {
  let className = cx('button', props.className)

  return (
    <div {...props} className={className}>
      {children}
      {props.isLoading && <Loader color={props.color} tone={props.tone} />}
    </div>
  )
}

const StyledComponent = styled(Component)`
`

StyledComponent.displayName = 'Button'
StyledComponent.defaultProps = {
}

export default StyledComponent

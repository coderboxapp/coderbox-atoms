import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled'
import { Color, Size, Tone } from 'coderbox-atoms'
import { withColor, withSize } from 'styled-utils'
import { mapProps } from 'recompose'
import { getHTMLProps } from 'utils'

interface Props extends Color, Size {
  name: string,
  className?: string,
  tone?: Tone,
  isInverted?: boolean
  isCircular?: boolean
  hasBorder?: boolean
}

const Component = ({ name, ...props }: Props) => {
  const className = cx(`icon fa fa-${name}`, props.className)
  const rest = getHTMLProps(props)

  return (
    <i {...rest} className={className} />
  )
}

const StyledComponent = styled(Component)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;

  ${withColor}
  ${withSize}
`

StyledComponent.displayName = 'Icon'
StyledComponent.defaultProps = {
}

export default mapProps<Props, Props>(props => {
  return {
    ...props,
    isInverted: !props.isInverted
  }
})(StyledComponent)

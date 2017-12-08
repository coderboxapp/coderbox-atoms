import * as React from 'react'
import * as cx from 'classnames'
import styled, { withProps } from 'styled'
import { withColor, withSize } from 'styled-utils'
import { Size, Color } from 'coderbox-atoms'
import { withSpace } from 'utils'

interface Props extends Color, Size {
  className?: string,
  padding?: string,
  hSpace?: string,
  vSpace?: string,
  children?: any 
}

const Container = withProps<Props>(styled.div)`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.components.box.radius};
  box-shadow: ${p => p.theme.components.box.boxShadow};
  position: relative;
  padding: ${(p): string => p.padding || '0px'};

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${withColor}
  ${withSize}
  ${withSpace}
`

const Component: React.SFC<Props> = (props) => {
  const className = cx(`box`, props.className)
  return (
    <Container {...props} />
  )
}

Component.displayName = 'Box'
Component.defaultProps = {
  padding: '0.6em',
  size: 'normal'
}

export default Component
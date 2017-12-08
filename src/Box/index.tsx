import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled'
import { withColor, withSize } from 'styled-utils'
import { Size, Color } from 'coderbox-atoms'
import { withSpace } from 'utils'

interface Props {
  className?: string,
  padding?: string,
  color?: Color,
  size?: Size,
  hSpace?: string,
  vSpace?: string,
  children?: any 
}

const Component: React.SFC<Props> = (props) => {
  const className = cx(`box`, props.className)
  return (
    <div {...props} className={className} />
  )
}

const StyledComponent = styled(Component)`
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

StyledComponent.displayName = 'Box'
StyledComponent.defaultProps = {
  padding: '0.6em',
  color: 'white',
  size: 'normal'
}

export default StyledComponent
import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled'
import { StyledFunction } from "styled-components"
import { withColor, withSize } from 'styled-utils'

interface Props {
  className?: string,
  padding?: string,
  color?: string,
  size?: string,
  children?: any 
}

const Component: React.SFC<Props> = (props) => {
  const className = cx(`box`, props.className)
  console.log(props)
  return (
    <div {...props} className={className} />
  )
}

Component.displayName = 'Box'
Component.defaultProps = {
  padding: '0.6em',
  color: 'white',
  size: 'normal'
}

export default styled(Component)`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  position: relative;
  padding: ${(p): string => p.padding || '0px'};

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${withColor}
  ${withSize}
`


import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { withModifiers, helperModifiers, isColor } from 'styled-utils'

const IconElement = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
`

const Icon = ({ as = 'i', name, isInverted, ...props }) => {
  const className = cx(`icon fa fa-${name}`, props.className)
  const inverted = false
  const outlined = !isInverted

  const Element = withModifiers(IconElement.withComponent(as), [
    ...helperModifiers,
    isColor
  ])

  return (
    <Element {...props} isOutlined={outlined} isInverted={inverted} className={className} />
  )
}

Icon.defaultProps = {
  isColor: 'light',
  isSize: 'normal'
}

export default Icon

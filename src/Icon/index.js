import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { combine, withHelpers, withColors } from 'styled-utils'

const IconElement = styled.div`
  margin: 0 0.2em;
`

const Icon = ({ as = 'i', name, ...props }) => {
  let className = cx(`icon fa fa-${name}`, props.className)
  let Element = IconElement.withComponent(as)

  return (
    <Element {...props} className={className} />
  )
}

Icon.defaultProps = {
  isColor: 'white',
  isSize: 'medium',
  isOutlined: true,
  noHover: true
}

export default combine(Icon, [
  withColors,
  withHelpers
])

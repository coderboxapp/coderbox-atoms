import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { combine, withHelpers, withColors } from 'styled-utils'

const IconElement = styled.div`
`

const IconGroup = styled.div`
`

const Button = ({ as = 'i', name, ...props }) => {
  let className = cx(`icon fa fa-${name}`, props.className)
  let Element = IconElement.withComponent(as)

  return (
    <Element {...props} className={className}>
      {name}
    </Element>
  )
}

Button.defaultProps = {
  isColor: 'white'
}

const Export = combine(Button, [
  withColors,
  withHelpers
])

Export.Group = withHelpers(IconGroup)
Export.displayName = 'Icon'

export default Export

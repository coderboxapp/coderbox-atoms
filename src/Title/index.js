import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Title = ({ as = 'h1', isInverted, ...props }) => {
  const className = cx(`title`, props.className)
  const Element = s.Title.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  )
}

Title.defaultProps = {
}

export default Title

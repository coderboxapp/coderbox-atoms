import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ isDelete, ...props }) => {
  const className = cx(`tag`, props.className)
  return (
    <s.Tag {...props} isDelete={isDelete} className={className} />
  )
}

Component.displayName = 'Tag'
Component.defaultProps = {
  size: 'small'
}

export default Component

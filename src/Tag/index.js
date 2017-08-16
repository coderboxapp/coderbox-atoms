import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Tag = ({ isDelete, ...props }) => {
  const className = cx(`tag`, props.className)
  return (
    <s.Tag {...props} isDelete={isDelete} className={className} />
  )
}

Tag.defaultProps = {
  size: 'small'
}

export default Tag

import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Box = (props) => {
  const className = cx(`box`, props.className)
  return (
    <s.Box {...props} className={className} />
  )
}

export default Box

import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Loader = (props) => {
  const className = cx(`loader`, props.className)
  return (
    <s.Loader {...props} className={className} />
  )
}

Loader.defaultProps = {
  withTone: 0
}

export default Loader

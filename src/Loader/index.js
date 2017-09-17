import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`loader`, props.className)
  return (
    <s.Loader {...props} className={className} />
  )
}

Component.defaultProps = {
  tone: 0
}

Component.displayName = 'Loader'
export default Component

import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ children, ...props }) => {
  const className = cx(`yesno`, props.className)
  return (
    <s.YesNo {...props} className={className}>
      {children}
    </s.YesNo>
  )
}

Component.displayName = 'YesNo'
export default Component

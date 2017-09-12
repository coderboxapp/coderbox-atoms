import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`box`, props.className)
  return (
    <s.Box {...props} className={className} />
  )
}

Component.displayName = 'Box'
Component.defaultProps = {
  padding: '0.6em',
  color: 'white'
}
Component.propTypes = {
  vSpace: string,
  hSpace: string,
  padding: string
}

export default Component

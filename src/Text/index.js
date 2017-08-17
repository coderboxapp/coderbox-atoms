import React from 'react'
import * as styles from './styles'

const Component = ({children, ...props}) => {
  return (
    <styles.Text {...props}>{children}</styles.Text>
  )
}

Component.displayName = 'Text'
Component.defaultProps = {
  size: 'small'
}

export default Component

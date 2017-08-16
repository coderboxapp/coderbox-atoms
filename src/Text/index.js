import React from 'react'
import * as styles from './styles'

const Text = ({children, ...props}) => {
  return (
    <styles.Text {...props}>{children}</styles.Text>
  )
}

Text.defaultProps = {
  size: 'small'
}

export default Text

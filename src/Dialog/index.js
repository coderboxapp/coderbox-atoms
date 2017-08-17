import React from 'react'
import * as styles from './styles'

const Component = ({ header, footer, children, ...props }) => {
  return (
    <styles.Dialog {...props} isPaddingless>
      {header && <styles.Header {...props}>{header}</styles.Header>}
      <styles.Content>{children}</styles.Content>
      {footer && <styles.Footer>{footer}</styles.Footer>}
    </styles.Dialog>
  )
}

Component.displayName = 'Dialog'
Component.defaultProps = {
  tone: 0,
  color: 'primary'
}

export default Component

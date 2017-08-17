import React from 'react'
import Icon from 'Icon'
import { Link } from './styles'

const Component = ({ href, icon, children, ...props }) => {
  return (
    <Link href={href} {...props}>
      {icon && <Icon name={icon} {...props} />}
      {children}
    </Link>
  )
}

Component.displayName = 'Link'
Component.defaultProps = {
  color: 'primary',
  tone: 0
}

export default Component

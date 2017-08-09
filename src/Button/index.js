import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Button = ({ href, children, ...props }) => {
  let className = cx('button', props.className)
  let Element = href ? s.Button.withComponent('a') : s.Button

  return (
    <Element href={href} {...props} className={className}>
      {children}
    </Element>
  )
}

Button.defaultProps = {
  withColor: 'white'
}

export default Button

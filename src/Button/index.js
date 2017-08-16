import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import Loader from 'Loader'

const Button = ({ href, children, isLoading, ...props }) => {
  let className = cx('button', props.className)
  let Element = href ? s.Button.withComponent('a') : s.Button

  return (
    <Element {...props} isLoading={isLoading} href={href} className={className}>
      {children}
      {isLoading && <Loader color={props.color} isOutlined={props.isOutlined} isInverted />}
    </Element>
  )
}

Button.defaultProps = {
  color: 'white'
}

export default Button

import * as React from 'react'
import * as cx from 'classnames'
import { Color, Size } from 'coderbox-atoms';
import Loader from 'Loader'

interface Props {
  className?: string,
  padding?: string,
  color?: Color,
  size?: Size,
  as?: string,
  href?: string,
  isLoading?: boolean,
  children?: any 
}

const Component = ({ as, href, children, isLoading, ...props }: Props) => {
  let className = cx('button', props.className)
  let Element = href ? s.Button.withComponent('a') : s.Button

  if (as) {
    Element = Element.withComponent(as)
  }

  return (
    <Element {...props} isLoading={isLoading} href={href} className={className}>
      {children}
      {isLoading && <Loader color={props.color} tone={props.tone} isOutlined={props.isOutlined} isInverted />}
    </Element>
  )
}

Component.displayName = 'Button'
Component.defaultProps = {
  color: 'white'
}

export default Component

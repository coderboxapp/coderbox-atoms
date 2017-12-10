import * as React from 'react'
import * as cx from 'classnames'
import Icon from 'Icon'
import { StyledComponent } from './styles'
import { LinkProps } from './types';

const Component: React.SFC<LinkProps> = ({ href, children, ...props }) => {
  let className = cx('link', props.className)

  return (
    <StyledComponent href={href} {...props}>
      {props.icon && <Icon name={props.icon} size={props.size} />}
      {children}
    </StyledComponent>
  )
}

Component.displayName = 'Link'
Component.defaultProps = {
  color: 'primary'
}

export default Component

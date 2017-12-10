import * as React from 'react'
import * as cx from 'classnames'
import Loader from 'Loader'
import { TButton } from './types'
import { StyledComponent } from './styles';

const Component: React.SFC<TButton> = ({ children, ...props }) => {
  let className = cx('button', props.className)

  return (
    <StyledComponent {...props} className={className}>
      {children}
      {props.isLoading && <div className='loader-container'><Loader size={props.size} color={props.color} tone={props.tone} isInverted={!props.isOutlined} /></div>}
    </StyledComponent>
  )
}

Component.displayName = 'Button'
Component.defaultProps = {
}

export default Component

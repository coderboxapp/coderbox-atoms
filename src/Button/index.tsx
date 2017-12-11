import * as React from 'react'
import * as cx from 'classnames'
import Loader from 'Loader'
import { ButtonProps } from './types'
import { StyledButton } from './styles';

const Button: React.SFC<ButtonProps> = ({ children, ...props }) => {
  let className = cx('button', props.className)

  return (
    <StyledButton {...props} className={className}>
      {children}
      {props.isLoading && (
        <div className='loader-container'>
          <Loader size={props.size} color={props.color} tone={props.tone} isInverted={!props.isOutlined} />
        </div>
      )}
    </StyledButton>
  )
}

Button.displayName = 'Button'
Button.defaultProps = {
}

export default Button

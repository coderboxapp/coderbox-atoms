import * as React from 'react'
import * as cx from 'classnames'
import { StyledTitle } from './styles';
import { TitleProps } from './types';

const Title: React.SFC<TitleProps> = ({ children, ...props }) => {
  const className = cx(`title`, props.className)
  return (
    <StyledTitle {...props} className={className}>{children}</StyledTitle>
  )
}

Title.displayName = 'Title'
Title.defaultProps = {
}

export default Title

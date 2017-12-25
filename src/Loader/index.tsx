import * as React from 'react'
import * as cx from 'classnames'
import { mapProps } from 'recompose'
import { LoaderProps } from './types'
import { Container, StyledLoader, StyledLoaderShadow } from './styles';

const Loader: React.SFC<LoaderProps> = (props) => {
  const className = cx(`loader`, props.className)
  return (
    <Container {...props}>
      <StyledLoaderShadow {...props} />
      <StyledLoader {...props} className={className} />
    </Container>
  )
}

Loader.displayName = 'Loader'
Loader.defaultProps = {
}

export default mapProps<LoaderProps, LoaderProps>(props => {
  return {
    ...props,
    isInverted: !props.isInverted
  }
})(Loader)

import * as React from 'react'
import * as cx from 'classnames'
import { ImageProps } from './types'
import { StyledImage } from './styles'

const Image: React.SFC<ImageProps> = ({ src, ...props }) => {
  const className = cx(`image`, props.className)

  return (
    <StyledImage {...props} className={className}>
      <img src={src} />
    </StyledImage>
  )
}

Image.displayName = 'Image'
Image.defaultProps = {
}

export default Image

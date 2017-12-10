import * as React from 'react'
import * as cx from 'classnames'
import { ImageProps } from './types'
import { Image } from './styles'

const Component: React.SFC<ImageProps> = ({ src, ...props }) => {
  const className = cx(`image`, props.className)

  return (
    <Image {...props} className={className}>
      <img src={src} />
    </Image>
  )
}

Component.displayName = 'Image'
Component.defaultProps = {
}

export default Component

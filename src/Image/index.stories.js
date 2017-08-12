
import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Image from '.'
import Box from 'Box'

storiesOf('Image', module)
  .add('with different sizes', withTheme(() => {
    return (
      <div>
        <Box>
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' withSize='small' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular withSize='large' />
          <Image as='a' href='google.com' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular withSize='xlarge' />
        </Box>
      </div>
    )
  }))

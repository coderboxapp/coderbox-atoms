
import * as React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Image from '.'
import Box from 'Box'

const url = 'https://react.semantic-ui.com/assets/images/wireframe/image.png'

storiesOf('Image', module)
  .add('with different sizes', withTheme(() => {
    return (
      <div>
        <Box space='1rem'>
          <Image src={url} width='80px' />
          <Image src={url} width='100px' />
          <Image src={url} width='200px' height='200px' isCircular />
          <Image src={url} width='3rem' height='3rem' isCircular />
        </Box>
      </div>
    )
  }))

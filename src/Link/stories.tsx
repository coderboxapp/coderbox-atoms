
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Box from 'Box'
import Link from '.'

const stories = storiesOf('Link', module)

stories.add('simple usage',
  withTheme(() => {
    return (
      <div>
        <Box space='0.5rem'>
          <Link>Default Link</Link>
          <Link color='success'>Success Link</Link>
          <Link color='danger'>Danger Link</Link>
          <Link color='black'>Black Link</Link>
        </Box>
      </div>
    )
  })
)

stories.add('with icon',
  withTheme(() => {
    return (
      <div>
        <Box space='0.5rem'>
          <Link color='success' icon='star'>Success Link</Link>
          <Link color='danger' icon='user'>Danger Link</Link>
        </Box>
        <Box space='0.5rem'>
          <Link color='primary' icon='cab' column>Success Link</Link>
          <Link color='gray' icon='cubes' column>Danger Link</Link>
        </Box>
      </div>
    )
  })
  )

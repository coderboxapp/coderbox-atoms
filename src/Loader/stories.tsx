import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Box from 'Box'
import Loader from '.'

const stories = storiesOf('Loader', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box size='normal' space='0.8rem'>
        <Loader />
        <Loader color='danger' size='large' />
        <Loader color='success' />
      </Box>
    </div>
  )
}))

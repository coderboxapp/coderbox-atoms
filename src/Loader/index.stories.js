import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Loader from '.'

storiesOf('Loader', module).add('default', withTheme(() => {
  return (
    <div>
      <Box withColor='primary' withSpace='0.8rem'>
        <Loader />
        <Loader withColor='danger' />
        <Loader withColor='success' />
      </Box>
    </div>
  )
}))

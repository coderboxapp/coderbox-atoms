import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Box from 'Box'
import Loader from '.'

storiesOf('Loader', module).add('default', withTheme(() => {
  return (
    <div>
      <Box color='primary' vSpace='0.8rem'>
        <Loader />
        <Loader color='danger' />
        <Loader color='success' />
      </Box>
    </div>
  )
}))

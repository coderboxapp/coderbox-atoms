import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from '.'

storiesOf('Box', module).add('default', withTheme(() => {
  return (
    <div>
      <Box>Some text in box</Box>
      <Box color='primary' tone={2}>Some text in box</Box>
      <Box color='success' padding='0.4rem'>Some text in box</Box>
    </div>
  )
}))

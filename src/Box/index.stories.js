import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '.'

storiesOf('Box', module).add('default', () => {
  return (
    <div>
      <Box>Some text in box</Box>
      <Box isColor='primary' isTone={2}>Some text in box</Box>
      <Box isColor='success'>Some text in box</Box>
    </div>
  )
})

import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '.'

storiesOf('Box', module).add('default', () => {
  return <Box>Some text in box</Box>
})

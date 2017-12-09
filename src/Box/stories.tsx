import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Box from '.'

const stories = storiesOf('Box', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box>Some text in box</Box>
      <Box color='primary' size='small'>Some text in box</Box>
      <Box color='success' padding='0.4rem'>Some text in box</Box>
    </div>
  )
}))

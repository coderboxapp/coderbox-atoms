import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Text from '.'

storiesOf('Text', module).add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <Text>This is some text, no color.</Text>
        <Text color='primary'>This is some text, with color primary.</Text>
        <Text color='danger'>This is some text, with color danger.</Text>
      </Box>
    </div>
  )
}))

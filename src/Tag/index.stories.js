import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Tag from '.'

storiesOf('Tag', module).add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <Tag>Normal</Tag>
        <Tag withColor='gray'>Gray</Tag>
        <Tag withColor='primary'>Primary</Tag>
        <Tag withColor='success'>Success</Tag>
        <Tag withColor='success' isDelete />
        <Tag withColor='gray' withTone={2} isDelete />
      </Box>
    </div>
  )
}))

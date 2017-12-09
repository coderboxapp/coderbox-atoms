import * as React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Tag from '.'

const stories = storiesOf('Tag', module)

stories.add('default',
  withTheme(() => {
    return (
      <div>
        <Box>
          <Tag>Normal</Tag>
          <Tag color='gray'>Gray</Tag>
          <Tag color='primary'>Primary</Tag>
          <Tag color='success'>Success</Tag>
          <Tag color='success' isDelete />
          <Tag color='gray' tone={2} isDelete />
        </Box>
      </div>
    )
  })
)

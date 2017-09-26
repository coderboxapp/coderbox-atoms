import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Button from 'Button'
import Icon from 'Icon'
import YesNo from '.'

const stories = storiesOf('YesNo', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <YesNo color='primary' isOutlined onYes={() => console.log('yess')}>
          <Button color='primary'>
            <Icon name='check-circle' />
            Accept
          </Button>
        </YesNo>
        <YesNo size='small' color='danger' tone='1' isLeft>
          <Button size='small' color='gray'>
            <Icon name='trash' />
            Delete
          </Button>
        </YesNo>
      </Box>
    </div>
  )
}))

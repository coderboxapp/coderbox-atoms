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
        <YesNo color='success' onYes={() => console.log('yess')}>
          <Button>
            <Icon name='check-circle' />
            Accept
          </Button>
        </YesNo>
        <YesNo color='danger' isLeft>
          <Button>
            <Icon name='trash' />
            Delete
          </Button>
        </YesNo>
      </Box>
    </div>
  )
}))

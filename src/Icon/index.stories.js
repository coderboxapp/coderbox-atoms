import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Icon from '.'
import Box from '../Box'

storiesOf('Icon', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <Icon name='star' color='black' />
          <Icon name='star' color='gray' />
          <Icon name='github' color='primary' hasBorder />
          <Icon name='gift' color='success' />
          <Icon name='bug' color='danger' />
        </Box>
        <Box>
          <Icon name='star' color='black' isInverted />
          <Icon name='star' color='gray' isInverted />
          <Icon name='github' color='primary'isInverted />
          <Icon name='gift' color='success' isInverted />
          <Icon name='bug' color='danger' isInverted />
        </Box>
        <Box>
          <Icon name='star' color='black' isCircular hasBorder />
          <Icon name='github' color='primary' isCircular isInverted />
          <Icon name='bug' color='success' isCircular isInverted />
        </Box>
      </div>
    )
  }))
  .add('with different size', withTheme(() => {
    return (
      <Box>
        <Icon name='star' color='black' isInverted size='small' />
        <Icon name='star' color='gray' isInverted />
        <Icon name='github' color='primary'isInverted size='large' />
        <Icon name='gift' color='success' isInverted size='xlarge' />
        <Icon name='bug' color='danger' isInverted size='huge' />
      </Box>
    )
  }))

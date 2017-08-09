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
          <Icon name='star' withColor='black' />
          <Icon name='star' withColor='gray' />
          <Icon name='github' withColor='primary' hasBorder />
          <Icon name='gift' withColor='success' />
          <Icon name='bug' withColor='danger' />
        </Box>
        <Box>
          <Icon name='star' withColor='black' isInverted />
          <Icon name='star' withColor='gray' isInverted />
          <Icon name='github' withColor='primary'isInverted />
          <Icon name='gift' withColor='success' isInverted />
          <Icon name='bug' withColor='danger' isInverted />
        </Box>
        <Box>
          <Icon name='star' withColor='black' isCircular hasBorder />
          <Icon name='github' withColor='primary' isCircular isInverted />
          <Icon name='bug' withColor='success' isCircular isInverted />
        </Box>
      </div>
    )
  }))
  .add('with different size', withTheme(() => {
    return (
      <Box>
        <Icon name='star' withColor='black' isInverted withSize='small' />
        <Icon name='star' withColor='gray' isInverted />
        <Icon name='github' withColor='primary'isInverted withSize='large' />
        <Icon name='gift' withColor='success' isInverted withSize='xlarge' />
        <Icon name='bug' withColor='danger' isInverted withSize='huge' />
      </Box>
    )
  }))

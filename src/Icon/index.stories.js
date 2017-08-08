import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'
import Box from '../Box'

storiesOf('Icon', module)
  .add('simple usage', () => {
    return (
      <div>
        <Box>
          <Icon name='star' isColor='black' />
          <Icon name='star' isColor='gray' />
          <Icon name='github' isColor='primary' />
          <Icon name='gift' isColor='success' />
          <Icon name='bug' isColor='danger' />
        </Box>
        <Box>
          <Icon name='star' isColor='black' isInverted />
          <Icon name='star' isColor='gray' isInverted />
          <Icon name='github' isColor='primary'isInverted />
          <Icon name='gift' isColor='success' isInverted />
          <Icon name='bug' isColor='danger' isInverted />
        </Box>
        <Box>
          <Icon name='star' isColor='black' isCircular />
          <Icon name='github' isColor='primary' isCircular />
          <Icon name='bug' isColor='success' isCircular />
        </Box>
      </div>
    )
  })
  .add('with different size', () => {
    return (
      <Box>
        <Icon name='star' isColor='black' isInverted isSize='small' />
        <Icon name='star' isColor='gray' isInverted />
        <Icon name='github' isColor='primary'isInverted isSize='large' />
        <Icon name='gift' isColor='success' isInverted isSize='xlarge' />
        <Icon name='bug' isColor='danger' isInverted isSize='huge' />
      </Box>
    )
  })

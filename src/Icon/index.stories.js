import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'
import Box from '../Box'

storiesOf('Icon', module)
  .add('simple usage', () => {
    return (
      <div>
        <Box withSpace='0.5rem'>
          <Icon name='star' isColor='black' isInverted />
          <Icon name='star' isColor='black' />
          <Icon name='github' isColor='primary' isInverted noHover={false} />
          <Icon name='bug' isColor='danger' />
        </Box>
        <Box withSpace='0.5rem'>
          <Icon name='star' isColor='black' isCircular />
          <Icon name='github' isColor='primary' isCircular />
          <Icon name='bug' isColor='success' isInverted isCircular />
        </Box>
      </div>
    )
  })
  .add('with different size', () => {
    return (
      <Box isColor='primary'>
        <Icon name='stack-overflow' isSize='tiny' />
        <Icon name='stack-overflow' isSize='small' />
        <Icon name='stack-overflow' isSize='normal' />
        <Icon name='stack-overflow' isSize='large' />
        <Icon name='stack-overflow' isSize='xlarge' />
        <Icon name='stack-overflow' isSize='huge' />
      </Box>
    )
  })

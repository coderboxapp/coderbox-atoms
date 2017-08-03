
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const Control = styled.div`
  display: flex;
  margin: 4px;
  padding: 6px 8px;
  border-radius: 4px;
  align-items: center;
  background-color: ${p => p.isColor || 'transparent'};
`

storiesOf('Icon', module)
  .add('default', () => {
    return (
      <Control>
        <Icon name='star' isColor='black' />
        <Icon name='github' isColor='primary' />
        <Icon name='stack-overflow' isColor='success' />
      </Control>
    )
  })
  .add('with different size', () => {
    return (
      <Control isColor='#00d1b2'>
        <Icon name='stack-overflow' isSize='tiny' />
        <Icon name='stack-overflow' isSize='small' />
        <Icon name='stack-overflow' isSize='normal' />
        <Icon name='stack-overflow' isSize='large' />
        <Icon name='stack-overflow' isSize='big' />
        <Icon name='stack-overflow' isSize='huge' />
      </Control>
    )
  })

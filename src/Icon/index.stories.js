
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const Control = styled.div`
  display: flex;
  margin: 8px;
  padding: 0 8px;
  border-radius: 4px;
  align-items: center;
  background-color: ${p => p.isColor || 'transparent'};
  > * {
    margin-right: 0.5em;
  }
`

storiesOf('Icon', module)
  .add('default', () => {
    return (
      <div>
        <Control>
          <Icon name='star' isColor='black' isInverted />
          <Icon name='star' isColor='black' />
          <Icon name='github' isColor='primary' isInverted noHover={false} />
          <Icon name='bug' isColor='danger' />
        </Control>
        <Control>
          <Icon name='star' isColor='black' isCircular />
          <Icon name='github' isColor='primary' isCircular />
          <Icon name='bug' isColor='success' isSize='huge' isInverted isCircular />
        </Control>
      </div>
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

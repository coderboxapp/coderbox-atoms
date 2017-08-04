import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Button from '.'
import Icon from '../Icon'
import Group from '../ButtonGroup'

const Control = styled.div`
  display: flex;
  margin: 4px;
  padding: 6px 8px;
  border-radius: 4px;
  align-items: center;
  background-color: ${p => p.isColor || 'transparent'};
  & label {
    display: inline-block;
    min-width: 100px;
  }
`

storiesOf('Button', module)
  .addWithInfo('with all the colors', () => {
    return (
      <div>
        <Control>
          <label>colors: </label>
          <Button>Normal</Button>
          <Button isColor='primary'>Primary</Button>
          <Button isColor='success'>Success</Button>
          <Button isColor='danger'>Danger</Button>
          <Button isColor='light' isStatic as='div'>Light</Button>
          <Button isColor='black'>Black</Button>
        </Control>
        <Control isColor='#00d1b2'>
          <label>inverted: </label>
          <Button as='div' isInverted>Normal</Button>
          <Button isColor='primary' isInverted>Primary</Button>
          <Button isColor='success' isInverted>Success</Button>
          <Button isColor='danger' isInverted>Danger</Button>
          <Button isColor='light' isInverted>Light</Button>
          <Button isColor='black' isInverted>Black</Button>
        </Control>
        <Control>
          <label>outlined: </label>
          <Button isColor='primary' isOutlined>Primary</Button>
          <Button isColor='success' isOutlined>Success</Button>
          <Button isColor='danger' isOutlined>Danger</Button>
          <Button isColor='gray' isOutlined>Grayscale</Button>
          <Button isColor='black' isOutlined>Black</Button>
        </Control>
      </div>
    )
  })
  .add('with different size', () => {
    return (
      <Control>
        <Button isColor='primary' isSize='tiny'>Tiny</Button>
        <Button isColor='success' isSize='small'>Small</Button>
        <Button isColor='danger' isSize='medium'>Medium</Button>
        <Button isColor='light' isSize='large'>Large</Button>
        <Button isColor='black' isSize='big'>Big</Button>
      </Control>
    )
  })
  .add('with icon', () => {
    return (
      <Control>
        <Button isColor='primary' isSize='medium'>
          <Icon name='star' />
          Some text
        </Button>
        <Button isColor='success' isSize='medium' isOutlined>
          <Icon name='star' isColor='success' />
          Some text
        </Button>
        <Button isColor='success' isSize='medium'>
          <Icon name='stack-overflow' />
        </Button>
      </Control>
    )
  })
  .add('group buttons', () => {
    return (
      <div>
        <Control>
          <Group>
            <Button isColor='primary' isOutlined>
              <Icon name='star' isColor='primary' />
              Primary
            </Button>
            <Button isColor='primary' isOutlined>Success</Button>
            <Button isColor='primary' isOutlined>Danger</Button>
          </Group>
        </Control>
        <Control>
          <Group isSize='small' hasTextAlign='left'>
            <Button isColor='primary'>Primary</Button>
            <Button isColor='primary'>Success</Button>
            <Button isColor='primary'>Danger</Button>
          </Group>
        </Control>
        <Control>
          <Group isVertical>
            <Button isColor='success'>Primary</Button>
            <Button isColor='gray'>Up</Button>
            <Button isColor='gray'>Down</Button>
            <Button isColor='success'>Danger</Button>
          </Group>
        </Control>
        <Control>
          <Group>
            <Button isColor='success'>Primary</Button>
            <Button isColor='success' isTone={1} isPaddingless>
              <Icon name='star' />
            </Button>
          </Group>
        </Control>
      </div>
    )
  })

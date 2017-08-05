import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Button from '.'
import Box from '../Box'
import Icon from '../Icon'
import ButtonGroup from '../ButtonGroup'

storiesOf('Button', module)
  .add('simple usage',
    withInfo({})(() => {
      return (
        <div>
          <Box>
            <Button>Normal</Button>
            <Button isColor='primary'>Primary</Button>
            <Button isColor='success'>Success</Button>
            <Button isColor='danger'>Danger</Button>
            <Button isColor='light' isStatic as='div'>Light</Button>
            <Button isColor='black'>Black</Button>
          </Box>
          <Box isColor='success'>
            <Button as='div' isInverted>Normal</Button>
            <Button isColor='primary' isInverted>Primary</Button>
            <Button isColor='success' isInverted>Success</Button>
            <Button isColor='danger' isInverted>Danger</Button>
            <Button isColor='light' isInverted>Light</Button>
            <Button isColor='black' isInverted>Black</Button>
          </Box>
          <Box>
            <Button isColor='primary' isOutlined>Primary</Button>
            <Button isColor='success' isOutlined>Success</Button>
            <Button isColor='danger' isOutlined>Danger</Button>
            <Button isColor='gray' isOutlined>Grayscale</Button>
            <Button isColor='black' isOutlined>Black</Button>
          </Box>
        </div>
      )
    })
  )
  .add('with different size', () => {
    return (
      <Box>
        <Button isColor='primary' isSize='tiny'>Tiny</Button>
        <Button isColor='success' isSize='small'>Small</Button>
        <Button isColor='danger' isSize='normal'>Normal</Button>
        <Button isColor='light' isSize='large'>Large</Button>
        <Button isColor='black' isSize='xlarge'>XLarge</Button>
      </Box>
    )
  })
  .add('with icon', () => {
    return (
      <Box>
        <Button isColor='primary' isSize='normal'>
          <Icon name='star' />
          Some text
        </Button>
        <Button isColor='success' isSize='normal' isOutlined>
          <Icon name='star' isColor='success' />
          Some text
        </Button>
        <Button isColor='success' isSize='normal'>
          <Icon name='stack-overflow' />
        </Button>
      </Box>
    )
  })
  .add('group buttons', () => {
    return (
      <div>
        <Box>
          <ButtonGroup>
            <Button isColor='primary' isOutlined>
              <Icon name='star' isColor='primary' />
              Primary
            </Button>
            <Button isColor='primary' isOutlined>Success</Button>
            <Button isColor='primary' isOutlined>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup isSize='small' hasTextAlign='left'>
            <Button isColor='primary'>Primary</Button>
            <Button isColor='primary'>Success</Button>
            <Button isColor='primary'>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup isVertical>
            <Button isColor='success'>Primary</Button>
            <Button isColor='gray'>Up</Button>
            <Button isColor='gray'>Down</Button>
            <Button isColor='success'>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup>
            <Button isColor='success'>Primary</Button>
            <Button isColor='success' isTone={1} isPaddingless>
              <Icon name='star' />
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    )
  })

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Box from 'Box'
import Icon from 'Icon'
import Button from '.'

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
            <Button isColor='gray'>Gray</Button>
            <Button isColor='gray' isTone={2}>Light</Button>
            <Button isColor='black'>Black</Button>
          </Box>
          <Box isColor='success'>
            <Button as='div' isInverted>Normal</Button>
            <Button isColor='primary' isInverted>Primary</Button>
            <Button isColor='success' isInverted>Success</Button>
            <Button isColor='danger' isInverted>Danger</Button>
            <Button isColor='gray' isInverted>Gray</Button>
            <Button isColor='gray' isTone={2} isInverted>Light</Button>
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
        <Button isColor='gray' isSize='large'>Large</Button>
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
          <Icon name='star' />
          Some text
        </Button>
        <Button isColor='gray' isTone={2} isSize='normal' isIcon>
          <Icon name='stack-overflow' />
        </Button>
      </Box>
    )
  })

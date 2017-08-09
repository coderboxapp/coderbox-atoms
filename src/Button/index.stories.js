import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import Icon from 'Icon'
import Button from '.'

storiesOf('Button', module)
  .add('simple usage',
    withTheme(() => {
      return (
        <div>
          <Box>
            <Button>Normal</Button>
            <Button withColor='primary'>Primary</Button>
            <Button withColor='success'>Success</Button>
            <Button withColor='danger'>Danger</Button>
            <Button withColor='gray'>Gray</Button>
            <Button withColor='gray' withTone={2}>Light</Button>
            <Button withColor='black'>Black</Button>
          </Box>
          <Box withColor='success'>
            <Button as='div' isInverted>Normal</Button>
            <Button withColor='primary' isInverted>Primary</Button>
            <Button withColor='success' isInverted>Success</Button>
            <Button withColor='danger' isInverted>Danger</Button>
            <Button withColor='gray' isInverted>Gray</Button>
            <Button withColor='gray' withTone={2} isInverted>Light</Button>
            <Button withColor='black' isInverted>Black</Button>
          </Box>
          <Box>
            <Button withColor='primary' isOutlined>Primary</Button>
            <Button withColor='success' isOutlined>Success</Button>
            <Button withColor='danger' isOutlined>Danger</Button>
            <Button withColor='gray' isOutlined>Grayscale</Button>
            <Button withColor='black' isOutlined>Black</Button>
          </Box>
        </div>
      )
    })
  )
  .add('with different size', withTheme(() => {
    return (
      <Box>
        <Button withColor='primary' withSize='tiny'>Tiny</Button>
        <Button withColor='success' withSize='small'>Small</Button>
        <Button withColor='danger' withSize='normal'>Normal</Button>
        <Button withColor='gray' withSize='large'>Large</Button>
        <Button withColor='black' withSize='xlarge'>XLarge</Button>
      </Box>
    )
  }))
  .add('with icon', withTheme(() => {
    return (
      <Box>
        <Button withColor='primary' withSize='normal'>
          <Icon name='star' />
          Some text
        </Button>
        <Button withColor='success' withSize='normal' isOutlined>
          <Icon name='star' />
          Some text
        </Button>
        <Button withColor='gray' withTone={2} withSize='normal' isIcon>
          <Icon name='stack-overflow' />
        </Button>
      </Box>
    )
  }))

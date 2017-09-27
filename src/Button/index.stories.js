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
            <Button color='primary'>Primary</Button>
            <Button color='success'>Success</Button>
            <Button color='danger'>Danger</Button>
            <Button color='gray'>Gray</Button>
            <Button color='gray' tone={2}>Light</Button>
            <Button color='black'>Black</Button>
          </Box>
          <Box color='success'>
            <Button as='div' isInverted>Normal</Button>
            <Button color='primary' isInverted>Primary</Button>
            <Button color='success' isInverted>Success</Button>
            <Button color='danger' isInverted>Danger</Button>
            <Button color='gray' isInverted>Gray</Button>
            <Button color='gray' tone={2} isInverted>Light</Button>
            <Button color='black' isInverted>Black</Button>
          </Box>
          <Box>
            <Button color='primary' isOutlined>Primary</Button>
            <Button color='success' isOutlined>Success</Button>
            <Button color='danger' isOutlined>Danger</Button>
            <Button color='gray' isOutlined>Grayscale</Button>
            <Button color='black' isOutlined>Black</Button>
          </Box>
        </div>
      )
    })
  )
  .add('with different size', withTheme(() => {
    return (
      <Box>
        <Button color='primary' size='tiny'>Tiny</Button>
        <Button color='success' size='small'>Small</Button>
        <Button color='danger' size='normal'>Normal</Button>
        <Button color='gray' size='large'>Large</Button>
        <Button color='black' size='xlarge'>XLarge</Button>
      </Box>
    )
  }))
  .add('with icon', withTheme(() => {
    return (
      <Box>
        <Button color='primary' size='normal'>
          <Icon name='star' />
          Some text
        </Button>
        <Button color='success' size='small' isOutlined>
          <Icon name='star' />
          Some text
        </Button>
        <Button color='gray' tone={2} size='normal' isIcon>
          <Icon name='stack-overflow' />
        </Button>
      </Box>
    )
  }))
  .add('with loading', withTheme(() => {
    return (
      <div>
        <Box>
          <Button color='primary' size='normal' isLoading>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='success' size='normal' isOutlined isLoading>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='gray' isLoading>
            <Icon name='trash' />
            Some text
          </Button>
        </Box>
        <Box>
          <Button color='gray' size='small' isLoading>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='gray' tone='2' size='small' isIcon isLoading>
            <Icon name='star' />
          </Button>
        </Box>
      </div>
    )
  }))

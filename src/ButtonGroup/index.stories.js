import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from 'Button'
import Box from 'Box'
import Icon from 'Icon'
import ButtonGroup from '.'

storiesOf('ButtonGroup', module)
  .add('simple usage', () => {
    return (
      <div>
        <Box>
          <ButtonGroup>
            <Button isColor='primary' isOutlined>
              <Icon name='star' />
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
            <Button isColor='success' isTone={2} isStatic isIcon>
              <Icon name='star' />
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    )
  })

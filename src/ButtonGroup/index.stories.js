import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Button from 'Button'
import Box from 'Box'
import Icon from 'Icon'
import ButtonGroup from '.'

storiesOf('ButtonGroup', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <ButtonGroup>
            <Button withColor='primary' isOutlined>
              <Icon name='star' />
              Primary
            </Button>
            <Button withColor='primary' isOutlined>Success</Button>
            <Button withColor='primary' isOutlined>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup withSize='small' hasTextAlign='left'>
            <Button withColor='primary'>Primary</Button>
            <Button withColor='primary'>Success</Button>
            <Button withColor='primary'>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup isVertical>
            <Button withColor='success'>Primary</Button>
            <Button withColor='gray'>Up</Button>
            <Button withColor='gray'>Down</Button>
            <Button withColor='success'>Danger</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup>
            <Button withColor='success'>Primary</Button>
            <Button withColor='success' withTone={1} isStatic isIcon>
              <Icon name='star' />
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    )
  }))

import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Button from 'Button'
import Tag from 'Tag'
import Box from 'Box'
import Icon from 'Icon'
import Group from '.'

storiesOf('Group', module)
  .add('group buttons', withTheme(() => {
    return (
      <div>
        <Box>
          <Group>
            <Button withColor='primary' isOutlined>
              <Icon name='star' />
              Primary
            </Button>
            <Button withColor='primary' isOutlined>Success</Button>
            <Button withColor='primary' isOutlined>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group withSize='small' hasTextAlign='left'>
            <Button withColor='primary'>Primary</Button>
            <Button withColor='primary'>Success</Button>
            <Button withColor='primary'>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group isVertical>
            <Button withColor='success'>Primary</Button>
            <Button withColor='gray'>Up</Button>
            <Button withColor='gray'>Down</Button>
            <Button withColor='success'>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group>
            <Button withColor='success'>Primary</Button>
            <Button withColor='success' withTone={1} isStatic isIcon>
              <Icon name='star' />
            </Button>
          </Group>
        </Box>
      </div>
    )
  }))
  .add('group tags', withTheme(() => {
    return (
      <div>
        <Box withSpace='0.5rem'>
          <Group>
            <Tag withColor='gray' withTone={1}>npm</Tag>
            <Tag withColor='primary'>v0.5.0</Tag>
          </Group>
          <Group>
            <Tag withColor='gray' withTone={1}>build</Tag>
            <Tag withColor='success'>passing</Tag>
          </Group>
          <Group>
            <Tag withColor='success'>javascript</Tag>
            <Tag withColor='success' withTone={1} isDelete />
          </Group>
        </Box>
      </div>
    )
  }))

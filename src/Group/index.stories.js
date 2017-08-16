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
            <Button color='primary' isOutlined>
              <Icon name='star' />
              Primary
            </Button>
            <Button color='primary' isOutlined>Success</Button>
            <Button color='primary' isOutlined>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group size='small' hasTextAlign='left'>
            <Button color='primary'>Primary</Button>
            <Button color='primary'>Success</Button>
            <Button color='primary'>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group isVertical>
            <Button color='success'>Primary</Button>
            <Button color='gray'>Up</Button>
            <Button color='gray'>Down</Button>
            <Button color='success'>Danger</Button>
          </Group>
        </Box>
        <Box>
          <Group>
            <Button color='success'>Primary</Button>
            <Button color='success' tone={1} isStatic isIcon>
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
            <Tag color='gray' tone={1}>npm</Tag>
            <Tag color='primary'>v0.5.0</Tag>
          </Group>
          <Group>
            <Tag color='gray' tone={1}>build</Tag>
            <Tag color='success'>passing</Tag>
          </Group>
          <Group>
            <Tag color='success'>javascript</Tag>
            <Tag color='success' tone={1} isDelete />
          </Group>
        </Box>
      </div>
    )
  }))

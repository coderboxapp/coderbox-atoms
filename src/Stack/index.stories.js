
import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Stack from '.'
import Box from 'Box'
import Title from 'Title'
import Button from 'Button'

const stories = storiesOf('SackView', module)

stories.add('simple usage', withTheme(
  () => {
    return (
      <div>
        <Box>
          <Stack>
            <div>
              <Title>Stack item 1</Title>
              <Button>Next</Button>
            </div>
            <div>
              <Title>Stack item 2</Title>
              <Button>Prev</Button>
            </div>
          </Stack>
        </Box>
      </div>
    )
  }
))

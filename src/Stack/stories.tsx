
import * as React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { withStack } from '@coderbox/hocs'
import Stack from '.'
import Box from 'Box'
import Title from 'Title'
import Button from 'Button'

const stories = storiesOf('SackView', module)

stories.add('simple usage',
  withTheme(
    withStack(
    ({ stack }: any) => {
      console.log(stack)
      return (
        <div>
          <Box>
            <Stack index={stack.index}>
              <div>
                <Title>Stack item 1</Title>
                <Button color='primary' onClick={stack.next}>Next</Button>
              </div>
              <div>
                <Title>Stack item 2</Title>
                <Button color='primary' onClick={stack.next}>Next</Button>
                <Button color='danger' onClick={stack.prev}>Prev</Button>
              </div>
              <div>
                <Title>Stack item 3</Title>
                <Button color='danger' onClick={stack.prev}>Prev</Button>
              </div>
            </Stack>
          </Box>
        </div>
      )
    }
  ))
)

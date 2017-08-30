
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Box from 'Box'
import Link from '.'

storiesOf('Link', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box hSpace='0.5rem'>
          <Link>Default Link</Link>
          <Link color='success'>Success Link</Link>
          <Link color='danger'>Danger Link</Link>
        </Box>
      </div>
    )
  }))

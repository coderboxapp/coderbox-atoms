
import React from 'react'
import { withTheme } from 'utils'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Image from '.'

const Control = styled.div`
  display: flex;
  margin: 8px;
  padding: 0 8px;
  border-radius: 4px;
  align-items: center;
  background-color: ${p => p.withColor || 'transparent'};
  > * {
    margin-right: 0.5em;
  }
`

storiesOf('Image', module)
  .add('with different sizes', withTheme(() => {
    return (
      <div>
        <Control>
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' withSize='small' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular withSize='large' />
          <Image as='a' href='google.com' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular withSize='xlarge' />
        </Control>
      </div>
    )
  }))

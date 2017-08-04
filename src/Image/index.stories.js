
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Image from '.'

const Control = styled.div`
  display: flex;
  margin: 8px;
  padding: 0 8px;
  border-radius: 4px;
  align-items: center;
  background-color: ${p => p.isColor || 'transparent'};
  > * {
    margin-right: 0.5em;
  }
`

storiesOf('Image', module)
  .add('with different sizes', () => {
    return (
      <div>
        <Control>
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isSize='small' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular isSize='large' />
          <Image as='a' href='google.com' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' isCircular isSize='big' />
        </Control>
      </div>
    )
  })

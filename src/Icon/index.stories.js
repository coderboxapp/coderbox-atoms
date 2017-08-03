
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`

storiesOf('Icon', module)
  .add('default', () => {
    return (
      <Wrapper>
        <Icon name='star' />
        <Icon name='extension' />
        <Icon name='work' />
      </Wrapper>
    )
  })

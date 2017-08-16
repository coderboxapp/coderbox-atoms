import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Title from '.'
import Subtitle from '../Subtitle'

storiesOf('Title + Subtitle', module)
  .add('with different sizes', withTheme(() => {
    return (
      <Box>
        <Title size='huge'>Title Huge</Title>
        <Subtitle size='large'>This is Subtitle Large, under title</Subtitle>
        <Title size='xlarge'>Title XLarge</Title>
        <Subtitle size='normal'>This is Subtitle Normal, under title</Subtitle>
        <Title size='large'>Title Large</Title>
        <Subtitle size='small'>This is <b>Subtitle</b> Small, under title</Subtitle>
        <Title size='normal'>Title Normal</Title>
        <Title size='small'>Title Small</Title>
      </Box>
    )
  }))
  .add('with colors', withTheme(() => {
    return (
      <Box>
        <Title size='large'>Title Default</Title>
        <Subtitle size='small' color='gray'>This is Subtitle gray, under title</Subtitle>
        <Title size='large' color='primary'>Title Primary</Title>
        <Subtitle size='small' color='primary' tone={2}>This is Subtitle primary tone 1, under title</Subtitle>
        <Title size='large' color='success'>Title Success</Title>
        <Subtitle size='small' color='danger' tone={2}>This is Subtitle success tone 1, under title</Subtitle>
      </Box>
    )
  }))

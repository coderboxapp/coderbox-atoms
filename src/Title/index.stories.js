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
        <Title withSize='huge'>Title Huge</Title>
        <Subtitle withSize='large'>This is Subtitle Large, under title</Subtitle>
        <Title withSize='xlarge'>Title XLarge</Title>
        <Subtitle withSize='normal'>This is Subtitle Normal, under title</Subtitle>
        <Title withSize='large'>Title Large</Title>
        <Subtitle withSize='small'>This is <b>Subtitle</b> Small, under title</Subtitle>
        <Title withSize='normal'>Title Normal</Title>
        <Title withSize='small'>Title Small</Title>
      </Box>
    )
  }))
  .add('with colors', withTheme(() => {
    return (
      <Box>
        <Title withSize='large'>Title Default</Title>
        <Subtitle withSize='small' withColor='gray'>This is Subtitle gray, under title</Subtitle>
        <Title withSize='large' withColor='primary'>Title Primary</Title>
        <Subtitle withSize='small' withColor='primary' withTone={2}>This is Subtitle primary tone 1, under title</Subtitle>
        <Title withSize='large' withColor='success'>Title Success</Title>
        <Subtitle withSize='small' withColor='success' withTone={2}>This is Subtitle success tone 1, under title</Subtitle>
      </Box>
    )
  }))

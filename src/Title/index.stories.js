import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Title from '.'
import Subtitle from '../Subtitle'

storiesOf('Title + Subtitle', module)
  .add('with different sizes', () => {
    return (
      <Box>
        <Title isSize='huge'>Title Huge</Title>
        <Subtitle isSize='large'>This is Subtitle Large, under title</Subtitle>
        <Title isSize='xlarge'>Title XLarge</Title>
        <Subtitle isSize='normal'>This is Subtitle Normal, under title</Subtitle>
        <Title isSize='large'>Title Large</Title>
        <Subtitle isSize='small'>This is <b>Subtitle</b> Small, under title</Subtitle>
        <Title isSize='normal'>Title Normal</Title>
        <Title isSize='small'>Title Small</Title>
      </Box>
    )
  })
  .add('with colors', () => {
    return (
      <Box>
        <Title isSize='large'>Title Default</Title>
        <Subtitle isSize='small' isColor='gray'>This is Subtitle gray, under title</Subtitle>
        <Title isSize='large' isColor='primary'>Title Primary</Title>
        <Subtitle isSize='small' isColor='primary' isTone={2}>This is Subtitle primary tone 1, under title</Subtitle>
        <Title isSize='large' isColor='success'>Title Success</Title>
        <Subtitle isSize='small' isColor='success' isTone={2}>This is Subtitle success tone 1, under title</Subtitle>
      </Box>
    )
  })

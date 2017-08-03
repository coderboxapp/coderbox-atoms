import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Button from '.'

const Wrapper = styled.div`
  background-color: #CCC;
  & > div {
    padding: 5px;
  }
`

storiesOf('Button', module)
  .addWithInfo('with all the colors', () => {
    return (
      <Wrapper>
        <div>
          <Button>Normal</Button>
          <Button isColor='primary'>Primary</Button>
          <Button isColor='success'>Success</Button>
          <Button isColor='danger'>Danger</Button>
          <Button isColor='light'>Grayscale</Button>
          <Button isColor='black'>Black</Button>
        </div>
        <div>
          <Button as='div' isInverted>Normal</Button>
          <Button isColor='primary' isInverted>Primary</Button>
          <Button isColor='success' isInverted>Success</Button>
          <Button isColor='danger' isInverted>Danger</Button>
          <Button isColor='light' isInverted>Grayscale</Button>
          <Button isColor='black' isInverted>Black</Button>
        </div>
        <div>
          <Button isOutlined>Normal</Button>
          <Button isColor='primary' isOutlined>Primary</Button>
          <Button isColor='success' isInverted isOutlined>Success</Button>
          <Button isColor='danger' isOutlined>Danger</Button>
          <Button isColor='light' isOutlined>Grayscale</Button>
          <Button isColor='black' isOutlined>Black</Button>
        </div>
      </Wrapper>
    )
  })
  .add('with different size', () => {
    return (
      <Wrapper>
        <div>
          <Button isColor='primary' isSize='tiny'>Primary</Button>
          <Button isColor='success' isSize='small'>Success</Button>
          <Button isColor='danger' isSize='medium'>Danger</Button>
          <Button isColor='light' isSize='large'>Grayscale</Button>
          <Button isColor='black' isSize='big'>Black</Button>
        </div>
      </Wrapper>
    )
  })
  .add('group buttons', () => {
    return (
      <Wrapper>
        <Button.Group>
          <Button isColor='primary' isOutlined>Primary</Button>
          <Button isColor='primary' isOutlined>Success</Button>
          <Button isColor='primary' isOutlined>Danger</Button>
        </Button.Group>
        <Button.Group isSize='small' hasTextAlign='left'>
          <Button isColor='primary'>Primary</Button>
          <Button isColor='primary'>Success</Button>
          <Button isColor='primary'>Danger</Button>
        </Button.Group>
      </Wrapper>
    )
  })

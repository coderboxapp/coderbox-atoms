
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from 'utils'
import Button from 'Button'
import Subtitle from 'Subtitle'
import Dialog from '.'

const Header = () => <Subtitle size='large'>Sign in to <b>Coderbox</b></Subtitle>
const Footer = () => <div>Don't have an account ? <a href='/signup'>Sign Up</a></div>

storiesOf('Dialog', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Dialog color='primary' maxWidth='400px' header={<Header />} footer={<Footer />}>
          <Subtitle size='normal'>Dialog Content</Subtitle>
          <Button color='danger'>Click Me</Button>
        </Dialog>
      </div>
    )
  }))

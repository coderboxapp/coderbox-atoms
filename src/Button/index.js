import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { combine, withHelpers, withColors } from 'styled-utils'

const ButtonElement = styled.div`
  font-family: ${font('primary')};
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.2em;
  font-weight: 400;
  cursor: pointer;
  outline: none;
  height: 2.25em;
  border: 1px solid;
  border-color: transparent;
  border-radius: 3px;
  margin: 0 0.25em 0 0;
`

const ButtonGroup = styled.div`
  & > .button {
    margin: 0 -1px 0 0;
    border-radius: 0;

  }

  & > .button:first-child {
    border-radius: 3px 0px 0px 3px;
  }

  & > .button:last-child {
    border-radius: 0px 3px 3px 0px;
    margin-right: 0px
  }
`

const Button = ({ as = 'a', children, ...props }) => {
  let className = cx('button', props.className)
  let Element = ButtonElement.withComponent(as)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Button.defaultProps = {
  isColor: 'link'
}

const Export = combine(Button, [
  withColors,
  withHelpers
])

Export.Group = withHelpers(ButtonGroup)
Export.displayName = Button

export default Export

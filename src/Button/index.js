import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { withModifiers, helperModifiers, colorModifiers } from 'styled-utils'

const ButtonElement = styled.div`
  font-family: ${font('primary')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  font-weight: 400;
  cursor: pointer;
  outline: none;
  height: 2.25em;
  border: 1px solid;
  border-color: transparent;
  border-radius: 3px;
  margin: 0 0.25em 0 0;

  & .icon {
    margin: 0 5px;
  }
`

const Button = ({ as = 'a', children, ...props }) => {
  const className = cx('button', props.className)
  const Element = withModifiers(ButtonElement.withComponent(as), [
    ...helperModifiers,
    ...colorModifiers
  ])

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Button.defaultProps = {
  isColor: 'white'
}

export default Button

import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { withModifiers, helperModifiers } from 'styled-utils'

const HorizontalGroup = styled.div`
  display: flex;
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

const VerticalGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > .button {
    margin: 0 0 -1px 0;
    border-radius: 0;
  }

  & > .button:first-child {
    border-radius: 3px 3px 0px 0px;
  }

  & > .button:last-child {
    border-radius: 0px 0px 3px 3px;
    margin-right: 0px
  }
`

const Group = ({ as = 'div', children, isVertical, ...props }) => {
  let className = cx('buttons', props.className)
  const Element = withModifiers(isVertical ? VerticalGroup.withComponent(as) : HorizontalGroup.withComponent(as), [
    ...helperModifiers
  ])

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

export default Group

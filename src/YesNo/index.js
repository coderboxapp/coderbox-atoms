import React from 'react'
import cx from 'classnames'
import Group from 'Group'
import Button from 'Button'
import Icon from 'Icon'
import { compose, withState, mapProps } from 'recompose'
import * as s from './styles'

const Component = ({ children, color, size, isLeft, isOpen, setIsOpen, onYes, onNo, ...props }) => {
  const className = cx(`yesno`, props.className)
  const MainButton = React.cloneElement(React.Children.only(children), {
    color,
    size,
    onClick: () => setIsOpen(!isOpen)
  })

  return (
    <s.YesNo {...props} color={color} className={className}>
      <Group color={color} size={size}>
        {!isLeft && MainButton}
        {isOpen && <Button className='btnYes' tone='1' isIcon onClick={onYes}><Icon name='check' /></Button>}
        {isOpen && <Button className='btnNo' tone='1' isIcon onClick={onNo}><Icon name='times' /></Button>}
        {isLeft && MainButton}
      </Group>
    </s.YesNo>
  )
}

Component.displayName = 'YesNo'
export default compose(
  withState('isOpen', 'setIsOpen', false),
  mapProps(props => {
    return {
      ...props,
      onYes: () => {
        props.setIsOpen(false)
        if (props.onYes) props.onYes()
      },
      onNo: () => {
        props.setIsOpen(false)
        if (props.onNo) props.onNo()
      }
    }
  })
)(Component)

import * as React from 'react'
import * as cx from 'classnames'
import { compose, withState, mapProps } from 'recompose'
import Group from 'Group'
import Button from 'Button'
import Icon from 'Icon'
import { YesNo } from './styles'
import { TYesNo, TYesNoMapped } from './types';

const Component: React.SFC<TYesNoMapped> = ({ children, isLeft, isOpen, setIsOpen, onYes, onNo, ...props }) => {
  const className = cx(`yesno`, props.className)
  const MainButton = React.cloneElement(React.Children.only(children), {
    onClick: () => setIsOpen(!isOpen)
  })

  return (
    <YesNo {...props} className={className}>
      <Group>
        {!isLeft && MainButton}
        {isOpen && <Button className='btnYes' isIcon onClick={onYes} {...props}><Icon name='check' /></Button>}
        {isOpen && <Button className='btnNo' isIcon onClick={onNo} {...props}><Icon name='times' /></Button>}
        {isLeft && MainButton}
      </Group>
    </YesNo>
  )
}

Component.displayName = 'YesNo'
Component.defaultProps = {}

export default compose<TYesNoMapped, TYesNo>(
  withState('isOpen', 'setIsOpen', false),
  mapProps<TYesNoMapped, TYesNoMapped>(props => {
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

import { Color, Size, Helpers, State } from 'coderbox-atoms'

export interface TButton extends
  Color,
  Size,
  State,
  Helpers {
  className?: string
  isIcon?: boolean
  children?: any 
  onClick?: Function
}
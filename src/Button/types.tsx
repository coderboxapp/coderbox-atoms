import { Color, Size, Helpers, State } from 'coderbox-atoms'

export interface ButtonProps extends
  Color,
  Size,
  State,
  Helpers {
  className?: string
  isIcon?: boolean
  children?: any 
}
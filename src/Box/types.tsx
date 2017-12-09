import { Size, Color } from 'coderbox-atoms'

export interface BoxProps extends Color, Size {
  className?: string,
  padding?: string,
  space?: string
  children?: any 
}
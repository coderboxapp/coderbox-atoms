import { Color, Size, Helpers } from 'coderbox-atoms'

export interface IconProps extends Color, Size, Helpers {
  name: string,
  className?: string
  hasBorder?: boolean
  type?: string
}
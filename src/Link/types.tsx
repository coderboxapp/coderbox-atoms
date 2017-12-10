import { Size } from "coderbox-atoms";


export interface LinkProps extends Size {
  className?: string
  color?: string
  href?: string
  icon?: string
  column?: boolean
}
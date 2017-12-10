import { Size, Color } from "coderbox-atoms";


export interface TagProps extends Color, Size {
  className?: string
  isDelete?: boolean
  isIcon?: boolean
}
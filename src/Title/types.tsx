import * as React from 'react'
import { Color, Size } from 'coderbox-atoms';

export interface TitleProps extends Color, Size {
  className?: string
  children: string | React.ReactChild[]
}